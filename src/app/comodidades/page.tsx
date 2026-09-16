'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AMENITIES_DATA } from '@/data/amenities';
import {
  Compass,
  Car,
  Baby,
  HeartHandshake,
  Bus,
  Lock,
  Search,
  Clock,
  MapPin,
  ChevronRight,
} from 'lucide-react';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="h-5 w-5" />,
  Car: <Car className="h-5 w-5" />,
  Baby: <Baby className="h-5 w-5" />,
  HeartHandshake: <HeartHandshake className="h-5 w-5" />,
  Bus: <Bus className="h-5 w-5" />,
  Lock: <Lock className="h-5 w-5" />,
  Search: <Search className="h-5 w-5" />,
};

export default function ComodidadesPage() {
  return (
    <div className="bg-dark-950 min-h-screen pb-28 text-neutral-100">
      {/* Hero das Comodidades */}
      <section className="relative bg-black text-white py-16 lg:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/6fbd0c72-948d-4d4e-b64d-71c8452408bd_w2560.webp"
            alt="Comodidades e Serviços do Partage Lago Sul"
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
            <span className="text-white">Comodidades</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white">
            Serviços & Comodidades
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
            Uma experiência completa, acessível e acolhedora. Concierge dedicado, manobrista valet, shuttle gratuito para o aeroporto, empréstimos de conforto e lockers inteligentes.
          </p>
        </div>
      </section>

      {/* Grid de Comodidades Fora.so Dark Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES_DATA.map((amenity) => (
            <div
              key={amenity.id}
              id={amenity.slug}
              className="bg-white/[0.02] border border-white/10 hover:border-gold-400/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-fora-glow transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <Image
                    src={amenity.imageUrl}
                    alt={amenity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 h-10 w-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-gold-400 flex items-center justify-center">
                    {ICONS_MAP[amenity.iconName] || <Compass className="h-5 w-5" />}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium text-white">
                    {amenity.title}
                  </h3>

                  <p className="mt-3 text-[14px] text-neutral-400 leading-relaxed font-light">
                    {amenity.fullDescription}
                  </p>

                  {amenity.pricing && (
                    <div className="mt-4 p-4 bg-gold-400/10 border border-gold-400/20 rounded-2xl">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-gold-400 block mb-1">
                        Valores Oficiais Valet:
                      </span>
                      <p className="text-[13px] text-neutral-200 font-medium leading-snug">
                        {amenity.pricing}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4">
                <div className="space-y-2 pt-4 text-[12px] text-neutral-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-gold-400 shrink-0" />
                    <span>Localização: <strong className="text-white">{amenity.floor}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-gold-400 shrink-0" />
                    <span>{amenity.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
