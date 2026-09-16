import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'white';
  className?: string;
}

export function Logo({ variant = 'dark', className = 'h-8 w-auto' }: LogoProps) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#010101';
  const goldColor = variant === 'white' ? '#D4B364' : '#C5A14B';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Monograma Geométrico do Partage em Dourado */}
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0"
      >
        <path
          d="M30 3C22 3 15 10 15 18C15 26 27 38 30 41C33 38 45 26 45 18C45 10 38 3 30 3Z"
          fill={goldColor}
          fillOpacity="0.85"
        />
        <circle cx="30" cy="18" r="4.5" fill="#FFFFFF" />
        <path
          d="M8 25C5 30 5 37 10 42C15 47 28 48 30 48C32 48 45 47 50 42C55 37 55 30 52 25C48 33 38 42 30 42C22 42 12 33 8 25Z"
          fill={goldColor}
        />
        <circle cx="30" cy="52" r="2.5" fill={goldColor} />
      </svg>
      {/* Tipografia da Marca */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-[15px] font-bold tracking-[0.22em] uppercase"
          style={{ color: textColor }}
        >
          PARTAGE
        </span>
        <span
          className="text-[9.5px] font-medium tracking-[0.28em] uppercase"
          style={{ color: goldColor }}
        >
          LAGO SUL
        </span>
      </div>
    </div>
  );
}
