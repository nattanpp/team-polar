import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageTab } from '../types';
import { MISSION_FACTS, PARTNER_TIERS, PRESS_MENTIONS } from '../data/teamData';
import { SITE_IMAGES } from '../data/imageCatalog';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';

interface HomeSectionProps {
  onNavigate: (tab: PageTab) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const emperorTier = PARTNER_TIERS.find(t => t.tierName.includes('Emperor'));
  const kingTier = PARTNER_TIERS.find(t => t.tierName.includes('King'));

  return (
    <section className="w-full">
      
      <div className="w-full h-[calc(100vh-4rem)] min-h-[700px] relative flex flex-col justify-end overflow-hidden select-none bg-[#0B132B]">
        
        <div className="absolute inset-0 w-full h-full">
          <img
            src={SITE_IMAGES.homeHero.filePath}
            alt={SITE_IMAGES.homeHero.title}
            className="w-full h-full object-cover object-center filter saturate-[1.15] contrast-[1.05]"
          />
        </div>

        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent pointer-events-none" />

        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md text-balance">
              An autonomous rover crossing Antarctica.
            </h1>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-2xl mb-8 font-normal drop-shadow-sm text-pretty">
              Antarctica is one of the most remote and unforgiving places on Earth: temperatures down to <span className="font-mono-data font-semibold text-white">-80°C</span>, katabatic winds exceeding <span className="font-mono-data font-semibold text-white">200 km/h</span>, and crevasses up to <span className="font-mono-data font-semibold text-white">100 metres</span> deep. Research there still depends on kerosene-fuelled trucks and planes.
            </p>

            
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onNavigate('mission')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#7CBDE8] text-[#0B132B] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:bg-white active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Explore 1,150 km Route Map</span>
                <ArrowRight className="w-4 h-4 text-[#0B132B] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <ImagePlaceholder
        imageKey="homeTraverse"
        fullBleed={false}
        aspectRatio="aspect-[24/9]"
        className="m-0 p-0 block"
      />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div id="mission-pillars" className="mb-20 scroll-mt-20">
          <ScrollReveal direction="up">
            <div className="mb-4">
              <h2 className="type-section text-[#0B132B]">
                The Threefold Mission
              </h2>
            </div>

            <p className="type-body text-[#1E293B] mb-8 max-w-3xl text-pretty leading-relaxed">
              The mission is threefold: improve Antarctic mobility, develop innovative technology, and give team members a real professional learning environment.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MISSION_FACTS.threefoldMission.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="type-subsubsection text-[#0B132B] mb-2">
                      {item.title}
                    </h3>
                    <p className="type-small-body text-slate-700 leading-relaxed text-pretty">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        
        <ScrollReveal direction="up">
          <div className="mb-20">
            <div className="mb-4">
              <h2 className="type-subsection text-[#0B132B]">
                Partners & Institutional Backers
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {emperorTier?.partners.map((p, idx) => (
                <div
                  key={`emp-${idx}`}
                  className="py-2 flex flex-col justify-between"
                >
                  <div className="text-base font-semibold text-[#0B132B]">
                    {p}
                  </div>
                </div>
              ))}
              {kingTier?.partners.map((p, idx) => (
                <div
                  key={`king-${idx}`}
                  className="py-2 flex flex-col justify-between"
                >
                  <div className="text-base font-semibold text-[#0B132B]">
                    {p}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <button
                onClick={() => onNavigate('partners')}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#0B132B] hover:text-[#2A74C4] font-semibold cursor-pointer group transition-colors py-1"
              >
                <span>View all partner tiers (Emperor, King, Gentoo, Chinstrap, Adelie, Rockhopper)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7CBDE8] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        
        <ScrollReveal direction="up">
          <div className="mb-10">
            <div className="mb-4">
              <h2 className="type-subsection text-[#0B132B]">
                Recent News & Expedition Updates
              </h2>
            </div>

            <div className="space-y-4">
              {PRESS_MENTIONS.slice(0, 3).map((entry) => (
                <div
                  key={entry.id}
                  className="py-3 flex flex-col sm:flex-row sm:items-start justify-between text-xs gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-data text-slate-600 text-xs font-semibold whitespace-nowrap">
                        {entry.date}
                      </span>
                      <span className="text-slate-500 text-[10px] uppercase font-medium">
                        [{entry.category}]
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-[#0B132B]">
                      {entry.headline}
                    </div>
                    <p className="type-small-body text-slate-700 leading-relaxed max-w-3xl text-pretty">
                      {entry.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <button
                onClick={() => onNavigate('press')}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#0B132B] hover:text-[#2A74C4] font-semibold cursor-pointer group transition-colors py-1"
              >
                <span>View all dispatches & press archives</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7CBDE8] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
