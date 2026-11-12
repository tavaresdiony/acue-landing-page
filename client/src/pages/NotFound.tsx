import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Home } from 'lucide-react';
import AcueLogo from '@/components/AcueLogo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0B0A] text-white flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00E5A0]/5 blur-[100px] pointer-events-none"></div>

      <div className="space-y-6 relative z-10 max-w-md">
        <AcueLogo size={64} className="mx-auto" />
        
        <h1 className="text-6xl font-extrabold  text-[#00E5A0]">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold ">Página não encontrada</h2>
          <p className="text-sm text-gray-400">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
        </div>

        <Link href="/">
          <span className="inline-flex items-center gap-2 bg-[#00E5A0] hover:bg-[#00C864] text-black font-extrabold text-sm py-3 px-6 rounded-full shadow-[0_0_20px_rgba(0,230,118,0.2)] transition-all cursor-pointer active:scale-[0.97]">
            <Home size={16} />
            <span>Voltar para o Início</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
