import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
} from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero Sobre */}
      <section className="relative bg-warm-sand text-warm-espresso py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-multiply">
          <Image
            src="https://partagelagosulshopping.com.br/figma/sobre-banner.png"
            alt="Vista aérea do Partage Lago Sul Shopping integrado ao cerrado"
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
            <span className="text-warm-espresso">Sobre o Empreendimento</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso max-w-3xl">
            Um open mall onde cada visita é única e cada momento é inesquecível.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-warm-taupe max-w-2xl font-light leading-relaxed">
            Localizado estrategicamente no coração da capital do Brasil, o Partage Lago Sul Shopping é um destino de compras, gastronomia, lazer, cultura e entretenimento que combina sofisticação, natureza e experiências.
          </p>

          {/* 3 Números Oficiais Fora.so Bento Cards Claros */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-warm-border max-w-3xl">
            <div className="p-6 rounded-2xl bg-white border border-warm-border shadow-warm-sm">
              <span className="font-display text-3xl sm:text-4xl font-bold text-warm-espresso">
                + de 130
              </span>
              <p className="text-[11px] uppercase tracking-wider text-warm-taupe mt-1 font-medium">
                Marcas Nacionais e Internacionais
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-warm-border shadow-warm-sm">
              <span className="font-display text-3xl sm:text-4xl font-bold text-brand-wine">
                + 06
              </span>
              <p className="text-[11px] uppercase tracking-wider text-warm-taupe mt-1 font-medium">
                Salas de Cinema VIP Dolby Atmos
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-warm-border shadow-warm-sm">
              <span className="font-display text-3xl sm:text-4xl font-bold text-warm-espresso">
                + 24
              </span>
              <p className="text-[11px] uppercase tracking-wider text-warm-taupe mt-1 font-medium">
                Restaurantes & Gastronomia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto e Integração com o Cerrado */}
      <section className="py-24 bg-warm-canvas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-wine">
            Conexão com a Capital
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-warm-espresso mt-3 tracking-tight">
            Inspirado no ritmo de Brasília e na força do cerrado.
          </h2>

          <div className="mt-8 text-warm-taupe text-base sm:text-lg leading-relaxed font-light space-y-6 text-balance">
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
      <section className="py-20 bg-warm-sand border-y border-warm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-wine">
              Galeria do Open Mall
            </span>
            <h3 className="font-display text-3xl font-normal text-warm-espresso mt-2">
              Arquitetura aberta integrada ao verde
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-warm-border shadow-warm-sm group bg-white">
              <Image
                src="https://partagelagosulshopping.com.br/figma/sobre-galeria-1.png"
                alt="Praça interna do Partage Lago Sul"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-espresso/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[13px] text-white font-medium">Praça Interna de Convivência</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-warm-border shadow-warm-sm group bg-white">
              <Image
                src="https://partagelagosulshopping.com.br/figma/sobre-galeria-2.png"
                alt="Área externa integrada ao cerrado"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-espresso/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[13px] text-white font-medium">Área Externa & Paisagismo</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-warm-border shadow-warm-sm group bg-white">
              <Image
                src="https://partagelagosulshopping.com.br/figma/sobre-galeria-3.png"
                alt="Detalhes arquitetônicos do open mall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-espresso/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[13px] text-white font-medium">Detalhes Arquitetônicos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parque Central e Academia */}
      <section className="py-24 bg-warm-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Bloco 1: Parque Central */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-warm-border shadow-warm-md">
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-wine">
                Lazer & Convivência
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-warm-espresso font-normal leading-tight">
                Parque central, áreas de entretenimento, shows e muito mais.
              </h2>
              <p className="text-warm-taupe text-[15px] leading-relaxed font-light">
                Com um parque central e espaços pensados para o convívio, o shopping é palco para experiências que conectam pessoas por meio do entretenimento, da cultura e do lazer. Shows, eventos, atrações e momentos para todas as idades fazem parte de uma programação que transforma cada visita em uma nova experiência.
              </p>
            </div>
          </div>

          {/* Bloco 2: Academia Integrada */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-wine">
                Saúde & Bem-Estar
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-warm-espresso font-normal leading-tight">
                Academia integrada ao parque nativo existente.
              </h2>
              <p className="text-warm-taupe text-[15px] leading-relaxed font-light">
                Uma experiência que conecta movimento, bem-estar e natureza. Integrada ao parque nativo existente, a academia valoriza o contato com o verde e convida a uma rotina mais leve, ativa e conectada ao ambiente.
              </p>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-warm-border shadow-warm-md">
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
