'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  ShoppingBag,
  Utensils,
  Film,
  Calendar,
  Grid,
} from 'lucide-react';

const BOTTOM_NAV_ITEMS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Lojas', href: '/lojas', icon: ShoppingBag },
  { label: 'Gastronomia', href: '/gastronomia', icon: Utensils },
  { label: 'Cinema', href: '/cinema', icon: Film },
  { label: 'Agenda', href: '/agenda', icon: Calendar },
  { label: 'Mais', href: '/comodidades', icon: Grid },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação inferior mobile"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE4DC] px-2 py-1.5 shadow-[0_-4px_20px_rgba(44,34,35,0.04)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const isActive =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all relative ${
                isActive ? 'text-brand-wine' : 'text-warm-taupe hover:text-warm-espresso'
              }`}
            >
              <Icon
                className={`h-5 w-5 transition-transform ${
                  isActive ? 'scale-110 stroke-[2.2]' : 'stroke-[1.8]'
                }`}
              />
              <span
                className={`text-[10px] mt-1 font-medium tracking-tight ${
                  isActive ? 'font-semibold text-brand-wine' : 'text-warm-taupe'
                }`}
              >
                {item.label}
              </span>

              {/* Indicador visual ativo sutil */}
              {isActive && (
                <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-brand-wine" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
