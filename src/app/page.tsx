import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MallConsole } from '@/components/MallConsole';
import { FaqAccordion } from '@/components/FaqAccordion';
import { STORES_DATA } from '@/data/stores';
import { DINING_DATA } from '@/data/dining';
import { EVENTS_DATA } from '@/data/events';
import { AMENITIES_DATA } from '@/data/amenities';
import {
  ArrowRight,
  Sparkles,
  Navigation,
  Film,
  Utensils,
  ShoppingBag,
} from 'lucide-react';

export default function HomePage() {
  const featuredStores = STORES_DATA.filter((s) => s.featured).slice(0, 10);
  const featuredDining = DINING_DATA.slice(0, 6);
  const featuredEvents = EVENTS_DATA.slice(0, 3);
  const featuredAmenities = AMENITIES_DATA.slice(0, 4);

  return (
    <div className="flex flex-col bg-warm-canvas text-warm-espresso overflow-x-hidden">
      {/* HERO SECTION — Inspirado na Fora.so com estética clara e calorosa */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Glow Superior Suave em Tom Champagne */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-gold/[0.14] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Pill Badge Superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[11.5px] font-semibold tracking-[0.16em] uppercase mb-8 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-wine" />
            <span>Open Mall de Alto Padrão em Brasília · Lago Sul</span>
          </div>

          {/* Headline Monumental Playfair Display */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-warm-espresso leading-[1.08] max-w-5xl mx-auto text-balance">
            Um lugar para estar. <br />
            <span className="italic font-light text-brand-wine">
              Singular, moderno e sempre à frente.
            </span>
          </h1>

          {/* Subtítulo com Tipografia Fina e Amplo Respiro */}
          <p className="mt-8 text-base sm:text-xl text-warm-taupe leading-relaxed font-light max-w-2xl mx-auto text-balance">
            O Partage Lago Sul integra alta moda, gastronomia autoral e lazer ao ritmo de Brasília e à natureza nativa do cerrado.
          </p>

          {/* Ações em Pílula (Padrão Fora.so com Nova Paleta) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/lojas"
              className="px-8 py-3.5 bg-brand-wine text-white hover:bg-brand-wine-dark text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-sm hover:shadow-wine-glow"
            >
              Explorar Lojas
            </Link>

            <Link
              href="/gastronomia"
              className="px-8 py-3.5 bg-white hover:bg-brand-champagne/40 text-brand-wine border border-brand-wine/40 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-sm"
            >
              Gastronomia
            </Link>

            <a
              href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-warm-taupe hover:text-brand-wine text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors"
            >
              <Navigation className="h-3.5 w-3.5 text-brand-wine" />
              Como Chegar
            </a>
          </div>

          {/* O CONSOLE INTERATIVO DO SHOPPING */}
          <div className="mt-16 sm:mt-20">
            <MallConsole />
          </div>
        </div>
      </section>

      {/* INTRO EDITORIAL MANIFESTO (PADRÃO FORA.SO) */}
      <section className="py-24 bg-warm-sand border-y border-warm-border relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-wine">
            Conceito & Essência
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-warm-espresso leading-snug tracking-tight font-display text-balance">
            O Partage Lago Sul é o cartão de visitas de um novo centro de convivência em Brasília.
          </h2>

          <p className="text-lg sm:text-2xl font-light text-warm-taupe leading-relaxed text-balance">
            Equilíbrio, bem-estar e a liberdade de um espaço ao ar livre. Um open mall onde cada visita é única e cada momento é inesquecível, com arquitetura contemporânea e um olhar especial para a sustentabilidade do cerrado.
          </p>

          <div className="pt-3 flex justify-center">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-wine hover:text-brand-wine-dark transition-colors"
            >
              Conheça a história e os pilares
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE 1: CURADORIA DE MODA & GRIFES */}
      <section className="py-28 bg-warm-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[10.5px] font-bold tracking-[0.18em] uppercase">
                <ShoppingBag className="h-3.5 w-3.5" />
                Curadoria de Moda & Estilo
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-normal text-warm-espresso leading-tight">
                Mais de 130 marcas selecionadas para a sua rotina.
              </h2>

              <p className="text-warm-taupe text-[15px] font-light leading-relaxed">
                Do design autoral brasileiro (Animale, Mixed, Haight, Misci, Aramis) à joalheria reluzente (Swarovski, Vivara) e artigos culinários consagrados (Le Creuset). Uma grade de marcas pensada para surpreender.
              </p>

              {/* Grid com Logos em Cards Claros */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {featuredStores.slice(0, 6).map((store) => (
                  <Link
                    key={store.id}
                    href={`/lojas#${store.slug}`}
                    className="p-4 rounded-2xl bg-white border border-warm-border hover:border-brand-gold text-center group transition-all shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5"
                  >
                    <div className="relative h-10 w-full mb-2">
                      <Image
                        src={store.logoUrl}
                        alt={store.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                        sizes="100px"
                      />
                    </div>
                    <span className="text-[11.5px] font-semibold text-warm-espresso block truncate">
                      {store.name}
                    </span>
                    <span className="text-[10px] text-warm-taupe block truncate mt-0.5">
                      {store.floor}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/lojas"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-brand-wine text-white hover:bg-brand-wine-dark text-[11.5px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm"
                >
                  Ver Todas as Lojas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-warm-border shadow-warm-lg">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/eb622f01-c9e9-44aa-be0d-8bae7d810d89_w2560.webp"
                  alt="Lojas do Partage Lago Sul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-espresso/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-warm-border flex items-center justify-between text-[12px] shadow-sm">
                  <span className="text-warm-espresso font-medium">Dois pisos integrados: Ipê & Cerrado</span>
                  <span className="text-brand-wine font-semibold">10h às 22h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: GASTRONOMIA & MANÉ MERCADO */}
      <section className="py-28 bg-warm-sand border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-warm-border shadow-warm-lg">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/d52d9d92-f09f-428e-bb91-68801f49a2d2_w2560.webp"
                  alt="Gastronomia no Partage Lago Sul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-espresso/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-warm-border flex items-center justify-between text-[12px] shadow-sm">
                  <span className="text-warm-espresso font-medium">Polo Gastronômico Mané Mercado</span>
                  <span className="text-brand-wine font-semibold">Serviço até 23h</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[10.5px] font-bold tracking-[0.18em] uppercase">
                <Utensils className="h-3.5 w-3.5" />
                Gastronomia de Alto Padrão
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-normal text-warm-espresso leading-tight">
                Sabores marcantes para todos os momentos do dia.
              </h2>

              <p className="text-warm-taupe text-[15px] font-light leading-relaxed">
                Da tradicional parrilla argentina do <strong>Corrientes 348</strong> ao agito gourmet do <strong>Mané Mercado</strong>, aos chopes artesanais do <strong>Living Heineken</strong> e ao frescor saudável do <strong>Olea</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-warm-sm">
                  <span className="text-[10px] uppercase font-bold text-brand-wine">Steakhouse</span>
                  <h4 className="font-display text-base text-warm-espresso font-medium mt-1">Corrientes 348</h4>
                  <p className="text-[12px] text-warm-taupe mt-1 font-light">Carnes nobres ao estilo portenho</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-warm-sm">
                  <span className="text-[10px] uppercase font-bold text-brand-wine">Hub Gourmet</span>
                  <h4 className="font-display text-base text-warm-espresso font-medium mt-1">Mané Mercado</h4>
                  <p className="text-[12px] text-warm-taupe mt-1 font-light">Chefs renomados e drinks autorais</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/gastronomia"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-brand-wine text-white hover:bg-brand-wine-dark text-[11.5px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm"
                >
                  Conhecer Restaurantes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: CINEMA VIP CINE ARAÚJO */}
      <section className="py-28 bg-warm-canvas border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-white border border-warm-border shadow-warm-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[10.5px] font-bold tracking-[0.18em] uppercase">
                  <Film className="h-3.5 w-3.5" />
                  Complexo Cine Araújo VIP
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-normal text-warm-espresso leading-tight">
                  A imersão definitiva em áudio e imagem em Brasília.
                </h2>

                <p className="text-warm-taupe text-[15px] font-light leading-relaxed">
                  Equipado com 6 salas com projeção a laser de vanguarda, som tridimensional Dolby Atmos, poltronas em couro reclináveis eletronicamente, a imponência da sala Max Screen e a magia das noites de cinema a céu aberto.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-warm-card border border-warm-border text-[11.5px] text-warm-espresso font-medium">
                    Som Dolby Atmos 360°
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-warm-card border border-warm-border text-[11.5px] text-warm-espresso font-medium">
                    Projeção Laser Pura
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-warm-card border border-warm-border text-[11.5px] text-warm-espresso font-medium">
                    Poltronas VIP Reclináveis
                  </span>
                </div>

                <div className="pt-4">
                  <Link
                    href="/cinema"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm"
                  >
                    Ver Programação de Cinema
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-warm-border shadow-warm-md">
                  <Image
                    src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/972e520e-8a1f-4040-bea6-7fcee726ecc0_w2560.webp"
                    alt="Cinema VIP Partage Lago Sul"
                    fill
                    className="object-cover"
                    sizes="450px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ (ACCORDION CATEGORIZADO FORA.SO) */}
      <FaqAccordion />

      {/* BOTTOM CTA CARD — ESTILO FORA.SO */}
      <section className="py-24 bg-warm-sand border-t border-warm-border relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-10 sm:p-16 rounded-3xl bg-white border border-warm-border shadow-warm-lg">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-wine">
              Viva o Partage Lago Sul
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-normal text-warm-espresso mt-3 leading-tight text-balance">
              Sua nova experiência no Lago Sul começa agora.
            </h2>

            <p className="mt-4 text-warm-taupe text-base sm:text-lg font-light max-w-xl mx-auto">
              Lojas abertas de segunda a sábado das 10h às 22h e domingos das 14h às 20h. Gastronomia até as 23h.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-brand-wine text-white hover:bg-brand-wine-dark text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-sm"
              >
                Traçar Rota no Waze
              </a>

              <Link
                href="/lojas"
                className="px-8 py-3.5 bg-white hover:bg-brand-champagne/40 text-brand-wine border border-brand-wine/40 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-sm"
              >
                Ver Todas as Lojas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
