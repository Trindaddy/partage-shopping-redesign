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
    <footer className="bg-black text-white pt-20 pb-12 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faixa Superior Operacional — Cards com Cantos Arredondados Fora.so */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-16 border-b border-white/[0.08]">
          <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-white/[0.05] text-gold-400 border border-white/10">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-gold-400">
                Endereço
              </span>
              <p className="text-[13px] text-white leading-snug mt-0.5">
                Aeroporto lote 05 - Lago Sul
              </p>
              <span className="text-[12px] text-neutral-400">Brasília - DF, 71608-900</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-white/[0.05] text-gold-400 border border-white/10">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-gold-400">
                Horário Lojas
              </span>
              <p className="text-[13px] text-white leading-snug mt-0.5">
                Seg a Sáb: 10h às 22h
              </p>
              <span className="text-[12px] text-neutral-400">Dom e Feriados: 14h às 20h</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-white/[0.05] text-gold-400 border border-white/10">
              <Utensils className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-gold-400">
                Gastronomia
              </span>
              <p className="text-[13px] text-white leading-snug mt-0.5">
                Seg a Sáb: 10h às 23h
              </p>
              <span className="text-[12px] text-neutral-400">Dom e Feriados: 12h às 22h</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section Fora.so Style */}
        <div className="py-14 border-b border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
              Clube Partage
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-white mt-1">
              Receba novidades e convites VIP.
            </h3>
          </div>

          <form onSubmit={handleSubscribe} className="w-full max-w-md flex items-center p-1.5 rounded-full bg-white/[0.04] border border-white/15 focus-within:border-gold-400 transition-colors">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail..."
              className="flex-1 bg-transparent px-5 py-2.5 text-[13px] text-white placeholder:text-neutral-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-white hover:bg-gold-400 text-black text-[11.5px] font-bold uppercase tracking-[0.14em] rounded-full transition-all flex items-center gap-1.5 shrink-0"
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
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <Logo variant="white" />
              <p className="mt-4 font-display text-[15px] font-normal tracking-wide text-neutral-300 leading-snug">
                Singular, moderno <br />e sempre à frente.
              </p>
              <p className="mt-3 text-[12.5px] text-neutral-500 leading-relaxed font-light">
                Open Mall de alto padrão integrado ao cerrado de Brasília.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/partagelagosul/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@PartageMalls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Oficial"
                className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/showcase/partage-lago-sul/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Oficial"
                className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-400 font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Visão Geral
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre o Partage
                </Link>
              </li>
              <li>
                <Link href="/lojas" className="hover:text-white transition-colors">
                  Guia de Lojas
                </Link>
              </li>
              <li>
                <Link href="/gastronomia" className="hover:text-white transition-colors">
                  Gastronomia & Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/cinema" className="hover:text-white transition-colors">
                  Cinema VIP Cine Araújo
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="hover:text-white transition-colors">
                  Agenda de Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Comodidades */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Comodidades
            </h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-400 font-light">
              <li>
                <Link href="/comodidades#concierge" className="hover:text-white transition-colors">
                  Concierge
                </Link>
              </li>
              <li>
                <Link href="/comodidades#valet" className="hover:text-white transition-colors">
                  Valet Parking
                </Link>
              </li>
              <li>
                <Link href="/comodidades#espaco-familia" className="hover:text-white transition-colors">
                  Espaço Família
                </Link>
              </li>
              <li>
                <Link href="/comodidades#emprestimos" className="hover:text-white transition-colors">
                  Empréstimos Pet & Kids
                </Link>
              </li>
              <li>
                <Link href="/comodidades#shuttle" className="hover:text-white transition-colors">
                  Shuttle Aeroporto
                </Link>
              </li>
              <li>
                <Link href="/comodidades#locker" className="hover:text-white transition-colors">
                  Smart Lockers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Termos e Políticas */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Políticas & Termos
            </h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-400 font-light">
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/politica-de-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/politica-de-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/termos-de-uso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/midia-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Mídia Kit & Anunciantes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contato e Negócios */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Contato & Negócios
            </h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-400 font-light">
              <li>
                <a
                  href="mailto:atendimento@partage.com.br"
                  className="hover:text-gold-400 transition-colors font-medium text-white"
                >
                  atendimento@partage.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/fale-conosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/seja-lojista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Seja um Lojista
                </a>
              </li>
              <li>
                <a
                  href="https://partagelagosulshopping.com.br/trabalhe-conosco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-neutral-500">
          <p>© 2026 Partage Lago Sul Shopping. Todos os direitos reservados.</p>
          <p>Aeroporto lote 05 - Lago Sul, Brasília - DF, 71608-900</p>
        </div>
      </div>
    </footer>
  );
}
