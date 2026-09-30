import React, { useState } from 'react';
import { Send, ArrowDown, ArrowRight } from 'lucide-react';
import { SUBTEAMS } from '../data/teamData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ScrollReveal } from './ScrollAnimation';

interface Vacancy {
  id: string;
  title: string;
  subteamId: string;
  subteamName: string;
  color: string;
  discipline: 'all' | 'software' | 'mechanical' | 'electrical' | 'thermal' | 'business';
  disciplineLabel: string;
  type: string;
  degreeTarget: string;
  description: string;
  skills: string[];
}

const OPEN_VACANCIES: Vacancy[] = [
  {
    id: 'autonomy-slam',
    title: 'Autonomous Navigation & Polar SLAM Engineer',
    subteamId: 'autonomous',
    subteamName: 'Autonomous Driving Stack',
    color: '#8A3FFC',
    discipline: 'software',
    disciplineLabel: 'Software & Navigation',
    type: 'Part-time or Full-time',
    degreeTarget: 'BSc / MSc Computer Science, Robotics',
    description: 'Develop and retrain feature-sparse polar SLAM algorithms using LiDAR point clouds and stereo vision across featureless snow plains.',
    skills: ['ROS2 / C++', 'Point Cloud Library', 'Autonomous Navigation']
  },
  {
    id: 'crevasse-detection',
    title: 'Crevasse Detection & Sensor Fusion Specialist',
    subteamId: 'autonomous',
    subteamName: 'Autonomous Driving Stack',
    color: '#8A3FFC',
    discipline: 'software',
    disciplineLabel: 'Software & Navigation',
    type: 'Part-time (16–20h/wk)',
    degreeTarget: 'BSc / MSc Data Science, Applied Physics',
    description: 'Integrate sub-surface radar telemetry and optical density algorithms to detect concealed snow bridges and marginal glacial rifts in real-time.',
    skills: ['Sensor Fusion', 'Python / PyTorch', 'Radar Processing']
  },
  {
    id: 'wheel-materials',
    title: 'Airless 3D-Printed TPU Wheel Engineer',
    subteamId: 'suspension',
    subteamName: 'Suspension & Chassis',
    color: '#33B1FF',
    discipline: 'mechanical',
    disciplineLabel: 'Mechanical & Chassis',
    type: 'Part-time or Full-time',
    degreeTarget: 'BSc / MSc Mechanical, Materials Science',
    description: 'Engineer and FEA-simulate non-pneumatic elastomeric lattice structures that retain elasticity down to -50°C and distribute ground pressure over soft snow.',
    skills: ['SolidWorks / FEA', 'Additive Manufacturing', 'Elastomers']
  },
  {
    id: 'composite-chassis',
    title: 'Aerodynamic Composite Shell & Chassis Architect',
    subteamId: 'composites',
    subteamName: 'Structural Composites & Shell',
    color: '#BAE6FD',
    discipline: 'mechanical',
    disciplineLabel: 'Mechanical & Chassis',
    type: 'Part-time (16–20h/wk)',
    degreeTarget: 'BSc / MSc Mechanical, Aerospace Engineering',
    description: 'Design lightweight carbon/aramid sandwich panels capable of withstanding 200 km/h katabatic winds and rough sastrugi terrain impacts.',
    skills: ['Composite Layup', 'ANSYS Fluent (CFD)', 'Structural Mechanics']
  },
  {
    id: 'solar-mppt',
    title: 'Photovoltaic Array & MPPT Systems Lead',
    subteamId: 'solar',
    subteamName: 'Solar Array & Energy',
    color: '#F1C21B',
    discipline: 'electrical',
    disciplineLabel: 'Electrical & Solar',
    type: 'Part-time or Full-time',
    degreeTarget: 'BSc / MSc Electrical Engineering, Sustainable Energy',
    description: 'Maximize energy harvest from Gentoo’s 6 m² bifacial solar array under low-angle Antarctic sun and high albedo snow reflection.',
    skills: ['Power Electronics', 'MPPT Firmware', 'Solar Simulation']
  },
  {
    id: 'powertrain-bms',
    title: 'High-Voltage Battery & BMS Integration Engineer',
    subteamId: 'powertrain',
    subteamName: 'Powertrain & Battery',
    color: '#FF7EB6',
    discipline: 'electrical',
    disciplineLabel: 'Electrical & Solar',
    type: 'Part-time (16–20h/wk)',
    degreeTarget: 'BSc / MSc Electrical Engineering, Embedded Systems',
    description: 'Design CAN-bus telemetry, cell balancing circuits, and redundant safety interlocks for Gentoo’s sub-zero lithium-ion energy bank.',
    skills: ['Battery Management Systems', 'PCB Design (KiCad/Altium)', 'CAN-Bus']
  },
  {
    id: 'thermal-control',
    title: 'Sub-Zero Active Thermal Control Engineer',
    subteamId: 'thermal',
    subteamName: 'Thermal Management',
    color: '#FA4D56',
    discipline: 'thermal',
    disciplineLabel: 'Thermal & Testing',
    type: 'Part-time or Full-time',
    degreeTarget: 'BSc / MSc Applied Physics, Mechanical Engineering',
    description: 'Model heat transfer and design vacuum insulation, waste-heat recapture, and active positive temperature coefficient heating for computers.',
    skills: ['Thermal Modeling', 'Thermodynamics', 'Vacuum Insulation']
  },
  {
    id: 'partnership-relations',
    title: 'Corporate Sponsorship & External Relations Officer',
    subteamId: 'business',
    subteamName: 'Business & Operations',
    color: '#005D5D',
    discipline: 'business',
    disciplineLabel: 'Operations & Business',
    type: 'Part-time (16–20h/wk)',
    degreeTarget: 'BSc / MSc Industrial Engineering, Management, Marketing',
    description: 'Drive high-level sponsor outreach with industrial automation, renewable energy, and scientific instrumentation corporations worldwide.',
    skills: ['B2B Partner Outreach', 'Account Management', 'Pitch Presentations']
  }
];

export const JoinSection: React.FC = () => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantFaculty, setApplicantFaculty] = useState('');
  const [targetSubteam, setTargetSubteam] = useState(SUBTEAMS[0].id);
  const [technicalBackground, setTechnicalBackground] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleApplyForVacancy = (subteamId: string, roleTitle: string) => {
    setTargetSubteam(subteamId);
    setTechnicalBackground((prev) => 
      prev ? prev : `Applying specifically for the position: ${roleTitle}. Relevant coursework & experience: `
    );
    const formEl = document.getElementById('application-form');
    formEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    const subteamObj = SUBTEAMS.find((st) => st.id === targetSubteam);
    const subteamName = subteamObj ? subteamObj.name : targetSubteam;
    const subject = encodeURIComponent(`Student Application: ${applicantName} [${subteamName} Subteam]`);
    const body = encodeURIComponent(
      `Dear Team Polar Management & Subteam Leads,\n\nI would like to apply to join Team Polar.\n\nApplicant Details:\n- Name: ${applicantName}\n- University Email: ${applicantEmail}\n- Major / Study Programme: ${applicantFaculty || 'Not specified'}\n- Target Subteam: ${subteamName}\n\nTechnical Background & Experience:\n${technicalBackground || 'N/A'}\n\n---\nSent via Team Polar Student Intake Portal`
    );
    window.location.href = `mailto:info@teampolar.org?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
      
      <ScrollReveal direction="up" delay={0.05}>
        <div className="max-w-3xl">
          <h1 className="type-title mb-4">
            Join Team Polar : Engineering Vacancies
          </h1>
          <p className="type-body text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl text-pretty">
            Team Polar recruits students from Eindhoven University of Technology (TU/e) and affiliated institutions. Members commit to hands-on engineering, testing in cold climates, and operational readiness.
          </p>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.1}>
        <div className="mt-6 mb-8 flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('vacancies-roster');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B132B] text-white text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow-md hover:bg-[#162947] active:scale-[0.98] transition-all cursor-pointer font-semibold group"
          >
            <span>VIEW OPEN VACANCIES</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#7CBDE8] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </ScrollReveal>

      
      <ScrollReveal direction="up" delay={0.14}>
        <ImagePlaceholder
          imageKey="joinWorkshop"
          aspectRatio="aspect-[21/9]"
          className="my-8"
        />
      </ScrollReveal>

      <div className="my-12" />

      
      <div id="recruitment-standards" className="my-8">
        <ScrollReveal direction="up">
          <h2 className="type-section text-[#0B132B] mb-4">
            Recruitment Standards & Disciplines
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <ScrollReveal direction="up" delay={0.06}>
            <div className="py-2">
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                Time Commitment
              </h3>
              <p className="type-body text-[#1E293B] leading-relaxed text-pretty">
                Available for part-time (16–24 hours/week) or full-time (40 hours/week) positions. Team members participate in design reviews, shop fabrication, and field expeditions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12}>
            <div className="py-2">
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                14 Academic Majors
              </h3>
              <p className="type-body text-[#1E293B] leading-relaxed text-pretty">
                Open to Bachelor and Master students in Mechanical Engineering, Electrical Engineering, Computer Science, Data Science, Applied Physics, Industrial Design, and Business.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18}>
            <div className="py-2">
              <h3 className="type-subsubsection text-[#0B132B] mb-2">
                International Team
              </h3>
              <p className="type-body text-[#1E293B] leading-relaxed text-pretty">
                Join an 80% international cohort representing 25 nationalities working together in English at TU/e Innovation Space and Matrix.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="my-12" />

      
      <div id="vacancies-roster" className="my-8 scroll-mt-20">
        <ScrollReveal direction="up">
          <div className="mb-8">
            <span className="font-mono-data text-xs text-[#2A74C4] uppercase font-bold tracking-wider block mb-1">
              Recruitment Intake Roster
            </span>
            <h2 className="type-section text-[#0B132B]">
              Open Student Vacancies
            </h2>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {OPEN_VACANCIES.map((vacancy) => (
              <div
                key={vacancy.id}
                className="flex flex-col justify-between py-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full inline-block shrink-0"
                        style={{ backgroundColor: vacancy.color }}
                      />
                      <span className="font-mono-data text-xs text-slate-600 font-semibold uppercase">
                        {vacancy.subteamName}
                      </span>
                    </div>
                    <span className="font-mono-data text-xs text-[#2A74C4] font-medium">
                      {vacancy.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B] mb-2 leading-snug">
                    {vacancy.title}
                  </h3>

                  <p className="type-small-body text-slate-700 leading-relaxed mb-3 text-pretty">
                    {vacancy.description}
                  </p>

                  <div className="mb-3">
                    <span className="font-mono-data text-[10px] uppercase text-slate-400 block mb-0.5">
                      Academic Match
                    </span>
                    <span className="text-xs text-slate-800 font-medium">
                      {vacancy.degreeTarget}
                    </span>
                  </div>

                  
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-data text-slate-600 mb-5">
                    <span className="text-[10px] uppercase text-slate-400 mr-1">Skills:</span>
                    {vacancy.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-slate-700">
                        {skill}{sIdx < vacancy.skills.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleApplyForVacancy(vacancy.subteamId, vacancy.title)}
                    className="inline-flex items-center gap-2 text-xs font-mono-data uppercase tracking-wider font-semibold text-[#0B132B] hover:text-[#2A74C4] transition-colors cursor-pointer group"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2A74C4] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="my-12" />

      
      <ScrollReveal direction="up">
        <div id="application-form" className="my-8 py-4 scroll-mt-20">
          <div className="mb-6">
            <h2 className="type-section text-[#0B132B]">
              Student Intake Form
            </h2>
          </div>

        {formSubmitted ? (
          <div className="py-4">
            <div className="font-mono-data text-xs text-[#2A74C4] uppercase font-bold mb-2">
              APPLICATION RECORDED
            </div>
            <h3 className="type-subsection text-[#0B132B] mb-2">
              Application Received
            </h3>
            <p className="type-body text-[#1E293B] mb-4 max-w-2xl text-pretty">
              Thank you {applicantName}. Your application for the {targetSubteam.toUpperCase()} subteam has been sent to our Chief of Staff and subteam leads.
            </p>
            <div className="font-mono-data text-xs text-slate-700">
              CANDIDATE: {applicantName.toUpperCase()} | CONTACT: {applicantEmail}
            </div>
            <button
              onClick={() => setFormSubmitted(false)}
              className="mt-4 px-5 py-2.5 bg-[#0B132B] hover:bg-[#162947] text-white text-xs font-mono-data uppercase tracking-wider shadow-sm active:scale-[0.98] transition-all cursor-pointer font-medium"
            >
              SUBMIT ANOTHER APPLICATION
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="e.g. Alex de Jong"
                  className="w-full bg-white border border-slate-300 p-3 font-body text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                  University Email Address
                </label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="name@student.tue.nl"
                  className="w-full bg-white border border-slate-300 p-3 font-mono-data text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                  Study Programme / Major
                </label>
                <input
                  type="text"
                  value={applicantFaculty}
                  onChange={(e) => setApplicantFaculty(e.target.value)}
                  placeholder="e.g. Mechanical Engineering"
                  className="w-full bg-white border border-slate-300 p-3 font-body text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                  Primary Subteam of Interest
                </label>
                <select
                  value={targetSubteam}
                  onChange={(e) => setTargetSubteam(e.target.value)}
                  className="w-full bg-white border border-slate-300 p-3 font-body text-sm text-[#0B132B] focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors"
                >
                  {SUBTEAMS.map((st) => (
                    <option key={st.id} value={st.id}>
                      0{st.order}. {st.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-data text-[#0B132B] mb-1.5 font-semibold">
                Technical Background & Experience
              </label>
              <textarea
                rows={4}
                value={technicalBackground}
                onChange={(e) => setTechnicalBackground(e.target.value)}
                placeholder="Detail relevant software tooling, hardware experience, workshop skills, or academic interests."
                className="w-full bg-white border border-slate-300 p-3 font-body text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] shadow-2xs transition-colors leading-relaxed"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B132B] hover:bg-[#162947] text-white text-xs sm:text-sm font-mono-data tracking-wider uppercase shadow-sm hover:shadow-md active:scale-[0.98] transition-all cursor-pointer font-semibold group"
              >
                <Send className="w-4 h-4 text-[#7CBDE8]" />
                <span>SUBMIT APPLICATION (OPENS IN YOUR EMAIL)</span>
              </button>
              <a
                href="mailto:info@teampolar.org?subject=Student%20Recruitment%20Inquiry%20-%20Team%20Polar"
                className="text-xs font-mono-data text-[#0B132B] hover:text-[#2A74C4] underline font-medium"
              >
                or email recruitment directly (info@teampolar.org)
              </a>
            </div>
          </form>
        )}
      </div>
      </ScrollReveal>
    </section>
  );
};
