# Partage Lago Sul Shopping — Proposta Oficial de Redesign (Referência Fora.so)

> Proposta completa de redesign da presença digital do **Partage Lago Sul Shopping** (Brasília - DF), adotando a clareza estrutural, o storytelling editorial e a sofisticação da experiência de usuário da plataforma internacional **[Fora.so](https://fora.so/)**, preservando 100% da identidade da marca, dados factuais e acervo fotográfico real do shopping.

---

## 🏛️ Resumo Executivo da Proposta

O **Partage Lago Sul** nasce como um *open mall* de alto padrão que integra arquitetura contemporânea, convivência ao ar livre e a rica flora nativa do cerrado no Lago Sul de Brasília. 

Esta proposta de redesign eleva a experiência digital do empreendimento adotando os padrões visuais e de interação da **Fora.so**:
- **Estética Dark Luxury:** Fundo preto profundo e carbono (`#050505`, `#0A0A0C`), iluminação ambiente sutil com radial gradients dourados, superfícies translúcidas em *frosted glass* (`backdrop-blur-xl`) e bordas ultra-finas (`border-white/10`).
- **Console Interativo de Experiência (Assinatura Fora.so):** Mockup interativo estilo macOS na dobra principal com abas em pílula (*Visão Geral*, *Lojas & Grifes*, *Gastronomia*, *Cinema VIP*, *Agenda & Shows*, *Comodidades*) permitindo que o visitante experimente o shopping antes de pisar nele.
- **Storytelling por Seção em Formato Bento:** Narrativa editorial onde cada pilar (Moda, Gastronomia, Cinema VIP, Natureza e Comodidades) é apresentado como um bloco de alto impacto com imagens reais em alta definição.
- **Navegação em Pílulas & Acesso Instantâneo:** Filtros táteis scrolláveis, busca em tempo real por lojas e atalhos rápidos com integração direta ao **Waze** e **Google Maps**.
- **FAQ Categorizado em Accordion:** Respostas imediatas para horários, estacionamento/valet, política pet friendly e eventos infantis.

---

## 🚀 Stack Técnica Definida

- **Frontend:** [Next.js 14](https://nextjs.org/) (App Router) + [React 18](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (100% tipado)
- **Estilização:** [Tailwind CSS 3.4](https://tailwindcss.com/) com tokens customizados
- **Ícones:** [Lucide React](https://lucide.dev/)
- **SEO & Dados Estruturados:** Schema.org `ShoppingCenter` / `LocalBusiness` com geolocalização e horários operacionais
- **Performance:** Renderização estática ultrarrápida (SSG), imagens otimizadas via Next/Image e payloads de JS inferiores a 110kB
- **Conteúdo Dinâmico:** Schemas tipados e prontos para integração com Headless CMS (Sanity.io, Strapi, Decap)
- **Hospedagem Recomendada:** [Vercel](https://vercel.com/)

---

## 📁 Estrutura de Páginas e Arquitetura

O projeto contempla as 7 páginas essenciais do shopping:

| Rota | Página | Descrição |
| :--- | :--- | :--- |
| `/` | **Visão Geral (Home)** | Hero com Console Interativo Fora.so, manifesto editorial, vitrine de marcas, gastronomia, cinema VIP, agenda, localização e FAQ categorizado. |
| `/lojas` | **Guia de Lojas** | Catálogo completo com mais de 65 lojas extraídas, busca instantânea, filtros por piso (*Ipê* e *Cerrado*), categorias em pílula e modal de detalhes. |
| `/gastronomia` | **Gastronomia** | Curadoria dos 15 restaurantes e cafés com horários estendidos (até 23h), destaque para o **Mané Mercado** e **Corrientes 348**. |
| `/cinema` | **Cinema VIP** | Showcase tecnológico do complexo **Cine Araújo**: som *Dolby Atmos*, projeção a laser 4K, poltronas VIP reclináveis e sala *Max Screen*. |
| `/agenda` | **Agenda & Shows** | Programação de eventos e oficinas infantis (*Mini Escultores*, *Pequenos Exploradores*, *Pintura de Taças*, *Orquestra*) com links diretos de reserva no **Sympla**. |
| `/comodidades` | **Comodidades** | Serviços VIP com tabela oficial de preços de **Valet Parking**, **Concierge**, **Espaço Família**, **Shuttle Aeroporto**, **Smart Lockers** e empréstimos de conforto. |
| `/sobre` | **Sobre** | Manifesto arquitetônico, números de impacto (+130 marcas, 6 salas VIP, +24 restaurantes), parque central e academia Cia Athletica integrada ao cerrado. |

---

## 🎨 Paleta de Cores e Identidade Visual

A identidade preserva os elementos institucionais da marca Partage Lago Sul com a roupagem minimalista da Fora.so:

| Token | Cor Hex | Utilização |
| :--- | :--- | :--- |
| **Dark 950 (Canvas)** | `#050505` | Fundo principal da aplicação |
| **Dark 900 (Surface)** | `#0A0A0C` | Superfície de cartões, header e console |
| **Gold 500 (Brand Primary)**| `#C5A14B` | Dourado histórico da marca Partage |
| **Gold Champagne (Logo)** | `#CE9F6D` | Dourado suave presente no monograma vetorial |
| **White / Text Primary** | `#FFFFFF` | Títulos e elementos de máximo destaque |
| **Neutral 400 (Body Text)** | `#A1A1AA` | Corpo de texto com contraste editorial legível |
| **Border Subtle** | `rgba(255, 255, 255, 0.08)` | Delimitações de cartões e inputs translúcidos |

---

## 📦 Modelagem de Dados para Headless CMS

Os dados foram modularizados na pasta `src/data/` com tipos estritos em `src/types/index.ts`, viabilizando conexão direta com **Sanity.io** ou qualquer CMS headless:

- `src/data/stores.ts`: 65+ lojas catalogadas com piso, categoria, data de inauguração e logotipos oficiais do CDN Partage.
- `src/data/dining.ts`: Operações gastronômicas com tipologia culinária e horários.
- `src/data/events.ts`: Eventos culturais, oficinas e horários de turmas com integração Sympla.
- `src/data/amenities.ts`: Comodidades, políticas de uso e tabela de preços de valet.
- `src/data/faq.ts`: Dúvidas frequentes organizadas por abas temáticas.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 18+ (recomendado Node 20+)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Trindaddy/partage-shopping-redesign.git

# Acesse o diretório
cd partage-shopping-redesign

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

```bash
npm run build
npm run start
```

---

## 📍 Informações Factuais do Partage Lago Sul

- **Endereço Oficial:** Aeroporto lote 05 - Lago Sul, Brasília - DF, CEP 71608-900
- **Horário Lojas:** Segunda a sábado das 10h às 22h | Domingos e feriados das 14h às 20h
- **Horário Gastronomia:** Segunda a sábado das 10h às 23h | Domingos e feriados das 12h às 22h
- **Contato:** atendimento@partage.com.br
- **Waze:** [Navegar pelo Waze](https://waze.com/ul?ll=-15.864,-47.921&navigate=yes)
- **Google Maps:** [Abrir no Google Maps](https://www.google.com/maps/search/?api=1&query=Aeroporto+lote+05+Lago+Sul+Bras%C3%ADlia)

---

Desenvolvido com excelência técnica e sensibilidade de design para a proposta de redesign do **Partage Lago Sul Shopping**.
