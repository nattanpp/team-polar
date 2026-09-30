import React from 'react';
import { Mail, ExternalLink, ArrowRight, Download } from 'lucide-react';
import { PARTNER_TIERS, CONTACT_INFO } from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';
import { downloadExpeditionBriefing } from '../utils/pdfGenerator';

export const PartnersSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Our Partners & Supporters
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Team Polar is supported by academic institutions, research organizations, and industrial technology partners. Tiers are designated after Antarctic penguin species arranged in decreasing order of species height.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.1}>
        <div className="mt-6 mb-8 flex flex-wrap gap-3.5">
          <button
            onClick={() => downloadExpeditionBriefing('sponsor')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7CBDE8] hover:bg-white text-[#0B132B] text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer font-bold"
          >
            <Download className="w-4 h-4 text-[#0B132B]" />
            <span>DOWNLOAD PARTNER PROSPECTUS (PDF)</span>
          </button>
          <a
            href={`mailto:${CONTACT_INFO.email}?subject=Team%20Polar%20Partnership%20Inquiry`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B132B] text-white text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow-md hover:bg-[#162947] active:scale-[0.98] transition-all cursor-pointer font-semibold group"
          >
            <Mail className="w-4 h-4 text-[#7CBDE8]" />
            <span>CONTACT PARTNERSHIP MANAGEMENT</span>
          </a>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.14}>
        <ImagePlaceholder
          imageKey="partnersAssembly"
          aspectRatio="aspect-[21/9]"
          className="my-8"
        />
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.16}>
        <div className="my-6 py-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNER_TIERS.map((tier, idx) => (
              <div key={idx} className="py-1">
                <span className="font-mono-data text-xs text-[#2A74C4] block font-bold">
                  ~{tier.speciesHeightCm} cm
                </span>
                <span className="type-subsubsection text-[#0B132B] block">
                  {tier.tierName.replace(' Tier', '')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="my-10" />

      
      <div id="partner-tiers-roster" className="space-y-12 my-8">
        {PARTNER_TIERS.map((tier, idx) => (
          <ScrollReveal key={idx} direction="up" delay={0.06 * idx}>
            <div className="pt-8 first:pt-0">
              <div className="mb-4">
                <h2 className="type-section text-[#0B132B]">
                  {tier.tierName}
                </h2>
              </div>

              <p className="type-body text-[#1E293B] mb-6 max-w-3xl text-pretty leading-relaxed">
                {tier.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.partners.map((partnerName, pIdx) => (
                  <div
                    key={pIdx}
                    className="py-2 flex flex-col justify-between"
                  >
                    <div className="text-base sm:text-lg font-bold text-[#0B132B]">
                      {partnerName}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="my-10" />

      
      <ScrollReveal direction="up">
        <div id="partnership-inquiry" className="my-8 py-4">
          <h3 className="type-subsection text-[#0B132B] mb-2">
            Partnership Inquiries & Collaboration
          </h3>
          <p className="type-body text-[#1E293B] mb-4 max-w-3xl text-pretty">
            Team Polar collaborates with engineering firms and institutions capable of providing extreme-cold qualified components, manufacturing facilities, or testing expertise.
          </p>
          <div className="font-mono-data text-xs text-slate-700 space-y-1.5 mb-4">
            <div>PARTNERSHIP LIAISON: Savvas Saragiotis (Partnership Manager)</div>
            <div>
              EMAIL:{' '}
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Partnership%20Inquiry%20-%20Team%20Polar`}
                className="text-[#0B132B] font-semibold underline hover:text-[#2A74C4] transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
            <div>
              PHONE:{' '}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="text-[#0B132B] hover:text-[#2A74C4] transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div>HEADQUARTERS: {CONTACT_INFO.primaryLocation.street}, {CONTACT_INFO.primaryLocation.postalCode} {CONTACT_INFO.primaryLocation.city}</div>
          </div>

          <a
            href={`mailto:${CONTACT_INFO.email}?subject=Partnership%20Inquiry%20-%20Team%20Polar`}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#0B132B] hover:bg-[#162947] text-white text-xs font-mono-data tracking-wider uppercase shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer font-semibold group"
          >
            <span>OPEN EMAIL TO {CONTACT_INFO.email}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7CBDE8] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};
