'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/data/faq';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  'Geral & Horários',
  'Estacionamento & Valet',
  'Pet & Família',
  'Lojas & Eventos',
] as const;

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('Geral & Horários');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter((faq) => faq.category === activeCategory);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-warm-canvas border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Lado Esquerdo: Headline e Contato rápido */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-wine">
                FAQ & Informações
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-warm-espresso font-normal tracking-tight mt-2 leading-tight">
                Respostas para as perguntas mais comuns.
              </h2>
              <p className="mt-4 text-[14.5px] text-warm-taupe leading-relaxed font-light">
                Tudo o que você precisa saber para planejar sua visita ao Partage Lago Sul com conforto, conveniência e tranquilidade.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white border border-warm-border rounded-2xl shadow-warm-sm">
              <div className="flex items-center gap-2.5 text-brand-wine mb-2">
                <MessageSquare className="h-4 w-4" />
                <span className="text-[11.5px] font-bold uppercase tracking-[0.14em]">
                  Ainda tem dúvidas?
                </span>
              </div>
              <p className="text-[13px] text-warm-taupe mb-4 font-light leading-relaxed">
                Nossa equipe de Concierge e Atendimento está à disposição para auxiliar você.
              </p>
              <a
                href="mailto:atendimento@partage.com.br"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-wine hover:text-brand-wine-dark transition-colors"
              >
                Falar com o Concierge
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Tabs em Pílula e Accordion Claro */}
          <div className="lg:col-span-8">
            {/* Categorias Tabs */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-warm-border mb-6">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenQuestionIndex(0);
                  }}
                  className={`px-4 py-2 text-[11.5px] font-medium uppercase tracking-[0.12em] transition-all rounded-full ${
                    activeCategory === category
                      ? 'bg-brand-wine text-white font-semibold shadow-sm'
                      : 'bg-warm-card text-warm-taupe hover:text-warm-espresso hover:bg-white border border-warm-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Accordion List em Paleta Clara */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openQuestionIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="border border-warm-border bg-white hover:border-brand-gold rounded-2xl transition-all shadow-warm-sm overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-display text-[16.5px] text-warm-espresso font-medium tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-warm-taupe shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-brand-wine' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-warm-border/60 text-[14px] text-warm-taupe leading-relaxed font-light animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
