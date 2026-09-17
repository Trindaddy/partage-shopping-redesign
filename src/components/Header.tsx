'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import {
  Menu,
  X,
  MapPin,
  Navigation,
  Search,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Visão Geral', href: '/' },
  { label: 'Lojas', href: '/lojas' },
  { label: 'Gastronomia', href: '/gastronomia' },
  { label: 'Cinema VIP', href: '/cinema' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Comodidades', href: '/comodidades' },
  { label: 'Sobre', href: '/sobre' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Banner Discreto — Fora.so Style com calor e elegância */}
      <div className="bg-warm-sand text-warm-taupe text-[11px] font-medium py-2 px-4 border-b border-warm-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-feedback-success font-semibold uppercase tracking-[0.14em] text-[10.5px]">
              <span className="h-2 w-2 rounded-full bg-feedback-success animate-pulse" />
              Aberto Hoje até as 22h
            </span>
            <span className="hidden sm:inline text-warm-border">|</span>
            <span className="hidden sm:inline text-warm-taupe text-[11.5px]">
              Lago Sul, Brasília · Ao lado do Aeroporto JK
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-warm-taupe hover:text-brand-wine transition-colors"
            >
              <Navigation className="h-3 w-3 text-brand-wine" />
              Waze
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Aeroporto+lote+05+Lago+Sul+Bras%C3%ADlia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-warm-taupe hover:text-brand-wine transition-colors"
            >
              <MapPin className="h-3 w-3 text-brand-wine" />
              Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar Fora.so Glass — Paleta Clara */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-warm-canvas/92 backdrop-blur-md py-3 shadow-[0_4px_24px_rgba(44,34,35,0.06)] border-b border-warm-border'
            : 'bg-warm-canvas/80 backdrop-blur-md py-4 border-b border-warm-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Oficial Partage Lago Sul */}
          <Link href="/" className="transition-transform hover:scale-[1.01]">
            <Logo variant="wine" />
          </Link>

          {/* Desktop Navigation — Pill Style Fora.so */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-warm-card border border-warm-border rounded-full shadow-[0_2px_8px_rgba(44,34,35,0.03)]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] rounded-full transition-all ${
                    isActive
                      ? 'text-white bg-brand-wine font-semibold shadow-sm'
                      : 'text-warm-taupe hover:text-warm-espresso hover:bg-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/lojas"
              className="inline-flex items-center gap-1.5 text-[11.5px] uppercase tracking-[0.14em] font-medium text-warm-taupe hover:text-brand-wine px-3 py-2 transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-brand-wine" />
              Buscar Lojas
            </Link>

            <a
              href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white bg-brand-wine hover:bg-brand-wine-dark rounded-full transition-all shadow-sm hover:shadow-wine-glow"
            >
              Como Chegar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-warm-espresso hover:text-brand-wine transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-warm-border bg-warm-canvas px-5 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 text-[13px] font-medium uppercase tracking-[0.14em] rounded-xl transition-all ${
                      isActive
                        ? 'text-white bg-brand-wine font-semibold shadow-sm'
                        : 'text-warm-espresso hover:text-brand-wine hover:bg-warm-sand'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-warm-border flex flex-col gap-3">
              <a
                href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white bg-brand-wine hover:bg-brand-wine-dark rounded-full transition-colors shadow-sm"
              >
                <Navigation className="h-4 w-4" />
                Navegar pelo Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aeroporto+lote+05+Lago+Sul+Bras%C3%ADlia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-wine border border-brand-wine/30 hover:bg-brand-champagne/40 rounded-full transition-colors"
              >
                <MapPin className="h-4 w-4 text-brand-wine" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
