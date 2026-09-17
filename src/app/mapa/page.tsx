'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Compass,
  Crosshair,
  Layers3,
  MapPin,
  Navigation,
  Search,
  Sparkles,
  Utensils,
  ShoppingBag,
  Film,
  SlidersHorizontal,
  X,
} from 'lucide-react';

type FloorType = 'Piso Ipê' | 'Piso Cerrado';
type SectorType = 'Todos' | 'Gastronomia' | 'Moda' | 'Cinema' | 'Serviços';
type SpotType = 'loja' | 'restaurante' | 'cinema' | 'servico';

interface MapSpot {
  id: string;
  name: string;
  category: string;
  floor: FloorType;
  sector: SectorType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  logoUrl?: string;
  description: string;
  hours: string;
  type: SpotType;
}

/**
 * Conteúdo factual mantido conforme os dados existentes no arquivo original.
 * Novos pontos podem ser adicionados aqui quando o mapa real do empreendimento
 * estiver disponível.
 */
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

const sectorMeta: Record<SectorType, { icon: React.ElementType; label: string }> = {
  Todos: { icon: Layers3, label: 'Todos' },
  Gastronomia: { icon: Utensils, label: 'Gastronomia' },
  Moda: { icon: ShoppingBag, label: 'Moda' },
  Cinema: { icon: Film, label: 'Cinema' },
  Serviços: { icon: Navigation, label: 'Serviços' },
};

const typeAccent: Record<SpotType, string> = {
  loja: 'bg-[#8B1E2D]',
  restaurante: 'bg-[#C99A5A]',
  cinema: 'bg-[#163F4C]',
  servico: 'bg-[#6B7280]',
};

export default function MapaPartage() {
  const [floor, setFloor] = useState<FloorType>('Piso Ipê');
  const [sector, setSector] = useState<SectorType>('Todos');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const visibleSpots = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return MAP_SPOTS.filter((spot) => {
      const matchesFloor = spot.floor === floor;
      const matchesSector = sector === 'Todos' || spot.sector === sector;
      const matchesQuery =
        !normalized ||
        `${spot.name} ${spot.category} ${spot.description}`.toLowerCase().includes(normalized);

      return matchesFloor && matchesSector && matchesQuery;
    });
  }, [floor, sector, query]);

  const selectedSpot = MAP_SPOTS.find((spot) => spot.id === selectedId) ?? null;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F2EC] text-[#1A1A1A]">
      {/* HERO / HEADER */}
      <section className="relative overflow-hidden bg-[#101112] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,154,90,.24),transparent_28%),radial-gradient(circle_at_10%_100%,rgba(139,30,45,.35),transparent_35%)]" />
        <div className="relative mx-auto max-w-[1500px] px-5 pb-7 pt-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-5">
            <Link href="/" className="group flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
                <Sparkles className="h-5 w-5 text-[#D6B47A]" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-white/50">Partage</p>
                <p className="font-serif text-lg leading-none">Lago Sul</p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3 py-2 text-xs text-white/65 backdrop-blur-xl md:flex">
              <MapPin className="h-3.5 w-3.5 text-[#D6B47A]" />
              Explore o shopping
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6B47A]/25 bg-[#D6B47A]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.22em] text-[#E6C992]">
              <Compass className="h-3.5 w-3.5" /> Navegação inteligente
            </div>
            <h1 className="max-w-2xl font-serif text-5xl leading-[.95] tracking-[-.035em] sm:text-6xl lg:text-7xl">
              Encontre o que você procura.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              Uma nova forma de explorar lojas, gastronomia, cinema e serviços dentro do Partage.
            </p>
          </div>
        </div>
      </section>

      {/* CONTROLS */}
      <section className="relative z-20 mx-auto -mt-5 max-w-[1500px] px-4 sm:px-8 lg:px-12">
        <div className="rounded-[28px] border border-black/[.07] bg-white/90 p-3 shadow-[0_24px_70px_rgba(25,20,15,.12)] backdrop-blur-2xl sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/35" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar loja, restaurante, cinema..."
                className="h-12 w-full rounded-2xl bg-[#F5F2EC] pl-11 pr-4 text-sm outline-none ring-0 transition placeholder:text-black/35 focus:bg-white focus:shadow-[inset_0_0_0_1px_rgba(139,30,45,.25)]"
              />
            </div>

            <div className="flex rounded-2xl bg-[#F5F2EC] p-1">
              {(['Piso Ipê', 'Piso Cerrado'] as FloorType[]).map((item) => (
                <button
                  key={item}
                  onClick={() => setFloor(item)}
                  className={`h-10 flex-1 rounded-xl px-5 text-xs font-semibold transition sm:flex-none ${
                    floor === item ? 'bg-[#171819] text-white shadow-lg' : 'text-black/50 hover:text-black'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowFilters((value) => !value)}
              className={`flex h-12 items-center justify-center gap-2 rounded-2xl border px-4 text-xs font-semibold transition lg:hidden ${
                showFilters ? 'border-[#8B1E2D] bg-[#8B1E2D] text-white' : 'border-black/10 bg-white'
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" /> Filtros
            </button>
          </div>

          <div className={`${showFilters ? 'flex' : 'hidden'} mt-3 flex-wrap gap-2 lg:flex`}>
            {(Object.keys(sectorMeta) as SectorType[]).map((item) => {
              const Icon = sectorMeta[item].icon;
              const active = sector === item;
              return (
                <button
                  key={item}
                  onClick={() => setSector(item)}
                  className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold transition ${
                    active
                      ? 'bg-[#8B1E2D] text-white shadow-[0_8px_20px_rgba(139,30,45,.2)]'
                      : 'bg-[#F5F2EC] text-black/55 hover:bg-[#ECE7DE] hover:text-black'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" /> {sectorMeta[item].label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto grid max-w-[1500px] gap-5 px-4 py-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-12 lg:py-7">
        <div className="relative min-h-[610px] overflow-hidden rounded-[32px] border border-black/[.07] bg-[#E9E4DA] shadow-[0_24px_70px_rgba(25,20,15,.09)]">
          {/* decorative grid */}
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(30,30,30,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,30,.055)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#C99A5A]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-[#8B1E2D]/15 blur-3xl" />

          <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[.16em] shadow-lg backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {visibleSpots.length} resultado{visibleSpots.length === 1 ? '' : 's'}
          </div>

          <button
            onClick={() => { setQuery(''); setSector('Todos'); setSelectedId(null); }}
            className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80 shadow-lg backdrop-blur-xl transition hover:scale-105"
            aria-label="Limpar filtros"
          >
            <Crosshair className="h-4 w-4" />
          </button>

          {/* stylized map shell — substitute the internal geometry with the official SVG floor plan */}
          <div className="absolute inset-[12%_8%] rounded-[30px] border-2 border-black/10 bg-[#F7F4EE]/80 shadow-[inset_0_0_0_14px_rgba(255,255,255,.38)]">
            <div className="absolute left-[5%] top-[8%] h-[20%] w-[30%] rounded-[24px] border border-black/10 bg-white/70" />
            <div className="absolute right-[6%] top-[10%] h-[30%] w-[25%] rounded-[24px] border border-black/10 bg-white/70" />
            <div className="absolute bottom-[8%] left-[8%] h-[25%] w-[34%] rounded-[24px] border border-black/10 bg-white/70" />
            <div className="absolute bottom-[10%] right-[7%] h-[24%] w-[28%] rounded-[24px] border border-black/10 bg-white/70" />

            <div className="absolute left-[48%] top-[5%] h-[90%] w-px bg-black/10" />
            <div className="absolute left-[7%] top-[48%] h-px w-[86%] bg-black/10" />
            <div className="absolute left-[38%] top-[22%] h-[56%] w-[24%] rounded-[32px] border border-[#8B1E2D]/15 bg-[#8B1E2D]/[.035]" />

            <div className="absolute left-[44%] top-[44%] text-center">
              <p className="font-serif text-2xl text-black/70">Partage</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[.25em] text-black/35">Lago Sul</p>
            </div>

            {visibleSpots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setSelectedId(spot.id)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                aria-label={`Abrir ${spot.name}`}
              >
                <span className={`absolute -inset-2 animate-ping rounded-full opacity-20 ${typeAccent[spot.type]}`} />
                <span className={`relative grid h-11 w-11 place-items-center rounded-2xl text-white shadow-[0_12px_25px_rgba(0,0,0,.18)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${typeAccent[spot.type]}`}>
                  {spot.type === 'restaurante' ? <Utensils className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                </span>
                <span className="mt-2 block whitespace-nowrap rounded-full bg-[#171819] px-3 py-1 text-[9px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                  {spot.name}
                </span>
              </button>
            ))}

            {visibleSpots.length === 0 && (
              <div className="absolute inset-0 grid place-items-center">
                <div className="max-w-xs text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg">
                    <Search className="h-5 w-5 text-black/40" />
                  </div>
                  <p className="mt-4 font-serif text-2xl">Nada encontrado</p>
                  <p className="mt-2 text-xs leading-5 text-black/50">Tente outra busca ou remova alguns filtros.</p>
                </div>
              </div>
            )}
          </div>

          <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
            <div className="rounded-full border border-black/10 bg-white/75 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.14em] backdrop-blur-xl">Mapa interativo</div>
            <div className="rounded-full border border-black/10 bg-white/75 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.14em] backdrop-blur-xl">{floor}</div>
          </div>
        </div>

        {/* SIDE PANEL */}
        <aside className="flex flex-col rounded-[32px] border border-black/[.07] bg-white p-5 shadow-[0_24px_70px_rgba(25,20,15,.09)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#8B1E2D]">Explore</p>
              <h2 className="mt-1 font-serif text-3xl tracking-[-.02em]">No seu ritmo.</h2>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F5F2EC]">
              <Navigation className="h-4 w-4" />
            </div>
          </div>

          {selectedSpot ? (
            <div className="mt-7 overflow-hidden rounded-[24px] bg-[#171819] text-white">
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[.15em]">{selectedSpot.sector}</span>
                <button onClick={() => setSelectedId(null)} className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/15" aria-label="Fechar detalhes">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-3xl leading-none">{selectedSpot.name}</h3>
                <p className="mt-2 text-xs font-medium text-white/45">{selectedSpot.category}</p>
                <p className="mt-5 text-sm leading-6 text-white/70">{selectedSpot.description}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                  <Clock3 className="h-4 w-4 text-[#D6B47A]" /> {selectedSpot.hours}
                </div>
                <Link
                  href={
                    selectedSpot.type === 'restaurante'
                      ? '/gastronomia'
                      : selectedSpot.type === 'cinema'
                      ? '/cinema'
                      : selectedSpot.type === 'servico'
                      ? '/comodidades'
                      : '/lojas'
                  }
                  className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#D6B47A] text-xs font-bold text-[#171819] transition hover:translate-y-[-1px]"
                >
                  Ver detalhes <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-7 rounded-[24px] border border-dashed border-black/10 bg-[#F8F6F1] p-5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#8B1E2D] text-white shadow-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl">Toque em um ponto.</h3>
              <p className="mt-2 text-xs leading-5 text-black/50">Selecione um local no mapa para visualizar informações e horários.</p>
            </div>
          )}

          <div className="mt-auto pt-5">
            <div className="border-t border-black/10 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[.18em] text-black/35">Legenda</span>
                <span className="text-[10px] text-black/35">{floor}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {([
                  ['loja', 'Lojas'],
                  ['restaurante', 'Gastronomia'],
                  ['cinema', 'Cinema'],
                  ['servico', 'Serviços'],
                ] as [SpotType, string][]).map(([type, label]) => (
                  <div key={type} className="flex items-center gap-2 rounded-xl bg-[#F5F2EC] px-3 py-2.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${typeAccent[type]}`} />
                    <span className="text-[10px] font-medium text-black/60">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* FOOTNOTE */}
      <footer className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 pb-8 text-[10px] text-black/35 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <span>Partage Lago Sul Shopping · Experiência digital</span>
        <span className="flex items-center gap-1.5"><Layers3 className="h-3 w-3" /> Estrutura preparada para receber o mapa oficial</span>
      </footer>
    </main>
  );
}
