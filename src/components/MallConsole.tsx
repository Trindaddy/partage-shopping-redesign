'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STORES_DATA } from '@/data/stores';
import { DINING_DATA } from '@/data/dining';
import { EVENTS_DATA } from '@/data/events';
import { AMENITIES_DATA } from '@/data/amenities';
import {
  Sparkles,
  ShoppingBag,
  Utensils,
  Film,
  Calendar,
  Compass,
  ArrowRight,
  Clock,
} from 'lucide-react';

const CONSOLE_TABS = [
  { id: 'overview', label: 'Visão Geral', icon: Sparkles },
  { id: 'stores', label: 'Lojas & Grifes', icon: ShoppingBag },
  { id: 'dining', label: 'Gastronomia', icon: Utensils },
  { id: 'cinema', label: 'Cinema VIP', icon: Film },
  { id: 'events', label: 'Agenda & Shows', icon: Calendar },
  { id: 'amenities', label: 'Comodidades', icon: Compass },
] as const;

type TabId = (typeof CONSOLE_TABS)[number]['id'];

export function MallConsole() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl border border-warm-border bg-white shadow-warm-lg backdrop-blur-md overflow-hidden text-left">
      {/* Top Console Bar estilo Fora.so com calor e leveza */}
      <div className="px-6 py-4 border-b border-warm-border flex flex-col md:flex-row items-center justify-between gap-4 bg-warm-sand/50">
        {/* Window Dots & Live Status */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-brand-wine/80" />
            <span className="h-3 w-3 rounded-full bg-brand-gold/80" />
            <span className="h-3 w-3 rounded-full bg-feedback-success/80" />
          </div>
          <span className="text-[11px] font-mono tracking-wider text-warm-taupe pl-2">
            partage-experience.console
          </span>
          <span className="inline-flex md:hidden items-center gap-1 text-[10.5px] text-feedback-success font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            ● Aberto Hoje
          </span>
        </div>

        {/* Console Segmented Control (Pills da Prancha de Design) */}
        <div className="flex items-center gap-1 p-1 bg-warm-card border border-warm-border rounded-full overflow-x-auto max-w-full scrollbar-none shadow-inner">
          {CONSOLE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.1em] rounded-full whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-wine text-white font-semibold shadow-sm'
                    : 'text-warm-taupe hover:text-warm-espresso hover:bg-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live Indicator */}
        <div className="hidden md:flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-feedback-success font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-feedback-success animate-pulse" />
            Aberto até as 22h
          </span>
        </div>
      </div>

      {/* Dynamic Content Panel */}
      <div className="p-6 sm:p-8 lg:p-10 min-h-[460px] bg-warm-canvas/40">
        {/* TAB 1: VISÃO GERAL */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-brand-wine text-[11px] font-bold uppercase tracking-[0.2em]">
                <Sparkles className="h-4 w-4 text-brand-wine" />
                Open Mall Integrado ao Cerrado
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-warm-espresso font-normal leading-tight">
                Um novo horizonte de conveniência, alta moda e natureza em Brasília.
              </h3>

              <p className="text-warm-taupe text-[15px] leading-relaxed font-light">
                Com mais de 130 marcas consagradas, um complexo de 6 salas de cinema VIP com tecnologia Dolby Atmos e o aguardado polo gastronômico Mané Mercado, o Partage Lago Sul redefine os momentos de compras e convivência na capital.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-warm-border">
                <div className="p-4 bg-white border border-warm-border rounded-2xl shadow-warm-sm">
                  <span className="font-display text-2xl font-bold text-warm-espresso">+130</span>
                  <p className="text-[11px] text-warm-taupe mt-0.5 uppercase tracking-wider font-medium">Marcas</p>
                </div>
                <div className="p-4 bg-white border border-warm-border rounded-2xl shadow-warm-sm">
                  <span className="font-display text-2xl font-bold text-brand-wine">6 Salas</span>
                  <p className="text-[11px] text-warm-taupe mt-0.5 uppercase tracking-wider font-medium">Laser VIP</p>
                </div>
                <div className="p-4 bg-white border border-warm-border rounded-2xl shadow-warm-sm">
                  <span className="font-display text-2xl font-bold text-warm-espresso">+24</span>
                  <p className="text-[11px] text-warm-taupe mt-0.5 uppercase tracking-wider font-medium">Gastronomia</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/lojas"
                  className="px-6 py-3 bg-brand-wine text-white hover:bg-brand-wine-dark text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm"
                >
                  Explorar Lojas
                </Link>
                <Link
                  href="/sobre"
                  className="px-6 py-3 bg-white border border-brand-wine/40 text-brand-wine hover:bg-brand-champagne/40 text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all"
                >
                  Conhecer Conceito
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-warm-border shadow-warm-md">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/898f46ef-7135-4cfb-b786-0bd67b58989d_w2560.webp"
                  alt="Partage Lago Sul Shopping Fachada Iluminada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-espresso/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/90 backdrop-blur-md rounded-xl border border-warm-border flex items-center justify-between text-[11.5px] shadow-sm">
                  <span className="text-warm-espresso font-medium">Aeroporto lote 05 · Lago Sul</span>
                  <span className="text-brand-wine font-semibold">Brasília - DF</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOJAS & GRIFES */}
        {activeTab === 'stores' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-wine">
                  Mix Selecionado
                </span>
                <h4 className="font-display text-2xl text-warm-espresso font-normal mt-1">
                  Alta Moda, Joalheria & Lifestyle
                </h4>
              </div>
              <Link
                href="/lojas"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-wine hover:text-brand-wine-dark flex items-center gap-1.5"
              >
                Ver todas as 65+ lojas
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              {STORES_DATA.filter((s) => s.featured).slice(0, 6).map((store) => (
                <Link
                  key={store.id}
                  href={`/lojas#${store.slug}`}
                  className="p-4 bg-white border border-warm-border hover:border-brand-gold rounded-2xl text-center group transition-all shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5"
                >
                  <div className="relative h-12 w-full mb-3">
                    <Image
                      src={store.logoUrl}
                      alt={store.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      sizes="120px"
                    />
                  </div>
                  <span className="text-[12px] font-semibold text-warm-espresso block truncate">
                    {store.name}
                  </span>
                  <span className="text-[10.5px] text-warm-taupe block truncate mt-0.5">
                    {store.category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GASTRONOMIA */}
        {activeTab === 'dining' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-wine">
                  Alta Culinária
                </span>
                <h4 className="font-display text-2xl text-warm-espresso font-normal mt-1">
                  Restaurantes, Lounges & Mané Mercado
                </h4>
              </div>
              <Link
                href="/gastronomia"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-wine hover:text-brand-wine-dark flex items-center gap-1.5"
              >
                Ver cardápio completo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {DINING_DATA.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white border border-warm-border hover:border-brand-gold rounded-2xl flex flex-col justify-between transition-all shadow-warm-sm hover:shadow-warm-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-wine bg-brand-champagne/60 px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                        {item.cuisineType}
                      </span>
                      <span className="text-[10.5px] text-warm-taupe font-medium">{item.floor}</span>
                    </div>
                    <h5 className="font-display text-lg text-warm-espresso font-medium">{item.name}</h5>
                    <p className="text-[13px] text-warm-taupe mt-2 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-warm-border text-[11.5px] text-warm-taupe flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-brand-wine" />
                    <span>{item.openingHours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CINEMA VIP */}
        {activeTab === 'cinema' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-wine text-[11px] font-bold uppercase tracking-[0.2em]">
                <Film className="h-4 w-4 text-brand-wine" />
                Cine Araújo VIP · Dolby Atmos
              </div>
              <h4 className="font-display text-2xl sm:text-3xl text-warm-espresso font-normal">
                6 salas com projeção laser pura e poltronas reclináveis eletrônicas.
              </h4>
              <p className="text-warm-taupe text-[14.5px] leading-relaxed font-light">
                Som tridimensional que se move ao seu redor, sala Max Screen para grandes lançamentos e serviço exclusivo de bar nas salas VIPs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white border border-warm-border rounded-full text-[11px] text-warm-espresso font-medium">
                  Som Dolby Atmos
                </span>
                <span className="px-3 py-1 bg-white border border-warm-border rounded-full text-[11px] text-warm-espresso font-medium">
                  Laser 4K
                </span>
                <span className="px-3 py-1 bg-white border border-warm-border rounded-full text-[11px] text-warm-espresso font-medium">
                  Poltronas Couro VIP
                </span>
                <span className="px-3 py-1 bg-white border border-warm-border rounded-full text-[11px] text-warm-espresso font-medium">
                  Cinema a Céu Aberto
                </span>
              </div>
              <div className="pt-3">
                <Link
                  href="/cinema"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-wine text-white hover:bg-brand-wine-dark text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm"
                >
                  Ver Detalhes do Cinema
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-warm-border shadow-warm-md">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/972e520e-8a1f-4040-bea6-7fcee726ecc0_w2560.webp"
                  alt="Cinema VIP Cine Araújo Partage"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: AGENDA & SHOWS */}
        {activeTab === 'events' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-wine">
                  Cultura & Convivência
                </span>
                <h4 className="font-display text-2xl text-warm-espresso font-normal mt-1">
                  Oficinas, Orquestra & Sunset DJ Sets
                </h4>
              </div>
              <Link
                href="/agenda"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-wine hover:text-brand-wine-dark flex items-center gap-1.5"
              >
                Ver agenda completa
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {EVENTS_DATA.slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  className="p-5 bg-white border border-warm-border hover:border-brand-gold rounded-2xl flex flex-col justify-between transition-all shadow-warm-sm hover:shadow-warm-md"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-wine bg-brand-champagne/60 px-2 py-0.5 rounded-full border border-brand-gold/30">
                      {event.badge}
                    </span>
                    <h5 className="font-display text-lg text-warm-espresso font-medium mt-2">
                      {event.title}
                    </h5>
                    <p className="text-[13px] text-warm-taupe mt-2 line-clamp-2 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-warm-border flex items-center justify-between text-[11.5px]">
                    <span className="text-warm-taupe font-medium">{event.dateLabel}</span>
                    {event.ticketUrl ? (
                      <span className="text-brand-wine font-bold uppercase tracking-wider">
                        Sympla ↗
                      </span>
                    ) : (
                      <span className="text-brand-wine font-semibold">Saiba mais →</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: COMODIDADES */}
        {activeTab === 'amenities' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-wine">
                  Serviços VIP
                </span>
                <h4 className="font-display text-2xl text-warm-espresso font-normal mt-1">
                  Valet, Concierge, Shuttle Aeroporto & Lockers
                </h4>
              </div>
              <Link
                href="/comodidades"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-wine hover:text-brand-wine-dark flex items-center gap-1.5"
              >
                Todas as comodidades
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
              {AMENITIES_DATA.slice(0, 4).map((amenity) => (
                <div
                  key={amenity.id}
                  className="p-5 bg-white border border-warm-border hover:border-brand-gold rounded-2xl flex flex-col justify-between transition-all shadow-warm-sm hover:shadow-warm-md"
                >
                  <div>
                    <h5 className="font-display text-base text-warm-espresso font-medium">
                      {amenity.title}
                    </h5>
                    <p className="text-[12.5px] text-warm-taupe mt-2 line-clamp-2 leading-relaxed font-light">
                      {amenity.shortDescription}
                    </p>
                    {amenity.pricing && (
                      <span className="inline-block mt-2 text-[10.5px] font-bold text-brand-wine">
                        {amenity.pricing}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-warm-border text-[11px] text-warm-taupe font-medium">
                    {amenity.floor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
