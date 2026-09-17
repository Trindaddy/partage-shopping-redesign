'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EVENTS_DATA } from '@/data/events';
import {
  Calendar,
  MapPin,
  ChevronRight,
  Ticket,
  ArrowRight,
} from 'lucide-react';

export default function AgendaPage() {
  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero da Agenda */}
      <section className="relative bg-warm-sand text-warm-espresso py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-multiply">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/8c753dc3-8bd5-4310-86d3-a1697d981549_w2560.webp"
            alt="Eventos e Cultura no Partage Lago Sul"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-warm-sand via-warm-sand/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-brand-wine mb-4 font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-warm-taupe" />
            <span className="text-warm-espresso">Agenda Partage</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso">
            Agenda & Experiências
          </h1>
          <p className="mt-4 text-base sm:text-lg text-warm-taupe max-w-xl font-light leading-relaxed">
            Oficinas criativas para crianças, experiências imersivas no cerrado, orquestra ao entardecer e sunsets musicais.
          </p>
        </div>
      </section>

      {/* Grid de Eventos Cards Claros da Prancha */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event) => {
            // Extrai dia e mês para o badge da prancha se disponível
            const dateParts = event.dateLabel.split(' ');
            const dayPart = dateParts[0] || '15';
            const monthPart = dateParts[1] ? dateParts[1].substring(0, 3).toUpperCase() : 'OUT';

            return (
              <article
                key={event.id}
                className="bg-white border border-warm-border hover:border-brand-gold rounded-3xl overflow-hidden shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-warm-sand">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    
                    {/* Badge de Categoria */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-warm-border text-brand-wine text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full shadow-sm">
                      {event.badge}
                    </span>

                    {/* Badge de Calendário Fiel à Prancha de Design */}
                    <div className="absolute bottom-3 right-3 bg-brand-wine text-white px-3 py-1.5 rounded-xl text-center shadow-md leading-none">
                      <span className="block font-bold text-[14px]">{dayPart}</span>
                      <span className="block text-[9px] uppercase font-semibold tracking-wider mt-0.5">{monthPart}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-wine uppercase tracking-wider mb-2">
                      <Calendar className="h-3.5 w-3.5 text-brand-wine" />
                      <span>{event.dateLabel}</span>
                    </div>

                    <h3 className="font-display text-2xl font-medium text-warm-espresso group-hover:text-brand-wine transition-colors">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                      {event.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-[12.5px] text-warm-taupe">
                      <MapPin className="h-3.5 w-3.5 text-brand-wine shrink-0" />
                      <span>{event.location}</span>
                    </div>

                    {event.scheduleHours && (
                      <div className="mt-4 pt-4 border-t border-warm-border/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-warm-taupe block mb-1.5">
                          Horários das Turmas:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {event.scheduleHours.map((h) => (
                            <span
                              key={h}
                              className="text-[11px] font-medium bg-warm-card border border-warm-border px-2.5 py-1 rounded-full text-warm-espresso"
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-brand-wine text-white hover:bg-brand-wine-dark text-[11.5px] font-bold uppercase tracking-[0.16em] rounded-full transition-colors shadow-sm"
                    >
                      <Ticket className="h-4 w-4" />
                      Reservar Vaga no Sympla
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-white hover:bg-brand-champagne/40 text-brand-wine border border-brand-wine/40 text-[11.5px] font-semibold uppercase tracking-[0.16em] rounded-full transition-colors"
                    >
                      Saiba Mais
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
