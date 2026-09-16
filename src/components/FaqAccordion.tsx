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
    <section className="py-28 bg-dark-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Lado Esquerdo: Headline e Contato rápido */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
                FAQ & Informações
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-normal tracking-tight mt-2 leading-tight">
                Respostas para as perguntas mais comuns.
              </h2>
              <p className="mt-4 text-[14px] text-neutral-400 leading-relaxed font-light">
                Tudo o que você precisa saber para planejar sua visita ao Partage Lago Sul com conforto, conveniência e tranquilidade.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2.5 text-gold-400 mb-2">
                <MessageSquare className="h-4 w-4" />
                <span className="text-[11.5px] font-bold uppercase tracking-[0.14em]">
                  Ainda tem dúvidas?
                </span>
              </div>
              <p className="text-[13px] text-neutral-300 mb-4 font-light">
                Nossa equipe de Concierge e Atendimento está pronta para ajudar você em tempo real.
              </p>
              <a
                href="mailto:atendimento@partage.com.br"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white hover:text-gold-400 transition-colors"
              >
                Falar com o Concierge
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Tabs em Pílula e Accordion Escuro */}
          <div className="lg:col-span-8">
            {/* Categorias Tabs (estilo Fora.so) */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-white/[0.08] mb-6">
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
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Accordion List em Dark Mode */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openQuestionIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="border border-white/10 bg-white/[0.02] hover:border-white/20 rounded-2xl transition-all overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-display text-[16.5px] text-white font-medium tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-gold-400' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-white/[0.06] text-[13.5px] text-neutral-300 leading-relaxed font-light animate-in fade-in duration-150">
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
