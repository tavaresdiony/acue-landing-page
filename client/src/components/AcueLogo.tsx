import React from 'react';

interface AcueLogoProps {
  className?: string;
  size?: number;
}

export default function AcueLogo({ className = '', size = 40 }: AcueLogoProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[0_0_10px_rgba(0,230,118,0.5)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle with Neon Glow effect */}
        <circle 
          cx="50" 
          cy="50" 
          r="44" 
          stroke="#00E676" 
          strokeWidth="4" 
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        
        {/* Stylized Letter 'A' */}
        <path 
          d="M34 65L48.5 31.5L54.5 45.5" 
          stroke="url(#grad-green)" 
          strokeWidth="7" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M61 65L55.5 52.5" 
          stroke="url(#grad-green)" 
          strokeWidth="7" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Dynamic Growth Arrow crossing the 'A' */}
        <path 
          d="M38 58C45 52 53.5 44 65 37.5" 
          stroke="#00E676" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        
        {/* Arrow Head */}
        <path 
          d="M59 37.5H65.5V44" 
          stroke="#00E676" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        <defs>
          <linearGradient id="grad-green" x1="34" y1="31.5" x2="61" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00FF88" />
            <stop offset="100%" stopColor="#009688" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
