import React, { useState } from 'react';
import { 
  Search, Eye, EyeOff, History, TrendingUp,
  Home as HomeIcon, BarChart2, Calendar, AlertTriangle, DollarSign,
  CreditCard, Plus, ArrowUpRight, ArrowDownRight, Percent, Landmark,
  Award, PiggyBank, Calculator, Trash2, CheckCircle2, ChevronRight
} from 'lucide-react';

export default function AcueDashboardMockup() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'dados' | 'previsao' | 'dividas' | 'financas'>('inicio');
  const [hideValues, setHideValues] = useState(false);
  const [simulatedAporte, setSimulatedAporte] = useState({ inicial: '1000', mensal: '200', taxa: '1.2', prazo: '12' });
  const [simulationResult, setSimulationResult] = useState<number | null>(null);

  const calculateInvestment = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseFloat(simulatedAporte.inicial) || 0;
    const pmt = parseFloat(simulatedAporte.mensal) || 0;
    const r = (parseFloat(simulatedAporte.taxa) || 0) / 100;
    const n = parseInt(simulatedAporte.prazo) || 0;

    let total = p;
    for (let i = 0; i < n; i++) {
      total = total * (1 + r) + pmt;
    }
    setSimulationResult(Math.round(total * 100) / 100);
  };

  return (
    <div className="w-full max-w-[380px] mx-auto bg-[#0B0C0E] text-white rounded-[44px] border-[6px] border-[#22252A] overflow-hidden shadow-[0_0_50px_rgba(0,230,118,0.15)] relative aspect-[9/19] flex flex-col font-sans select-none">
      {/* Notch / Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50 flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-[#111] rounded-full mr-2"></div>
        <div className="w-12 h-1 bg-[#111] rounded-full"></div>
      </div>

      {/* App Header */}
      <div className="pt-9 px-5 pb-3 flex items-center justify-between bg-[#0B0C0E]/95 backdrop-blur-md sticky top-0 z-40 border-b border-gray-900/50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#00E676] flex items-center justify-center font-bold text-black text-sm">
            J
          </div>
          <div>
            <div className="text-[10px] text-gray-400">Jorge</div>
            <div className="text-sm font-bold font-sora capitalize">{activeTab === 'inicio' ? 'Início' : activeTab}</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-full bg-[#17191D] flex items-center justify-center text-[#00E676]">
            <TrendingUp size={14} />
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-20 space-y-3.5 scrollbar-none bg-[#0B0C0E]">
        
        {/* TAB 1: INÍCIO */}
        {activeTab === 'inicio' && (
          <>
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-1.5">
              <button className="flex items-center justify-center gap-1 py-1.5 bg-[#17191D] rounded-lg text-[11px] text-gray-300">
                <Search size={12} />
                <span>Buscar</span>
              </button>
              <button 
                onClick={() => setHideValues(!hideValues)}
                className="flex items-center justify-center gap-1 py-1.5 bg-[#17191D] rounded-lg text-[11px] text-gray-300"
              >
                {hideValues ? <Eye size={12} /> : <EyeOff size={12} />}
                <span>{hideValues ? 'Mostrar' : 'Ocultar'}</span>
              </button>
              <button className="flex items-center justify-center gap-1 py-1.5 bg-[#17191D] rounded-lg text-[11px] text-gray-300">
                <History size={12} />
                <span>Histórico</span>
              </button>
            </div>

            {/* SALDO DISPONÍVEL */}
            <div className="bg-[#111315] border border-[#00E676]/10 rounded-xl p-4">
              <div className="text-[9px] font-bold text-[#00E676] tracking-wider uppercase mb-1">
                Saldo Disponível
              </div>
              <div className="text-2xl font-extrabold text-[#00E676] font-sora">
                {hideValues ? 'R$ ••••••' : 'R$ 3.350,82'}
              </div>
              <div className="mt-2 flex gap-3 text-[11px] text-gray-400">
                <div>Base: <span className="text-white">{hideValues ? 'R$ •••' : 'R$ 3.500,82'}</span></div>
                <div>Gastos: <span className="text-[#FF7043]">{hideValues ? 'R$ •••' : '-R$ 150,00'}</span></div>
              </div>
              <div className="mt-1.5 text-[9px] text-gray-500">
                Toque para editar o saldo base
              </div>
            </div>

            {/* GASTOS NO CARTÃO */}
            <div className="bg-[#111315] border border-[#8E24AA]/10 rounded-xl p-4">
              <div className="text-[9px] font-bold text-[#D1C4E9] tracking-wider uppercase mb-1 flex items-center gap-1">
                <CreditCard size={10} className="text-[#8E24AA]" />
                Gastos no Cartão (este mês)
              </div>
              <div className="text-xl font-bold text-[#9C27B0] font-sora">
                {hideValues ? 'R$ •••' : 'R$ 50,00'}
              </div>
              <div className="mt-1.5 text-[11px] text-gray-400 leading-relaxed">
                Ative 'Levar p/ mês seguinte' para lançar a fatura automaticamente
              </div>
              <button className="mt-2.5 w-full bg-[#1A1525] border border-[#8E24AA]/20 text-[10px] text-[#D1C4E9] py-1.5 rounded-lg flex items-center justify-center gap-1">
                <CreditCard size={10} />
                Levar p/ mês seguinte
              </button>
            </div>

            {/* GRID DÍVIDAS E CONTAS */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#111315] border border-gray-900 rounded-xl p-3">
                <div className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                  Dívidas Restantes
                </div>
                <div className="text-base font-bold text-[#FF7043] font-sora">
                  {hideValues ? 'R$ •••' : 'R$ 0,00'}
                </div>
                <div className="text-[9px] text-gray-500 mt-0.5">R$ 0,00/mês</div>
              </div>

              <div className="bg-[#111315] border border-[#FFB74D]/10 rounded-xl p-3">
                <div className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                  Contas Pendentes
                </div>
                <div className="text-base font-bold text-[#FFB74D] font-sora">
                  {hideValues ? 'R$ •••' : 'R$ 150,00'}
                </div>
                <div className="text-[9px] text-[#00E676] mt-0.5">ao quitar: R$ 3.200,82</div>
              </div>
            </div>

            {/* GRID INVESTIMENTOS E RESERVA */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#111315] border border-gray-900 rounded-xl p-3">
                <div className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                  Investimentos
                </div>
                <div className="text-base font-bold text-blue-400 font-sora">
                  {hideValues ? 'R$ •••' : 'R$ 0,00'}
                </div>
                <div className="text-[9px] text-gray-500 mt-0.5">renda: R$ 0,00/mês</div>
              </div>

              <div className="bg-[#111315] border border-[#00E676]/10 rounded-xl p-3">
                <div className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                  Reserva / Poupança
                </div>
                <div className="text-base font-bold text-[#00E676] font-sora">
                  {hideValues ? 'R$ •••' : 'R$ 0,00'}
                </div>
                <div className="text-[9px] text-gray-500 mt-0.5">emergência e poupança</div>
              </div>
            </div>

            {/* SALDO ESTIMADO FIM DO MÊS */}
            <div className="bg-[#111315] border border-[#00E676]/10 rounded-xl p-3 flex justify-between items-center">
              <div>
                <div className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">
                  Saldo Estimado Fim do Mês
                </div>
                <div className="text-lg font-bold text-[#00E676] font-sora mt-0.5">
                  {hideValues ? 'R$ ••••••' : 'R$ 3.200,82'}
                </div>
              </div>
              <div className="text-xl">🎉</div>
            </div>
          </>
        )}

        {/* TAB 2: DADOS */}
        {activeTab === 'dados' && (
          <>
            {/* Sub-header */}
            <div className="flex gap-1.5 pb-1 overflow-x-auto scrollbar-none">
              <span className="bg-[#17191D] text-white text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1 shrink-0">
                💸 Gastos
              </span>
              <span className="text-gray-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
                🏠 Contas
              </span>
              <span className="text-gray-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
                💚 Entradas
              </span>
              <span className="text-gray-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
                📄 Relatório
              </span>
            </div>

            {/* Resumo de Gastos */}
            <div className="bg-[#111315] border border-gray-900 rounded-xl p-4 flex justify-between items-center">
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">À VISTA</div>
                <div className="text-xl font-bold text-[#FF7043] font-sora">R$ 150,00</div>
              </div>
              <div className="h-8 w-[1px] bg-gray-800"></div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">CARTÃO</div>
                <div className="text-xl font-bold text-[#9C27B0] font-sora">R$ 50,00</div>
              </div>
              <button className="bg-[#00E676] text-black font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                <Plus size={12} /> Registrar
              </button>
            </div>

            {/* Filtros */}
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none py-1">
              <span className="bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/20 text-[10px] px-2.5 py-1 rounded-full font-bold">
                todos • R$ 200,00
              </span>
              <span className="bg-[#17191D] text-gray-400 text-[10px] px-2.5 py-1 rounded-full">
                Alimentação • R$ 200,00
              </span>
            </div>

            {/* Lista de Transações */}
            <div className="space-y-2">
              <div className="bg-[#111315] border border-gray-900 rounded-xl p-3.5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-950 flex items-center justify-center text-[#9C27B0]">
                    <CreditCard size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Viagem carro 💳</div>
                    <div className="text-[10px] text-gray-500">Alimentação • 21 - MAI - 2026</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#9C27B0]">-R$ 50,00</div>
                  <span className="bg-[#9C27B0]/10 text-[#9C27B0] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">cartão</span>
                </div>
              </div>

              <div className="bg-[#111315] border border-gray-900 rounded-xl p-3.5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-950 flex items-center justify-center text-[#FF7043]">
                    <DollarSign size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Restaurante</div>
                    <div className="text-[10px] text-gray-500">Alimentação • 21 - MAI - 2026</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#FF7043]">-R$ 150,00</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* TAB 3: PREVISÃO */}
        {activeTab === 'previsao' && (
          <>
            {/* Alerta de Previsão */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 flex gap-2.5">
              <AlertTriangle className="text-amber-500 shrink-0" size={18} />
              <p className="text-[11px] text-amber-200 leading-relaxed">
                Vai sobrar pouco. Nesse ritmo você termina com <span className="font-bold">R$ 335,00</span>.
              </p>
            </div>

            {/* Saldo Projetado e Limite Diário */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#111315] border border-gray-900 rounded-xl p-3">
                <div className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                  SALDO PROJETADO ℹ️
                </div>
                <div className="text-base font-bold text-[#00E676] font-sora">R$ 335,00</div>
                <div className="text-[9px] text-[#00E676] mt-1">✓ R$ 335,00 guardados</div>
                <div className="text-[8px] text-gray-500">fim de maio de 2026</div>
              </div>

              <div className="bg-[#111315] border border-gray-900 rounded-xl p-3">
                <div className="text-[9px] font-bold text-gray-400 tracking-wider uppercase mb-1">
                  LIMITE/DIA ℹ️
                </div>
                <div className="text-base font-bold text-[#00E676] font-sora">R$ 260,53</div>
                <div className="text-[9px] text-gray-400 mt-1">11 dias restantes</div>
              </div>
            </div>

            {/* Meta de Reserva */}
            <div className="bg-[#111315] border border-gray-900 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">META DE RESERVA ℹ️</div>
                <button className="text-[9px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded">Ajustar</button>
              </div>
              <div className="text-base font-bold font-sora mb-2">Guardar 10% = R$ 335,00</div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#00E676] h-full w-[10%]"></div>
              </div>
              <div className="flex justify-between text-[9px] text-gray-500 mt-1.5">
                <span>5%</span>
                <span className="text-[#00E676] font-bold">10%</span>
                <span>15%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Detalhamento de Disponível */}
            <div className="bg-[#111315] border border-gray-900 rounded-xl p-3.5 space-y-2">
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">DISPONÍVEL ATÉ O FIM DO MÊS ℹ️</div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between text-gray-300">
                  <span>Saldo real agora</span>
                  <span className="font-bold text-white">R$ 3.350,82</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Contas pendentes</span>
                  <span className="text-[#FF7043]">- R$ 150,00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Reserva (10%)</span>
                  <span className="text-[#FF7043]">- R$ 335,00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Gastos projetados</span>
                  <span className="text-[#FF7043]">- R$ 2.865,82</span>
                </div>
                <div className="h-[1px] bg-gray-800 my-1"></div>
                <div className="flex justify-between font-bold text-[#00E676] text-xs">
                  <span>Livre para gastar</span>
                  <span className="font-sora">R$ 2.865,82</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* TAB 4: DÍVIDAS */}
        {activeTab === 'dividas' && (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
            <div className="text-4xl">🎉</div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">TOTAL EM DÍVIDAS</div>
              <div className="text-2xl font-extrabold text-[#FF7043] font-sora mt-1">R$ 0,00</div>
            </div>
            <p className="text-[11px] text-gray-500 max-w-[200px] leading-relaxed">
              Nenhuma dívida registrada! Você está com as contas limpas.
            </p>
            <button className="bg-[#00E676] text-black font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,230,118,0.2)]">
              <Plus size={14} /> Nova Dívida
            </button>
          </div>
        )}

        {/* TAB 5: FINANÇAS */}
        {activeTab === 'financas' && (
          <>
            {/* Finanças Sub-menu */}
            <div className="flex gap-1.5 pb-1 overflow-x-auto scrollbar-none">
              <span className="bg-[#17191D] text-white text-[10px] px-2.5 py-1 rounded-full font-bold shrink-0">
                📈 FIIs/Ações
              </span>
              <span className="text-gray-500 text-[10px] px-2.5 py-1 rounded-full shrink-0">
                🏦 Reserva
              </span>
              <span className="text-gray-500 text-[10px] px-2.5 py-1 rounded-full shrink-0">
                🎯 Metas
              </span>
            </div>

            {/* Simulador Card */}
            <div className="bg-[#111315] border border-gray-900 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Calculadora PRO</div>
                <span className="bg-[#00E676]/10 text-[#00E676] text-[8px] font-extrabold px-1.5 py-0.5 rounded">PRO</span>
              </div>

              <form onSubmit={calculateInvestment} className="space-y-2.5">
                <div>
                  <label className="block text-[9px] text-gray-500 uppercase font-bold mb-1">Aporte Inicial (R$)</label>
                  <input 
                    type="number" 
                    value={simulatedAporte.inicial}
                    onChange={e => setSimulatedAporte({...simulatedAporte, inicial: e.target.value})}
                    className="w-full bg-[#17191D] border border-gray-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E676]" 
                  />
                </div>

                <div>
                  <label className="block text-[9px] text-gray-500 uppercase font-bold mb-1">Aporte Mensal (R$)</label>
                  <input 
                    type="number" 
                    value={simulatedAporte.mensal}
                    onChange={e => setSimulatedAporte({...simulatedAporte, mensal: e.target.value})}
                    className="w-full bg-[#17191D] border border-gray-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E676]" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[9px] text-gray-500 uppercase font-bold mb-1">Taxa (% am)</label>
                    <input 
                      type="text" 
                      value={simulatedAporte.taxa}
                      onChange={e => setSimulatedAporte({...simulatedAporte, taxa: e.target.value})}
                      className="w-full bg-[#17191D] border border-gray-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E676]" 
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-gray-500 uppercase font-bold mb-1">Prazo (meses)</label>
                    <input 
                      type="number" 
                      value={simulatedAporte.prazo}
                      onChange={e => setSimulatedAporte({...simulatedAporte, prazo: e.target.value})}
                      className="w-full bg-[#17191D] border border-gray-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#00E676]" 
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#00E676] hover:bg-[#00C864] text-black font-extrabold text-xs py-2 rounded-lg transition-all mt-1"
                >
                  Calcular Projeção
                </button>
              </form>

              {simulationResult !== null && (
                <div className="mt-4 pt-3 border-t border-gray-800 text-center">
                  <div className="text-[9px] text-gray-500 uppercase font-bold">TOTAL ESTIMADO</div>
                  <div className="text-base font-bold text-[#00E676] font-sora mt-0.5">
                    R$ {simulationResult.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

      </div>

      {/* Persistent App Bottom Tab Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0B0C0E]/95 backdrop-blur-md border-t border-gray-900/50 py-2.5 px-3 flex justify-around items-center z-40">
        <button 
          onClick={() => setActiveTab('inicio')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'inicio' ? 'text-[#00E676]' : 'text-gray-500'}`}
        >
          <HomeIcon size={16} />
          <span className="text-[8px] font-bold">Início</span>
        </button>

        <button 
          onClick={() => setActiveTab('dados')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'dados' ? 'text-[#00E676]' : 'text-gray-500'}`}
        >
          <BarChart2 size={16} />
          <span className="text-[8px] font-bold">Dados</span>
        </button>

        <button 
          onClick={() => setActiveTab('previsao')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'previsao' ? 'text-[#00E676]' : 'text-gray-500'}`}
        >
          <Calendar size={16} />
          <span className="text-[8px] font-bold">Previsão</span>
        </button>

        <button 
          onClick={() => setActiveTab('dividas')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'dividas' ? 'text-[#00E676]' : 'text-gray-500'}`}
        >
          <AlertTriangle size={16} />
          <span className="text-[8px] font-bold">Dívidas</span>
        </button>

        <button 
          onClick={() => setActiveTab('financas')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'financas' ? 'text-[#00E676]' : 'text-gray-500'}`}
        >
          <Percent size={16} />
          <span className="text-[8px] font-bold">Finanças</span>
        </button>
      </div>
    </div>
  );
}
