import React, { useState, useEffect, useRef } from 'react';
import { 
  BOARD_MEMBERS, 
  MANAGEMENT_MEMBERS, 
  ADVISORY_BOARD, 
  SUBTEAMS, 
  TEAM_METRICS 
} from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { StarSystem } from './StarSystem';
import { ScrollReveal } from './ScrollAnimation';

export const TeamSection: React.FC = () => {
  const [activeSubteamId, setActiveSubteamId] = useState<string>('marketing');
  useEffect(() => {
    const handleScroll = () => {
      const viewportRef = window.innerHeight * 0.35;
      let closestId: string | null = null;
      let minDistance = Infinity;

      for (const st of SUBTEAMS) {
        const el = document.getElementById(`role-${st.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportRef);
          if (rect.top <= viewportRef + 150 && rect.bottom >= viewportRef - 50) {
            closestId = st.id;
            break;
          }
          if (distance < minDistance) {
            minDistance = distance;
            closestId = st.id;
          }
        }
      }

      if (closestId) {
        setActiveSubteamId((prev) => (prev !== closestId ? closestId : prev));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSelectSubteam = (id: string) => {
    setActiveSubteamId(id);
    const el = document.getElementById(`role-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            The Team
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Team Polar comprises 57 students (including 8 full-time members) united by the challenge of pioneering zero-emission polar mobility. The team represents 14 different academic majors, 80% international members, and 25 different nationalities.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.12}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-8">
          <div className="py-2">
            <span className="font-mono-data text-xs text-slate-600 block uppercase font-medium">
              Total Members
            </span>
            <span className="font-mono-data text-3xl font-bold text-[#0B132B] block my-1">
              {TEAM_METRICS.totalMembers}
            </span>
            <span className="type-small-body text-slate-700">
              8 full-time, 49 part-time
            </span>
          </div>

          <div className="py-2">
            <span className="font-mono-data text-xs text-slate-600 block uppercase font-medium">
              Academic Majors
            </span>
            <span className="font-mono-data text-3xl font-bold text-[#0B132B] block my-1">
              {TEAM_METRICS.academicMajors}
            </span>
            <span className="type-small-body text-slate-700">
              Different degree programmes
            </span>
          </div>

          <div className="py-2">
            <span className="font-mono-data text-xs text-slate-600 block uppercase font-medium">
              International Composition
            </span>
            <span className="font-mono-data text-3xl font-bold text-[#0B132B] block my-1">
              {TEAM_METRICS.internationalPercent}%
            </span>
            <span className="type-small-body text-slate-700">
              International student cohort
            </span>
          </div>

          <div className="py-2">
            <span className="font-mono-data text-xs text-slate-600 block uppercase font-medium">
              Nationalities
            </span>
            <span className="font-mono-data text-3xl font-bold text-[#0B132B] block my-1">
              {TEAM_METRICS.nationalitiesCount}
            </span>
            <span className="type-small-body text-slate-700">
              Different nationalities
            </span>
          </div>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.16}>
        <ImagePlaceholder
          imageKey="teamCohort"
          aspectRatio="aspect-[21/9]"
          className="my-8"
        />
      </ScrollReveal>

      <div className="my-12" />

      
      <div id="board-section" className="my-8">
        <ScrollReveal direction="up">
          <div className="mb-6">
            <h2 className="type-section text-[#0B132B]">
              The Board
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOARD_MEMBERS.map((member, i) => (
            <ScrollReveal key={i} direction="up" delay={0.05 * i}>
              <div className="py-2">
                <span className="font-mono-data text-xs text-[#2A74C4] block mb-1 uppercase tracking-wider font-bold">
                  {member.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] tracking-tight">
                  {member.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="my-10" />

      
      <div className="my-8">
        <ScrollReveal direction="up">
          <div className="mb-6">
            <h2 className="type-section text-[#0B132B]">
              Management & Lead Engineers
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANAGEMENT_MEMBERS.map((mgr, i) => (
            <ScrollReveal key={i} direction="up" delay={0.04 * i}>
              <div className="py-2 flex flex-col justify-between">
                <div>
                  <span className="font-mono-data text-xs text-slate-600 block uppercase mb-1 tracking-wider font-medium">
                    {mgr.role}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] tracking-tight">
                    {mgr.name}
                  </h3>
                </div>
                <div className="pt-1.5 font-mono-data text-xs text-[#2A74C4] font-semibold">
                  {mgr.domain}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="my-10" />

      
      <div id="subteam-roster" className="my-8">
        <div className="mb-4">
          <h2 className="type-section text-[#0B132B]">
            Engineering & Operational Subteams
          </h2>
        </div>

        
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-14 mt-6">
          
          <div className="w-full lg:w-[480px] xl:w-[540px] shrink-0 sticky top-20 lg:top-24 self-start flex flex-col items-center z-20">
            
            <StarSystem
              activeSubteamId={activeSubteamId}
              onSelectSubteam={handleSelectSubteam}
            />
          </div>

          
          <div className="flex-1 min-w-0 space-y-16 w-full">
            {SUBTEAMS.map((subteam) => {
              const isActive = activeSubteamId === subteam.id;
              return (
                <div
                  key={subteam.id}
                  id={`role-${subteam.id}`}
                  data-subteam-id={subteam.id}
                  className={`py-4 scroll-mt-24 lg:scroll-mt-28 transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-85'
                  }`}
                >
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ backgroundColor: subteam.color }}
                      />
                      <h3 className="type-subsection text-[#0B132B]">
                        {subteam.name}
                      </h3>
                    </div>
                  </div>

                  
                  {subteam.leadName && (
                    <div className="mb-6 pl-4 border-l-4" style={{ borderColor: subteam.color }}>
                      <span className="font-mono-data text-xs uppercase tracking-wider block mb-1 text-slate-600 font-medium">
                        {subteam.leadRole}
                      </span>
                      <div className="text-2xl sm:text-3xl font-bold text-[#0B132B] tracking-tight">
                        {subteam.leadName}
                      </div>
                    </div>
                  )}

                  
                  <div className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 pt-1">
                      {subteam.engineers.map((engineer, engIdx) => {
                        const memberRole = subteam.id === 'marketing'
                          ? 'Marketing Officer'
                          : subteam.id === 'business'
                          ? 'Business Officer'
                          : 'Engineer';

                        return (
                          <div key={engIdx} className="py-1">
                            <div className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight leading-snug">
                              {engineer}
                            </div>
                            <div className="font-mono-data text-xs text-slate-600 mt-0.5">
                              {memberRole}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  
                  <div>
                    <p className="type-body text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl text-pretty">
                      {subteam.scope}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="my-10" />

      
      <div className="my-8">
        <div className="mb-4">
          <h2 className="type-section text-[#0B132B]">
            Advisory Board
          </h2>
        </div>

        <p className="type-body text-[#1E293B] mb-6 max-w-3xl text-pretty">
          The Advisory Board provides expert guidance across polar logistics, scientific expedition management, technology commercialization, and Antarctic policy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVISORY_BOARD.map((advisor, i) => (
            <div key={i} className="py-2 flex flex-col justify-between">
              <div>
                <h3 className="type-subsubsection text-[#0B132B] mb-1">
                  {advisor.name}
                </h3>
                <div className="font-mono-data text-xs text-[#2A74C4] font-semibold mb-2">
                  {advisor.role}
                </div>
              </div>
              <div className="pt-2 type-small-body text-slate-700">
                {advisor.affiliation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

