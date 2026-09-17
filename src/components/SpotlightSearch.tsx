'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { STORES_DATA } from '@/data/stores';
import { DINING_DATA } from '@/data/dining';
import { EVENTS_DATA } from '@/data/events';
import { AMENITIES_DATA } from '@/data/amenities';
import {
  Search,
  ShoppingBag,
  Utensils,
  Film,
  Calendar,
  Compass,
  ArrowRight,
  X,
  Navigation,
  Sparkles,
  Command,
  Clock,
} from 'lucide-react';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

type SearchResultItem = {
  id: string;
  title: string;
  subtitle: string;
  category: 'Lojas' | 'Gastronomia' | 'Cinema' | 'Agenda' | 'Comodidades' | 'Atalhos';
  href: string;
  icon: any;
  badge?: string;
  logoUrl?: string;
};

export function SpotlightSearch({ isOpen, onClose }: SpotlightSearchProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Escuta tecla Cmd+K / Ctrl+K e Escape globalmente
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Indexação em memória de todo o acervo do Partage Lago Sul
  const allItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    // Atalhos Rápidos
    items.push(
      {
        id: 'shortcut-waze',
        title: 'Traçar rota no Waze',
        subtitle: 'Aeroporto lote 05 - Lago Sul, Brasília',
        category: 'Atalhos',
        href: 'https://waze.com/ul?ll=-15.864,-47.921&navigate=yes',
        icon: Navigation,
        badge: 'Externo',
      },
      {
        id: 'shortcut-cinema',
        title: 'Cine Araújo VIP · Programação e Ingressos',
        subtitle: '6 salas Laser 4K e som Dolby Atmos',
        category: 'Cinema',
        href: '/cinema',
        icon: Film,
        badge: 'Piso Cerrado',
      },
      {
        id: 'shortcut-valet',
        title: 'Valet Parking · Tabela de Preços',
        subtitle: 'R$ 20 primeiras 2h · Embarque e desembarque VIP',
        category: 'Comodidades',
        href: '/comodidades#valet',
        icon: Compass,
        badge: 'Piso Ipê',
      },
      {
        id: 'shortcut-mapa',
        title: 'Mapa Interativo dos Pisos',
        subtitle: 'Explore as lojas e setores no Piso Ipê e Piso Cerrado',
        category: 'Atalhos',
        href: '/mapa',
        icon: Sparkles,
        badge: 'Novo',
      }
    );

    // Lojas
    STORES_DATA.forEach((store) => {
      items.push({
        id: `store-${store.id}`,
        title: store.name,
        subtitle: `${store.category} · ${store.floor}`,
        category: 'Lojas',
        href: `/lojas#${store.slug}`,
        icon: ShoppingBag,
        badge: store.floor,
        logoUrl: store.logoUrl,
      });
    });

    // Gastronomia
    DINING_DATA.forEach((dining) => {
      items.push({
        id: `dining-${dining.id}`,
        title: dining.name,
        subtitle: `${dining.cuisineType} · ${dining.floor}`,
        category: 'Gastronomia',
        href: `/gastronomia`,
        icon: Utensils,
        badge: dining.openingHours,
        logoUrl: dining.logoUrl,
      });
    });

    // Eventos
    EVENTS_DATA.forEach((event) => {
      items.push({
        id: `event-${event.id}`,
        title: event.title,
        subtitle: `${event.dateLabel} · ${event.location}`,
        category: 'Agenda',
        href: `/agenda`,
        icon: Calendar,
        badge: event.badge,
      });
    });

    // Comodidades
    AMENITIES_DATA.forEach((amenity) => {
      items.push({
        id: `amenity-${amenity.id}`,
        title: amenity.title,
        subtitle: `${amenity.shortDescription} · ${amenity.floor}`,
        category: 'Comodidades',
        href: `/comodidades#${amenity.slug}`,
        icon: Compass,
        badge: amenity.pricing || amenity.floor,
      });
    });

    return items;
  }, []);

  // Filtragem inteligente com normalização
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      // Resultados sugeridos iniciais quando vazio
      return allItems.slice(0, 8);
    }

    const cleanQuery = query.toLowerCase().trim();
    return allItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(cleanQuery) ||
          item.subtitle.toLowerCase().includes(cleanQuery) ||
          item.category.toLowerCase().includes(cleanQuery)
      )
      .slice(0, 12);
  }, [query, allItems]);

  // Navegação por teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelectItem(filteredResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelectItem = (item: SearchResultItem) => {
    onClose();
    if (item.href.startsWith('http')) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(item.href);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-warm-espresso/40 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-warm-border rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Barra de Input Superior */}
        <div className="relative flex items-center px-6 py-4 border-b border-warm-border bg-warm-sand/40">
          <Search className="h-5 w-5 text-brand-wine shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Buscar lojas, restaurantes, cinema VIP, serviços..."
            className="w-full bg-transparent text-[15px] text-warm-espresso placeholder:text-warm-taupe/70 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-warm-taupe hover:text-brand-wine"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10.5px] font-mono font-medium text-warm-taupe bg-white border border-warm-border px-2 py-0.5 rounded-md ml-3 shadow-xs">
            ESC
          </kbd>
        </div>

        {/* Lista de Resultados */}
        <div className="max-h-[420px] overflow-y-auto p-2 scrollbar-none">
          {filteredResults.length === 0 ? (
            <div className="py-14 text-center">
              <p className="text-warm-taupe text-[14.5px]">
                Nenhum resultado encontrado para &ldquo;<span className="text-warm-espresso font-medium">{query}</span>&rdquo;.
              </p>
              <p className="text-[12px] text-warm-taupe/70 mt-1">
                Tente buscar por &ldquo;Zara&rdquo;, &ldquo;Corrientes&rdquo;, &ldquo;Cinema&rdquo; ou &ldquo;Valet&rdquo;.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredResults.map((item, index) => {
                const isSelected = index === selectedIndex;
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-brand-champagne/50 border border-brand-gold/40 text-brand-wine'
                        : 'hover:bg-warm-sand text-warm-espresso border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-white text-brand-wine border-brand-gold/30 shadow-xs'
                            : 'bg-warm-card text-warm-taupe border-warm-border'
                        }`}
                      >
                        {item.logoUrl ? (
                          <div className="relative h-6 w-6">
                            <Image
                              src={item.logoUrl}
                              alt={item.title}
                              fill
                              className="object-contain"
                              sizes="24px"
                            />
                          </div>
                        ) : (
                          <Icon className="h-4 w-4" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-display text-[15px] font-semibold truncate ${
                              isSelected ? 'text-brand-wine' : 'text-warm-espresso'
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="text-[9.5px] font-bold uppercase tracking-wider text-warm-taupe px-1.5 py-0.5 rounded bg-warm-card border border-warm-border shrink-0">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[12px] text-warm-taupe truncate mt-0.5 font-light">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 pl-2">
                      {item.badge && (
                        <span className="text-[10px] font-semibold text-brand-wine bg-brand-champagne/60 px-2 py-0.5 rounded-full border border-brand-gold/30">
                          {item.badge}
                        </span>
                      )}
                      <ArrowRight
                        className={`h-4 w-4 transition-transform ${
                          isSelected
                            ? 'text-brand-wine translate-x-0.5'
                            : 'text-warm-taupe/40'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Rodapé do Spotlight com Instruções de Teclado */}
        <div className="px-6 py-3 border-t border-warm-border bg-warm-sand/50 flex items-center justify-between text-[11px] text-warm-taupe">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="font-mono bg-white border border-warm-border px-1.5 py-0.2 rounded shadow-xs">
                ↑
              </kbd>
              <kbd className="font-mono bg-white border border-warm-border px-1.5 py-0.2 rounded shadow-xs">
                ↓
              </kbd>{' '}
              navegar
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <kbd className="font-mono bg-white border border-warm-border px-1.5 py-0.2 rounded shadow-xs">
                ENTER
              </kbd>{' '}
              abrir
            </span>
          </div>

          <span className="font-medium text-brand-wine">
            Partage Spotlight
          </span>
        </div>
      </div>
    </div>
  );
}
