import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Zap, TrendingUp, Compass, 
  Smartphone, Award, Heart, HelpCircle, CheckCircle2, 
  MessageSquare, Star, Sparkles, ChevronDown, Check,
  PiggyBank, BarChart2, Calculator, RefreshCw, Layers,
  CreditCard, Menu, X
} from 'lucide-react';
import { toast } from 'sonner';
import AcueDashboardMockup from '@/components/AcueDashboardMockup';
import AcueLogo from '@/components/AcueLogo';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: "O Acué é seguro? Como meus dados são protegidos?",
      a: "Privacidade é nossa prioridade absoluta. O Acué utiliza tecnologias modernas de proteção de dados para garantir que suas informações financeiras estejam sempre seguras. Nós não temos acesso ao seu dinheiro e todos os seus dados são sincronizados em nuvem de forma 100% privada, garantindo que apenas você tenha acesso a eles."
    },
    {
      q: "O Acué se conecta à minha conta bancária?",
      a: "Não. O Acué foi desenhado para manter você no controle total de forma simples e tátil. Todas as inserções e organizações são feitas de maneira manual e inteligente dentro do aplicativo, garantindo que você crie o hábito saudável de acompanhar suas finanças sem expor suas credenciais bancárias ou senhas."
    },
    {
      q: "Como funciona a previsão de fim do mês?",
      a: "Nosso algoritmo inteligente analisa seus gastos cadastrados (contas recorrentes, despesas fixas, parcelamentos) e seu saldo disponível. Com isso, ele calcula um 'limite diário seguro' para você gastar e projeta exatamente quanto vai sobrar na sua conta no último dia do mês, ajudando você a planejar suas economias."
    },
    {
      q: "Qual a diferença entre o plano Gratuito e o PRO?",
      a: "O plano Gratuito oferece controle completo de receitas, despesas, contas recorrentes e dashboard básico para organizar seu mês. O plano PRO desbloqueia recursos avançados como a calculadora de investimentos inteligente, criação de metas e reservas financeiras ilimitadas, e acompanhamento profundo para você planejar seu futuro."
    },
    {
      q: "Como funciona o cancelamento da assinatura PRO?",
      a: "Sem burocracia ou fidelidade. Como o Acué é um Web App moderno (PWA), você pode solicitar o cancelamento a qualquer momento enviando um e-mail simples para contato@acueapp.com.br. Em breve, você poderá realizar o cancelamento de forma totalmente automatizada e com um clique diretamente na aba de configurações do próprio aplicativo."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00E676]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#8E24AA]/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#00E676]/5 blur-[120px] pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#0B0C0E]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AcueLogo size={34} />
            <span className="text-xl font-extrabold tracking-tight font-sora bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Acué
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <a href="#features" className="hover:text-[#00E676] transition-colors">Recursos</a>
            <a href="#how-it-works" className="hover:text-[#00E676] transition-colors">Como Funciona</a>
            <a href="#pricing" className="hover:text-[#00E676] transition-colors">Preços</a>
            <a href="#faq" className="hover:text-[#00E676] transition-colors">Dúvidas</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.acueapp.com.br" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-bold bg-[#00E676] hover:bg-[#00C864] text-black px-5 py-2 rounded-full shadow-[0_0_20px_rgba(0,230,118,0.25)] hover:shadow-[0_0_25px_rgba(0,230,118,0.4)] transition-all active:scale-[0.97]"
            >
              Crie sua conta
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0C0E]/95 border-b border-white/5 backdrop-blur-lg py-6 px-4 space-y-4 flex flex-col shadow-2xl z-50 animate-fade-in">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[#00E676] text-sm font-medium py-2 border-b border-white/5"
            >
              Recursos
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[#00E676] text-sm font-medium py-2 border-b border-white/5"
            >
              Como Funciona
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[#00E676] text-sm font-medium py-2 border-b border-white/5"
            >
              Preços
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-[#00E676] text-sm font-medium py-2"
            >
              Dúvidas
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#00E676]/10 border border-[#00E676]/20 px-3.5 py-1.5 rounded-full text-xs text-[#00E676] font-bold">
                <Sparkles size={12} />
                <span>O Futuro das Finanças Pessoais Chegou</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-sora leading-[1.1] text-white">
                Não gerencie mais seu dinheiro <span className="bg-gradient-to-r from-[#00E676] to-[#00B0FF] bg-clip-text text-transparent">sozinho</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                Esqueça planilhas complicadas. O <strong className="text-white">Acué</strong> transforma sua organização financeira em uma experiência simples, inteligente e agradável. Saiba para onde seu dinheiro vai e planeje o futuro com confiança.
              </p>

              {/* Download CTA Button */}
              <div className="pt-2 max-w-md">
                <a 
                  href="https://www.acueapp.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#00E676] hover:bg-[#00C864] text-black font-extrabold text-base py-3.5 px-8 rounded-full items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(0,230,118,0.3)] active:scale-[0.97]"
                >
                  <span>Acessar o Aplicativo</span>
                  <ArrowRight size={18} />
                </a>
                <p className="text-[11px] text-gray-500 mt-3 px-4 leading-relaxed">
                  📱 O Acué é um <strong>PWA (Web App Progressivo)</strong>. Acesse direto pelo navegador e adicione à sua tela inicial como um aplicativo super leve, sem precisar baixar nada nas lojas!
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/5 max-w-lg">
                <div>
                  <div className="text-2xl font-bold font-sora text-white">100%</div>
                  <div className="text-xs text-gray-500">Privado e Seguro</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-sora text-white">0</div>
                  <div className="text-xs text-gray-500">Planilhas Necessárias</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-sora text-[#00E676]">PRO</div>
                  <div className="text-xs text-gray-500">Metas & Investimentos</div>
                </div>
              </div>
            </div>

            {/* Right Interactive App Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Decorative background glow behind mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00E676]/10 to-[#8E24AA]/10 rounded-full blur-3xl -z-10 transform scale-90"></div>
              
              <div className="relative">
                {/* Float tags */}
                <div className="absolute -left-12 top-20 bg-[#111315]/90 border border-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5 z-10 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-8 h-8 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676]">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">Saldo Previsto</div>
                    <div className="text-xs font-bold text-white">R$ 3.200,82</div>
                  </div>
                </div>

                <div className="absolute -right-12 bottom-28 bg-[#111315]/90 border border-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5 z-10 animate-bounce" style={{ animationDuration: '5s' }}>
                  <div className="w-8 h-8 rounded-full bg-[#8E24AA]/10 flex items-center justify-center text-[#8E24AA]">
                    <CreditCard size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400">Cartão de Crédito</div>
                    <div className="text-xs font-bold text-[#9C27B0]">R$ 50,00</div>
                  </div>
                </div>

                {/* The Interactive Mockup Component */}
                <AcueDashboardMockup />
                
                <p className="text-center text-[11px] text-gray-500 mt-3 italic">
                  💡 Clique nos botões de navegação abaixo do mockup para testar as telas do app!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 bg-[#0F1013] border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00E676]">Benefícios do Acué</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sora">
              Tudo o que você precisa para dominar suas finanças
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Desenhado para ser simples, construído para dar resultados. Conheça as funcionalidades que vão transformar sua relação com o dinheiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-[#14161B] border border-white/5 p-6 rounded-2xl hover:border-[#00E676]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mb-5 group-hover:scale-110 transition-transform">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-lg font-bold font-sora mb-2">Dashboard Financeiro Inteligente</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Tenha clareza imediata sobre sua saúde financeira. Acompanhe receitas, despesas, saldos e limites de forma visual, elegante e unificada.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#14161B] border border-white/5 p-6 rounded-2xl hover:border-[#00E676]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#9C27B0] mb-5 group-hover:scale-110 transition-transform">
                <Compass size={24} />
              </div>
              <h3 className="text-lg font-bold font-sora mb-2">Previsão e Limite Seguro</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Nossa inteligência calcula um limite diário seguro de gastos com base no seu saldo e contas futuras. Saiba exatamente quanto pode gastar hoje sem passar aperto amanhã.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#14161B] border border-white/5 p-6 rounded-2xl hover:border-[#00E676]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <PiggyBank size={24} />
              </div>
              <h3 className="text-lg font-bold font-sora mb-2">Metas & Reservas Dedicadas</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Crie reservas específicas para emergências, viagens ou objetivos pessoais. Acompanhe a evolução de cada meta de forma independente e prazerosa.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#14161B] border border-white/5 p-6 rounded-2xl hover:border-[#00E676]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#FF7043] mb-5 group-hover:scale-110 transition-transform">
                <CreditCard size={24} />
              </div>
              <h3 className="text-lg font-bold font-sora mb-2">Controle de Parcelas e Cartões</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Chega de surpresas na fatura. Monitore suas compras parceladas de forma transparente e preveja o peso dos cartões nos meses seguintes automaticamente.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-[#14161B] border border-white/5 p-6 rounded-2xl hover:border-[#00E676]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 transition-transform">
                <Calculator size={24} />
              </div>
              <h3 className="text-lg font-bold font-sora mb-2">Simulador de Investimentos PRO</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Calcule juros compostos, projete sua independência financeira e simule aportes mensais com taxas personalizadas diretamente na aba de Finanças do app.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-[#14161B] border border-white/5 p-6 rounded-2xl hover:border-[#00E676]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mb-5 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold font-sora mb-2">Privacidade Total Garantida</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Nós respeitamos sua privacidade. Seus dados financeiros pertencem apenas a você, armazenados com segurança em nuvem e protegidos de forma 100% confidencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase & Story */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Representation */}
            <div className="lg:col-span-5 flex justify-center lg:order-last">
              <div className="relative p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                <div className="bg-[#111315] rounded-2xl p-5 space-y-4 max-w-[320px] shadow-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔮</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Aba Previsão</span>
                  </div>
                  <div className="text-xl font-bold font-sora text-white">Previsão Inteligente de Fim do Mês</div>
                  
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                    <div className="text-[10px] text-amber-500 uppercase font-bold">ALERTA DO APP</div>
                    <div className="text-xs text-amber-200 mt-0.5 leading-relaxed">Vai sobrar pouco. Nesse ritmo você termina com R$ 335,00.</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#17191D] p-2.5 rounded-lg border border-white/5">
                      <div className="text-[8px] text-gray-500 uppercase font-bold">SALDO PROJETADO</div>
                      <div className="text-sm font-extrabold text-[#00E676] font-sora mt-0.5">R$ 335,00</div>
                    </div>
                    <div className="bg-[#17191D] p-2.5 rounded-lg border border-white/5">
                      <div className="text-[8px] text-gray-500 uppercase font-bold">LIMITE SEGURO/DIA</div>
                      <div className="text-sm font-extrabold text-[#00E676] font-sora mt-0.5">R$ 260,53</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Copywriting */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00E676]">O Carro-Forte do Acué</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sora leading-tight">
                Aba Previsão: Saiba o futuro da sua conta antes dele acontecer
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Nós sabemos o quanto é estressante não saber para onde o dinheiro está indo ou ter aquela surpresa desagradável na fatura do cartão de crédito. A aba de **Previsão** foi desenhada justamente para trazer <strong className="text-white">tranquilidade, clareza e controle absoluto</strong> para sua rotina.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Cálculo de Limite Seguro por Dia</h4>
                    <p className="text-xs text-gray-400 mt-0.5">O Acué calcula automaticamente quanto você pode gastar por dia hoje, garantindo que suas contas pendentes sejam quitadas sem sustos.</p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Saldo Projetado para o Fim do Mês</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Veja uma projeção realista de quanto vai sobrar no último dia do mês, baseada nos seus hábitos atuais e nas suas contas pendentes.</p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Alertas de Ritmo de Gastos</h4>
                    <p className="text-xs text-gray-400 mt-0.5">O aplicativo avisa preventivamente quando o seu ritmo de gastos diários ameaçar a sua meta de reserva mensal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#0F1013] border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00E676]">Preços Justos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sora">Planos simples para todos</h2>
            <p className="text-sm sm:text-base text-gray-400">
              Comece de graça e mude para o PRO quando quiser acelerar suas conquistas financeiras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="bg-[#14161B] border border-white/5 rounded-3xl p-8 relative flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-sora">Acué Free</h3>
                  <p className="text-xs text-gray-400 mt-1">Essencial para controle básico do dia a dia.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-sora">R$ 0</span>
                  <span className="text-xs text-gray-500">/ sempre</span>
                </div>
                <div className="h-[1px] bg-white/5"></div>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Dashboard básico e limpo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Lançamentos de gastos ilimitados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Gerenciamento de contas recorrentes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Sincronização em nuvem segura</span>
                  </li>
                </ul>
              </div>
              <a 
                href="https://www.acueapp.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs py-3 rounded-xl transition-all text-center"
              >
                Começar de graça
              </a>
            </div>

            {/* PRO Plan */}
            <div className="bg-[#14161B] border-2 border-[#00E676] rounded-3xl p-8 relative flex flex-col justify-between shadow-[0_0_30px_rgba(0,230,118,0.1)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00E676] text-black font-extrabold text-[9px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Mais Popular
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-sora text-[#00E676]">Acué PRO</h3>
                  <p className="text-xs text-gray-400 mt-1">Para quem quer planejar e investir no futuro.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-sora">
                    R$ 14,90
                  </span>
                  <span className="text-xs text-gray-500">/ mês</span>
                </div>
                <div className="h-[1px] bg-white/5"></div>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span className="font-bold text-white">Tudo do plano Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Calculadora de Investimentos Inteligente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Criação ilimitada de Metas e Reservas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Análise profunda de gastos e relatórios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00E676]" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
              </div>
              <a 
                href="https://www.acueapp.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-[#00E676] hover:bg-[#00C864] text-black font-extrabold text-xs py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(0,230,118,0.2)] text-center"
              >
                Garantir Acesso PRO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00E676]">Perguntas Frequentes</span>
            <h2 className="text-3xl font-extrabold font-sora">Dúvidas Comuns</h2>
            <p className="text-sm text-gray-400">
              Tem alguma pergunta sobre o Acué? Encontre as respostas abaixo.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-[#14161B] border border-white/5 rounded-2xl overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-4.5 px-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm font-bold font-sora pr-4">{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-[#00E676] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-48 border-t border-white/5' : 'max-h-0'}`}
                >
                  <div className="p-6 text-xs sm:text-sm text-gray-400 leading-relaxed bg-[#0B0C0E]/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-tr from-[#111315] to-[#14161B] border border-white/10 rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Glowing effect behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#00E676]/10 blur-[80px] pointer-events-none"></div>
            
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mx-auto mb-4">
                <AcueLogo size={44} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sora leading-tight">
                Assuma o controle da sua vida financeira hoje mesmo
              </h2>
              <p className="text-sm sm:text-base text-gray-400">
                Acesse o aplicativo agora mesmo de forma simples e rápida. Adicione o Acué à tela inicial do seu celular e tenha o poder da organização financeira sempre com você.
              </p>

              <div className="max-w-md mx-auto pt-4">
                <a 
                  href="https://www.acueapp.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-[#00E676] hover:bg-[#00C864] text-black font-extrabold text-base py-3.5 px-8 rounded-full items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(0,230,118,0.3)] active:scale-[0.97]"
                >
                  <span>Crie sua conta no Acué</span>
                  <ArrowRight size={18} />
                </a>
                <p className="text-[10px] text-gray-500 mt-3">
                  Acesse www.acueapp.com.br e simplifique sua vida financeira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0C0E] border-t border-white/5 py-12 text-gray-500 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <AcueLogo size={28} />
            <span className="text-base font-bold font-sora text-white">Acué</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <a href="#features" className="hover:text-[#00E676] transition-colors">Recursos</a>
            <a href="#how-it-works" className="hover:text-[#00E676] transition-colors">Como Funciona</a>
            <a href="#pricing" className="hover:text-[#00E676] transition-colors">Preços</a>
            <a href="#faq" className="hover:text-[#00E676] transition-colors">Dúvidas</a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div>© 2026 Acué Finanças. Todos os direitos reservados.</div>
            <div className="text-[10px] text-gray-600">Feito com carinho para simplificar sua vida financeira.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
