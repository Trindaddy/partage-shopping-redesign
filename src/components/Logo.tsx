import React from 'react';

interface LogoProps {
  variant?: 'wine' | 'dark' | 'white';
  className?: string;
}

export function Logo({ variant = 'wine', className = 'h-9 w-auto' }: LogoProps) {
  const isWhite = variant === 'white';
  const wineColor = isWhite ? '#FFFFFF' : '#8B1E2D';
  const textColor = isWhite ? '#FFFFFF' : '#2C2223';
  const subTextColor = isWhite ? 'rgba(255, 255, 255, 0.8)' : '#6E6259';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Roseta Floral Institucional da Partage Malls */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        {/* Centro da flor */}
        <circle cx="50" cy="50" r="11" fill={wineColor} />
        
        {/* 8 Pétalas radiais da roseta Partage */}
        {/* Topo / Fundo */}
        <path
          d="M50 8C45 8 42 16 43 25C44 32 47 37 50 37C53 37 56 32 57 25C58 16 55 8 50 8Z"
          fill={wineColor}
        />
        <path
          d="M50 92C45 92 42 84 43 75C44 68 47 63 50 63C53 63 56 68 57 75C58 84 55 92 50 92Z"
          fill={wineColor}
        />
        
        {/* Leste / Oeste */}
        <path
          d="M8 50C8 45 16 42 25 43C32 44 37 47 37 50C37 53 32 56 25 57C16 58 8 55 8 50Z"
          fill={wineColor}
        />
        <path
          d="M92 50C92 45 84 42 75 43C68 44 63 47 63 50C63 53 68 56 75 57C84 58 92 55 92 50Z"
          fill={wineColor}
        />
        
        {/* Diagonais */}
        <path
          d="M20 20C17 24 20 32 27 38C33 43 38 43 41 41C43 38 43 33 38 27C32 20 24 17 20 20Z"
          fill={wineColor}
        />
        <path
          d="M80 80C83 76 80 68 73 62C67 57 62 57 59 59C57 62 57 67 62 73C68 80 76 83 80 80Z"
          fill={wineColor}
        />
        <path
          d="M20 80C24 83 32 80 38 73C43 67 43 62 41 59C38 57 33 57 27 62C20 68 17 76 20 80Z"
          fill={wineColor}
        />
        <path
          d="M80 20C76 17 68 20 62 27C57 33 57 38 59 41C62 43 67 43 73 38C80 32 83 24 80 20Z"
          fill={wineColor}
        />
      </svg>

      {/* Tipografia da Marca */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-[15px] font-bold tracking-[0.16em] uppercase"
          style={{ color: textColor }}
        >
          PARTAGE LAGO SUL
        </span>
        <span
          className="text-[9px] font-semibold tracking-[0.32em] uppercase mt-0.5"
          style={{ color: subTextColor }}
        >
          SHOPPING
        </span>
      </div>
    </div>
  );
}
