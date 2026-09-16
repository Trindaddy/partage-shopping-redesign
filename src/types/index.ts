export type StoreCategory =
  | 'Vestuário'
  | 'Calçados'
  | 'Joias e relógios'
  | 'Perfumaria e Cosméticos'
  | 'Artigos do Lar'
  | 'Serviços'
  | 'Óticas'
  | 'Lazer'
  | 'Telefonia e Acessórios'
  | 'Artigos Diversos'
  | 'Salão de beleza';

export type Floor = 'Piso Ipê' | 'Piso Cerrado';

export interface Store {
  id: string;
  name: string;
  slug: string;
  category: StoreCategory;
  floor: Floor;
  logoUrl: string;
  status: 'active' | 'upcoming';
  openingDate?: string;
  description: string;
  phone?: string;
  whatsapp?: string;
  featured?: boolean;
}

export interface Dining {
  id: string;
  name: string;
  slug: string;
  cuisineType: string;
  floor: Floor;
  logoUrl: string;
  status: 'active' | 'upcoming';
  openingDate?: string;
  description: string;
  phone?: string;
  whatsapp?: string;
  openingHours: string;
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  badge: 'EM ANDAMENTO' | 'EM BREVE' | 'INSCRIÇÕES ABERTAS';
  dateLabel: string;
  scheduleHours?: string[];
  description: string;
  imageUrl: string;
  ticketUrl?: string;
  location: string;
}

export interface Amenity {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  pricing?: string;
  floor: Floor;
  hours: string;
  imageUrl: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Geral & Horários' | 'Estacionamento & Valet' | 'Pet & Família' | 'Lojas & Eventos';
}
