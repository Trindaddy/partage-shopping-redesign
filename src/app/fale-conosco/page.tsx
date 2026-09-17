'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  MapPin,
  Clock,
  Navigation,
  ChevronRight,
  Send,
  CheckCircle2,
  Phone,
  MessageSquare,
} from 'lucide-react';

const ASSUNTOS = [
  'Selecione um assunto',
  'Achados e Perdidos',
  'Cinema VIP Cine Araújo',
  'Estacionamento & Valet',
  'Eventos & Agenda Cultural',
  'Horário de Funcionamento',
  'Lazer & Parques',
  'Lojas & Grifes',
  'Lojista em Operação',
  'Possível Lojista / Expansão',
  'Pet Friendly & Empréstimos',
  'Praça de Alimentação & Gastronomia',
  'Promoções & Clube Partage',
  'Serviços & Concierge',
  'Site & Plataforma Digital',
  'Vaga de Emprego',
  'Outro',
];

export default function FaleConoscoPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Selecione um assunto',
    mensagem: '',
    concordaLGPD: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.concordaLGPD) {
      alert('Por favor, confirme que concorda com a Política de Privacidade.');
      return;
    }
    setFormSent(true);
  };

  return (
    <div className="bg-warm-canvas min-h-screen pb-28 text-warm-espresso">
      {/* Hero Fale Conosco */}
      <section className="relative bg-warm-sand py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-brand-wine mb-4 font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-warm-taupe" />
            <span className="text-warm-espresso">Contato & Negócios</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
            <MessageSquare className="h-3.5 w-3.5" />
            Central de Atendimento ao Cliente
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso max-w-3xl leading-tight">
            Fale com o Partage Lago Sul.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-warm-taupe max-w-2xl font-light leading-relaxed">
            Dúvidas, elogios, solicitações de achados e perdidos ou feedback sobre sua visita: nossa equipe de Concierge está sempre à disposição.
          </p>
        </div>
      </section>

      {/* Grid Principal: Formulário + Dados de Contato */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Lado Esquerdo: Formulário Oficial */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-warm-border rounded-3xl p-8 sm:p-10 shadow-warm-sm">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-warm-espresso mb-2">
                Envie uma mensagem
              </h2>
              <p className="text-[14px] text-warm-taupe mb-8 font-light">
                Preencha os campos abaixo para que nosso time direcione seu atendimento com rapidez.
              </p>

              {formSent ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h3 className="font-display text-2xl text-emerald-900 font-medium">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-[14px] text-emerald-700">
                    Obrigado por entrar em contato. Um membro da equipe do Concierge responderá em seu e-mail em até 24 horas úteis.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSent(false);
                      setFormData({
                        nome: '',
                        email: '',
                        telefone: '',
                        assunto: 'Selecione um assunto',
                        mensagem: '',
                        concordaLGPD: false,
                      });
                    }}
                    className="mt-4 px-6 py-2 bg-brand-wine text-white text-[11px] font-semibold uppercase tracking-wider rounded-full"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
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
                        className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Assunto *
                    </label>
                    <select
                      required
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    >
                      {ASSUNTOS.map((a) => (
                        <option key={a} value={a} disabled={a === 'Selecione um assunto'}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva sua dúvida, sugestão ou solicitação em detalhes..."
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="lgpd"
                      required
                      checked={formData.concordaLGPD}
                      onChange={(e) => setFormData({ ...formData, concordaLGPD: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-warm-border text-brand-wine focus:ring-brand-wine"
                    />
                    <label htmlFor="lgpd" className="text-[12.5px] text-warm-taupe leading-snug">
                      Li e concordo com o tratamento dos meus dados pessoais conforme a{' '}
                      <Link href="/politica-de-privacidade" className="text-brand-wine underline font-medium">
                        Política de Privacidade
                      </Link>
                      .
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[12px] font-bold uppercase tracking-[0.16em] rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Lado Direito: Informações Oficiais e Rotas */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card Localização & Horários */}
            <div className="bg-white border border-warm-border rounded-3xl p-8 shadow-warm-sm space-y-6">
              <h3 className="font-display text-xl font-semibold text-warm-espresso">
                Canais Oficiais do Shopping
              </h3>

              <div className="space-y-4 text-[14px] text-warm-taupe">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-wine shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-espresso block font-medium">Endereço</strong>
                    <span>Aeroporto lote 05 - Lago Sul, Brasília - DF</span>
                    <span className="block text-[12px] text-warm-taupe mt-0.5">CEP 71608-900</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-wine shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-espresso block font-medium">E-mail Direto</strong>
                    <a
                      href="mailto:atendimento@partage.com.br"
                      className="text-brand-wine hover:underline font-semibold"
                    >
                      atendimento@partage.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-wine shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-espresso block font-medium">Horários de Operação</strong>
                    <span>Lojas: Seg a Sáb das 10h às 22h | Dom das 14h às 20h</span>
                    <span className="block text-[12px] text-warm-taupe mt-0.5">
                      Gastronomia: diariamente até as 23h
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-warm-border flex flex-col sm:flex-row gap-3">
                <a
                  href="https://waze.com/ul?ll=-15.864,-47.921&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-brand-wine hover:bg-brand-wine-dark text-white text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Waze
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aeroporto+lote+05+Lago+Sul+Bras%C3%ADlia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-white border border-brand-wine/40 text-brand-wine hover:bg-brand-champagne/40 text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Google Maps
                </a>
              </div>
            </div>

            {/* Card Dúvidas Frequentes Rápido */}
            <div className="bg-warm-sand border border-warm-border rounded-3xl p-8 space-y-4">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-wine">
                Atendimento Ágil
              </span>
              <h4 className="font-display text-xl font-medium text-warm-espresso">
                Consulte as Perguntas Mais Frequentes
              </h4>
              <p className="text-[13.5px] text-warm-taupe font-light leading-relaxed">
                Tire suas dúvidas sobre estacionamento, empréstimo de carrinhos para bebês e pets na nossa página de FAQ.
              </p>
              <Link
                href="/#faq"
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-brand-wine hover:text-brand-wine-dark uppercase tracking-wider pt-2"
              >
                Acessar FAQ do Shopping →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
