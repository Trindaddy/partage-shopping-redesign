'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EVENTS_DATA } from '@/data/events';
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Ticket,
  ArrowRight,
} from 'lucide-react';

export default function AgendaPage() {
  return (
    <div className="bg-dark-950 min-h-screen pb-28 text-neutral-100">
      {/* Hero da Agenda */}
      <section className="relative bg-black text-white py-16 lg:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/8c753dc3-8bd5-4310-86d3-a1697d981549_w2560.webp"
            alt="Eventos e Cultura no Partage Lago Sul"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-gold-400 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-neutral-500" />
            <span className="text-white">Agenda Partage</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white">
            Agenda & Experiências
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl font-light leading-relaxed">
            Oficinas criativas para crianças, experiências imersivas no cerrado, orquestra ao entardecer e sunsets musicais.
          </p>
        </div>
      </section>

      {/* Grid de Eventos Fora.so Dark Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event) => (
            <article
              key={event.id}
              className="bg-white/[0.02] border border-white/10 hover:border-gold-400/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-fora-glow transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/15 text-gold-400 text-[9.5px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full shadow-sm">
                    {event.badge}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 uppercase tracking-wider mb-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{event.dateLabel}</span>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-white group-hover:text-gold-400 transition-colors">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-[13.5px] text-neutral-400 leading-relaxed font-light">
                    {event.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-[12px] text-neutral-500">
                    <MapPin className="h-3.5 w-3.5 text-gold-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>

                  {event.scheduleHours && (
                    <div className="mt-4 pt-4 border-t border-white/[0.06]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-1.5">
                        Horários das Turmas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.scheduleHours.map((h) => (
                          <span
                            key={h}
                            className="text-[11px] font-medium bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full text-neutral-300"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                {event.ticketUrl ? (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-gold-400 text-[11.5px] font-bold uppercase tracking-[0.16em] rounded-full transition-colors shadow-sm"
                  >
                    <Ticket className="h-4 w-4" />
                    Reservar Vaga no Sympla
                  </a>
                ) : (
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 text-[11.5px] font-semibold uppercase tracking-[0.16em] rounded-full transition-colors"
                  >
                    Saiba Mais
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
