import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { PageTab } from '../types';
import { GentooSection } from './GentooSection';
import { IceCubeSection } from './IceCubeSection';
import { TECHNICAL_COMPARISONS } from '../data/teamData';
import { ScrollReveal } from './ScrollAnimation';

interface RoversSectionProps {
  initialRover?: 'gentoo' | 'ice-cube';
  onNavigate?: (tab: PageTab) => void;
}

export const RoversSection: React.FC<RoversSectionProps> = ({ initialRover = 'gentoo', onNavigate }) => {
  const [selectedRover, setSelectedRover] = useState<'gentoo' | 'ice-cube' | 'comparison'>(initialRover);

  useEffect(() => {
    if (initialRover) {
      setSelectedRover(initialRover);
    }
  }, [initialRover]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl mb-8">
          <h1 className="type-title mb-4">
            Rovers
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Team Polar develops autonomous, solar-powered rovers engineered to withstand continental Antarctic extremes down to -80°C and 200 km/h katabatic winds. Select a rover platform below to inspect engineering architectures, field trial logs, and subzero subsystem specifications.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.12}>
        <div className="my-8">
          <div className="text-xs text-slate-600 mb-3 uppercase tracking-wider font-semibold">
            Select Rover Platform:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <button
              onClick={() => setSelectedRover('gentoo')}
              className={`text-left p-5 transition-all cursor-pointer border ${
                selectedRover === 'gentoo'
                  ? 'bg-[#0B132B] text-white shadow-md border-[#0B132B] ring-2 ring-[#0B132B]'
                  : 'bg-white text-[#1E293B] border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 shadow-2xs'
              } active:scale-[0.99]`}
            >
              <div className="flex items-center justify-between mb-2">
                <span 
                  className={`font-mono-data text-xs font-bold uppercase tracking-wider ${
                    selectedRover === 'gentoo' ? 'text-[#7CBDE8]' : 'text-[#2A74C4]'
                  }`}
                >
                  2ND GEN • CURRENT ROVER
                </span>
                <span className={`text-xs font-mono-data font-medium ${selectedRover === 'gentoo' ? 'text-slate-300' : 'text-slate-500'}`}>
                  2024–PRESENT
                </span>
              </div>
              <h2 className={`text-xl font-bold mb-2 ${selectedRover === 'gentoo' ? 'text-white' : 'text-[#0B132B]'}`}>
                Gentoo Rover
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${selectedRover === 'gentoo' ? 'text-slate-200' : 'text-slate-600'}`}>
                320 kg lightweight composite vehicle with 6 m² photovoltaic canopy, custom 3D-printed TPU airless tires, and autonomous sensor fusion.
              </p>
            </button>

            
            <button
              onClick={() => setSelectedRover('ice-cube')}
              className={`text-left p-5 transition-all cursor-pointer border ${
                selectedRover === 'ice-cube'
                  ? 'bg-[#0B132B] text-white shadow-md border-[#0B132B] ring-2 ring-[#0B132B]'
                  : 'bg-white text-[#1E293B] border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 shadow-2xs'
              } active:scale-[0.99]`}
            >
              <div className="flex items-center justify-between mb-2">
                <span 
                  className={`font-mono-data text-xs font-bold uppercase tracking-wider ${
                    selectedRover === 'ice-cube' ? 'text-[#7CBDE8]' : 'text-[#2A74C4]'
                  }`}
                >
                  1ST GEN • MAIDEN PROTOTYPE
                </span>
                <span className={`text-xs font-mono-data font-medium ${selectedRover === 'ice-cube' ? 'text-slate-300' : 'text-slate-500'}`}>
                  2021–2023
                </span>
              </div>
              <h2 className={`text-xl font-bold mb-2 ${selectedRover === 'ice-cube' ? 'text-white' : 'text-[#0B132B]'}`}>
                Ice Cube Testbed
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${selectedRover === 'ice-cube' ? 'text-slate-200' : 'text-slate-600'}`}>
                350 kg steel prototype that completed polar trials in Trondheim, Norway, proving subzero powertrain and autonomous feasibility.
              </p>
            </button>

            
            <button
              onClick={() => setSelectedRover('comparison')}
              className={`text-left p-5 transition-all cursor-pointer border ${
                selectedRover === 'comparison'
                  ? 'bg-[#0B132B] text-white shadow-md border-[#0B132B] ring-2 ring-[#0B132B]'
                  : 'bg-white text-[#1E293B] border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 shadow-2xs'
              } active:scale-[0.99]`}
            >
              <div className="flex items-center justify-between mb-2">
                <span 
                  className={`font-mono-data text-xs font-bold uppercase tracking-wider ${
                    selectedRover === 'comparison' ? 'text-[#7CBDE8]' : 'text-[#2A74C4]'
                  }`}
                >
                  ENGINEERING MATRIX
                </span>
                <span className={`text-xs font-mono-data font-medium ${selectedRover === 'comparison' ? 'text-slate-300' : 'text-slate-500'}`}>
                  SIDE-BY-SIDE
                </span>
              </div>
              <h2 className={`text-xl font-bold mb-2 ${selectedRover === 'comparison' ? 'text-white' : 'text-[#0B132B]'}`}>
                Rover Comparison
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${selectedRover === 'comparison' ? 'text-slate-200' : 'text-slate-600'}`}>
                Direct specification matrix contrasting vehicle mass, chassis composites, running gear, solar canopy, and autonomous stacks.
              </p>
            </button>
          </div>
        </div>
      </ScrollReveal>

      
      <div id="active-rover-view" className="mt-8">
        {selectedRover === 'gentoo' && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono-data text-xs text-[#2A74C4] font-bold uppercase">
                ACTIVE VIEW : GENTOO (2ND GEN ROVER)
              </span>
              <button
                onClick={() => setSelectedRover('ice-cube')}
                className="inline-flex items-center gap-1 text-xs font-mono-data text-[#0B132B] hover:text-[#2A74C4] font-semibold cursor-pointer group transition-colors"
              >
                <span>Switch to Ice Cube Prototype</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <GentooSection embedded />
          </div>
        )}

        {selectedRover === 'ice-cube' && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono-data text-xs text-[#2A74C4] font-bold uppercase">
                ACTIVE VIEW : ICE CUBE (1ST GEN PROTOTYPE)
              </span>
              <button
                onClick={() => setSelectedRover('gentoo')}
                className="inline-flex items-center gap-1 text-xs font-mono-data text-[#0B132B] hover:text-[#2A74C4] font-semibold cursor-pointer group transition-colors"
              >
                <span>Switch to Gentoo Rover</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <IceCubeSection embedded />
          </div>
        )}

        {selectedRover === 'comparison' && (
          <div className="py-4">
            <div className="mb-4">
              <h2 className="type-section text-[#0B132B]">
                Full Architectural Comparison
              </h2>
            </div>
            <p className="type-body text-[#1E293B] mb-6 max-w-3xl text-pretty">
              Each subsystem on Gentoo is the direct culmination of testing lessons learned during Ice Cube's snow trials in Trondheim, Norway.
            </p>

            <div className="overflow-x-auto py-2 -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="min-w-[640px] w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="uppercase tracking-wider text-[#0B132B]">
                    <th className="py-3 px-3 font-semibold">Subsystem Parameter</th>
                    <th className="py-3 px-3 text-[#2A74C4] font-bold">Gentoo (2nd Gen Rover)</th>
                    <th className="py-3 px-3 text-[#0B132B] font-semibold">Ice Cube (1st Gen Prototype)</th>
                    <th className="py-3 px-3 font-mono-data text-xs text-slate-600">Engineering Evolution</th>
                  </tr>
                </thead>
                <tbody className="text-[#1E293B]">
                  {TECHNICAL_COMPARISONS.map((spec, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3 font-medium text-[#0B132B]">
                        {spec.metric}
                      </td>
                      <td className="py-3 px-3 font-mono-data text-[#2A74C4] font-bold">
                        {spec.gentooValue}
                      </td>
                      <td className="py-3 px-3 font-mono-data text-[#1E293B] font-medium">
                        {spec.iceCubeValue}
                      </td>
                      <td className="py-3 px-3 text-xs text-slate-600">
                        {spec.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <button
                onClick={() => setSelectedRover('gentoo')}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0B132B] hover:bg-[#162947] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Inspect Gentoo Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7CBDE8]" />
              </button>
              <button
                onClick={() => setSelectedRover('ice-cube')}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-[#0B132B] border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-xs font-semibold uppercase tracking-wider shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Inspect Ice Cube Details</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
