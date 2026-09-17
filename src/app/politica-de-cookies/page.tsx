import React from 'react';
import Link from 'next/link';
import { Cookie, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Política de Cookies | Partage Lago Sul Shopping',
  description:
    'Entenda como o Partage Lago Sul Shopping utiliza cookies para aprimorar sua experiência de navegação.',
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero Editorial */}
      <section className="relative bg-warm-sand py-16 lg:py-20 border-b border-warm-border overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-brand-wine mb-4 font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-warm-taupe" />
            <span className="text-warm-espresso">Políticas & Termos</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[10.5px] font-bold uppercase tracking-[0.16em] mb-4">
            <Cookie className="h-3.5 w-3.5" />
            Gestão de Preferências
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-warm-espresso leading-tight">
            Política de Cookies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-warm-taupe font-light leading-relaxed">
            Transparência completa sobre o uso de tecnologias de armazenamento local para garantir uma navegação fluida, rápida e personalizada.
          </p>

          <div className="mt-6 flex items-center gap-4 text-[12px] text-warm-taupe pt-4 border-t border-warm-border">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-brand-wine" />
              Vigência: 29 de maio de 2026
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo Institucional */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-warm-border rounded-3xl p-8 sm:p-12 shadow-warm-sm space-y-10 text-[15px] leading-relaxed font-light text-warm-taupe">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              1. O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto criados pelos sites que você visita e armazenados no seu computador ou dispositivo móvel. Eles são amplamente utilizados para fazer com que os websites funcionem com eficiência, memorizem suas preferências e forneçam relatórios analíticos aos administradores.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              2. Categorias de Cookies Utilizados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-warm-card border border-warm-border rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-wine block mb-1">
                  1. Estritamente Necessários
                </span>
                <h3 className="font-display text-lg text-warm-espresso font-medium">
                  Operação Essencial
                </h3>
                <p className="text-[13px] text-warm-taupe mt-2">
                  Essenciais para que você consiga navegar no site, abrir modais e acessar horários e serviços. Não podem ser desativados.
                </p>
              </div>

              <div className="p-5 bg-warm-card border border-warm-border rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-wine block mb-1">
                  2. Desempenho & Métricas
                </span>
                <h3 className="font-display text-lg text-warm-espresso font-medium">
                  Análise Anônima
                </h3>
                <p className="text-[13px] text-warm-taupe mt-2">
                  Ajudam a avaliar a navegabilidade e frequência de visitação das seções (ex.: Google Analytics). Dados 100% anonimizados.
                </p>
              </div>

              <div className="p-5 bg-warm-card border border-warm-border rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-wine block mb-1">
                  3. Funcionalidade
                </span>
                <h3 className="font-display text-lg text-warm-espresso font-medium">
                  Preferências Pessoais
                </h3>
                <p className="text-[13px] text-warm-taupe mt-2">
                  Permitem ao site lembrar suas escolhas prévias, filtros de piso ou restaurantes favoritos durante sua navegação.
                </p>
              </div>

              <div className="p-5 bg-warm-card border border-warm-border rounded-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-wine block mb-1">
                  4. Direcionamento
                </span>
                <h3 className="font-display text-lg text-warm-espresso font-medium">
                  Comunicação Relevante
                </h3>
                <p className="text-[13px] text-warm-taupe mt-2">
                  Utilizados para limitar a frequência de anúncios e mensurar a eficácia de campanhas de lançamentos e eventos do shopping.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              3. Como Ativar ou Desativar Cookies
            </h2>
            <p>
              Você pode alterar suas configurações a qualquer momento diretamente nas opções do seu navegador de internet (Chrome, Safari, Edge ou Firefox), bloqueando o armazenamento de cookies secundários.
            </p>
            <div className="p-4 bg-warm-sand rounded-2xl border border-warm-border flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-wine block">
                  Dúvidas sobre Cookies
                </span>
                <a
                  href="mailto:dpo.lgpd@partage.com.br"
                  className="text-warm-espresso font-medium hover:text-brand-wine transition-colors"
                >
                  dpo.lgpd@partage.com.br
                </a>
              </div>
              <a
                href="mailto:dpo.lgpd@partage.com.br"
                className="px-4 py-2 bg-brand-wine text-white text-[11px] font-semibold uppercase tracking-wider rounded-full hover:bg-brand-wine-dark transition-colors"
              >
                Falar com DPO
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
