'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DINING_DATA } from '@/data/dining';
import {
  Clock,
  ChevronRight,
  Search,
} from 'lucide-react';

const CUISINE_FILTERS = [
  'Todos',
  'Restaurantes & Carnes',
  'Cafés & Docerias',
  'Gelaterias',
  'Bares & Lounges',
  'Saudável & Rápido',
] as const;

export default function GastronomiaPage() {
  const [activeFilter, setActiveFilter] = useState<typeof CUISINE_FILTERS[number]>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDining = DINING_DATA.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cuisineType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === 'Todos') return true;
    if (activeFilter === 'Restaurantes & Carnes') {
      return (
        item.cuisineType.includes('Steakhouse') ||
        item.cuisineType.includes('Restaurante') ||
        item.cuisineType.includes('Mercado')
      );
    }
    if (activeFilter === 'Cafés & Docerias') {
      return (
        item.cuisineType.includes('Café') ||
        item.cuisineType.includes('Chocolataria') ||
        item.cuisineType.includes('Doceria')
      );
    }
    if (activeFilter === 'Gelaterias') {
      return item.cuisineType.includes('Gelato') || item.cuisineType.includes('Gelateria') || item.cuisineType.includes('Milkshake');
    }
    if (activeFilter === 'Bares & Lounges') {
      return item.cuisineType.includes('Bar') || item.cuisineType.includes('Vinhos');
    }
    if (activeFilter === 'Saudável & Rápido') {
      return item.cuisineType.includes('Saladas') || item.cuisineType.includes('Juice') || item.cuisineType.includes('Fast Food');
    }
    return true;
  });

  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Banner Hero Gastronomia */}
      <section className="relative bg-warm-sand text-warm-espresso py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-multiply">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/05da6981-e204-4d1f-abc3-3aa5381261a2_w2560.webp"
            alt="Área Gastronômica do Partage Lago Sul"
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
            <span className="text-warm-espresso">Gastronomia</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso">
            Curadoria Gastronômica
          </h1>
          <p className="mt-4 text-base sm:text-lg text-warm-taupe max-w-2xl font-light leading-relaxed">
            Restaurantes conceituados, mercado gourmet, bistrôs e cafeterias selecionadas com serviço estendido até as 23h.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-[12px]">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-warm-border shadow-warm-sm text-warm-espresso">
              <Clock className="h-3.5 w-3.5 text-brand-wine" />
              <span>Segunda a Sábado: 10h às 23h</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-warm-border shadow-warm-sm text-warm-espresso">
              <Clock className="h-3.5 w-3.5 text-brand-wine" />
              <span>Domingos e Feriados: 12h às 22h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque Mané Mercado & Corrientes 348 */}
      <section className="py-16 border-b border-warm-border bg-warm-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-wine bg-brand-champagne/60 px-2.5 py-1 rounded-full border border-brand-gold/30">
                Hub Gastronômico de Brasília
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-warm-espresso font-normal mt-3">
                Mané Mercado
              </h3>
              <p className="mt-3 text-[14.5px] text-warm-taupe leading-relaxed font-light">
                Uma das maiores referências gastronômicas e de entretenimento da capital chega ao Partage Lago Sul. Dezenas de chefs renomados, drinks autorais e uma atmosfera vibrante ao ar livre.
              </p>
              <div className="mt-6 pt-4 border-t border-warm-border flex items-center justify-between text-[11.5px] text-warm-taupe font-medium">
                <span>Piso Ipê · Inaugura em 20 out 2026</span>
                <span className="font-bold text-brand-wine">Em Breve</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-wine bg-brand-champagne/60 px-2.5 py-1 rounded-full border border-brand-gold/30">
                Steakhouse Argentina
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-warm-espresso font-normal mt-3">
                Corrientes 348
              </h3>
              <p className="mt-3 text-[14.5px] text-warm-taupe leading-relaxed font-light">
                A excelência das carnes nobres argentinas preparadas na tradicional parrilla portenha. Ojo del Bife, Asado de Tira e uma adega climatizada com rótulos premiados.
              </p>
              <div className="mt-6 pt-4 border-t border-warm-border flex items-center justify-between text-[11.5px] text-warm-taupe font-medium">
                <span>Piso Ipê · Aberto diariamente</span>
                <span className="font-bold text-feedback-success">● Em Operação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade e Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-warm-border">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CUISINE_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-brand-wine text-white font-semibold shadow-sm'
                    : 'bg-white text-warm-taupe hover:text-warm-espresso hover:bg-warm-sand border border-warm-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar culinária ou restaurante..."
              className="w-full bg-white text-warm-espresso pl-10 pr-4 py-2.5 text-[13px] rounded-full border border-warm-border focus:outline-none focus:border-brand-wine shadow-warm-sm placeholder:text-warm-taupe/70"
            />
            <Search className="h-4 w-4 text-brand-wine absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDining.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-warm-border hover:border-brand-gold p-6 rounded-2xl shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-wine bg-brand-champagne/60 px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                    {item.cuisineType}
                  </span>
                  <span className="text-[10.5px] text-warm-taupe font-medium">
                    {item.floor}
                  </span>
                </div>

                <div className="relative h-16 w-full mb-4 flex items-center justify-center bg-warm-card rounded-xl p-2 border border-warm-border/50">
                  <Image
                    src={item.logoUrl}
                    alt={item.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="font-display text-xl font-semibold text-warm-espresso group-hover:text-brand-wine transition-colors">
                  {item.name}
                </h3>
                <p className="text-[13.5px] text-warm-taupe mt-2 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-warm-border/60 text-[11.5px] text-warm-taupe">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-brand-wine shrink-0" />
                  <span>{item.openingHours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
