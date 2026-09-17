'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Tv,
  Users,
  TrendingUp,
  MapPin,
  ChevronRight,
  Send,
  CheckCircle2,
  Sparkles,
  Plane,
  Eye,
} from 'lucide-react';

export default function MidiaKitPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    formato: 'Painéis Digitais de LED',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero Mídia Kit */}
      <section className="relative bg-warm-sand py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-brand-wine mb-4 font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-warm-taupe" />
            <span className="text-warm-espresso">Mídia Kit & Anunciantes</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Publicidade & Experiência de Marca
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso max-w-3xl leading-tight">
            Conecte sua marca ao público mais qualificado da capital.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-warm-taupe max-w-2xl font-light leading-relaxed">
            Localizado no Lago Sul e vizinho imediato ao Aeroporto Internacional de Brasília, o Partage Lago Sul oferece pontos de mídia de alto impacto, ativações sensoriais e visibilidade premium.
          </p>

          {/* 3 Métricas Estratégicas */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-warm-border max-w-3xl">
            <div className="p-5 bg-white border border-warm-border rounded-2xl shadow-warm-sm">
              <span className="font-display text-3xl font-bold text-warm-espresso">
                #1 Renda
              </span>
              <p className="text-[11.5px] uppercase tracking-wider text-warm-taupe mt-1 font-medium">
                Maior renda per capita do Brasil (Lago Sul)
              </p>
            </div>

            <div className="p-5 bg-white border border-warm-border rounded-2xl shadow-warm-sm">
              <span className="font-display text-3xl font-bold text-brand-wine">
                +14 Milhões
              </span>
              <p className="text-[11.5px] uppercase tracking-wider text-warm-taupe mt-1 font-medium">
                Passageiros/ano no Aeroporto JK ao lado
              </p>
            </div>

            <div className="p-5 bg-white border border-warm-border rounded-2xl shadow-warm-sm">
              <span className="font-display text-3xl font-bold text-warm-espresso">
                100% Qualificado
              </span>
              <p className="text-[11.5px] uppercase tracking-wider text-warm-taupe mt-1 font-medium">
                Público Classes A e A+ formador de opinião
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oportunidades de Mídia (Cards Estilo Fora.so) */}
      <section className="py-20 bg-warm-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-wine">
              Formatos & Oportunidades
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-warm-espresso font-normal mt-2">
              Soluções integradas de comunicação física e digital.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                  <Tv className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-warm-espresso">
                  Painéis Digitais LED
                </h3>
                <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                  Mega painéis de LED em alta definição posicionados estrategicamente nas entradas principais, praça de convivência e nos corredores de maior fluxo.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-warm-border text-[12px] text-brand-wine font-semibold uppercase tracking-wider">
                Resolução 4K · Alta Frequência
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-warm-espresso">
                  Ativações & Sampling
                </h3>
                <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                  Espaços ao ar livre para demonstração de produtos, lounges patrocinados, distribuição de amostras e stands de montadoras e marcas de luxo.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-warm-border text-[12px] text-brand-wine font-semibold uppercase tracking-wider">
                Experiência Tátil · Alto Engajamento
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-warm-espresso">
                  Mall Signage & Adesivação
                </h3>
                <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                  Adesivação de escadas rolantes, cancelas de estacionamento, totens de diretório e ativações exclusivas no complexo Cine Araújo VIP.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-warm-border text-[12px] text-brand-wine font-semibold uppercase tracking-wider">
                100% de Visibilidade no Percurso
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Comercial de Anunciantes */}
      <section className="py-20 bg-warm-sand border-t border-warm-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-warm-border rounded-3xl p-8 sm:p-12 shadow-warm-md">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine">
                Atendimento Comercial
              </span>
              <h2 className="font-display text-3xl font-normal text-warm-espresso mt-2">
                Solicite o Mídia Kit Comercial Completo
              </h2>
              <p className="mt-2 text-[14px] text-warm-taupe font-light">
                Nossa equipe de parcerias entrará em contato com a tabela de formatos, disponibilidade e valores oficiais.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h3 className="font-display text-2xl text-emerald-900 font-medium">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-[14px] text-emerald-700">
                  Enviamos uma confirmação para seu e-mail. Nossa equipe de mídia comercial entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Ana Silva"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[13.5px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Empresa / Marca *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ex: Agência ou Marca"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[13.5px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ana@empresa.com.br"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[13.5px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(61) 99999-9999"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[13.5px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                    Formato de Interesse
                  </label>
                  <select
                    value={formData.formato}
                    onChange={(e) => setFormData({ ...formData, formato: e.target.value })}
                    className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[13.5px] focus:outline-none focus:border-brand-wine"
                  >
                    <option>Painéis Digitais de LED</option>
                    <option>Ativações & Sampling de Marca</option>
                    <option>Mall Signage e Cancelas</option>
                    <option>Patrocínio de Eventos Culturais</option>
                    <option>Outros Formatos Customizados</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                    Detalhes da Campanha (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Período desejado, objetivo da campanha..."
                    className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[13.5px] focus:outline-none focus:border-brand-wine"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[12px] font-bold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Solicitar Mídia Kit Oficial
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
