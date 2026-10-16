import React from 'react';
import { ArrowLeft } from 'lucide-react';
import AcueLogo from '@/components/AcueLogo';

const secoes: { titulo: string; paragrafos: string[] }[] = [
  {
    titulo: 'O que coletamos neste site',
    paragrafos: [
      'Este site (site.acueapp.com.br) não pede nome, e-mail, senha nem outros dados pessoais. A calculadora de demonstração roda apenas no seu navegador, e o que você digita nela não é enviado a ninguém.',
      'Para entender como o site é usado, registramos dados de navegação por meio do PostHog: páginas visitadas, cliques, de onde veio o acesso (por exemplo, um link do Instagram ou do YouTube), tipo de aparelho e navegador, e uma localização aproximada (cidade), obtida a partir do endereço IP.',
    ],
  },
  {
    titulo: 'Gravação de tela',
    paragrafos: [
      'No site e enquanto você preenche o cadastro no app, registramos a sessão como gravação de tela (cliques, rolagem e movimentos), por meio do PostHog, para entender onde as pessoas encontram dificuldade e melhorar o serviço.',
      'O que você digita (nome, usuário, e-mail e senha) é mascarado e não aparece na gravação, e ela é interrompida antes de mostrarmos o código de recuperação da sua conta. A tela de login e o app, depois que você entra, não são gravados. As gravações ficam guardadas por 30 dias.',
    ],
  },
  {
    titulo: 'Medição de anúncios (Pixel da Meta)',
    paragrafos: [
      'Usamos o Pixel da Meta (Instagram e Facebook) para medir quantas pessoas visitam o site e o app e criam conta depois de ver um anúncio nosso. A Meta pode receber informações como o endereço IP, identificadores do navegador e as páginas visitadas, conforme a política de privacidade da própria Meta.',
    ],
  },
  {
    titulo: 'Cadastro e uso do app',
    paragrafos: [
      'Ao criar uma conta no app, coletamos: nome, nome de usuário, e-mail, senha (armazenada como hash criptográfico), dados financeiros inseridos por você (gastos, receitas, metas) e informações do dispositivo para suporte técnico.',
      'Os dados são armazenados de forma segura no Supabase, em servidores localizados no Brasil, com criptografia em trânsito (TLS) e em repouso. Não vendemos nem alugamos dados pessoais, e não rastreamos informações financeiras individuais para análise de uso.',
    ],
  },
  {
    titulo: 'Seus direitos (LGPD)',
    paragrafos: [
      'Você tem direito a acessar, corrigir e excluir seus dados a qualquer momento. Ao solicitar a exclusão da conta, seus dados financeiros são marcados como excluídos e removidos permanentemente em até 30 dias. Você também pode pedir a exclusão dos dados de navegação e das gravações de tela.',
      'Para exercer seus direitos ou tirar dúvidas, escreva para contato@acueapp.com.br.',
    ],
  },
  {
    titulo: 'Como reduzir a coleta',
    paragrafos: [
      'Você pode limitar rastreadores e cookies nas configurações do seu navegador ou usando um bloqueador de rastreamento. O site continua funcionando normalmente.',
    ],
  },
];

export default function Privacidade() {
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
        <h1 className="text-3xl md:text-4xl font-extrabold font-sora mb-2">Política de Privacidade</h1>
        <p className="text-sm text-gray-500 mb-10">Última atualização: 16 de outubro de 2026</p>

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
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-gray-600">
        © 2026 Acué Finanças. Todos os direitos reservados.
      </footer>
    </div>
  );
}
