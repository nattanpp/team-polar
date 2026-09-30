import React from 'react';
import { LightFadeScroll } from './ScrollAnimation';
import { AntarcticaMap } from './AntarcticaMap';
import { AntarcticWeatherWidget } from './AntarcticWeatherWidget';
import { MISSION_FACTS } from '../data/teamData';

export const MissionSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <LightFadeScroll delay={0.05} duration={0.65}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Our Mission & Goal
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl mb-4 text-pretty">
            Antarctica is one of the most remote and unforgiving places on Earth: temperatures down to <span className="font-mono-data font-semibold text-[#0B132B]">-80°C</span>, katabatic winds exceeding <span className="font-mono-data font-semibold text-[#0B132B]">200 km/h</span>, and crevasses up to <span className="font-mono-data font-semibold text-[#0B132B]">100 metres</span> deep. Research logistics still depend heavily on kerosene-fuelled trucks and aircraft.
          </p>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            The goal is for Gentoo to traverse <span className="font-mono-data font-semibold text-[#0B132B]">1,150 kilometres</span> unassisted between two Antarctic research stations in 2026, proving autonomous, solar-powered mobility as a sustainable, zero-emission alternative.
          </p>
        </div>
      </LightFadeScroll>

      <div className="my-10" />

      
      <div id="threefold-mission" className="my-8 scroll-mt-20">
        <LightFadeScroll delay={0.08} duration={0.65}>
          <div className="mb-4">
            <h2 className="type-section text-[#0B132B]">
              The Threefold Mission
            </h2>
          </div>

          <p className="type-body text-[#1E293B] mb-8 max-w-3xl text-pretty">
            The mission is threefold: improve Antarctic mobility, develop innovative technology, and give team members a real professional learning environment.
          </p>
        </LightFadeScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MISSION_FACTS.threefoldMission.map((item, index) => (
            <LightFadeScroll key={index} delay={0.1 + index * 0.05} duration={0.65}>
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
            </LightFadeScroll>
          ))}
        </div>
      </div>

      <div className="my-14" />

      
      <div id="expedition-route" className="my-8 scroll-mt-20">
        <LightFadeScroll delay={0.08} duration={0.65}>
          <div className="mb-4">
            <h2 className="type-section text-[#0B132B]">
              The 1,150 km Continental Route
            </h2>
          </div>
          <p className="type-body text-[#1E293B] mb-8 max-w-3xl text-pretty">
            Gentoo will navigate from the coastal nunataks of Princess Elisabeth Antarctica Station (220 m elevation), ascending through steep katabatic wind zones and crevasse fields, up onto the high polar plateau to Kohnen Station (2,892 m elevation).
          </p>
        </LightFadeScroll>

        
        <div id="antarctic-route-map" className="my-8">
          <AntarcticaMap />
        </div>
      </div>

      <div className="my-14" />

      
      <div id="environmental-conditions" className="my-8 scroll-mt-20">
        <LightFadeScroll delay={0.08} duration={0.65}>
          <div className="mb-4">
            <h2 className="type-section text-[#0B132B]">
              Antarctic Environmental Thresholds
            </h2>
          </div>
          <p className="type-body text-[#1E293B] mb-8 max-w-3xl text-pretty">
            Operating across Queen Maud Land requires withstanding Earth's most severe operational thresholds while maintaining autonomous navigation and battery equilibrium.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="py-2">
              <span className="font-mono-data text-3xl font-bold text-[#0B132B] block mb-1">
                -80°C
              </span>
              <span className="type-small-body text-slate-700">
                Minimum inland Antarctic cold envelope requiring active thermal control
              </span>
            </div>

            <div className="py-2">
              <span className="font-mono-data text-3xl font-bold text-[#0B132B] block mb-1">
                &gt; 200 km/h
              </span>
              <span className="type-small-body text-slate-700">
                Katabatic winds draining down ice sheet slopes toward the coast
              </span>
            </div>

            <div className="py-2">
              <span className="font-mono-data text-3xl font-bold text-[#0B132B] block mb-1">
                Up to 100 m
              </span>
              <span className="type-small-body text-slate-700">
                Concealed glacial crevasses requiring real-time sub-surface LiDAR detection
              </span>
            </div>

            <div className="py-2">
              <span className="type-subsubsection text-[#0B132B] block mb-1">
                Zero-Emission
              </span>
              <span className="type-small-body text-slate-700">
                Replacing kerosene-fuelled heavy tractors and air transport with solar power
              </span>
            </div>
          </div>
        </LightFadeScroll>

        
        <div id="polar-weather-telemetry" className="my-8">
          <AntarcticWeatherWidget />
        </div>
      </div>
    </section>
  );
};
