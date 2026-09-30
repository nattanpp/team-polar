import React from 'react';
import { PROGRAMME_HISTORY, TEAM_METRICS } from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';

export const StorySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Our Story
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Team Polar was founded in 2019 as an honors project at Eindhoven University of Technology. Antarctic explorer Wilco van Rooijen brought the project to TU/e, and 6 students took on the challenge to pioneer sustainable, zero-emission Antarctic mobility.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.12}>
        <ImagePlaceholder
          imageKey="storyFounding"
          aspectRatio="aspect-[21/9]"
          className="my-8"
        />
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.15}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-8">
          <div className="py-2">
            <span className="font-mono-data text-3xl font-bold text-[#0B132B] block mb-1">
              {TEAM_METRICS.foundedYear}
            </span>
            <span className="type-small-body text-slate-700">
              Founded at TU/e
            </span>
          </div>

          <div className="py-2">
            <span className="font-mono-data text-3xl font-bold text-[#0B132B] block mb-1">
              6 Students
            </span>
            <span className="type-small-body text-slate-700">
              Initial Founding Cohort
            </span>
          </div>

          <div className="py-2">
            <span className="font-mono-data text-3xl font-bold text-[#2A74C4] block mb-1">
              {TEAM_METRICS.totalMembers} Members
            </span>
            <span className="type-small-body text-slate-700">
              8 full-time, 49 part-time
            </span>
          </div>

          <div className="py-2">
            <span className="font-mono-data text-3xl font-bold text-[#0B132B] block mb-1">
              {TEAM_METRICS.internationalPercent}%
            </span>
            <span className="type-small-body text-slate-700">
              International Diversity
            </span>
          </div>
        </div>
      </ScrollReveal>

      <div className="my-10" />

      
      <div id="team-chronology" className="my-8">
        <ScrollReveal direction="up">
          <div className="mb-6">
            <h2 className="type-section text-[#0B132B]">
              Year-by-Year Evolution
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {PROGRAMME_HISTORY.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.06 * index}>
              <div className="py-2">
                <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                  <span className="font-mono-data text-sm font-bold text-[#2A74C4] tracking-wider">
                    {item.year}
                  </span>
                  <span className="text-slate-300 select-none">/</span>
                  <h3 className="type-subsubsection text-[#0B132B]">
                    {item.headline}
                  </h3>
                </div>
                <p className="type-body text-[#1E293B] leading-relaxed max-w-3xl text-pretty">
                  {item.details}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
