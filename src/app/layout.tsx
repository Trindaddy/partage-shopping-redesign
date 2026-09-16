import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Partage Lago Sul Shopping | Open Mall em Brasília',
  description:
    'Um lugar para estar. Open Mall de alto padrão integrado ao cerrado em Brasília, no Lago Sul. Mais de 130 marcas, cinema VIP Dolby Atmos, gastronomia seleta e comodidades exclusivas.',
  keywords: [
    'Partage Lago Sul',
    'Shopping Lago Sul',
    'Open Mall Brasília',
    'Cinema VIP Brasília',
    'Cine Araújo Partage',
    'Gastronomia Lago Sul',
    'Lojas Lago Sul Brasília',
    'Shopping perto do aeroporto Brasília',
  ],
  authors: [{ name: 'Partage Lago Sul Shopping' }],
  openGraph: {
    title: 'Partage Lago Sul Shopping | Singular, Moderno e Sempre à Frente',
    description:
      'Descubra um open mall único em Brasília. Mais de 130 marcas, cinema VIP, gastronomia de alto padrão e vivências ao ar livre.',
    url: 'https://partagelagosulshopping.com.br',
    siteName: 'Partage Lago Sul Shopping',
    images: [
      {
        url: 'https://partagelagosulshopping.com.br/og-icon.jpg',
        width: 1200,
        height: 630,
        alt: 'Partage Lago Sul Shopping',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partage Lago Sul Shopping',
    description:
      'Um lugar para estar. Open mall de alto padrão em Brasília, no Lago Sul.',
    images: ['https://partagelagosulshopping.com.br/og-icon.jpg'],
  },
  icons: {
    icon: 'https://partagelagosulshopping.com.br/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data para ShoppingCenter
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ShoppingCenter',
    name: 'Partage Lago Sul Shopping',
    image: 'https://partagelagosulshopping.com.br/og-icon.jpg',
    '@id': 'https://partagelagosulshopping.com.br',
    url: 'https://partagelagosulshopping.com.br',
    telephone: '+556100000000',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aeroporto lote 05',
      addressLocality: 'Brasília',
      addressRegion: 'DF',
      postalCode: '71608-900',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -15.864,
      longitude: -47.921,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '14:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/partagelagosul/',
      'https://www.youtube.com/@PartageMalls',
      'https://www.linkedin.com/showcase/partage-lago-sul/',
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-charcoal-900 font-sans selection:bg-gold-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
