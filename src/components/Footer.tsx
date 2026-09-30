import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { CrackLogomark } from './CrackMotif';
import { SUBTEAMS, CONTACT_INFO } from '../data/teamData';
import { X, FileText, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowTerms(false);
    };
    if (showTerms) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showTerms]);

  return (
    <footer className="mt-16 bg-[#0B132B] text-white">
      
      <div className="w-full flex h-1" title="Subteam Palette">
        {SUBTEAMS.map((st) => (
          <div
            key={st.id}
            className="flex-1 h-full"
            style={{ backgroundColor: st.color }}
            title={`${st.name}: ${st.color}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="py-1">
                <CrackLogomark className="w-7 h-4" color="#7CBDE8" />
              </div>
              <span className="text-xl font-semibold uppercase tracking-wider text-white">
                TEAM POLAR
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed mb-4 text-pretty">
              Student team at Eindhoven University of Technology (TU/e). Developing Gentoo, an autonomous solar-electric rover engineered to traverse 1,150 km between two Antarctic stations in 2026.
            </p>
            <div className="font-mono-data text-xs text-slate-300 space-y-1">
              <div>HEADQUARTERS: {CONTACT_INFO.primaryLocation.street}, {CONTACT_INFO.primaryLocation.postalCode} {CONTACT_INFO.primaryLocation.city}</div>
              <div>SECOND LOCATION: {CONTACT_INFO.secondLocation.title}, {CONTACT_INFO.secondLocation.street}, {CONTACT_INFO.secondLocation.postalCode} {CONTACT_INFO.secondLocation.city}</div>
              <div>
                CONTACT:{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[#7CBDE8] hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>{' '}
                |{' '}
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:underline hover:text-[#7CBDE8]"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          
          <div>
            <div className="text-xs uppercase font-bold text-[#7CBDE8] mb-3 tracking-wider">
              SYSTEM DIRECTORY
            </div>
            <ul className="space-y-1.5 text-xs uppercase tracking-wider text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('gentoo')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Gentoo Rover (2nd Gen)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('ice-cube')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Ice Cube Testbed (1st Gen)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('story')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Our Story (2019-2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('mission')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Our Mission & Goal
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <div className="text-xs uppercase font-bold text-[#7CBDE8] mb-3 tracking-wider">
              ORGANIZATION & MEDIA
            </div>
            <ul className="space-y-1.5 text-xs uppercase tracking-wider text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => onSelectTab('team')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  The Team (57 Members)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('partners')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Partners & Supporters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('press')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Recent News & Updates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('join')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Join The Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-[#7CBDE8] transition-colors cursor-pointer"
                >
                  Contact & Coordinates
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-6" />

        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono-data text-slate-400 pt-4 gap-3 border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} TEAM POLAR. EINDHOVEN UNIVERSITY OF TECHNOLOGY.</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={() => setShowTerms(true)}
              className="text-[#7CBDE8] hover:text-white hover:underline transition-colors uppercase tracking-wider cursor-pointer font-medium"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>

      
      {showTerms && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowTerms(false)}
        >
          <div 
            className="bg-white text-[#1E293B] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-none border border-slate-200 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
          >
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-data text-[#2A74C4] uppercase tracking-wider font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#2A74C4]" />
                  LEGAL & COMPLIANCE FRAMEWORK
                </div>
                <h2 id="terms-title" className="text-xl sm:text-2xl font-bold text-[#0B132B] mt-1">
                  Terms of Use
                </h2>
                <div className="text-xs font-mono-data text-slate-600 mt-0.5">
                  TEAM POLAR • TU/e EINDHOVEN • LAST REVISED: 2026
                </div>
              </div>
              <button
                onClick={() => setShowTerms(false)}
                className="p-1.5 text-slate-600 hover:text-[#0B132B] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close Terms of Use dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            
            <div className="py-4 space-y-5 text-sm text-[#1E293B] leading-relaxed">
              <section>
                <h3 className="font-bold text-[#0B132B] uppercase tracking-wide text-xs mb-1.5 font-mono-data">
                  1. Organizational Mandate & Affiliation
                </h3>
                <p>
                  Team Polar is an official student engineering team founded at Eindhoven University of Technology (TU/e) in the Netherlands. All documentation, vehicle telemetry archives, technical specifications, and promotional materials made available on this platform are published in furtherance of academic education, polar robotics research, and climate awareness.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#0B132B] uppercase tracking-wide text-xs mb-1.5 font-mono-data">
                  2. Non-Commercial Academic & Research Use
                </h3>
                <p>
                  Content published on this website, including engineering schematics, power budget estimations, and climate expedition chronicles, is provided freely for informational, educational, and research evaluation. Commercial reproduction, uncredited syndication, or redistribution of vehicle CAD assets or autonomous navigation software is strictly prohibited without prior written consent from Team Polar leadership.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#0B132B] uppercase tracking-wide text-xs mb-1.5 font-mono-data">
                  3. Intellectual Property & Technical Schematics
                </h3>
                <p>
                  The "Team Polar" fractures logomark, rover names ("Gentoo", "Ice Cube"), sensor fusion models, chassis structural geometries, and autonomous crevasse-detection software remain the intellectual property of Team Polar and Eindhoven University of Technology. Third-party partner and sponsor trademarks (including TU/e, SIOS, and technical corporate sponsors) are the exclusive property of their respective owners.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#0B132B] uppercase tracking-wide text-xs mb-1.5 font-mono-data">
                  4. Vehicle Telemetry & Field Trials Disclaimer
                </h3>
                <p>
                  Technical specifications, sub-zero battery performance tables, solar yield estimates, and route simulations across Antarctica represent verified prototypes and predictive engineering models. Because Antarctic conditions involve extreme meteorological volatility (-80°C temperatures, 200 km/h katabatic winds, and changing snow density), these values serve as engineering targets and do not constitute operational guarantees for non-expeditionary equipment.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#0B132B] uppercase tracking-wide text-xs mb-1.5 font-mono-data">
                  5. Privacy, Inquiries & Contact
                </h3>
                <p>
                  Direct all legal, partnership, academic research collaboration, or student intake inquiries to Team Polar External Affairs at{' '}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#2A74C4] font-semibold hover:underline font-mono-data">
                    {CONTACT_INFO.email}
                  </a>
                  {' '}or visit the Team Polar workshop on the TU/e campus: Innovation Space / Traverse, De Zaale, Eindhoven.
                </p>
              </section>
            </div>

            
            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                className="px-5 py-2.5 bg-[#0B132B] hover:bg-[#162947] text-white text-xs uppercase tracking-wider font-mono-data shadow-sm active:scale-[0.98] transition-all cursor-pointer font-semibold"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
