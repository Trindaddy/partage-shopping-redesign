'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { SpotlightSearch } from './SpotlightSearch';
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
  { label: 'Cinema', href: '/cinema' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Mapa', href: '/mapa' },
  { label: 'Comodidades', href: '/comodidades' },
  { label: 'Sobre', href: '/sobre' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atalho global Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSpotlightOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

      {/* Main Sticky Navbar Fora.so Glass com amplo respiro */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-warm-canvas/92 backdrop-blur-md py-2.5 shadow-[0_4px_24px_rgba(44,34,35,0.06)] border-b border-warm-border'
            : 'bg-warm-canvas/80 backdrop-blur-md py-3.5 border-b border-warm-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
          {/* Logo Oficial Partage Lago Sul */}
          <Link href="/" className="transition-transform hover:scale-[1.01] shrink-0">
            <Logo variant="wine" />
          </Link>

          {/* Desktop Navigation — Pill Style Arejada e Espaçosa */}
          <nav className="hidden lg:flex items-center gap-0.5 p-1 bg-warm-card border border-warm-border rounded-full shadow-[0_2px_8px_rgba(44,34,35,0.03)]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] rounded-full transition-all whitespace-nowrap ${
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

          {/* CTA & Actions com Botão Spotlight Cmd+K */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setSpotlightOpen(true)}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-warm-taupe hover:text-warm-espresso bg-white border border-warm-border hover:border-brand-gold px-3 py-1.5 rounded-full transition-all shadow-xs"
              title="Buscar no Partage (Ctrl+K / ⌘K)"
            >
              <Search className="h-3.5 w-3.5 text-brand-wine" />
              <span className="hidden xl:inline">Buscar</span>
              <kbd className="text-[9.5px] font-mono bg-warm-card text-warm-taupe px-1 py-0.5 rounded border border-warm-border leading-none">
                ⌘K
              </kbd>
            </button>

            <a
              href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white bg-brand-wine hover:bg-brand-wine-dark rounded-full transition-all shadow-sm hover:shadow-wine-glow"
            >
              Como Chegar
            </a>

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
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSpotlightOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-warm-espresso bg-white border border-warm-border rounded-full shadow-xs"
              >
                <Search className="h-4 w-4 text-brand-wine" />
                Buscar no Shopping (Spotlight)
              </button>
              <a
                href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white bg-brand-wine hover:bg-brand-wine-dark rounded-full transition-colors shadow-sm"
              >
                <Navigation className="h-4 w-4" />
                Navegar pelo Waze
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Modal Spotlight Search Global */}
      <SpotlightSearch
        isOpen={spotlightOpen}
        onClose={() => setSpotlightOpen(false)}
      />
    </>
  );
}
