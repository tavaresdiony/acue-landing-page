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

const server = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  for (const r of ROTAS) {
    const mod = await server.ssrLoadModule(r.modulo);
    const markup = renderToString(createElement(mod.default));
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
    }
    const out = path.join(dist, r.arquivo);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    console.log('prerender', r.rota, '->', r.arquivo, (html.length / 1024).toFixed(0) + ' kB');
  }
} finally {
  await server.close();
}
