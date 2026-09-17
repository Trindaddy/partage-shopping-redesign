'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import {
  MapPin,
  ShoppingBag,
  Utensils,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-warm-sand text-warm-espresso pt-20 pb-16 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faixa Superior Operacional — Cards Claros Fora.so */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-14 border-b border-warm-border">
          <div className="flex items-center gap-4 p-6 rounded-2xl border border-warm-border bg-white shadow-warm-sm">
            <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-brand-champagne/60 text-brand-wine border border-brand-gold/30">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-brand-wine">
                Endereço
              </span>
              <p className="text-[13.5px] text-warm-espresso font-medium leading-snug mt-0.5">
                Aeroporto lote 05 - Lago Sul
              </p>
              <span className="text-[12px] text-warm-taupe">Brasília - DF, 71608-900</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-warm-border bg-white shadow-warm-sm">
            <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-brand-champagne/60 text-brand-wine border border-brand-gold/30">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-brand-wine">
                Horário Lojas
              </span>
              <p className="text-[13.5px] text-warm-espresso font-medium leading-snug mt-0.5">
                Seg a Sáb: 10h às 22h
              </p>
              <span className="text-[12px] text-warm-taupe">Dom e Feriados: 14h às 20h</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-warm-border bg-white shadow-warm-sm">
            <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-brand-champagne/60 text-brand-wine border border-brand-gold/30">
              <Utensils className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-brand-wine">
                Gastronomia
              </span>
              <p className="text-[13.5px] text-warm-espresso font-medium leading-snug mt-0.5">
                Seg a Sáb: 10h às 23h
              </p>
              <span className="text-[12px] text-warm-taupe">Dom e Feriados: 12h às 22h</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section Fora.so Style */}
        <div className="py-12 border-b border-warm-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine">
              Clube Partage
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-warm-espresso mt-1">
              Receba novidades e convites VIP.
            </h3>
            <p className="text-[13px] text-warm-taupe mt-1 font-light">
              Fique por dentro das estreias do cinema, novos menus e eventos do cerrado.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full max-w-md flex items-center p-1.5 rounded-full bg-white border border-warm-border focus-within:border-brand-wine shadow-warm-sm transition-colors">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail..."
              className="flex-1 bg-transparent px-5 py-2 text-[13px] text-warm-espresso placeholder:text-warm-taupe/70 focus:outline-none"
            >
            </input>
            <button
              type="submit"
              className="px-6 py-2.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[11.5px] font-bold uppercase tracking-[0.14em] rounded-full transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Inscrito!
                </>
              ) : (
                <>
                  Inscrever
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 5 Thematic Columns */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <Logo variant="wine" />
              <p className="mt-4 font-display text-[15px] font-normal tracking-wide text-warm-espresso leading-snug">
                Singular, moderno <br />e sempre à frente.
              </p>
              <p className="mt-2 text-[12.5px] text-warm-taupe leading-relaxed font-light">
                Open Mall de alto padrão integrado à natureza do cerrado brasiliense.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/partagelagosul/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial Partage"
                className="h-9 w-9 rounded-full border border-warm-border bg-white flex items-center justify-center text-warm-taupe hover:text-brand-wine hover:border-brand-wine transition-colors shadow-warm-sm"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@PartageMalls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Oficial Partage"
                className="h-9 w-9 rounded-full border border-warm-border bg-white flex items-center justify-center text-warm-taupe hover:text-brand-wine hover:border-brand-wine transition-colors shadow-warm-sm"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/showcase/partage-lago-sul/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Oficial Partage"
                className="h-9 w-9 rounded-full border border-warm-border bg-white flex items-center justify-center text-warm-taupe hover:text-brand-wine hover:border-brand-wine transition-colors shadow-warm-sm"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-[13px] text-warm-taupe font-medium">
              <li>
                <Link href="/" className="hover:text-brand-wine transition-colors">
                  Visão Geral
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-brand-wine transition-colors">
                  Sobre o Partage
                </Link>
              </li>
              <li>
                <Link href="/lojas" className="hover:text-brand-wine transition-colors">
                  Guia de Lojas
                </Link>
              </li>
              <li>
                <Link href="/gastronomia" className="hover:text-brand-wine transition-colors">
                  Gastronomia & Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/cinema" className="hover:text-brand-wine transition-colors">
                  Cinema VIP Cine Araújo
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="hover:text-brand-wine transition-colors">
                  Agenda de Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Comodidades */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine mb-4">
              Comodidades
            </h4>
            <ul className="space-y-2.5 text-[13px] text-warm-taupe font-medium">
              <li>
                <Link href="/comodidades#concierge" className="hover:text-brand-wine transition-colors">
                  Concierge
                </Link>
              </li>
              <li>
                <Link href="/comodidades#valet" className="hover:text-brand-wine transition-colors">
                  Valet Parking
                </Link>
              </li>
              <li>
                <Link href="/comodidades#espaco-familia" className="hover:text-brand-wine transition-colors">
                  Espaço Família
                </Link>
              </li>
              <li>
                <Link href="/comodidades#emprestimos" className="hover:text-brand-wine transition-colors">
                  Empréstimos Pet & Kids
                </Link>
              </li>
              <li>
                <Link href="/comodidades#shuttle" className="hover:text-brand-wine transition-colors">
                  Shuttle Aeroporto
                </Link>
              </li>
              <li>
                <Link href="/comodidades#locker" className="hover:text-brand-wine transition-colors">
                  Smart Lockers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Termos e Políticas */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine mb-4">
              Políticas & Termos
            </h4>
            <ul className="space-y-2.5 text-[13px] text-warm-taupe font-medium">
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/politica-de-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-wine transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/politica-de-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-wine transition-colors"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/termos-de-uso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-wine transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/midia-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-wine transition-colors"
                >
                  Mídia Kit & Anunciantes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contato e Negócios */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine mb-4">
              Contato & Negócios
            </h4>
            <ul className="space-y-2.5 text-[13px] text-warm-taupe font-medium">
              <li>
                <a
                  href="mailto:atendimento@partage.com.br"
                  className="hover:text-brand-wine-dark transition-colors font-semibold text-brand-wine"
                >
                  atendimento@partage.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/fale-conosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-wine transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/seja-lojista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-wine transition-colors"
                >
                  Seja um Lojista
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/trabalhe-conosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-wine transition-colors"
                >
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-warm-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-warm-taupe">
          <p>© 2026 Partage Lago Sul Shopping. Todos os direitos reservados.</p>
          <p>Aeroporto lote 05 - Lago Sul, Brasília - DF, 71608-900</p>
        </div>
      </div>
    </footer>
  );
}
