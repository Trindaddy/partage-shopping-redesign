import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Film,
  Sparkles,
  Volume2,
  Tv,
  Armchair,
  SunMedium,
  Clock,
  MapPin,
  ChevronRight,
  Ticket,
} from 'lucide-react';

export default function CinemaPage() {
  return (
    <div className="bg-dark-950 min-h-screen pb-28 text-neutral-100">
      {/* Hero Cinema VIP */}
      <section className="relative bg-black text-white py-16 lg:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/972e520e-8a1f-4040-bea6-7fcee726ecc0_w2560.webp"
            alt="Salas VIP Cine Araújo Partage Lago Sul"
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
            <span className="text-white">Cinema VIP</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Cine Araújo · Piso Cerrado
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white max-w-3xl">
            Uma experiência cinematográfica VIP para você.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
            O Cine Araújo chega com um complexo de 6 salas equipadas com som imersivo Dolby Atmos, projeção a laser de vanguarda e poltronas reclináveis de padrão superior.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.cinearaujo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black hover:bg-gold-400 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-lg"
            >
              <Ticket className="h-4 w-4" />
              Ver Programação & Ingressos
            </a>
            <div className="flex items-center gap-2 bg-white/[0.05] px-5 py-3.5 rounded-full border border-white/10 text-[12px] text-neutral-300">
              <MapPin className="h-4 w-4 text-gold-400" />
              <span>Localização: Piso Cerrado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Tecnológicos do Cinema VIP */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">
              Tecnologia de Vanguarda
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-normal tracking-tight mt-2">
              Cada detalhe pensado para a imersão sensorial completa.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 transition-all">
              <div className="h-12 w-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center mb-6">
                <Volume2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Som Dolby Atmos
              </h3>
              <p className="mt-3 text-[13.5px] text-neutral-400 leading-relaxed font-light">
                Mais de 64 canais de áudio independentes distribuídos pelas paredes e teto, movendo o som ao seu redor com precisão cirúrgica.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 transition-all">
              <div className="h-12 w-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center mb-6">
                <Tv className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Projeção Laser 4K
              </h3>
              <p className="mt-3 text-[13.5px] text-neutral-400 leading-relaxed font-light">
                Brilho inigualável, contraste profundo com pretos reais e gama de cores DCI-P3 que revelam cada detalhe planejado pelo diretor.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 transition-all">
              <div className="h-12 w-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center mb-6">
                <Armchair className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Poltronas VIP Reclináveis
              </h3>
              <p className="mt-3 text-[13.5px] text-neutral-400 leading-relaxed font-light">
                Assentos de couro legítimo com comandos elétricos individuais de encosto e pés, mesa de apoio e entradas USB.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 transition-all">
              <div className="h-12 w-12 rounded-full bg-gold-400/10 text-gold-400 flex items-center justify-center mb-6">
                <SunMedium className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Cinema ao Ar Livre
              </h3>
              <p className="mt-3 text-[13.5px] text-neutral-400 leading-relaxed font-light">
                Uma das marcas registradas do conceito open mall do Partage: sessões especiais sob o céu estrelado de Brasília.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque Sala Max Screen */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">
                Grandeza Visual
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-normal text-white mt-2">
                Sala Max Screen: Telas gigantescas que ocupam todo o campo de visão.
              </h3>
              <p className="mt-4 text-[14.5px] text-neutral-400 font-light leading-relaxed max-w-2xl">
                Desenvolvida para os maiores lançamentos mundiais, a sala Max Screen combina geometria de tela otimizada com a maior acústica da capital.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://www.cinearaujo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 px-6 bg-white text-black hover:bg-gold-400 text-[12px] font-bold uppercase tracking-[0.16em] rounded-full transition-all"
              >
                Comprar Ingressos
              </a>
              <Link
                href="/comodidades"
                className="w-full text-center py-3.5 px-6 bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 text-[12px] font-medium uppercase tracking-[0.16em] rounded-full transition-all"
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
