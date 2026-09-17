'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Store,
  Users,
  MapPin,
  ShieldCheck,
  Megaphone,
  Briefcase,
  ChevronRight,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const SEGMENTOS = [
  'Selecione o segmento',
  'Vestuário & Moda Feminina/Masculina',
  'Calçados & Acessórios',
  'Joalheria & Ótica',
  'Gastronomia, Restaurante & Bar',
  'Cafeteria, Gelateria & Doceria',
  'Beleza, Cosméticos & Spa',
  'Artigos do Lar, Decoração & Design',
  'Tecnologia, Eletrônicos & Telefonia',
  'Serviços, Saúde & Conveniência',
  'Entretenimento & Lazer Infantil',
  'Outro Segmento',
];

export default function SejaLojistaPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    marca: '',
    email: '',
    telefone: '',
    segmento: 'Selecione o segmento',
    formato: 'Loja Satélite (até 60m²)',
    jaPossuiLoja: 'Sim, em outro shopping ou rua',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero Seja Lojista com Foto Oficial */}
      <section className="relative bg-warm-sand py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-brand-wine font-semibold">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 text-warm-taupe" />
                <span className="text-warm-espresso">Expansão Comercial</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[11px] font-bold uppercase tracking-[0.16em]">
                <Sparkles className="h-3.5 w-3.5" />
                Locação de Lojas & Quiosques
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso leading-tight">
                Seja um lojista no Partage Lago Sul.
              </h1>

              <p className="text-base sm:text-xl text-warm-taupe font-light leading-relaxed">
                Aproveite um ambiente seguro, moderno e cheio de oportunidades para crescer e conectar sua marca a milhares de clientes qualificados em Brasília.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#formulario-lojista"
                  className="px-8 py-3.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-sm hover:shadow-wine-glow"
                >
                  Quero ser um lojista
                </a>
                <a
                  href="#vantagens"
                  className="px-8 py-3.5 bg-white hover:bg-brand-champagne/40 text-brand-wine border border-brand-wine/40 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all"
                >
                  Conhecer Vantagens
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-warm-border shadow-warm-lg bg-warm-sand">
                <Image
                  src="https://partagelagosulshopping.com.br/figma/seja-lojista-hero.webp"
                  alt="Loja de alto padrão no Partage Lago Sul Shopping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As 5 Vantagens Oficiais do Shopping */}
      <section id="vantagens" className="py-24 bg-warm-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-wine">
              Diferenciais de Negócio
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-warm-espresso mt-2">
              Aqui a sua marca terá vantagens incomparáveis.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Grande Fluxo de Consumidores
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                O Partage Lago Sul recebe visitantes de altíssimo poder aquisitivo todos os meses, ampliando a visibilidade da sua marca e potencializando o faturamento.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Localização Estratégica
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                Empreendimento posicionado no Lago Sul, a poucos minutos do Aeroporto JK e do Plano Piloto, com fácil acesso e alto potencial de consumo contínuo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Segurança & Credibilidade
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                Estrutura de ponta, estacionamento coberto com valet e monitoramento 24h, proporcionando uma experiência de compra com conforto e tranquilidade.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <Megaphone className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Marketing & Campanhas
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                Ações institucionais de alto impacto, festivais gastronômicos, agenda cultural no parque e campanhas promocionais integradas que impulsionam o tráfego.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-warm-border hover:border-brand-gold shadow-warm-sm hover:shadow-warm-md transition-all lg:col-span-2">
              <div className="h-12 w-12 rounded-full bg-brand-champagne/60 text-brand-wine flex items-center justify-center mb-6 border border-brand-gold/30">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Gestão Parceira e Suporte Especializado
              </h3>
              <p className="mt-3 text-[14px] text-warm-taupe leading-relaxed font-light">
                A inteligência de gestão da rede Partage Malls acompanha de perto os lojistas em todas as etapas — da aprovação do projeto arquitetônico à análise de performance de vendas — visando a sustentabilidade e crescimento perene de cada negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário Oficial de Expansão / Locação */}
      <section id="formulario-lojista" className="py-20 bg-warm-sand border-t border-warm-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-warm-border rounded-3xl p-8 sm:p-12 shadow-warm-md">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine">
                Canal de Expansão
              </span>
              <h2 className="font-display text-3xl font-normal text-warm-espresso mt-2">
                Venha fazer parte do Partage Lago Sul.
              </h2>
              <p className="mt-2 text-[14px] text-warm-taupe font-light">
                Cadastre sua marca para receber a planta de disponibilidades e propostas comerciais da nossa equipe.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h3 className="font-display text-2xl text-emerald-900 font-medium">
                  Proposta Registrada com Sucesso!
                </h3>
                <p className="text-[14px] text-emerald-700">
                  Nossa diretoria de expansão comercial entrará em contato com você para apresentar as plantas e condições de locação.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Nome do Responsável *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Carlos Mendes"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Nome da Marca / Franquia *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.marca}
                      onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                      placeholder="Ex: Minha Marca Store"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      E-mail Comercial *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@marca.com.br"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Telefone / Celular *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(61) 99999-9999"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Segmento de Atuação *
                    </label>
                    <select
                      required
                      value={formData.segmento}
                      onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    >
                      {SEGMENTOS.map((s) => (
                        <option key={s} value={s} disabled={s === 'Selecione o segmento'}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Formato Pretendido
                    </label>
                    <select
                      value={formData.formato}
                      onChange={(e) => setFormData({ ...formData, formato: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    >
                      <option>Loja Satélite (até 60m²)</option>
                      <option>Loja Média (60m² a 150m²)</option>
                      <option>Mega Loja / Âncora (+150m²)</option>
                      <option>Quiosque de Corredor (6m² a 12m²)</option>
                      <option>Operação Gastronômica / Restaurante</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                    Apresentação da Marca ou Observações
                  </label>
                  <textarea
                    rows={3}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Conte sobre sua operação, link do Instagram ou site..."
                    className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[12px] font-bold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Proposta de Locação
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
