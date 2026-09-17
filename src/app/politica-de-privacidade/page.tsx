import React from 'react';
import Link from 'next/link';
import { Shield, ChevronRight, Mail, Calendar, Lock } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidade | Partage Lago Sul Shopping',
  description:
    'Como as empresas do grupo Partage tratam seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).',
};

export default function PoliticaPrivacidadePage() {
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
            <Shield className="h-3.5 w-3.5" />
            Conformidade LGPD
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-warm-espresso leading-tight">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-base sm:text-lg text-warm-taupe font-light leading-relaxed">
            As empresas do grupo econômico Partage Empreendimentos e Participações S/A têm o compromisso de respeitar a sua privacidade e garantir a transparência no tratamento dos seus dados.
          </p>

          <div className="mt-6 flex items-center gap-4 text-[12px] text-warm-taupe pt-4 border-t border-warm-border">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-brand-wine" />
              Última atualização: 01 de setembro de 2020
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-brand-wine" />
              Lei nº 13.709/2018 (LGPD)
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo Institucional em Formato Artigo Fora.so */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-warm-border rounded-3xl p-8 sm:p-12 shadow-warm-sm space-y-10 text-[15px] leading-relaxed font-light text-warm-taupe">
          <div className="p-5 bg-warm-card border border-warm-border rounded-2xl text-[14px]">
            <p className="font-medium text-warm-espresso">
              Por favor, recomendamos que esta Política de Privacidade seja lida com atenção. Ela descreve como são tratadas as informações pessoais fornecidas por você ao acessar o site e os serviços do grupo Partage, bem como ao se inscrever em eventos promovidos no shopping.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              1. Tipos de Informações Coletadas e Como Usamos
            </h2>
            <p>
              Qualquer empresa do grupo Partage pode coletar informações básicas que identifiquem você como um indivíduo (&ldquo;Dados Pessoais&rdquo;), tais como nome, endereço de e-mail, telefone e outras, de modo a garantir a sua experiência como Usuário de nossos serviços. Apenas coletamos as informações fornecidas por você para a execução dos seus serviços ou conforme estabelecido nesta política.
            </p>
            <p>
              De modo geral, utilizamos os seus Dados Pessoais para prestar informações sobre o Partage Lago Sul Shopping, seus eventos e suas lojas. Além disso, poderemos utilizar seus dados para enviar:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-warm-espresso">
              <li>Comunicados institucionais sobre novidades do empreendimento;</li>
              <li>Newsletters com a programação cultural e estreias do cinema;</li>
              <li>Convites exclusivos para inaugurações e eventos VIP;</li>
              <li>Pesquisas de satisfação e feedback de clientes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              2. Correção, Atualização e Exclusão de Dados
            </h2>
            <p>
              Conforme permitido pela Lei Geral de Proteção de Dados (LGPD), você poderá solicitar a qualquer momento a confirmação, correção, atualização ou exclusão de seus dados de nossa base.
            </p>
            <p>
              Para exercer seus direitos de titular de dados ou cancelar o recebimento de e-mails periódicos, envie uma solicitação para o canal oficial do Encarregado pelo Tratamento de Dados (DPO):
            </p>
            <div className="p-4 bg-warm-sand rounded-2xl border border-warm-border flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-wine block">
                  Encarregado de Dados (DPO)
                </span>
                <a
                  href="mailto:encarregado@partage.com.br"
                  className="text-warm-espresso font-medium hover:text-brand-wine transition-colors"
                >
                  encarregado@partage.com.br
                </a>
              </div>
              <a
                href="mailto:encarregado@partage.com.br"
                className="px-4 py-2 bg-brand-wine text-white text-[11px] font-semibold uppercase tracking-wider rounded-full hover:bg-brand-wine-dark transition-colors"
              >
                Enviar E-mail
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              3. Segurança da Informação
            </h2>
            <p>
              Temos um compromisso rigoroso com a segurança dos seus Dados Pessoais. Empregamos sistemas de proteção técnica, física e gerencial alinhados às melhores práticas internacionais de mercado para prevenir acessos não autorizados e situações ilícitas de vazamento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              4. Compartilhamento com Terceiros
            </h2>
            <p>
              As empresas do grupo Partage não comercializam nem divulgam a terceiros as informações pessoais identificáveis fornecidas por você. As informações somente serão compartilhadas mediante ordem judicial fundamentada, exigência legal de autoridade pública ou consentimento prévio do titular.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-warm-espresso">
              5. Prazos e Respostas a Solicitações
            </h2>
            <p>
              Nosso objetivo é responder a todas as solicitações, dúvidas ou reclamações em um prazo razoável, normalmente em até 30 (trinta) dias corridos a partir da data de recebimento da mensagem.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
