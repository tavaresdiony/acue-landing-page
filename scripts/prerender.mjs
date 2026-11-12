// Pré-renderiza as páginas em HTML estático depois do `vite build`.
// Quem não roda JavaScript (robôs de busca, de IA, prévias de link) passa a ver o texto, os links e os
// títulos reais, e a página aparece antes do bundle carregar. O React continua assumindo no navegador.
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const ROTAS = [
  { rota: '/', arquivo: 'index.html', modulo: '/src/pages/Home.tsx' },
  {
    rota: '/quem-faz', arquivo: 'quem-faz/index.html', modulo: '/src/pages/QuemFaz.tsx',
    title: 'Quem faz o Acué | Por que o app existe',
    desc: 'Conheça quem está por trás do Acué, por que o app existe, em que fase está e como falar direto com o fundador.',
  },
  {
    rota: '/privacidade', arquivo: 'privacidade/index.html', modulo: '/src/pages/Privacidade.tsx',
    title: 'Política de Privacidade | Acué',
    desc: 'Como o Acué trata seus dados: o que coletamos, o que nunca fazemos e como você pode excluir sua conta.',
  },
];

const SITE = 'https://site.acueapp.com.br';
const esc = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const jsonLd = (g, atualizado) => '<script type="application/ld+json">' + JSON.stringify([
  {
    '@context': 'https://schema.org', '@type': 'Article', headline: g.h1, description: g.desc,
    inLanguage: 'pt-BR', dateModified: atualizado, datePublished: atualizado,
    author: { '@type': 'Person', name: 'Dionatha Tavares' },
    publisher: { '@type': 'Organization', name: 'Acué', url: SITE + '/' },
    mainEntityOfPage: SITE + '/guias/' + g.slug,
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Guias', item: SITE + '/guias' },
      { '@type': 'ListItem', position: 3, name: g.h1, item: SITE + '/guias/' + g.slug },
    ],
  },
]).replace(/</g, '\u003c') + '</script>';

const server = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const conteudo = await server.ssrLoadModule('/src/content/guias.ts');
  ROTAS.push({
    rota: '/guias', arquivo: 'guias/index.html', modulo: '/src/pages/Guia.tsx', view: 'GuiasIndexView',
    title: 'Guias de dinheiro | Acué',
    desc: 'Guias práticos para controlar gastos, montar a reserva de emergência e saber quanto você pode gastar por dia.',
  });
  for (const g of conteudo.GUIAS) {
    ROTAS.push({
      rota: '/guias/' + g.slug, arquivo: 'guias/' + g.slug + '/index.html', modulo: '/src/pages/Guia.tsx',
      view: 'GuiaView', props: { guia: g }, title: g.titulo, desc: g.desc, ld: jsonLd(g, conteudo.ATUALIZADO_ISO),
    });
  }
  for (const r of ROTAS) {
    const mod = await server.ssrLoadModule(r.modulo);
    const markup = renderToString(createElement(r.view ? mod[r.view] : mod.default, r.props));
    let html = template.replace(/<div id="root">[\s\S]*?Carregando o Acué…<\/div><\/div><\/div>/, `<div id="root">${markup}</div>`);
    if (!html.includes(markup.slice(0, 60))) throw new Error('Não achei #root no template para ' + r.rota);
    if (r.rota !== '/') {
      const url = 'https://site.acueapp.com.br' + r.rota;
      html = html
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${r.title}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${r.desc}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${r.title}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${r.desc}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${r.title}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${r.desc}$2`)
        .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/, '');
      if (r.ld) html = html.replace('</head>', r.ld + '</head>');
    }
    const out = path.join(dist, r.arquivo);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    console.log('prerender', r.rota, '->', r.arquivo, (html.length / 1024).toFixed(0) + ' kB');
  }
} finally {
  await server.close();
}
