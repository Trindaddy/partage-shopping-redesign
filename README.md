# Partage Lago Sul Shopping — Proposta Oficial de Redesign (Referência Fora.so)

> Proposta completa de redesign da presença digital do **Partage Lago Sul Shopping** (Brasília - DF), adotando a clareza estrutural, o storytelling editorial e a sofisticação da experiência de usuário da plataforma internacional **[Fora.so](https://fora.so/)**, preservando 100% da identidade da marca, dados factuais e acervo fotográfico real do shopping.

---

## 🏛️ Resumo Executivo da Proposta

O **Partage Lago Sul** nasce como um *open mall* de alto padrão que integra arquitetura contemporânea, convivência ao ar livre e a rica flora nativa do cerrado no Lago Sul de Brasília. 

Esta proposta de redesign eleva a experiência digital do empreendimento adotando os padrões visuais e de interação da **Fora.so**, com uma **Direção Visual Clara, Calorosa e Convidativa**:
- **Estética Editorial Clara & Acolhedora:** Fundo off-white linho (`#FAFAF8`), superfícies brancas com bordas suaves aveludadas (`#EAE4DC`), iluminação solar do cerrado e tipografia expressiva.
- **Identidade Inegociável:** A cor institucional **Vinho/Bordô (`#8B1E2D`)** atua como âncora visual e cor primária de conversão, eliminando pretos puros e cinzas frios em favor do tom acolhedor **Espresso Profundo (`#2C2223`)** e **Taupe (`#6E6259`)**, com contraste **WCAG AAA e AA**.
- **Console Interativo de Experiência (Assinatura Fora.so):** Mockup interativo estilo macOS na dobra principal com abas em pílula (*Visão Geral*, *Lojas & Grifes*, *Gastronomia*, *Cinema VIP*, *Agenda & Shows*, *Comodidades*) permitindo que o visitante experimente o shopping antes de pisar nele.
- **Mobile Bottom Navigation:** Barra de navegação inferior mobile fixa com 6 destinos táteis (*Home*, *Lojas*, *Gastronomia*, *Cinema*, *Agenda*, *Mais*) e indicador visual ativo em vinho.
- **Storytelling por Seção em Formato Bento:** Narrativa editorial onde cada pilar (Moda, Gastronomia, Cinema VIP, Natureza e Comodidades) é apresentado como um bloco de alto impacto com imagens reais em alta definição.
- **Navegação em Pílulas & Acesso Instantâneo:** Filtros táteis scrolláveis, busca em tempo real por lojas e atalhos rápidos com integração direta ao **Waze** e **Google Maps**.
- **FAQ Categorizado em Accordion:** Respostas imediatas para horários, estacionamento/valet, política pet friendly e eventos infantis.

Para ver a especificação completa de design system, consulte o documento oficial [`visual_direction.md`](./visual_direction.md).

---

## 🚀 Stack Técnica Definida

- **Frontend:** [Next.js 14](https://nextjs.org/) (App Router) + [React 18](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (100% tipado)
- **Estilização:** [Tailwind CSS 3.4](https://tailwindcss.com/) com tokens semânticos e sombras quentes
- **Tipografia:** `Playfair Display` (Títulos & Destaques) + `Inter` (Corpo, Dados & UI)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Acessibilidade:** 100% em conformidade com as diretrizes **WCAG 2.1 AA e AAA**
- **SEO & Dados Estruturados:** Schema.org `ShoppingCenter` / `LocalBusiness` com geolocalização e horários operacionais
- **Performance:** Renderização estática ultrarrápida (SSG), imagens otimizadas via Next/Image e payloads de JS inferiores a 115kB
- **Conteúdo Dinâmico:** Schemas tipados e prontos para integração com Headless CMS (Sanity.io, Strapi, Decap)
- **Hospedagem Recomendada:** [Vercel](https://vercel.com/)

---

## 📁 Estrutura de Páginas e Arquitetura

O projeto contempla as 7 páginas essenciais do shopping:

| Rota | Página | Descrição |
| :--- | :--- | :--- |
| `/` | **Visão Geral (Home)** | Hero com Console Interativo Fora.so, manifesto editorial, vitrine de marcas, gastronomia, cinema VIP, agenda, localização e FAQ categorizado. |
| `/lojas` | **Guia de Lojas** | Catálogo completo com mais de 65 lojas catalogadas, busca instantânea, filtros por piso (*Ipê* e *Cerrado*), categorias em pílula e modal de detalhes. |
| `/gastronomia` | **Gastronomia** | Curadoria dos restaurantes e cafés com horários estendidos (até 23h), destaque para o **Mané Mercado** e **Corrientes 348**. |
| `/cinema` | **Cinema VIP** | Showcase tecnológico do complexo **Cine Araújo**: som *Dolby Atmos*, projeção a laser 4K, poltronas VIP reclináveis e sala *Max Screen*. |
| `/agenda` | **Agenda & Shows** | Programação de eventos e oficinas infantis (*Mini Escultores*, *Pequenos Exploradores*, *Pintura de Taças*, *Orquestra*) com badges de calendário e links no **Sympla**. |
| `/comodidades` | **Comodidades** | Serviços VIP com tabela oficial de preços de **Valet Parking**, **Concierge**, **Espaço Família**, **Shuttle Aeroporto**, **Smart Lockers** e empréstimos de conforto. |
| `/sobre` | **Sobre** | Manifesto arquitetônico, números de impacto (+130 marcas, 6 salas VIP, +24 restaurantes), galeria, parque central e academia integrada ao cerrado. |

---

## 🎨 Paleta de Cores e Direção Visual

| Token | Cor Hex | Papel Funcional | Contraste WCAG |
| :--- | :---: | :--- | :---: |
| **Vinho Partage** | `#8B1E2D` | **Destaque Primário & Ação** (Botões primários, badges ativos) | **8.66:1 (AAA)** |
| **Dourado Refinado** | `#C9A96A` | **Secundária Nobre** (Acentos, bordas de hover) | Visual |
| **Espresso Profundo** | `#2C2223` | **Texto Principal** (Títulos H1/H2/H3, nomes de marcas) | **14.77:1 (AAA)** |
| **Taupe Aveludado** | `#6E6259` | **Texto Secundário** (Legendas, horários, microcopy) | **5.65:1 (AA)** |
| **Canvas Principal** | `#FAFAF8` | **Fundo Geral** (Off-white linho acolhedor) | Base |
| **Superfície Alva** | `#FFFFFF` | **Cards & Superfícies Flutuantes** | Base |
| **Champagne Glow** | `#F4EBD9` | **Apoio 1** (Badges suaves e pills) | **13.04:1 (AAA)** |
| **Borda Acolhedora** | `#EAE4DC` | **Bordas & Divisores Sutis** | Visual |

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
