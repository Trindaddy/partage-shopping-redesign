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
  MapPin,
  CheckCircle2,
  Volume2,
  Car,
  Ticket,
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
    <div className="w-full max-w-6xl mx-auto rounded-3xl border border-white/10 bg-dark-900/90 shadow-2xl backdrop-blur-2xl overflow-hidden">
      {/* Top Console Bar (Window Header estilo Fora.so / macOS) */}
      <div className="px-6 py-4 border-b border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 bg-white/[0.02]">
        {/* Window Dots & Live Status */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[11px] font-mono tracking-wider text-neutral-400 pl-2">
            partage-experience.console
          </span>
          <span className="inline-flex md:hidden items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
            ● Aberto Agora
          </span>
        </div>

        {/* Console Segmented Control (Pills estilo Fora.so) */}
        <div className="flex items-center gap-1 p-1 bg-black/40 border border-white/10 rounded-full overflow-x-auto max-w-full scrollbar-none">
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
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
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
          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Aberto até 22h
          </span>
        </div>
      </div>

      {/* Dynamic Content Panel */}
      <div className="p-6 sm:p-8 lg:p-10 min-h-[460px]">
        {/* TAB 1: VISÃO GERAL */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-gold-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                <Sparkles className="h-4 w-4" />
                Open Mall Integrado ao Cerrado
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white font-normal leading-tight">
                Um novo horizonte de conveniência, alta moda e natureza em Brasília.
              </h3>

              <p className="text-neutral-300 text-[14.5px] leading-relaxed font-light">
                Com mais de 130 marcas consagradas, um complexo de 6 salas de cinema VIP com tecnologia Dolby Atmos e o aguardado polo gastronômico Mané Mercado, o Partage Lago Sul redefine os momentos de compras e convivência na capital.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
                  <span className="font-display text-2xl font-bold text-white">+130</span>
                  <p className="text-[11px] text-neutral-400 mt-0.5 uppercase tracking-wider">Marcas</p>
                </div>
                <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
                  <span className="font-display text-2xl font-bold text-gold-400">6 Salas</span>
                  <p className="text-[11px] text-neutral-400 mt-0.5 uppercase tracking-wider">Laser VIP</p>
                </div>
                <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl">
                  <span className="font-display text-2xl font-bold text-white">+24</span>
                  <p className="text-[11px] text-neutral-400 mt-0.5 uppercase tracking-wider">Gastronomia</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/lojas"
                  className="px-6 py-3 bg-white text-black hover:bg-gold-400 text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all"
                >
                  Explorar Lojas
                </Link>
                <Link
                  href="/sobre"
                  className="px-6 py-3 bg-white/[0.06] border border-white/15 text-white hover:bg-white/10 text-[12px] font-medium uppercase tracking-[0.16em] rounded-full transition-all"
                >
                  Conhecer Conceito
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/898f46ef-7135-4cfb-b786-0bd67b58989d_w2560.webp"
                  alt="Partage Lago Sul Shopping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-white font-medium">Aeroporto lote 05 · Lago Sul</span>
                  <span className="text-gold-400 font-semibold">Brasília - DF</span>
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
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  Mix Selecionado
                </span>
                <h4 className="font-display text-2xl text-white font-normal mt-1">
                  Alta Moda, Joalheria & Lifestyle
                </h4>
              </div>
              <Link
                href="/lojas"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white hover:text-gold-400 flex items-center gap-1.5"
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
                  className="p-4 bg-white/[0.03] border border-white/10 hover:border-gold-400/50 rounded-2xl text-center group transition-all"
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
                  <span className="text-[11.5px] font-semibold text-white block truncate">
                    {store.name}
                  </span>
                  <span className="text-[10px] text-neutral-400 block truncate mt-0.5">
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
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  Alta Culinária
                </span>
                <h4 className="font-display text-2xl text-white font-normal mt-1">
                  Restaurantes, Lounges & Mané Mercado
                </h4>
              </div>
              <Link
                href="/gastronomia"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white hover:text-gold-400 flex items-center gap-1.5"
              >
                Ver cardápio completo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {DINING_DATA.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white/[0.03] border border-white/10 hover:border-gold-400/50 rounded-2xl flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded-full border border-gold-400/20">
                        {item.cuisineType}
                      </span>
                      <span className="text-[10px] text-neutral-400">{item.floor}</span>
                    </div>
                    <h5 className="font-display text-lg text-white font-medium">{item.name}</h5>
                    <p className="text-[12.5px] text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-neutral-400 flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-gold-400" />
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
              <div className="inline-flex items-center gap-2 text-gold-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                <Film className="h-4 w-4" />
                Cine Araújo VIP · Dolby Atmos
              </div>
              <h4 className="font-display text-2xl sm:text-3xl text-white font-normal">
                6 salas com projeção laser pura e poltronas reclináveis eletrônicas.
              </h4>
              <p className="text-neutral-300 text-[14px] leading-relaxed font-light">
                Som tridimensional que se move ao seu redor, sala Max Screen para grandes lançamentos e serviço exclusivo de bar nas salas VIPs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[11px] text-white">
                  Som Dolby Atmos
                </span>
                <span className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[11px] text-white">
                  Laser 4K
                </span>
                <span className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[11px] text-white">
                  Poltronas Couro VIP
                </span>
                <span className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[11px] text-white">
                  Cinema a Céu Aberto
                </span>
              </div>
              <div className="pt-3">
                <Link
                  href="/cinema"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gold-400 text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all"
                >
                  Ver Detalhes do Cinema
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/972e520e-8a1f-4040-bea6-7fcee726ecc0_w2560.webp"
                  alt="Cinema VIP Cine Araújo"
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
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  Cultura & Convivência
                </span>
                <h4 className="font-display text-2xl text-white font-normal mt-1">
                  Oficinas, Orquestra & Sunset DJ Sets
                </h4>
              </div>
              <Link
                href="/agenda"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white hover:text-gold-400 flex items-center gap-1.5"
              >
                Ver agenda completa
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {EVENTS_DATA.slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  className="p-5 bg-white/[0.03] border border-white/10 hover:border-gold-400/50 rounded-2xl flex flex-col justify-between transition-all"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                      {event.badge}
                    </span>
                    <h5 className="font-display text-lg text-white font-medium mt-1">
                      {event.title}
                    </h5>
                    <p className="text-[12.5px] text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                    <span className="text-neutral-400">{event.dateLabel}</span>
                    {event.ticketUrl ? (
                      <span className="text-gold-400 font-bold uppercase tracking-wider">
                        Sympla ↗
                      </span>
                    ) : (
                      <span className="text-white font-medium">Saiba mais →</span>
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
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  Serviços VIP
                </span>
                <h4 className="font-display text-2xl text-white font-normal mt-1">
                  Valet, Concierge, Shuttle Aeroporto & Lockers
                </h4>
              </div>
              <Link
                href="/comodidades"
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white hover:text-gold-400 flex items-center gap-1.5"
              >
                Todas as comodidades
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
              {AMENITIES_DATA.slice(0, 4).map((amenity) => (
                <div
                  key={amenity.id}
                  className="p-5 bg-white/[0.03] border border-white/10 hover:border-gold-400/50 rounded-2xl flex flex-col justify-between transition-all"
                >
                  <div>
                    <h5 className="font-display text-base text-white font-medium">
                      {amenity.title}
                    </h5>
                    <p className="text-[12px] text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {amenity.shortDescription}
                    </p>
                    {amenity.pricing && (
                      <span className="inline-block mt-2 text-[10.5px] font-bold text-gold-400">
                        {amenity.pricing}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.08] text-[11px] text-neutral-400">
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
