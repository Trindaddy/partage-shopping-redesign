'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import {
  Menu,
  X,
  MapPin,
  Clock,
  Navigation,
  Search,
  Sparkles,
  ArrowRight,
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
      {/* Top Banner Discreto — Fora.so Style */}
      <div className="bg-dark-950 text-neutral-400 text-[11px] font-medium py-2 px-4 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-gold-400 font-semibold uppercase tracking-[0.14em] text-[10.5px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Aberto Hoje até as 22h
            </span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="hidden sm:inline text-neutral-400 text-[11.5px]">
              Lago Sul, Brasília · Ao lado do Aeroporto
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-gold-400 transition-colors"
            >
              <Navigation className="h-3 w-3" />
              Waze
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Aeroporto+lote+05+Lago+Sul+Bras%C3%ADlia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-gold-400 transition-colors"
            >
              <MapPin className="h-3 w-3" />
              Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar Fora.so Glass */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3.5 shadow-2xl'
            : 'bg-dark-950/80 backdrop-blur-md py-4 border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="transition-opacity hover:opacity-90">
            <Logo variant="white" />
          </Link>

          {/* Desktop Navigation — Pill Style */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/[0.04] border border-white/[0.08] rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] rounded-full transition-all ${
                    isActive
                      ? 'text-black bg-white font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions — Pill Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/lojas"
              className="inline-flex items-center gap-1.5 text-[11.5px] uppercase tracking-[0.14em] font-medium text-neutral-300 hover:text-white px-3 py-2 transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-neutral-400" />
              Buscar Lojas
            </Link>

            <a
              href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-black bg-white hover:bg-gold-400 rounded-full transition-all shadow-sm hover:shadow-fora-glow"
            >
              Como Chegar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-200 hover:text-gold-400 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/[0.08] bg-dark-900 px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 text-[13px] font-medium uppercase tracking-[0.14em] rounded-xl transition-all ${
                      isActive
                        ? 'text-black bg-white font-semibold'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-black bg-white hover:bg-gold-400 rounded-full transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Navegar pelo Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aeroporto+lote+05+Lago+Sul+Bras%C3%ADlia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white border border-white/20 hover:border-gold-400 rounded-full transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
