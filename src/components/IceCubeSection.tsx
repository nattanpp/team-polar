import React from 'react';
import { TECHNICAL_COMPARISONS } from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';

interface IceCubeSectionProps {
  embedded?: boolean;
}

export const IceCubeSection: React.FC<IceCubeSectionProps> = ({ embedded = false }) => {
  return (
    <section className={embedded ? "py-4 w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full"}>
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Ice Cube : First-Generation Prototype
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Ice Cube was Team Polar's first prototype and first-generation rover, constructed to develop and test the autonomous driving stack and validate polar locomotion mechanics before Gentoo.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.15}>
        <ImagePlaceholder
          imageKey="iceCubeFieldTesting"
          aspectRatio="aspect-[21/9]"
          className="my-8"
        />
      </ScrollReveal>

      <div className="my-12" />

      
      <div id="core-specs" className="my-8 scroll-mt-20">
        <ScrollReveal direction="up">
          <div className="mb-4">
            <h2 className="type-section text-[#0B132B]">
              Core System Specifications
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#252A34]">
          <ScrollReveal direction="up" delay={0.05}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                28-Inch Wheels
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Equipped with 28-inch wheels to evaluate snow penetration, rolling resistance, and surface friction across packed polar snow surfaces.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                2 m² Solar Panel
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Single top-mounted 2 m² solar panel array providing initial test solar power to charge and benchmark onboard battery buffering.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                COTS Component Base
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Built mainly from commercial off-the-shelf components to rapidly validate electrical and mechanical polar engineering principles.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                Remote-Controlled Architecture
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Operated via remote control while telemetry data logging captured sensor ground-truth to train and develop the autonomous stack.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                65 km / Day Range
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Achieved an operational transit range of 65 kilometres per day during field trials, proving preliminary polar endurance feasibility.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                350 kg Gross Baseline Mass
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Served as the initial first-generation weight benchmark, which guided Gentoo's 30 kg mass reduction down to 320 kg through composite engineering.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="my-12" />

      
      <ScrollReveal direction="up">
        <div className="my-8">
          <div className="mb-4">
            <h2 className="type-section text-[#0B132B]">
              Field Testing Results : Trondheim, Norway
            </h2>
          </div>

          <p className="type-body text-[#252A34] mb-6 max-w-3xl">
            Ice Cube was field-tested for a week with 12 team members in Trondheim, Norway. Trondheim was chosen specifically for its similarity to Antarctic snow and ice conditions, allowing Team Polar to observe real-world friction, low-temperature component performance, and develop the foundation for Gentoo's autonomous stack.
          </p>

          <ImagePlaceholder
            imageKey="iceCubeSensorMast"
            aspectRatio="aspect-[21/9]"
            className="my-6"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="py-2">
              <span className="font-mono-data text-3xl font-semibold text-[#0B132B] block mb-1">
                7 Days
              </span>
              <span className="text-xs text-[#252A34] block">
                Field trial duration in sub-zero snow
              </span>
            </div>

            <div className="py-2">
              <span className="font-mono-data text-3xl font-semibold text-[#0B132B] block mb-1">
                12 Members
              </span>
              <span className="text-xs text-[#252A34] block">
                Multidisciplinary deployment team
              </span>
            </div>

            <div className="py-2">
              <span className="font-mono-data text-3xl font-semibold text-[#0B132B] block mb-1">
                65 km / Day
              </span>
              <span className="text-xs text-[#252A34] block">
                Validated operational transit range
              </span>
            </div>

            <div className="py-2">
              <span className="text-lg font-bold text-[#0B132B] block mb-1">
                Polar Analogue
              </span>
              <span className="type-small-body text-slate-700 block">
                Benchmarked Antarctic snow similarity & friction
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="my-10" />

      
      <ScrollReveal direction="up">
        <div id="icecube-specs-table" className="my-8 scroll-mt-20">
          <div className="mb-4">
            <h2 className="type-section text-[#0B132B]">
              Complete Technical Specifications Audit
            </h2>
          </div>

          <div className="overflow-x-auto py-2 -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="min-w-[640px] w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="uppercase tracking-wider text-[#0B132B]">
                  <th className="py-3 px-3 font-semibold">Specification Parameter</th>
                  <th className="py-3 px-3 font-semibold text-[#2A74C4]">Ice Cube Value</th>
                  <th className="py-3 px-3 font-mono-data text-xs text-slate-600">Engineering Context & Purpose</th>
                </tr>
              </thead>
              <tbody className="text-[#1E293B]">
                {TECHNICAL_COMPARISONS.map((spec, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 font-medium text-[#0B132B]">
                      {spec.metric}
                    </td>
                    <td className="py-3 px-3 font-medium text-[#0B132B]">
                      {spec.iceCubeValue}
                    </td>
                    <td className="py-3 px-3 font-mono-data text-xs text-slate-600">
                      {spec.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
