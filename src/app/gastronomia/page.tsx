'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DINING_DATA } from '@/data/dining';
import {
  Utensils,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles,
  Search,
  ArrowRight,
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
    <div className="bg-dark-950 min-h-screen pb-28 text-neutral-100">
      {/* Banner Hero Gastronomia */}
      <section className="relative bg-black text-white py-16 lg:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/05da6981-e204-4d1f-abc3-3aa5381261a2_w2560.webp"
            alt="Área Gastronômica do Partage Lago Sul"
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
            <span className="text-white">Gastronomia</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white">
            Curadoria Gastronômica
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
            Restaurantes conceituados, mercado gourmet, bistrôs e cafeterias selecionadas com serviço estendido até as 23h.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-[12px]">
            <div className="flex items-center gap-2 bg-white/[0.05] px-4 py-2 rounded-full border border-white/10">
              <Clock className="h-3.5 w-3.5 text-gold-400" />
              <span>Segunda a Sábado: 10h às 23h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.05] px-4 py-2 rounded-full border border-white/10">
              <Clock className="h-3.5 w-3.5 text-gold-400" />
              <span>Domingos e Feriados: 12h às 22h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque Mané Mercado & Corrientes 348 */}
      <section className="py-16 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 transition-all">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Hub Gastronômico de Brasília
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-normal mt-2">
                Mané Mercado
              </h3>
              <p className="mt-4 text-[14px] text-neutral-400 leading-relaxed font-light">
                Uma das maiores referências gastronômicas e de entretenimento da capital chega ao Partage Lago Sul. Dezenas de chefs renomados, drinks autorais e uma atmosfera vibrante ao ar livre.
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11.5px] text-neutral-400">
                <span>Piso Ipê · Inaugura em 20 out 2026</span>
                <span className="font-bold text-gold-400">Em Breve</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 transition-all">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                Steakhouse Argentina
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-normal mt-2">
                Corrientes 348
              </h3>
              <p className="mt-4 text-[14px] text-neutral-400 leading-relaxed font-light">
                A excelência das carnes nobres argentinas preparadas na tradicional parrilla portenha. Ojo del Bife, Asado de Tira e uma adega climatizada com rótulos premiados.
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11.5px] text-neutral-400">
                <span>Piso Ipê · Aberto diariamente</span>
                <span className="font-bold text-emerald-400">● Em Operação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade e Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CUISINE_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10'
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
              placeholder="Buscar culinária ou operação..."
              className="w-full bg-white/[0.05] text-white pl-10 pr-4 py-2.5 text-[12.5px] rounded-full border border-white/15 focus:outline-none focus:border-gold-400"
            />
            <Search className="h-4 w-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDining.map((item) => (
            <div
              key={item.id}
              className="bg-white/[0.02] border border-white/10 hover:border-gold-400/40 p-6 rounded-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-400 bg-gold-400/10 px-2.5 py-0.5 rounded-full border border-gold-400/20">
                    {item.cuisineType}
                  </span>
                  <span className="text-[10.5px] text-neutral-500 font-medium">
                    {item.floor}
                  </span>
                </div>

                <div className="relative h-16 w-full mb-4 flex items-center justify-center bg-white/[0.02] rounded-xl p-2">
                  <Image
                    src={item.logoUrl}
                    alt={item.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-[13px] text-neutral-400 mt-2 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11.5px] text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-gold-400 shrink-0" />
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
