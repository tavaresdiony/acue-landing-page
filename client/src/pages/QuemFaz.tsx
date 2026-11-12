import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AcueLogo from '@/components/AcueLogo';

const secoes: { titulo: string; paragrafos: string[] }[] = [
  {
    titulo: 'Por que o Acué existe',
    paragrafos: [
      'Quase todo app de finanças mostra para onde o dinheiro foi. Poucos respondem o que importa na hora de comprar: quanto eu ainda posso gastar hoje? O Acué nasceu para responder essa pergunta, todo dia, com um número só.',
    ],
  },
  {
    titulo: 'Em que pé ele está',
    paragrafos: [
      'O Acué ainda é novo. Está em fase de teste aberto, com poucas pessoas usando, e eu leio e respondo cada mensagem. Se algo não funcionar ou faltar, me avise: é assim que ele melhora.',
    ],
  },
  {
    titulo: 'O que eu prometo',
    paragrafos: [
      'Seus dados financeiros são seus. Não vendemos nem alugamos dados pessoais. O extrato que você importa é lido no seu aparelho, e CPF, agência e conta são descartados.',
      'O plano grátis não expira, e o Pro se cancela com um toque, dentro do app. Os detalhes estão na Política de Privacidade.',
    ],
  },
  {
    titulo: 'Fale comigo',
    paragrafos: [
      'Dúvida, sugestão ou problema? Chame no Instagram @agenciadotavares ou escreva para contato@acueapp.com.br. As novidades do app ficam em @acueapp.',
    ],
  },
];

export default function QuemFaz() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white">
      <header className="border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <AcueLogo size={28} />
            <span className="text-base font-bold font-sora">Acué</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#00E676] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Voltar ao início</span>
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold font-sora mb-3">Quem faz o Acué</h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
          Oi, eu sou o <strong className="text-white">Dionatha Tavares</strong>. O Acué é feito por uma pessoa só, no Brasil, e eu respondo por ele.
        </p>

        <div className="space-y-9">
          {secoes.map((s) => (
            <section key={s.titulo}>
              <h2 className="text-lg font-bold font-sora text-[#00E676] mb-3">{s.titulo}</h2>
              <div className="space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
                {s.paragrafos.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://instagram.com/agenciadotavares"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C864] text-black font-extrabold text-sm py-3 px-6 rounded-full transition-all"
          >
            <span>Falar comigo no Instagram</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="/privacidade"
            className="inline-flex items-center gap-2 border border-white/10 hover:bg-white/5 text-white font-bold text-sm py-3 px-6 rounded-full transition-all"
          >
            Política de Privacidade
          </a>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-gray-600">
        © 2026 Acué Finanças. Todos os direitos reservados.
      </footer>
    </div>
  );
}
