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
  MapPin,
  Clock,
  Sparkles,
  Navigation,
  Film,
  Utensils,
  ShoppingBag,
  Compass,
  Check,
  ChevronRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

export default function HomePage() {
  const featuredStores = STORES_DATA.filter((s) => s.featured).slice(0, 10);
  const featuredDining = DINING_DATA.slice(0, 6);
  const featuredEvents = EVENTS_DATA.slice(0, 3);
  const featuredAmenities = AMENITIES_DATA.slice(0, 4);

  return (
    <div className="flex flex-col bg-dark-950 text-neutral-100 overflow-x-hidden">
      {/* HERO SECTION — Fiel à estrutura e elegância da Fora.so */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden">
        {/* Glow de Iluminação Superior estilo Fora.so */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gold-500/[0.12] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Pill Badge Superior com Brilho */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gold-400 text-[11.5px] font-medium tracking-[0.16em] uppercase mb-8 backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            <span>Open Mall de Alto Padrão em Brasília · Lago Sul</span>
          </div>

          {/* Headline Monumental Fora.so */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-white leading-[1.05] max-w-5xl mx-auto text-balance">
            Um lugar para estar. <br />
            <span className="italic font-light text-neutral-300">
              Singular, moderno e sempre à frente.
            </span>
          </h1>

          {/* Subtítulo com Tipografia Fina e Amplo Respiro */}
          <p className="mt-8 text-base sm:text-xl text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto text-balance">
            O Partage Lago Sul integra alta moda, gastronomia autoral e lazer ao ritmo de Brasília e à natureza nativa do cerrado.
          </p>

          {/* Ações em Pílula (Padrão Fora.so) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/lojas"
              className="px-8 py-3.5 bg-white text-black hover:bg-neutral-200 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-lg hover:shadow-fora-glow"
            >
              Explorar Lojas
            </Link>

            <Link
              href="/gastronomia"
              className="px-8 py-3.5 bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 text-[12px] font-medium uppercase tracking-[0.18em] rounded-full transition-all backdrop-blur-md"
            >
              Gastronomia
            </Link>

            <a
              href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-neutral-400 hover:text-gold-400 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors"
            >
              <Navigation className="h-3.5 w-3.5" />
              Como Chegar
            </a>
          </div>

          {/* O CONSOLE INTERATIVO DO SHOPPING (ASSINATURA DA FORA.SO) */}
          <div className="mt-16 sm:mt-24">
            <MallConsole />
          </div>
        </div>
      </section>

      {/* INTRO EDITORIAL MANIFESTO (PADRÃO FORA.SO) */}
      <section className="py-28 bg-black border-y border-white/[0.06] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">
            Conceito & Essência
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white leading-snug tracking-tight font-display text-balance">
            O Partage Lago Sul é o cartão de visitas de um novo centro de convivência em Brasília.
          </h2>

          <p className="text-lg sm:text-2xl font-light text-neutral-400 leading-relaxed text-balance">
            Equilíbrio, bem-estar e a liberdade de um espaço ao ar livre. Um open mall onde cada visita é única e cada momento é inesquecível, com arquitetura contemporânea e um olhar especial para a sustentabilidade do cerrado.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-400 hover:text-white transition-colors"
            >
              Conheça a história e os pilares
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE 1: CURADORIA DE MODA & GRIFES (BENTO STORYTELLING FORA.SO) */}
      <section className="py-28 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                <ShoppingBag className="h-3.5 w-3.5" />
                Curadoria de Moda & Estilo
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-normal text-white leading-tight">
                Mais de 130 marcas selecionadas para a sua rotina.
              </h2>

              <p className="text-neutral-400 text-[15px] font-light leading-relaxed">
                Do design autoral brasileiro (Animale, Mixed, Haight, Misci, Aramis) à joalheria reluzente (Swarovski, Vivara) e artigos culinários consagrados (Le Creuset). Uma grade de marcas pensada para surpreender.
              </p>

              {/* Grid com Logos em Vidro Escuro */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {featuredStores.slice(0, 6).map((store) => (
                  <Link
                    key={store.id}
                    href={`/lojas#${store.slug}`}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-400/40 text-center group transition-all"
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
                    <span className="text-[11px] font-semibold text-white block truncate">
                      {store.name}
                    </span>
                    <span className="text-[9.5px] text-neutral-500 block truncate mt-0.5">
                      {store.floor}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/lojas"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black hover:bg-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all"
                >
                  Ver Todas as Lojas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/eb622f01-c9e9-44aa-be0d-8bae7d810d89_w2560.webp"
                  alt="Lojas do Partage Lago Sul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[12px]">
                  <span className="text-white font-medium">Dois pisos integrados: Ipê & Cerrado</span>
                  <span className="text-gold-400 font-semibold">10h às 22h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: GASTRONOMIA & MANÉ MERCADO */}
      <section className="py-28 bg-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/d52d9d92-f09f-428e-bb91-68801f49a2d2_w2560.webp"
                  alt="Gastronomia no Partage Lago Sul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[12px]">
                  <span className="text-white font-medium">Polo Gastronômico Mané Mercado</span>
                  <span className="text-gold-400 font-semibold">Serviço até 23h</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                <Utensils className="h-3.5 w-3.5" />
                Gastronomia de Alto Padrão
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-normal text-white leading-tight">
                Sabores marcantes para todos os momentos do dia.
              </h2>

              <p className="text-neutral-400 text-[15px] font-light leading-relaxed">
                Da tradicional parrilla argentina do <strong>Corrientes 348</strong> ao agito gourmet do <strong>Mané Mercado</strong>, aos chopes artesanais do <strong>Living Heineken</strong> e ao frescor saudável do <strong>Olea</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-gold-400">Steakhouse</span>
                  <h4 className="font-display text-base text-white font-medium mt-1">Corrientes 348</h4>
                  <p className="text-[12px] text-neutral-400 mt-1">Carnes nobres ao estilo portenho</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-gold-400">Hub Gourmet</span>
                  <h4 className="font-display text-base text-white font-medium mt-1">Mané Mercado</h4>
                  <p className="text-[12px] text-neutral-400 mt-1">Chefs renomados e drinks autorais</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/gastronomia"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black hover:bg-gold-400 text-[11.5px] font-semibold uppercase tracking-[0.16em] rounded-full transition-all"
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
      <section className="py-28 bg-dark-950 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                  <Film className="h-3.5 w-3.5" />
                  Complexo Cine Araújo VIP
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-normal text-white leading-tight">
                  A imersão definitiva em áudio e imagem em Brasília.
                </h2>

                <p className="text-neutral-300 text-[15px] font-light leading-relaxed">
                  Equipado com 6 salas com projeção a laser de vanguarda, som tridimensional Dolby Atmos, poltronas em couro reclináveis eletronicamente, a imponência da sala Max Screen e a magia das noites de cinema a céu aberto.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11.5px] text-white">
                    Som Dolby Atmos 360°
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11.5px] text-white">
                    Projeção Laser Pura
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11.5px] text-white">
                    Poltronas VIP Reclináveis
                  </span>
                </div>

                <div className="pt-4">
                  <Link
                    href="/cinema"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-400 hover:bg-gold-500 text-black text-[12px] font-bold uppercase tracking-[0.16em] rounded-full transition-all"
                  >
                    Ver Programação de Cinema
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
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
      <section className="py-24 bg-black border-t border-white/[0.06] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 shadow-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">
              Viva o Partage Lago Sul
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-normal text-white mt-3 leading-tight text-balance">
              Sua nova experiência no Lago Sul começa agora.
            </h2>

            <p className="mt-4 text-neutral-400 text-base sm:text-lg font-light max-w-xl mx-auto">
              Lojas abertas de segunda a sábado das 10h às 22h e domingos das 14h às 20h. Gastronomia até as 23h.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white text-black hover:bg-gold-400 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-lg"
              >
                Traçar Rota no Waze
              </a>

              <Link
                href="/lojas"
                className="px-8 py-3.5 bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 text-[12px] font-medium uppercase tracking-[0.18em] rounded-full transition-all"
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
