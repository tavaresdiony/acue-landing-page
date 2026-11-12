import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRoute } from 'wouter';
import AcueLogo from '@/components/AcueLogo';
import NotFound from '@/pages/NotFound';
import { ATUALIZADO, GUIAS, porSlug, type Guia } from '@/content/guias';

function Topo() {
  return (
    <header className="border-b border-white/5">
      <div className="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <AcueLogo size={28} />
          <span className="text-base font-bold">Acué</span>
        </a>
        <a href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#00E5A0] transition-colors">
          <ArrowLeft size={16} />
          <span>Voltar ao início</span>
        </a>
      </div>
    </header>
  );
}

function Rodape() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-xs text-gray-500">
      <p className="mb-2">
        <a href="/guias" className="hover:text-[#00E5A0]">Guias</a> · <a href="/quem-faz" className="hover:text-[#00E5A0]">Quem faz o Acué</a> ·{' '}
        <a href="/privacidade" className="hover:text-[#00E5A0]">Privacidade</a>
      </p>
      © 2026 Acué Finanças. Todos os direitos reservados.
    </footer>
  );
}

export function GuiaView({ guia }: { guia: Guia }) {
  const relacionados = guia.relacionados.map((s) => porSlug(s)).filter(Boolean) as Guia[];
  return (
    <div className="min-h-screen bg-[#0A0B0A] text-white" style={{ fontFamily: "'Mukta', sans-serif" }}>
      <Topo />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav aria-label="Você está em" className="text-xs text-gray-500 mb-5">
          <a href="/" className="hover:text-[#00E5A0]">Início</a> / <a href="/guias" className="hover:text-[#00E5A0]">Guias</a>
        </nav>
        <article>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">{guia.h1}</h1>
          <p className="text-xs text-gray-500 mb-6">Por Dionatha Tavares, do Acué · Atualizado em {ATUALIZADO}</p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">{guia.resumo}</p>

          <div className="space-y-10">
            {guia.secoes.map((s) => (
              <section key={s.h2}>
                <h2 className="text-xl md:text-2xl font-bold text-[#00E5A0] mb-3">{s.h2}</h2>
                <div className="space-y-3 text-base text-gray-300 leading-relaxed">
                  {s.p?.map((t) => <p key={t}>{t}</p>)}
                  {s.passos && (
                    <ol className="list-decimal pl-5 space-y-2 marker:text-[#00E5A0]">
                      {s.passos.map((t) => <li key={t}>{t}</li>)}
                    </ol>
                  )}
                  {s.lista && (
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#00E5A0]">
                      {s.lista.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#00E5A0] mb-4">Perguntas frequentes</h2>
            <div className="space-y-5">
              {guia.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="text-base font-bold mb-1">{f.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="mt-12 rounded-3xl border border-[#00E5A0]/30 bg-[#151715] p-7">
          <h2 className="text-2xl font-extrabold mb-2">{guia.cta.titulo}</h2>
          <p className="text-gray-300 mb-5">{guia.cta.texto}</p>
          <a href={guia.cta.href} className="inline-flex items-center gap-2 bg-[#00E5A0] hover:bg-[#00C864] text-black font-extrabold text-sm py-3 px-6 rounded-full transition-all">
            <span>{guia.cta.botao}</span>
            <ArrowRight size={16} />
          </a>
        </aside>

        {relacionados.length > 0 && (
          <section className="mt-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Continue lendo</h2>
            <ul className="space-y-2">
              {relacionados.map((r) => (
                <li key={r.slug}>
                  <a href={`/guias/${r.slug}`} className="text-white hover:text-[#00E5A0] font-bold underline decoration-white/20 underline-offset-4">{r.h1}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Rodape />
    </div>
  );
}

export function GuiasIndexView() {
  return (
    <div className="min-h-screen bg-[#0A0B0A] text-white" style={{ fontFamily: "'Mukta', sans-serif" }}>
      <Topo />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">Guias de dinheiro do Acué</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          Respostas curtas e práticas para controlar os gastos, montar a reserva e saber quanto você pode gastar hoje.
        </p>
        <ul className="space-y-4">
          {GUIAS.map((g) => (
            <li key={g.slug}>
              <a href={`/guias/${g.slug}`} className="block rounded-2xl border border-white/10 bg-[#151715] p-6 hover:border-[#00E5A0]/60 transition-colors">
                <h2 className="text-xl font-bold mb-1">{g.h1}</h2>
                <p className="text-gray-400">{g.desc}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Rodape />
    </div>
  );
}

export default function GuiaPage() {
  const [ok, params] = useRoute('/guias/:slug');
  const guia = ok && params ? porSlug(params.slug) : undefined;
  if (!guia) return <NotFound />;
  return <GuiaView guia={guia} />;
}
