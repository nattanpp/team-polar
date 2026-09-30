import React from 'react';
import { Mail, ArrowDown, Download } from 'lucide-react';
import { PRESS_MENTIONS, CONTACT_INFO } from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';
import { downloadExpeditionBriefing } from '../utils/pdfGenerator';

export const PressSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Recent News & Expedition Updates
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Official engineering milestones, field test reports, scientific co-authorship records, and institutional grant disclosures (ordered newest first).
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.12}>
        <div className="mt-6 mb-8 flex items-center flex-wrap gap-3.5">
          <button
            onClick={() => downloadExpeditionBriefing('press')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7CBDE8] hover:bg-white text-[#0B132B] text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer font-bold"
          >
            <Download className="w-4 h-4 text-[#0B132B]" />
            <span>DOWNLOAD PRESS & MEDIA KIT (PDF)</span>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('press-inquiry');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B132B] text-white text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow-md hover:bg-[#162947] active:scale-[0.98] transition-all cursor-pointer font-semibold group"
          >
            <Mail className="w-4 h-4 text-[#7CBDE8]" />
            <span>CONTACT MEDIA & EXTERNAL AFFAIRS</span>
          </button>
        </div>
      </ScrollReveal>

      <div className="my-10" />

      
      <div id="press-items-list" className="space-y-12 my-8">
        {PRESS_MENTIONS.map((item, idx) => (
          <ScrollReveal key={item.id} direction="up" delay={0.06 * idx}>
            <div className="pt-8 first:pt-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono-data text-xs font-bold text-[#2A74C4]">
                    {item.date}
                  </span>
                  <span className="font-mono-data text-xs text-slate-500 uppercase font-medium">
                    [{item.category}]
                  </span>
                </div>
              </div>

              <h2 className="type-subsection text-[#0B132B] mb-2 max-w-3xl text-balance">
                {item.headline}
              </h2>

              <p className="type-body text-[#1E293B] leading-relaxed mb-4 max-w-3xl text-pretty">
                {item.summary}
              </p>

              
              {idx < 3 && (
                <ImagePlaceholder
                  imageKey="pressUnveiling"
                  aspectRatio="aspect-[21/9]"
                  className="my-6"
                  fullBleed={true}
                />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="my-10" />

      
      <ScrollReveal direction="up">
        <div id="press-inquiry" className="my-8 py-4">
          <h3 className="type-subsection text-[#0B132B] mb-2">
            Media & External Affairs Desk
          </h3>
          <p className="type-body text-[#1E293B] mb-4 max-w-3xl text-pretty">
            For technical briefings, photographic and schematic assets, or interview requests with student engineering leads:
          </p>
          <div className="font-mono-data text-xs text-slate-700 space-y-1.5">
            <div>EXTERNAL AFFAIRS MANAGER: Polina Savelyeva</div>
            <div>MEDIA INQUIRY EMAIL: {CONTACT_INFO.email}</div>
            <div>TELEPHONE: {CONTACT_INFO.phone}</div>
            <div>HEADQUARTERS: {CONTACT_INFO.primaryLocation.street}, {CONTACT_INFO.primaryLocation.postalCode} {CONTACT_INFO.primaryLocation.city}</div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
