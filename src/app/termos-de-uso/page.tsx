import React from 'react';
import Link from 'next/link';
import { FileText, ChevronRight, Calendar, Scale } from 'lucide-react';

export const metadata = {
  title: 'Termos de Uso | Partage Lago Sul Shopping',
  description:
    'Termos e condições de uso do site institucional do Partage Lago Sul Shopping.',
};

export default function TermosDeUsoPage() {
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
            <Scale className="h-3.5 w-3.5" />
            Condições Gerais de Acesso
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-warm-espresso leading-tight">
            Termos de Uso
          </h1>
          <p className="mt-4 text-base sm:text-lg text-warm-taupe font-light leading-relaxed">
            Regras gerais de utilização do portal digital e serviços informativos do Partage Lago Sul Shopping.
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
        <div className="bg-white border border-warm-border rounded-3xl p-8 sm:p-12 shadow-warm-sm space-y-8 text-[15px] leading-relaxed font-light text-warm-taupe">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              1. Finalidade Informativa
            </h2>
            <p>
              Estes Termos regulam o acesso aos websites e aplicativos das empresas do grupo Partage Empreendimentos e Participações S/A. O site do Partage Lago Sul Shopping é fornecido com finalidade estritamente informativa, apresentando as lojas em operação, novidades da gastronomia, horários, eventos da agenda e comodidades aos visitantes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              2. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo disponibilizado neste site — incluindo textos, fotografias, logomarcas, plantas arquitetônicas, monogramas e código-fonte — é de titularidade exclusiva das empresas do grupo Partage ou foi devidamente licenciado por seus lojistas parceiros. É vedada a reprodução total ou parcial sem autorização prévia por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              3. Links para Terceiros
            </h2>
            <p>
              Para a comodidade dos usuários, o site disponibiliza atalhos de rotas para Waze e Google Maps, bem como links para aquisição de ingressos pelo Sympla e ingressos de cinema no Cine Araújo. O Partage Lago Sul não se responsabiliza pelas políticas e termos de serviços de plataformas externas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              4. Atualização das Informações
            </h2>
            <p>
              O grupo Partage se reserva o direito de aprimorar, corrigir ou atualizar horários de funcionamento, campanhas e marcas sem aviso prévio. Em caso de dúvidas sobre termos ou marcas, entre em contato pelo e-mail oficial:
            </p>
            <p className="font-medium text-warm-espresso">
              <a href="mailto:atendimento@partage.com.br" className="text-brand-wine hover:underline">
                atendimento@partage.com.br
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
