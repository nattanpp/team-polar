import React from 'react';
import { TECHNICAL_COMPARISONS } from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';

interface GentooSectionProps {
  embedded?: boolean;
}

export const GentooSection: React.FC<GentooSectionProps> = ({ embedded = false }) => {
  return (
    <section className={embedded ? "py-4 w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full"}>
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Gentoo : Technical Architecture
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Gentoo is Team Polar's second-generation rover, engineered to traverse 1,150 kilometres between two Antarctic stations in 2026, proving autonomous, solar-powered mobility as a sustainable alternative to kerosene-fuelled transport.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.15}>
        <ImagePlaceholder
          imageKey="gentooExterior"
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
                Airless 3D-Printed TPU Wheels
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Custom-designed airless, 3D-printed TPU wheels resist punctures and improve snow grip across variable Antarctic ice and compacted snow surfaces.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                6 m² Solar Panels & 24/7 Operations
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Equipped with 6 m² of solar panels, Gentoo operates 24/7 at a mean speed of 3 km/h under continuous polar summer daylight, maintaining battery stability.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                Aerodynamic Cuboid Shell
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                A cuboid shell shape was chosen specifically for aerodynamic stability in severe polar weather, allowing Gentoo to withstand katabatic winds up to 35 m/s.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                Sensor Fusion (LiDAR & Camera)
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                LiDAR and camera are used together for environmental mapping, generating high-contrast 3D spatial representations of snow, sastrugi, and crevasses.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                Adapted Road Car Software
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Autonomous navigation software stack adapted from autonomous road cars, retrained to recognise snow and ice rather than pedestrians and traffic.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                Insulated Sealed Core
              </h3>
              <p className="type-small-body text-[#252A34] leading-relaxed">
                Electronics and battery are housed in an insulated, environmentally sealed compartment, ensuring operational survival down to -40°C.
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
              Field Testing Results : Arjeplog, Sweden
            </h2>
          </div>

          <p className="type-body text-[#252A34] mb-6 max-w-3xl">
            The first testing of Gentoo in the snow was conducted over 3 days of snow testing in northern Sweden with 20 team members. The empirical findings provide concrete validation data:
          </p>

          <ImagePlaceholder
            imageKey="gentooWheelAssembly"
            aspectRatio="aspect-[21/9]"
            className="my-6"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="py-2">
              <span className="font-mono-data text-3xl font-semibold text-[#0B132B] block mb-1">
                11.3°
              </span>
              <span className="text-xs text-[#252A34] block">
                Incline climbed on snow and ice
              </span>
            </div>

            <div className="py-2">
              <span className="font-mono-data text-3xl font-semibold text-[#0B132B] block mb-1">
                834 N
              </span>
              <span className="text-xs text-[#252A34] block">
                Hard-packed snow pull force
              </span>
            </div>

            <div className="py-2">
              <span className="font-mono-data text-3xl font-semibold text-[#0B132B] block mb-1">
                1,300 N
              </span>
              <span className="text-xs text-[#252A34] block">
                Powder snow peak traction
              </span>
            </div>

            <div className="py-2">
              <span className="text-lg font-bold text-[#0B132B] block mb-1">
                Turning & Obstacles
              </span>
              <span className="type-small-body text-slate-700 block">
                Target areas for upcoming field optimization
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="my-10" />

      
      <ScrollReveal direction="up">
        <div id="gentoo-specs-table" className="my-8 scroll-mt-20">
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
                  <th className="py-3 px-3 font-semibold text-[#2A74C4]">Gentoo Value</th>
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
                      {spec.gentooValue}
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

