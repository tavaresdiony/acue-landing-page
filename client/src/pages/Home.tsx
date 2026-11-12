import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const APP = 'https://www.acueapp.com.br/?cadastro=1';
const APP_EXTRATO = 'https://www.acueapp.com.br/?extrato=1';
const track = () => window.fbq?.('track', 'Lead');

const FAQS = [
  {
    q: 'O Acué é seguro? Como meus dados são protegidos?',
    a: 'Privacidade é prioridade. Seus dados ficam sincronizados na nuvem de forma privada e só você acessa. O Acué não tem acesso ao seu dinheiro, não vende nem aluga dados pessoais, e o extrato que você importa é lido no seu aparelho.',
  },
  {
    q: 'O Acué se conecta à minha conta bancária?',
    a: 'Não. Você registra os gastos por voz, por mensagem no WhatsApp ou importando o extrato do seu banco (OFX, CSV ou PDF com texto), e confere tudo antes de entrar. Sem pedir senha do banco.',
  },
  {
    q: 'Como funciona o limite de gasto do dia?',
    a: 'O Acué pega seu saldo, desconta as contas pendentes e a reserva do mês, e divide pelos dias que faltam. O resultado é um número só: quanto você ainda pode gastar hoje sem apertar o fim do mês.',
  },
  {
    q: 'Preciso baixar na loja de aplicativos?',
    a: 'Não. O Acué é um PWA: você abre no navegador e adiciona à tela inicial do celular, como qualquer app, leve e sem ocupar espaço. Ainda não estamos nas lojas.',
  },
  {
    q: 'Qual a diferença entre o plano Grátis e o Pro?',
    a: 'O Grátis traz lançamentos ilimitados, saldo e limite diário, metas, reserva, dívidas, até 3 contas recorrentes e 3 registros por voz por dia. O Pro libera voz sem limite, registro pelo WhatsApp, previsão completa com ritmo de gastos e simulador de compras, orçamento por categoria, contas recorrentes ilimitadas, rachar conta, relatório mensal, calculadora de investimentos e assistente de IA.',
  },
  {
    q: 'Como cancelo o Pro?',
    a: 'Sem burocracia e sem fidelidade. Dentro do app, em Perfil › Gerenciar assinatura, com um toque. Se preferir, peça por contato@acueapp.com.br.',
  },
];

const FACTS = [
  ['Um número só:', 'quanto posso gastar hoje'],
  ['Registre falando:', '"gastei 45 no almoço"'],
  ['Grátis', 'para sempre, sem cartão'],
  ['Funciona no navegador:', 'sem baixar nada'],
  ['Seus dados', 'só seus'],
];

const MANI =
  'Saldo, contas pendentes e reserva entram. Sai um número só: o quanto você ainda pode gastar hoje.';

const STEPS = [
  {
    n: '01',
    t: 'Você fala.',
    p: 'Segure o botão e diga "gastei 45 no almoço". O Acué entende, e você confere antes de registrar.',
    img: '/telas/inicio.webp',
    alt: 'Tela Início do Acué com o botão "Segure e fale o gasto" e o limite do dia',
  },
  {
    n: '02',
    t: 'Tudo anotado.',
    p: 'Gastos, entradas e contas ficam organizados por categoria. Importar o extrato do banco também vale.',
    img: '/telas/dados.webp',
    alt: 'Tela Dados do Acué com lançamentos organizados por categoria',
  },
  {
    n: '03',
    t: 'O fim do mês, antes dele chegar.',
    p: 'O Acué mostra quanto você termina o mês com e qual o limite seguro por dia.',
    img: '/telas/previsao.webp',
    alt: 'Tela Previsão do Acué com saldo projetado e limite por dia',
    tag: 'Previsão completa no Pro',
  },
  {
    n: '04',
    t: 'O que sobra, guardado.',
    p: 'Defina metas e uma reserva. Acompanhe cada uma separado, sem misturar com o dinheiro do dia a dia.',
    img: '/telas/metas.webp',
    alt: 'Tela Metas do Acué',
  },
];

function Mark({ size = 32 }: { size?: number }) {
  return (
    <span className="mark" style={{ width: size, height: size }} aria-hidden="true">
      <img src="/logo-mark.png" alt="" />
    </span>
  );
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [sm, setSm] = useState(false);
  const [menu, setMenu] = useState(false);
  const [anual, setAnual] = useState(false);

  useEffect(() => {
    const f = () => setSm(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menu]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Hero: linhas sobem de dentro de uma máscara; celular entra de baixo girando de leve
        gsap.from('.hero h1 .ln > span', { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.12, delay: 0.1 });
        gsap.from('.hero .sub, .hero .cta-row, .hero .fine', { y: 26, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.55 });
        gsap.from('.hero .phone', { y: 140, rotate: 5, duration: 1.4, ease: 'expo.out', delay: 0.25 });
        gsap.from('.hero .chip', { scale: 0.6, opacity: 0, duration: 0.8, ease: 'back.out(1.8)', stagger: 0.25, delay: 1.1 });
        gsap.to('.hero .phone', {
          yPercent: -6, ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        });
        gsap.to('.hero .chip.c1', { y: -60, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
        gsap.to('.hero .chip.c2', { y: 40, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

        // Faixa de fatos corre sozinha e acelera com a rolagem
        const run = gsap.to('.facts-track', { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
        ScrollTrigger.create({
          start: 0, end: 'max',
          onUpdate: (self) => {
            gsap.to(run, { timeScale: 1 + Math.abs(self.getVelocity()) / 600, duration: 0.3, overwrite: true });
            gsap.to(run, { timeScale: 1, duration: 1.2, delay: 0.3 });
          },
        });

        // Manifesto: cada palavra acende conforme a rolagem
        gsap.fromTo('.mani .w', { opacity: 0.16 }, {
          opacity: 1, stagger: 0.1, ease: 'none',
          scrollTrigger: { trigger: '.mani p', start: 'top 80%', end: 'bottom 45%', scrub: true },
        });

        // Conversa do WhatsApp: mensagens chegam uma a uma
        const tl = gsap.timeline({ scrollTrigger: { trigger: '.chat', start: 'top 72%', end: 'bottom 40%', scrub: 0.6 } });
        gsap.utils.toArray<HTMLElement>('.chat .bub').forEach((b, i) => {
          tl.fromTo(b, { y: 30, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, i * 0.9);
        });
        gsap.utils.toArray<HTMLElement>('.chat .bars i').forEach((el, i) => {
          gsap.to(el, { scaleY: 0.35, duration: 0.45 + (i % 4) * 0.12, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.05 });
        });

        // Bento: cards entram em cascata
        gsap.from('.bx', {
          y: 70, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09,
          scrollTrigger: { trigger: '.bento', start: 'top 82%' },
        });

        // Títulos de seção
        gsap.utils.toArray<HTMLElement>('.sec-h').forEach((h) => {
          gsap.from(h, { y: 50, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 88%' } });
        });

        // Rodapé: palavra gigante sobe ao chegar no fim
        gsap.from('.word', { yPercent: 40, ease: 'none', scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true } });
        gsap.from('.cta .peek .phone', { y: 120, duration: 1.2, ease: 'expo.out', stagger: 0.12, scrollTrigger: { trigger: '.cta .peek', start: 'top 90%' } });
      });

      // História fixa (desktop): o celular fica parado, o texto e a tela trocam
      mm.add('(prefers-reduced-motion: no-preference) and (min-width: 901px)', () => {
        const steps = gsap.utils.toArray<HTMLElement>('.story-steps .step');
        const imgs = gsap.utils.toArray<HTMLElement>('.story-stage .scr img');
        const bars = gsap.utils.toArray<HTMLElement>('.dots i');
        gsap.set(steps, { opacity: 0, y: 40 });
        gsap.set(steps[0], { opacity: 1, y: 0 });
        gsap.set(imgs, { clipPath: 'inset(100% 0 0 0)' });
        gsap.set(imgs[0], { clipPath: 'inset(0% 0 0 0)' });
        const n = steps.length;
        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: '.story', start: 'top top', end: () => '+=' + window.innerHeight * (n * 0.9),
            pin: '.story-pin', scrub: 0.6, anticipatePin: 1,
            onUpdate: (s) => {
              const p = s.progress * n;
              bars.forEach((b, i) => b.style.setProperty('--f', String(Math.min(1, Math.max(0, p - i)))));
            },
          },
        });
        for (let i = 1; i < n; i++) {
          tl.to(steps[i - 1], { opacity: 0, y: -40, duration: 0.4 }, i - 0.1)
            .to(steps[i], { opacity: 1, y: 0, duration: 0.5 }, i + 0.1)
            .to(imgs[i], { clipPath: 'inset(0% 0 0 0)', duration: 0.6 }, i - 0.05);
        }
        tl.to({}, { duration: 0.6 });
      });

      // Sem animação (movimento reduzido): mostra o primeiro passo e a tela dele
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.story-steps .step', { position: 'relative', opacity: 1 });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const close = () => setMenu(false);
  const manis = MANI.split(' ');
  const hl = new Set(['número', 'só:', 'gastar', 'hoje.']);

  return (
    <div className="lp" ref={root}>
      {/* NAV */}
      <header className={'nav' + (sm ? ' sm' : '')}>
        <a href="/" className="brand" aria-label="Acué, página inicial">
          <Mark /> Acué
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#como">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#precos">Preços</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <a href={APP} onClick={track} className="btn btn-p hide-m">Criar conta grátis</a>
          <button className="burger" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenu(!menu)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </header>
      <div className={'drawer' + (menu ? ' open' : '')} aria-hidden={!menu}>
        <a className="big" href="#como" onClick={close}>Como funciona</a>
        <a className="big" href="#recursos" onClick={close}>Recursos</a>
        <a className="big" href="#precos" onClick={close}>Preços</a>
        <a className="big" href="#duvidas" onClick={close}>Dúvidas</a>
        <a className="btn btn-p" style={{ marginTop: 24, justifyContent: 'center' }} href={APP} onClick={track}>Criar conta grátis</a>
      </div>

      <main>
        {/* HERO */}
        <section className="hero" aria-labelledby="h1">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">Controle de gastos com limite diário</div>
              <h1 id="h1">
                <span className="ln"><span>Quanto posso</span></span>
                <span className="ln"><span>gastar <span className="acc">hoje?</span></span></span>
              </h1>
              <p className="sub">O Acué responde na hora e registra o gasto <b>por voz</b>. Um número só, todo dia, sem planilha.</p>
              <div className="cta-row">
                <a href={APP} onClick={track} className="btn btn-p">Criar conta grátis <span className="ar">→</span></a>
                <a href={APP_EXTRATO} className="link-u">Ver meu mês sem cadastro</a>
              </div>
              <p className="fine">Grátis para sempre. Sem cartão. Abre no navegador, sem baixar nada.</p>
            </div>
            <div className="phone-col">
              <div className="phone">
                <div className="scr"><img src="/telas/inicio.webp" width="828" height="1792" alt="Tela Início do Acué mostrando o saldo disponível e o quanto ainda pode gastar hoje" fetchPriority="high" /></div>
              </div>
              <div className="chip c1"><i>🎤</i><span>Você fala<small>"gastei 45 no almoço"</small></span></div>
              <div className="chip c2"><i>✓</i><span>Almoço · R$ 45,00<small>Alimentação</small></span></div>
            </div>
          </div>
        </section>

        {/* FAIXA */}
        <div className="facts" aria-hidden="true">
          <div className="facts-track">
            {[0, 1].map((k) => (
              <span key={k}>
                {FACTS.map(([a, b]) => (
                  <span key={a + k} style={{ gap: 12 }}><b>{a}</b> {b}</span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* MANIFESTO */}
        <section className="mani">
          <div className="wrap">
            <p aria-label={MANI}>
              {manis.map((w, i) => (
                <span key={i} className={'w' + (hl.has(w) ? ' hl' : '')} aria-hidden="true">{w}{' '}</span>
              ))}
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA — desktop fixo */}
        <section className="story" id="como" aria-label="Como funciona">
          <div className="wrap story-pin">
            <div className="story-steps">
              {STEPS.map((s) => (
                <div className="step" key={s.n}>
                  <div className="n">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                  {s.tag && <span className="tag">{s.tag}</span>}
                </div>
              ))}
              <div className="dots">{STEPS.map((s) => <i key={s.n} />)}</div>
            </div>
            <div className="story-stage">
              <div className="phone">
                <div className="scr">
                  {STEPS.map((s) => <img key={s.n} src={s.img} width="828" height="1792" alt={s.alt} loading="lazy" />)}
                </div>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="wrap story-m">
            {STEPS.map((s) => (
              <div className="it" key={s.n}>
                <div>
                  <div className="n">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                  {s.tag && <span className="tag" style={{ marginTop: 14, display: 'inline-block', fontSize: 12, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', background: 'var(--accent)', color: 'var(--accent-ink)', borderRadius: 99, padding: '5px 12px' }}>{s.tag}</span>}
                </div>
                <div className="phone"><div className="scr"><img src={s.img} width="828" height="1792" alt={s.alt} loading="lazy" /></div></div>
              </div>
            ))}
          </div>
        </section>

        {/* WHATSAPP */}
        <section className="wa" aria-labelledby="wa-h">
          <div className="wrap wa-grid">
            <div>
              <div className="eyebrow">Novo</div>
              <h2 className="sec-h" id="wa-h">Anote pelo <span className="acc">WhatsApp.</span></h2>
              <p className="lead">Sem abrir o app. <b>Escreva ou fale</b>, como você já faz com a família, e o Acué lança o gasto para você.</p>
              <div className="cta-row">
                <a href={APP} onClick={track} className="btn btn-g">Experimentar agora</a>
              </div>
              <p className="small-note">O registro pelo WhatsApp faz parte do Acué Pro. Contas novas ganham 7 dias de teste grátis.</p>
            </div>
            <div className="chat" role="img" aria-label="Exemplo de conversa: o usuário manda gastei 45 reais no almoço e o Acué responde que anotou">
              <div className="chat-top"><Mark size={40} /><div>Acué<small>online</small></div></div>
              <div className="bub me">gastei 45 reais no almoço<div className="bub-meta">14:02 ✓✓</div></div>
              <div className="bub ac">✅ Anotei: Almoço, R$ 45,00<div className="bub-meta">14:02</div></div>
              <div className="bub me">
                <div className="wv">▶
                  <span className="bars">{[10, 18, 26, 14, 22, 12, 24, 16, 20, 11, 25, 15].map((h, i) => <i key={i} style={{ height: h }} />)}</span>0:04
                </div>
                <div className="bub-meta">14:05 ✓✓</div>
              </div>
              <div className="bub ac">✅ Anotei: Uber, R$ 18,90 · ontem<div className="bub-meta">14:05</div></div>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section className="feat" id="recursos" aria-labelledby="rec-h">
          <div className="wrap">
            <div className="eyebrow">O que tem dentro</div>
            <h2 className="sec-h" id="rec-h">Feito para o seu<br />dia a dia.</h2>
            <div className="bento">
              <article className="bx a">
                <div className="k"><span>Limite do dia</span><span className="pill">Grátis</span></div>
                <div>
                  <div className="big">R$ 159,64</div>
                  <h3>Hoje você ainda pode gastar.</h3>
                  <p>Calculado do seu saldo, das contas pendentes e da reserva do mês. Muda a cada gasto que você registra.</p>
                </div>
              </article>
              <article className="bx b">
                <div className="k"><span>Previsão</span><span className="pill pro">Pro</span></div>
                <div><h3>Fim do mês, sem susto.</h3><p>Saldo projetado, ritmo de gastos e simulador de compras.</p></div>
              </article>
              <article className="bx c">
                <div className="k"><span>Metas e reserva</span><span className="pill">Grátis</span></div>
                <div><h3>Guarde com propósito.</h3><p>Cada meta com seu progresso, separada do dia a dia.</p></div>
              </article>
              <article className="bx d">
                <div className="k"><span>Dívidas e parcelas</span><span className="pill">Grátis</span></div>
                <div><h3>Sem surpresa na fatura.</h3><p>Veja o peso de cada parcela nos próximos meses.</p></div>
              </article>
              <article className="bx e">
                <div className="k"><span>Rachar conta</span><span className="pill pro">Pro</span></div>
                <div><h3>Pizza com a galera.</h3><p>Divida igual ou por pessoa e saiba quem já pagou.</p></div>
              </article>
              <article className="bx f">
                <div className="k"><span>Importar extrato</span><span className="pill">Grátis</span></div>
                <div><h3>Do banco para o Acué.</h3><p>OFX, CSV ou PDF com texto. É lido no seu aparelho, você confere tudo antes de entrar e nada duplica.</p></div>
              </article>
              <article className="bx g">
                <div className="k"><span>Seus dados</span><span className="pill">Sempre</span></div>
                <div><h3>Só seus.</h3><p>Não vendemos nem alugamos dados pessoais. Você cancela o Pro com um toque, dentro do app.</p></div>
              </article>
            </div>
          </div>
        </section>

        {/* PREÇOS */}
        <section className="price" id="precos" aria-labelledby="pr-h">
          <div className="wrap">
            <div className="eyebrow">Planos</div>
            <h2 className="sec-h" id="pr-h" style={{ marginBottom: 0 }}>Comece de graça.<br />Suba quando quiser.</h2>
            <div className={'seg' + (anual ? ' an' : '')} role="group" aria-label="Periodicidade do plano Pro">
              <span className="th" />
              <button className={!anual ? 'on' : ''} onClick={() => setAnual(false)} aria-pressed={!anual}>Mensal</button>
              <button className={anual ? 'on' : ''} onClick={() => setAnual(true)} aria-pressed={anual}>Anual · -20%</button>
            </div>
            <div className="plans">
              <div className="plan">
                <div className="nm"><span>Grátis</span></div>
                <div className="pr">R$ 0<small>para sempre</small></div>
                <div className="eq">&nbsp;</div>
                <p className="desc">O essencial para saber quanto pode gastar, todos os dias.</p>
                <ul>
                  <li>Lançamentos de gastos ilimitados</li>
                  <li>Saldo e limite diário de gastos</li>
                  <li>Até 3 contas recorrentes</li>
                  <li>3 registros por voz por dia</li>
                  <li>Metas, reserva e dívidas</li>
                  <li>Importar extrato do banco</li>
                  <li>Sincronização em nuvem segura</li>
                </ul>
                <a href={APP} onClick={track} className="btn btn-g">Começar de graça</a>
              </div>
              <div className="plan pro">
                <div className="nm"><span>Pro</span><span className="acc">7 dias grátis</span></div>
                <div className="pr">{anual ? 'R$ 190' : 'R$ 19,90'}<small>{anual ? '/ ano' : '/ mês'}</small></div>
                <div className="eq">{anual ? 'Equivale a R$ 15,83 por mês' : 'Cancele quando quiser'}</div>
                <p className="desc">{anual ? 'Cobrado uma vez por ano, 20% abaixo do mensal. Sem fidelidade: cancele com um toque.' : 'Cobrado todo mês. Sem fidelidade: cancele com um toque, dentro do app.'}</p>
                <ul>
                  <li>Tudo do plano Grátis</li>
                  <li>Voz sem limite e registro pelo WhatsApp</li>
                  <li>Previsão completa e simulador de compras</li>
                  <li>Orçamento por categoria e recorrentes ilimitadas</li>
                  <li>Rachar conta e relatório mensal</li>
                  <li>Calculadora de investimentos</li>
                  <li>Assistente de IA e suporte prioritário</li>
                </ul>
                <a href={APP} onClick={track} className="btn btn-p">Testar o Pro por 7 dias <span className="ar">→</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="duvidas" aria-labelledby="faq-h">
          <div className="wrap faq-grid">
            <div>
              <div className="eyebrow">Dúvidas</div>
              <h2 className="sec-h" id="faq-h">Perguntas<br />comuns.</h2>
              <p className="lead">Não achou? Escreva para <a className="link-u" href="mailto:contato@acueapp.com.br">contato@acueapp.com.br</a>.</p>
            </div>
            <div>
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}<span className="pm" /></summary>
                  <div className="ans">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" aria-labelledby="cta-h">
          <div className="wrap">
            <h2 id="cta-h">Seu dinheiro no seu controle.</h2>
            <div className="row">
              <p>Crie a conta em menos de um minuto. Sem cartão.</p>
              <a href={APP} onClick={track} className="btn">Criar conta grátis <span>→</span></a>
            </div>
            <div className="peek" aria-hidden="true">
              <div className="phone"><div className="scr"><img src="/telas/dados.webp" alt="" loading="lazy" /></div></div>
              <div className="phone"><div className="scr"><img src="/telas/inicio.webp" alt="" loading="lazy" /></div></div>
              <div className="phone"><div className="scr"><img src="/telas/previsao.webp" alt="" loading="lazy" /></div></div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a href="/" className="brand"><Mark /> Acué</a>
              <p className="slogan">Seu dinheiro no seu controle.</p>
            </div>
            <div>
              <h4>Produto</h4>
              <ul>
                <li><a href="#como">Como funciona</a></li>
                <li><a href="#recursos">Recursos</a></li>
                <li><a href="#precos">Preços</a></li>
                <li><a href="#duvidas">Dúvidas</a></li>
              </ul>
            </div>
            <div>
              <h4>Acué</h4>
              <ul>
                <li><a href="/guias">Guias de dinheiro</a></li>
                <li><a href="/quem-faz">Quem faz o Acué</a></li>
                <li><a href="/privacidade">Política de Privacidade</a></li>
                <li><a href={APP_EXTRATO}>Ver meu mês sem cadastro</a></li>
              </ul>
            </div>
            <div>
              <h4>Fale com a gente</h4>
              <ul>
                <li><a href="https://instagram.com/acueapp" rel="noopener" target="_blank">@acueapp</a></li>
                <li><a href="mailto:contato@acueapp.com.br">contato@acueapp.com.br</a></li>
              </ul>
            </div>
          </div>
          <div className="legal"><span>© {new Date().getFullYear()} Acué</span><span>Feito no Brasil</span></div>
        </div>
        <div className="word" aria-hidden="true">Acué</div>
      </footer>
    </div>
  );
}
