'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STORES_DATA } from '@/data/stores';
import { StoreCategory, Floor } from '@/types';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
  X,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const CATEGORIES: ('Todas' | StoreCategory)[] = [
  'Todas',
  'Vestuário',
  'Calçados',
  'Joias e relógios',
  'Perfumaria e Cosméticos',
  'Artigos do Lar',
  'Óticas',
  'Lazer',
  'Serviços',
  'Telefonia e Acessórios',
  'Artigos Diversos',
  'Salão de beleza',
];

export default function LojasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | StoreCategory>('Todas');
  const [selectedFloor, setSelectedFloor] = useState<'Todos' | Floor>('Todos');
  const [selectedStore, setSelectedStore] = useState<(typeof STORES_DATA)[0] | null>(null);

  const filteredStores = useMemo(() => {
    return STORES_DATA.filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'Todas' || store.category === selectedCategory;

      const matchesFloor =
        selectedFloor === 'Todos' || store.floor === selectedFloor;

      return matchesSearch && matchesCategory && matchesFloor;
    });
  }, [searchTerm, selectedCategory, selectedFloor]);

  return (
    <div className="bg-dark-950 min-h-screen pb-28 text-neutral-100">
      {/* Banner Hero da Página Lojas em Dark Mode */}
      <section className="relative bg-black text-white py-16 lg:py-24 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image
            src="https://d2f96oy0w3h3i6.cloudfront.net/agenda/2026/23befe76-9528-4a5c-a890-224789d66465_w2560.webp"
            alt="Corredor de Lojas do Partage Lago Sul"
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
            <span className="text-white">Guia de Lojas</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white">
            Catálogo de Lojas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl font-light leading-relaxed">
            Mais de 130 marcas distribuídas em dois pisos de alto padrão: alta joalheria, moda autoral, tecnologia e conveniência.
          </p>

          {/* Barra de Busca Fora.so Style */}
          <div className="mt-8 max-w-xl relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar loja por nome ou produto..."
              className="w-full bg-white/[0.05] border border-white/15 text-white pl-11 pr-4 py-3.5 text-[13px] tracking-wide placeholder:text-neutral-500 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 backdrop-blur-md shadow-lg"
            />
            <Search className="h-4 w-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Controles de Filtro em Pílulas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col gap-6 pb-8 border-b border-white/[0.08]">
          {/* Linha de Filtro por Piso */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                Piso:
              </span>
              {(['Todos', 'Piso Ipê', 'Piso Cerrado'] as const).map((floor) => (
                <button
                  key={floor}
                  type="button"
                  onClick={() => setSelectedFloor(floor)}
                  className={`px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full transition-all ${
                    selectedFloor === floor
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10'
                  }`}
                >
                  {floor}
                </button>
              ))}
            </div>

            <span className="text-[12px] text-neutral-400 font-medium">
              Mostrando <strong className="text-white">{filteredStores.length}</strong> lojas
            </span>
          </div>

          {/* Categorias em Pílulas Scrolláveis */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] whitespace-nowrap rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold-400 text-black font-semibold shadow-sm'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Lojas em Dark Mode */}
        {filteredStores.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-lg text-neutral-400">Nenhuma loja encontrada para sua busca.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todas');
                setSelectedFloor('Todos');
              }}
              className="mt-4 px-6 py-2.5 bg-white text-black text-[11.5px] font-bold uppercase tracking-[0.14em] rounded-full"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                id={store.slug}
                onClick={() => setSelectedStore(store)}
                className="group cursor-pointer bg-white/[0.02] border border-white/10 hover:border-gold-400/50 p-5 rounded-2xl shadow-sm hover:shadow-fora-glow transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-3">
                    <span className="text-[9.5px] font-semibold uppercase tracking-wider text-neutral-500">
                      {store.floor}
                    </span>
                    {store.status === 'upcoming' && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded-full border border-gold-400/20">
                        Em Breve
                      </span>
                    )}
                  </div>

                  <div className="relative h-14 w-full mb-4 flex items-center justify-center bg-white/[0.02] rounded-xl p-2">
                    <Image
                      src={store.logoUrl}
                      alt={store.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>

                  <h3 className="font-display text-[15px] font-semibold text-white group-hover:text-gold-400 transition-colors truncate">
                    {store.name}
                  </h3>
                  <span className="text-[11px] text-neutral-400 truncate block mt-0.5">
                    {store.category}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    Ver detalhes
                  </span>
                  <span className="text-gold-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Detalhes da Loja */}
      {selectedStore && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedStore(null)}
        >
          <div
            className="bg-dark-900 border border-white/15 max-w-lg w-full p-6 sm:p-8 rounded-3xl shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedStore(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="relative h-16 w-28 bg-white/5 p-2 rounded-xl border border-white/10">
                <Image
                  src={selectedStore.logoUrl}
                  alt={selectedStore.name}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-400">
                  {selectedStore.category}
                </span>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {selectedStore.name}
                </h3>
                <span className="text-[12px] text-neutral-400 font-medium">
                  {selectedStore.floor}
                </span>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                Sobre a Marca
              </h4>
              <p className="text-[14px] text-neutral-300 leading-relaxed font-light">
                {selectedStore.description}
              </p>

              {selectedStore.openingDate && (
                <div className="p-3.5 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[12px] font-medium rounded-xl flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>{selectedStore.openingDate}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[12px]">
              <span className="text-neutral-400">
                Horário: Seg-Sáb 10h-22h | Dom 14h-20h
              </span>
              <button
                type="button"
                onClick={() => setSelectedStore(null)}
                className="px-6 py-2 bg-white text-black text-[11px] font-bold uppercase tracking-[0.16em] rounded-full hover:bg-gold-400 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
