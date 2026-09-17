'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { STORES_DATA } from '@/data/stores';
import { DINING_DATA } from '@/data/dining';
import { AMENITIES_DATA } from '@/data/amenities';
import {
  MapPin,
  Compass,
  Layers,
  Search,
  ChevronRight,
  Sparkles,
  Utensils,
  ShoppingBag,
  Film,
  Clock,
  Navigation,
  ArrowRight,
  Info,
} from 'lucide-react';

type FloorType = 'Piso Ipê' | 'Piso Cerrado';
type SectorType = 'Todos' | 'Gastronomia' | 'Moda' | 'Cinema' | 'Serviços';

interface MapSpot {
  id: string;
  name: string;
  category: string;
  floor: FloorType;
  sector: SectorType;
  x: number; // Porcentagem X no mapa SVG (0 a 100)
  y: number; // Porcentagem Y no mapa SVG (0 a 100)
  width?: number;
  height?: number;
  logoUrl?: string;
  description: string;
  hours: string;
  type: 'loja' | 'restaurante' | 'cinema' | 'servico';
}

const MAP_SPOTS: MapSpot[] = [
  // === PISO IPÊ ===
  {
    id: 'spot-mane',
    name: 'Mané Mercado',
    category: 'Hub Gastronômico',
    floor: 'Piso Ipê',
    sector: 'Gastronomia',
    x: 72,
    y: 35,
    width: 22,
    height: 25,
    description: 'Dezenas de chefs renomados, drinks autorais e atmosfera ao ar livre.',
    hours: '11h às 23h',
    type: 'restaurante',
  },
  {
    id: 'spot-corrientes',
    name: 'Corrientes 348',
    category: 'Steakhouse Argentina',
    floor: 'Piso Ipê',
    sector: 'Gastronomia',
    x: 72,
    y: 65,
    width: 20,
    height: 20,
    description: 'Cortes nobres preparados na parrilla argentina com adega selecionada.',
    hours: '11h30 às 23h',
    type: 'restaurante',
  },
  {
    id: 'spot-valet-ipe',
    name: 'Valet Parking Principal',
    category: 'Estacionamento VIP',
    floor: 'Piso Ipê',
    sector: 'Serviços',
    x: 10,
    y: 78,
    width: 16,
    height: 14,
    description: 'Embarque e desembarque coberto com manobrista.',
    hours: '10h às 23h',
    type: 'servico',
  },
  {
    id: 'spot-concierge-ipe',
    name: 'Concierge & Informações',
    category: 'Atendimento',
    floor: 'Piso Ipê',
    sector: 'Serviços',
    x: 28,
    y: 50,
    width: 14,
    height: 14,
    description: 'Empréstimo de carrinhos para bebês e pets, achados e perdidos.',
    hours: '10h às 22h',
    type: 'servico',
  },
  {
    id: 'spot-zara-ipe',
    name: 'Zara & Zara Home',
    category: 'Moda & Casa',
    floor: 'Piso Ipê',
    sector: 'Moda',
    x: 42,
    y: 20,
    width: 24,
    height: 18,
    description: 'Flagship com as últimas tendências mundiais de moda.',
    hours: '10h às 22h',
    type: 'loja',
  },
  {
    id: 'spot-animale',
    name: 'Animale',
    category: 'Vestuário Feminino',
    floor: 'Piso Ipê',
    sector: 'Moda',
    x: 15,
    y: 25,
    width: 14,
    height: 15,
    description: 'Design sofisticado e alfaiataria brasileira premium.',
    hours: '10h às 22h',
    type: 'loja',
  },
  {
    id: 'spot-mixed',
    name: 'Mixed',
    category: 'Vestuário',
    floor: 'Piso Ipê',
    sector: 'Moda',
    x: 30,
    y: 25,
    width: 11,
    height: 15,
    description: 'Marca nacional icônica de moda contemporânea.',
    hours: '10h às 22h',
    type: 'loja',
  },
  {
    id: 'spot-living',
    name: 'Living Heineken',
    category: 'Bar & Lounge',
    floor: 'Piso Ipê',
    sector: 'Gastronomia',
    x: 52,
    y: 70,
    width: 16,
    height: 18,
    description: 'Chopes gelados e petiscos com vista para a praça central.',
    hours: '11h às 23h',
    type: 'restaurante',
  },

  // === PISO CERRADO ===
  {
    id: 'spot-cinema-araujo',
    name: 'Cine Araújo VIP · Dolby Atmos',
    category: 'Complexo de Cinema',
    floor: 'Piso Cerrado',
    sector: 'Cinema',
    x: 65,
    y: 25,
    width: 28,
    height: 35,
    description: '6 salas laser 4K, poltronas VIP reclináveis e Max Screen.',
    hours: '13h às 22h30',
    type: 'cinema',
  },
  {
    id: 'spot-swarovski',
    name: 'Swarovski',
    category: 'Joias & Cristais',
    floor: 'Piso Cerrado',
    sector: 'Moda',
    x: 18,
    y: 25,
    width: 12,
    height: 15,
    description: 'Cristais de precisão e acessórios de luxo.',
    hours: '10h às 22h',
    type: 'loja',
  },
  {
    id: 'spot-vivara',
    name: 'Vivara & Life by Vivara',
    category: 'Joalheria',
    floor: 'Piso Cerrado',
    sector: 'Moda',
    x: 32,
    y: 25,
    width: 14,
    height: 15,
    description: 'Alta joalheria brasileira e relógios internacionais.',
    hours: '10h às 22h',
    type: 'loja',
  },
  {
    id: 'spot-lecreuset',
    name: 'Le Creuset',
    category: 'Artigos do Lar',
    floor: 'Piso Cerrado',
    sector: 'Moda',
    x: 48,
    y: 25,
    width: 14,
    height: 15,
    description: 'Tradição francesa em panelas e utensílios culinários.',
    hours: '10h às 22h',
    type: 'loja',
  },
  {
    id: 'spot-haight',
    name: 'Haight',
    category: 'Beachwear & Moda',
    floor: 'Piso Cerrado',
    sector: 'Moda',
    x: 20,
    y: 65,
    width: 13,
    height: 16,
    description: 'Estética minimalista brasileira em moda balneária.',
    hours: '10h às 22h',
    type: 'loja',
  },
  {
    id: 'spot-familia',
    name: 'Espaço Família & Fraldário',
    category: 'Comodidades',
    floor: 'Piso Cerrado',
    sector: 'Serviços',
    x: 40,
    y: 65,
    width: 16,
    height: 16,
    description: 'Salas de amamentação com poltronas confortáveis e trocadores.',
    hours: '10h às 22h',
    type: 'servico',
  },
  {
    id: 'spot-starbucks',
    name: 'Starbucks Coffee',
    category: 'Cafeteria',
    floor: 'Piso Cerrado',
    sector: 'Gastronomia',
    x: 65,
    y: 68,
    width: 15,
    height: 16,
    description: 'Cafés especiais, frappuccinos e snacks rápidos.',
    hours: '10h às 22h',
    type: 'restaurante',
  },
];

export default function MapaPisosPage() {
  const [selectedFloor, setSelectedFloor] = useState<FloorType>('Piso Ipê');
  const [selectedSector, setSelectedSector] = useState<SectorType>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpot, setActiveSpot] = useState<MapSpot | null>(MAP_SPOTS[0]);

  // Filtra os spots do piso e setor selecionados
  const visibleSpots = useMemo(() => {
    return MAP_SPOTS.filter((spot) => {
      const matchesFloor = spot.floor === selectedFloor;
      const matchesSector =
        selectedSector === 'Todos' || spot.sector === selectedSector;
      const matchesSearch =
        !searchQuery ||
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFloor && matchesSector && matchesSearch;
    });
  }, [selectedFloor, selectedSector, searchQuery]);

  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero Editorial */}
      <section className="relative bg-warm-sand py-14 lg:py-20 border-b border-warm-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-brand-wine mb-4 font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-warm-taupe" />
            <span className="text-warm-espresso">Mapa Interativo dos Pisos</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
            <Compass className="h-3.5 w-3.5" />
            Floor Plan & Navegador do Open Mall
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-warm-espresso">
                Explore o Partage Lago Sul
              </h1>
              <p className="mt-3 text-base sm:text-lg text-warm-taupe max-w-xl font-light">
                Localize lojas, restaurantes, cinema VIP e comodidades nos dois pisos integrados ao cerrado.
              </p>
            </div>

            {/* Controles do Piso em Pílulas Grandes */}
            <div className="flex items-center p-1.5 bg-white border border-warm-border rounded-full shadow-warm-sm">
              {(['Piso Ipê', 'Piso Cerrado'] as const).map((floor) => (
                <button
                  key={floor}
                  type="button"
                  onClick={() => {
                    setSelectedFloor(floor);
                    const firstOfFloor = MAP_SPOTS.find((s) => s.floor === floor);
                    if (firstOfFloor) setActiveSpot(firstOfFloor);
                  }}
                  className={`px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] rounded-full transition-all ${
                    selectedFloor === floor
                      ? 'bg-brand-wine text-white shadow-sm'
                      : 'text-warm-taupe hover:text-warm-espresso'
                  }`}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Controles de Filtro e Busca */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-warm-border">
          {/* Categorias / Setores */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 scrollbar-none w-full sm:w-auto">
            {(['Todos', 'Gastronomia', 'Moda', 'Cinema', 'Serviços'] as const).map((sector) => (
              <button
                key={sector}
                type="button"
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-full transition-all whitespace-nowrap ${
                  selectedSector === sector
                    ? 'bg-brand-wine text-white shadow-xs'
                    : 'bg-white border border-warm-border text-warm-taupe hover:text-warm-espresso'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Busca Rápida no Mapa */}
          <div className="relative w-full sm:w-72">
            <Search className="h-4 w-4 text-brand-wine absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar no piso atual..."
              className="w-full bg-white border border-warm-border rounded-full pl-10 pr-4 py-2 text-[12.5px] text-warm-espresso placeholder:text-warm-taupe/70 focus:outline-none focus:border-brand-wine shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* Layout Principal: Planta Arquitetônica SVG + Painel Lateral de Detalhes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Visualizador da Planta do Open Mall (SVG Interativo) */}
          <div className="lg:col-span-8 bg-white border border-warm-border rounded-3xl p-6 sm:p-8 shadow-warm-md relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-warm-border/60">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-wine animate-pulse" />
                <span className="font-display text-lg font-semibold text-warm-espresso">
                  Planta Esquemática · {selectedFloor}
                </span>
              </div>
              <span className="text-[11px] text-warm-taupe font-medium">
                Passe o mouse ou clique sobre qualquer área
              </span>
            </div>

            {/* Canvas Arquitetônico Interativo do Mall */}
            <div className="relative w-full aspect-[16/10] bg-warm-sand/50 rounded-2xl border border-warm-border/80 overflow-hidden select-none p-4">
              {/* Esboço de Alameda Central do Open Mall com Árvores do Cerrado */}
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Linhas guias arquitetônicas sutis */}
                <rect
                  x="40"
                  y="40"
                  width="920"
                  height="520"
                  rx="30"
                  stroke="#EAE4DC"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Alameda de Circulação Central ao Ar Livre */}
                <path
                  d="M 120 300 Q 500 280 880 300"
                  stroke="#DFD8CE"
                  strokeWidth="60"
                  strokeLinecap="round"
                />

                {/* Praça Central com Espelho d'água e Árvores nativas */}
                <ellipse cx="500" cy="300" rx="90" ry="60" fill="#EFE8DD" stroke="#D6C4A7" strokeWidth="2" />
                <circle cx="500" cy="300" r="28" fill="#C9A96A" fillOpacity="0.25" />
                <text
                  x="500"
                  y="304"
                  textAnchor="middle"
                  fill="#8B1E2D"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="1"
                >
                  PRAÇA CENTRAL
                </text>

                {/* Pontos de Acesso e Sanitários */}
                <rect x="60" y="275" width="40" height="50" rx="8" fill="#FFFFFF" stroke="#EAE4DC" />
                <text x="80" y="304" textAnchor="middle" fill="#6E6259" fontSize="10" fontWeight="bold">
                  ENTRADA
                </text>

                <rect x="900" y="275" width="40" height="50" rx="8" fill="#FFFFFF" stroke="#EAE4DC" />
                <text x="920" y="304" textAnchor="middle" fill="#6E6259" fontSize="10" fontWeight="bold">
                  ACESSO
                </text>
              </svg>

              {/* Hotspots Clicáveis sobrepostos na planta */}
              {visibleSpots.map((spot) => {
                const isActive = activeSpot?.id === spot.id;

                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveSpot(spot)}
                    onMouseEnter={() => setActiveSpot(spot)}
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                      width: `${spot.width || 14}%`,
                      height: `${spot.height || 14}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand-wine text-white shadow-lg scale-105 z-20 border-2 border-brand-gold'
                        : 'bg-white/95 text-warm-espresso hover:bg-brand-champagne/80 hover:text-brand-wine border border-warm-border shadow-warm-sm z-10'
                    }`}
                  >
                    <span className="text-[11px] font-bold text-center leading-tight truncate w-full px-1">
                      {spot.name}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider block truncate max-w-full mt-0.5 ${
                        isActive ? 'text-white/80' : 'text-warm-taupe'
                      }`}
                    >
                      {spot.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Legenda do Mapa */}
            <div className="mt-4 pt-4 border-t border-warm-border flex flex-wrap items-center justify-between gap-4 text-[11.5px] text-warm-taupe">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-brand-wine border border-brand-gold" />
                  Ponto Selecionado
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-white border border-warm-border" />
                  Operação Disponível
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded bg-[#EFE8DD] border border-[#D6C4A7]" />
                  Área de Convivência / Cerrado
                </span>
              </div>

              <span className="font-semibold text-brand-wine">
                {visibleSpots.length} pontos identificados
              </span>
            </div>
          </div>

          {/* Painel Lateral: Detalhes do Ponto Selecionado */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {activeSpot ? (
              <div className="bg-white border border-warm-border rounded-3xl p-6 sm:p-8 shadow-warm-md flex flex-col justify-between h-full animate-in fade-in duration-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-wine bg-brand-champagne/60 px-3 py-1 rounded-full border border-brand-gold/30">
                      {activeSpot.sector}
                    </span>
                    <span className="text-[11.5px] text-warm-taupe font-medium">
                      {activeSpot.floor}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-warm-espresso">
                    {activeSpot.name}
                  </h3>
                  <span className="text-[13px] text-warm-taupe block mt-1 font-medium">
                    {activeSpot.category}
                  </span>

                  <p className="mt-4 text-[14px] text-warm-taupe leading-relaxed font-light">
                    {activeSpot.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-warm-border space-y-2.5 text-[12.5px] text-warm-taupe">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-wine shrink-0" />
                      <span>Horário: <strong className="text-warm-espresso font-semibold">{activeSpot.hours}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-wine shrink-0" />
                      <span>Localização: {activeSpot.floor} · Asa Central</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-warm-border mt-6 flex flex-col gap-2.5">
                  {activeSpot.type === 'loja' && (
                    <Link
                      href="/lojas"
                      className="w-full py-3 bg-brand-wine hover:bg-brand-wine-dark text-white text-[11.5px] font-semibold uppercase tracking-wider rounded-full text-center transition-colors shadow-sm"
                    >
                      Ver Catálogo de Lojas
                    </Link>
                  )}
                  {activeSpot.type === 'restaurante' && (
                    <Link
                      href="/gastronomia"
                      className="w-full py-3 bg-brand-wine hover:bg-brand-wine-dark text-white text-[11.5px] font-semibold uppercase tracking-wider rounded-full text-center transition-colors shadow-sm"
                    >
                      Ver Menu Gastronômico
                    </Link>
                  )}
                  {activeSpot.type === 'cinema' && (
                    <Link
                      href="/cinema"
                      className="w-full py-3 bg-brand-wine hover:bg-brand-wine-dark text-white text-[11.5px] font-semibold uppercase tracking-wider rounded-full text-center transition-colors shadow-sm"
                    >
                      Comprar Ingressos VIP
                    </Link>
                  )}
                  {activeSpot.type === 'servico' && (
                    <Link
                      href="/comodidades"
                      className="w-full py-3 bg-brand-wine hover:bg-brand-wine-dark text-white text-[11.5px] font-semibold uppercase tracking-wider rounded-full text-center transition-colors shadow-sm"
                    >
                      Ver Comodidades & Preços
                    </Link>
                  )}

                  <a
                    href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white border border-brand-wine/40 hover:bg-brand-champagne/40 text-brand-wine text-[11.5px] font-semibold uppercase tracking-wider rounded-full text-center transition-colors"
                  >
                    Como Chegar no Shopping
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-warm-border rounded-3xl p-8 shadow-warm-sm text-center py-20">
                <Info className="h-8 w-8 text-warm-taupe mx-auto mb-3" />
                <p className="text-warm-taupe text-[14px]">
                  Selecione uma loja ou ponto no mapa ao lado para visualizar os detalhes e horário.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
