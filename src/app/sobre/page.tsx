import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  TreePine,
  Building2,
  ChevronRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="bg-dark-950 min-h-screen pb-28 text-neutral-100">
      {/* Hero Sobre */}
      <section className="relative bg-black text-white py-16 lg:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <Image
            src="https://partagelagosulshopping.com.br/figma/sobre-banner.png"
            alt="Vista aérea do Partage Lago Sul Shopping integrado ao cerrado"
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
            <span className="text-white">Sobre o Empreendimento</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white max-w-3xl">
            Um open mall onde cada visita é única e cada momento é inesquecível.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
            Localizado estrategicamente no coração da capital do Brasil, o Partage Lago Sul Shopping é um destino de compras, gastronomia, lazer, cultura e entretenimento que combina sofisticação, natureza e experiências.
          </p>

          {/* 3 Números Oficiais Fora.so Bento Pills */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">
                + de 130
              </span>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
                Marcas Nacionais e Internacionais
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-display text-3xl sm:text-4xl font-bold text-gold-400">
                + 06
              </span>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
                Salas de Cinema VIP Dolby Atmos
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">
                + 24
              </span>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
                Restaurantes & Gastronomia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto e Integração com o Cerrado */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">
            Conexão com a Capital
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-white mt-2 tracking-tight">
            Inspirado no ritmo de Brasília e na força do cerrado.
          </h2>

          <div className="mt-8 text-neutral-300 text-base sm:text-lg leading-relaxed font-light space-y-6 text-balance">
            <p>
              Integrado ao cerrado e inspirado no ritmo de Brasília, o empreendimento propõe uma nova forma de viver o shopping: um espaço de convivência moderno, acolhedor e conectado à cidade.
            </p>
            <p>
              Com arquitetura contemporânea, curadoria de marcas, gastronomia e serviços, o Partage Lago Sul Shopping valoriza experiências que vão além das compras. Um lugar para estar, encontrar, descobrir e vivenciar — com um olhar especial para sustentabilidade e para a conexão com a natureza.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria Arquitetônica */}
      <section className="py-20 bg-black border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
              Galeria do Open Mall
            </span>
            <h3 className="font-display text-3xl font-normal text-white mt-2">
              Arquitetura aberta integrada ao verde
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src="https://partagelagosulshopping.com.br/figma/sobre-galeria-1.png"
                alt="Praça interna do Partage Lago Sul"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[12.5px] text-white font-medium">Praça Interna de Convivência</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src="https://partagelagosulshopping.com.br/figma/sobre-galeria-2.png"
                alt="Área externa integrada ao cerrado"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[12.5px] text-white font-medium">Área Externa & Paisagismo</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src="https://partagelagosulshopping.com.br/figma/sobre-galeria-3.png"
                alt="Detalhes arquitetônicos do open mall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[12.5px] text-white font-medium">Detalhes Arquitetônicos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parque Central e Academia */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Bloco 1: Parque Central */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://partagelagosulshopping.com.br/figma/sobre-parques.png"
                  alt="Parque Central do Partage Lago Sul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
                Lazer & Convivência
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-normal leading-tight">
                Parque central, áreas de entretenimento, shows e muito mais.
              </h2>
              <p className="text-neutral-400 text-[15px] leading-relaxed font-light">
                Com um parque central e espaços pensados para o convívio, o shopping é palco para experiências que conectam pessoas por meio do entretenimento, da cultura e do lazer. Shows, eventos, atrações e momentos para todas as idades fazem parte de uma programação que transforma cada visita em uma nova experiência.
              </p>
            </div>
          </div>

          {/* Bloco 2: Academia Integrada */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
                Saúde & Bem-Estar
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-normal leading-tight">
                Academia integrada ao parque nativo existente.
              </h2>
              <p className="text-neutral-400 text-[15px] leading-relaxed font-light">
                Uma experiência que conecta movimento, bem-estar e natureza. Integrada ao parque nativo existente, a academia valoriza o contato com o verde e convida a uma rotina mais leve, ativa e conectada ao ambiente.
              </p>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://partagelagosulshopping.com.br/figma/sobre-academia.png"
                  alt="Academia integrada ao cerrado no Partage Lago Sul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
