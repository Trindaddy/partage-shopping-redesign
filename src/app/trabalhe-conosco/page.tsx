'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  ChevronRight,
  UploadCloud,
  FileText,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';

const AREAS = [
  'Selecione uma área de interesse',
  'Administrativo',
  'Arquitetura e Decoração',
  'Bombeiro Civil',
  'Financeiro',
  'Jovem Aprendiz',
  'Limpeza & Conservação',
  'Lojas & Varejo',
  'Manutenção Predial',
  'Marketing & Eventos',
  'Operações & Estacionamento',
  'Recursos Humanos',
  'Segurança & Vigilância',
  'Tecnologia da Informação (TI)',
  'Vendas & Atendimento',
  'Outros',
];

export default function TrabalheConoscoPage() {
  const [formSent, setFormSent] = useState(false);
  const [fileUploaded, setFileUploaded] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    area: 'Selecione uma área de interesse',
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    concordaLGPD: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileUploaded(e.target.files[0].name);
    }
  };

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
      {/* Hero Trabalhe Conosco */}
      <section className="relative bg-warm-sand py-16 lg:py-24 border-b border-warm-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-brand-wine mb-4 font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-warm-taupe" />
            <span className="text-warm-espresso">Carreiras & Oportunidades</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Talentos Partage Malls
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-warm-espresso max-w-3xl leading-tight">
            Venha construir essa história com a gente.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-warm-taupe max-w-2xl font-light leading-relaxed">
            O Partage Lago Sul Shopping valoriza pessoas, diversidade e desenvolvimento profissional. Cadastre seu currículo no nosso banco de talentos ou confira as vagas abertas na rede.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#banco-talentos"
              className="px-8 py-3.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all shadow-sm hover:shadow-wine-glow"
            >
              Cadastrar Currículo
            </a>
            <a
              href="https://partage.gupy.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-brand-champagne/40 text-brand-wine border border-brand-wine/40 text-[12px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all"
            >
              Vagas no Gupy
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Grid: Formulário de Envio de Currículo + Portal Gupy */}
      <div id="banco-talentos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Lado Esquerdo: Formulário Oficial de Currículo */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-warm-border rounded-3xl p-8 sm:p-10 shadow-warm-sm">
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-wine">
                  Banco de Talentos
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-warm-espresso mt-1">
                  Envie seu currículo
                </h2>
                <p className="text-[14px] text-warm-taupe mt-1 font-light">
                  Seus dados ficarão armazenados em nosso banco para oportunidades no shopping e nas lojas associadas.
                </p>
              </div>

              {formSent ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h3 className="font-display text-2xl text-emerald-900 font-medium">
                    Candidatura Registrada com Sucesso!
                  </h3>
                  <p className="text-[14px] text-emerald-700">
                    Seu currículo foi incluído no Banco de Talentos oficial do Partage Lago Sul. Quando surgir uma oportunidade compatível com o seu perfil, nossa equipe de RH entrará em contato.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSent(false);
                      setFileUploaded(null);
                      setFormData({
                        area: 'Selecione uma área de interesse',
                        nome: '',
                        cpf: '',
                        telefone: '',
                        email: '',
                        concordaLGPD: false,
                      });
                    }}
                    className="mt-4 px-6 py-2 bg-brand-wine text-white text-[11px] font-semibold uppercase tracking-wider rounded-full"
                  >
                    Cadastrar Outro Currículo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Área de Interesse *
                    </label>
                    <select
                      required
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    >
                      {AREAS.map((a) => (
                        <option key={a} value={a} disabled={a === 'Selecione uma área de interesse'}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

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
                        CPF *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cpf}
                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                        placeholder="000.000.000-00"
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

                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-4 py-3 bg-warm-card border border-warm-border rounded-xl text-warm-espresso text-[14px] focus:outline-none focus:border-brand-wine"
                    />
                  </div>

                  {/* Upload de Currículo */}
                  <div>
                    <label className="block text-[12px] font-semibold text-warm-espresso uppercase tracking-wider mb-1.5">
                      Anexar Currículo (PDF, DOC ou DOCX até 5 MB) *
                    </label>
                    <label className="border-2 border-dashed border-warm-border hover:border-brand-wine bg-warm-card p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors group">
                      <UploadCloud className="h-8 w-8 text-warm-taupe group-hover:text-brand-wine mb-2 transition-colors" />
                      {fileUploaded ? (
                        <div className="flex items-center gap-2 text-brand-wine font-semibold text-[13px]">
                          <FileText className="h-4 w-4" />
                          <span>{fileUploaded}</span>
                        </div>
                      ) : (
                        <span className="text-[13px] text-warm-taupe group-hover:text-warm-espresso text-center">
                          <strong className="text-brand-wine">Clique para selecionar</strong> ou arraste o arquivo aqui
                        </span>
                      )}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="lgpd-trabalhe"
                      required
                      checked={formData.concordaLGPD}
                      onChange={(e) => setFormData({ ...formData, concordaLGPD: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-warm-border text-brand-wine focus:ring-brand-wine"
                    />
                    <label htmlFor="lgpd-trabalhe" className="text-[12.5px] text-warm-taupe leading-snug">
                      Li e concordo com o tratamento dos meus dados pessoais para fins de recrutamento conforme a{' '}
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
                      Enviar Candidatura
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Lado Direito: Portal Gupy e Cultura Partage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-warm-border rounded-3xl p-8 shadow-warm-sm space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/60 border border-brand-gold/30 text-brand-wine text-[10.5px] font-bold uppercase tracking-[0.16em]">
                <Building className="h-3.5 w-3.5" />
                Vagas Abertas
              </div>

              <h3 className="font-display text-2xl font-medium text-warm-espresso">
                Portal de Vagas Gupy
              </h3>

              <p className="text-[14px] text-warm-taupe leading-relaxed font-light">
                Confira os processos seletivos abertos em tempo real pelo canal oficial de carreiras do grupo Partage Malls:
              </p>

              <div className="p-4 bg-warm-sand rounded-2xl border border-warm-border">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-wine block mb-1">
                  Link Oficial
                </span>
                <a
                  href="https://partage.gupy.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-espresso font-semibold hover:text-brand-wine text-[14px] break-all"
                >
                  https://partage.gupy.io/ ↗
                </a>
              </div>

              <a
                href="https://partage.gupy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-wine hover:bg-brand-wine-dark text-white text-[12px] font-bold uppercase tracking-[0.16em] rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Acessar Vagas no Gupy
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-warm-sand border border-warm-border rounded-3xl p-8 space-y-4">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-wine">
                Cultura & Desenvolvimento
              </span>
              <h4 className="font-display text-xl font-medium text-warm-espresso">
                Por que trabalhar no Partage?
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-warm-taupe font-light">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-wine" />
                  Ambiente acolhedor e colaborativo
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-wine" />
                  Oportunidades de crescimento profissional
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-wine" />
                  Contato direto com as maiores marcas de Brasília
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-wine" />
                  Localização privilegiada com fácil acesso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
