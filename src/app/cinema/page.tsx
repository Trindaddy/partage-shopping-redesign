import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Volume2,
  Tv,
  Armchair,
  SunMedium,
  MapPin,
  ChevronRight,
  Ticket,
} from 'lucide-react';

export default function CinemaPage() {
  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero Cinema VIP */}
      <section className="relative bg-warm-sand text-warm-espresso py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-multiply">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/972e520e-8a1f-4040-bea6-7fcee726ecc0_w2560.webp"
            alt="Salas VIP Cine Araújo Partage Lago Sul"
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
            <span className="text-warm-espresso">Cinema VIP</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-brand-wine" />
            Cine Araújo · Piso Cerrado
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso max-w-3xl">
            Uma experiência cinematográfica VIP para você.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-warm-taupe max-w-2xl font-light leading-relaxed">
            O Cine Araújo chega com um complexo de 6 salas equipadas com som imersivo Dolby Atmos, projeção a laser de vanguarda e poltronas reclináveis de padrão superior.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.cinearaujo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-wine text-white hover:bg-brand-wine-dark text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-sm hover:shadow-wine-glow"
            >
              <Ticket className="h-4 w-4" />
              Ver Programação & Ingressos
            </a>
            <div className="flex items-center gap-2 bg-white px-5 py-3.5 rounded-full border border-warm-border text-[12px] text-warm-espresso shadow-warm-sm">
              <MapPin className="h-4 w-4 text-brand-wine" />
              <span>Localização: Piso Cerrado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Tecnológicos do Cinema VIP */}
      <section className="py-24 bg-warm-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-wine">
              Tecnologia de Vanguarda
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-warm-espresso font-normal tracking-tight mt-2">
              Cada detalhe pensado para a imersão sensorial completa.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <Volume2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Som Dolby Atmos
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                Mais de 64 canais de áudio independentes distribuídos pelas paredes e teto, movendo o som ao seu redor com precisão cirúrgica.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <Tv className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Projeção Laser 4K
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                Brilho inigualável, contraste profundo e gama de cores DCI-P3 que revelam cada detalhe planejado pelo diretor.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <Armchair className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Poltronas VIP Reclináveis
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                Assentos de couro legítimo com comandos elétricos individuais de encosto e pés, mesa de apoio e entradas USB.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <SunMedium className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Cinema ao Ar Livre
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                Uma das marcas registradas do conceito open mall do Partage: sessões especiais sob o céu estrelado de Brasília.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque Sala Max Screen */}
      <section className="py-20 border-t border-warm-border bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-white border border-warm-border shadow-warm-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-wine">
                Grandeza Visual
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-normal text-warm-espresso mt-2">
                Sala Max Screen: Telas gigantescas que ocupam todo o campo de visão.
              </h3>
              <p className="mt-4 text-[15px] text-warm-taupe font-light leading-relaxed max-w-2xl">
                Desenvolvida para os maiores lançamentos mundiais, a sala Max Screen combina geometria de tela otimizada com a maior acústica da capital.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://www.cinearaujo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 px-6 bg-brand-wine text-white hover:bg-brand-wine-dark text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm"
              >
                Comprar Ingressos
              </a>
              <Link
                href="/comodidades"
                className="w-full text-center py-3.5 px-6 bg-white hover:bg-brand-champagne/40 text-brand-wine border border-brand-wine/40 text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all"
              >
                Serviço de Valet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
