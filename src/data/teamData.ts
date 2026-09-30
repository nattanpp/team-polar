import { 
  Subteam, 
  PartnerTier, 
  PressEntry, 
  TechnicalSpecification, 
  BoardMember, 
  ManagementMember, 
  AdvisoryMember, 
  HistoryMilestone,
  PartnershipBenefit,
  BrochureChapter
} from '../types';

export const MISSION_DISTANCE_KM = 1150;

export const MISSION_FACTS = {
  distanceKm: 1150,
  targetYear: 2026,
  antarcticConditions: {
    minTemp: '-80°C',
    maxKatabaticWind: '200 km/h',
    maxCrevasseDepth: '100 metres',
    currentDependence: 'Kerosene-fuelled trucks and planes'
  },
  threefoldMission: [
    {
      title: 'Improve Antarctic Mobility',
      description: 'Replace fossil-fuelled logistics with zero-emission, autonomous solar-powered transit across 1,150 kilometres between two Antarctic research stations.'
    },
    {
      title: 'Develop Innovative Technology',
      description: 'Engineer cold-resilient robotics: custom 3D-printed TPU airless wheels, cuboid aerodynamic shell, sensor fusion (LiDAR & camera), and retrained autonomous software.'
    },
    {
      title: 'Real Professional Learning Environment',
      description: 'Provide an intensive multidisciplinary engineering environment where students develop, test, and qualify extreme-environment technology for polar operations.'
    }
  ]
};

export const TEAM_METRICS = {
  totalMembers: 57,
  fullTimeMembers: 8,
  academicMajors: 14,
  internationalPercent: 80,
  nationalitiesCount: 25,
  foundedYear: 2019,
  founderContact: 'Wilco van Rooijen (Antarctic Explorer)'
};

export const BOARD_MEMBERS: BoardMember[] = [
  { name: 'Jan Lenartowicz', role: 'Technical Manager' },
  { name: 'Ece Gungor', role: 'Team Manager' },
  { name: 'Polina Savelyeva', role: 'External Affairs Manager' },
  { name: 'Emils Juhna', role: 'Chief of Staff' }
];

export const MANAGEMENT_MEMBERS: ManagementMember[] = [
  { name: 'Mikel Holland Moritz', role: 'Power & Energy Function Manager', domain: 'Energy Management' },
  { name: 'Emile Moriette-Sala', role: 'Mobility & Navigation Function Manager', domain: 'Mobility & Navigation' },
  { name: 'Loay Nasriddin', role: 'Protection Function Manager', domain: 'Protection' },
  { name: 'Betul Sener', role: 'Comms & Data Function Manager', domain: 'Comms & Data' },
  { name: 'Dora Marušić', role: 'Business Manager', domain: 'Business' },
  { name: 'Savvas Saragiotis', role: 'Partnership Manager', domain: 'Business & Partners' },
  { name: 'Urte Pazusyte', role: 'Finance Manager', domain: 'Finance' },
  { name: 'Jan Sidelnik', role: 'Mechanical Lead Engineer', domain: 'Mechanical' },
  { name: 'Mehmet Kaan Sakallioglu', role: 'Electrical Lead Engineer', domain: 'Electrical' },
  { name: 'Bora Ozer', role: 'Autonomous Lead Engineer', domain: 'Autonomous' }
];

export const ADVISORY_BOARD: AdvisoryMember[] = [
  {
    name: 'Renno Hokwerda',
    role: 'Policy Officer',
    affiliation: 'Netherlands Polar Programme at the NWO'
  },
  {
    name: 'Florence Kuyper',
    role: 'Expedition Leader',
    affiliation: 'Polar Regions'
  },
  {
    name: 'Johan Berte',
    role: 'Chief Technology Officer',
    affiliation: 'AntarctiQ'
  },
  {
    name: 'Magnus Moore',
    role: 'Senior Business Developer',
    affiliation: 'TNO'
  }
];

export const SUBTEAMS: Subteam[] = [
  {
    id: 'marketing',
    order: 1,
    name: 'Marketing',
    color: '#B24018',
    leadRole: 'External Affairs Manager',
    leadName: 'Polina Savelyeva',
    engineers: [
      'Céline Pirra-Benchetrit',
      'Michael Giannoukakis',
      'Elif Kara',
      'Herman Wang'
    ],
    scope: 'External communications, scientific publications, rover reveal events, media relations, and public expedition briefings.',
    keyDeliverables: [
      'Rover Reveal Event execution at TU/e Auditorium',
      'International Arctic research collaboration and chapter co-authorship with SIOS',
      'Public milestone communications and recruitment campaign outreach'
    ]
  },
  {
    id: 'business',
    order: 2,
    name: 'Business',
    color: '#9D8C2B',
    leadRole: 'Business Manager',
    leadName: 'Dora Marušić (Partnerships: Savvas Saragiotis, Finance: Urte Pazusyte)',
    engineers: [
      'Arnav Gupta',
      'Gertrud Lukas',
      'Maria Rytter Huseby'
    ],
    scope: 'Institutional partnerships, funding grants (such as the €40,000 BOOST Grant), financial administration, and sponsor relations.',
    keyDeliverables: [
      'Secured €40,000 BOOST innovation grant from the Province of Noord-Brabant',
      'Partner tier relationship management across Emperor, King, Gentoo, Chinstrap, Adelie, and Rockhopper tiers',
      'Budget management and resource allocation for Sweden and Antarctic field operations'
    ]
  },
  {
    id: 'autonomous',
    order: 3,
    name: 'Autonomous',
    color: '#6C3CA6',
    leadRole: 'Autonomous Lead Engineer',
    leadName: 'Bora Ozer',
    engineers: [
      'Iago Hernando Santos',
      'Martina Ruiz Izaguirre',
      'Norbert Mazur',
      'Lars Kerkhof',
      'Tanusri Madhalam',
      'Giorgii Mamulashvili',
      'Stan Theunissen'
    ],
    scope: 'Autonomous software stack adapted from road cars and retrained for snow and ice, fusing LiDAR and camera data for environmental mapping and crevasse avoidance.',
    keyDeliverables: [
      'Autonomous software stack retrained to recognise snow, ice, and polar terrain instead of road traffic',
      'LiDAR and camera sensor fusion for real-time environmental mapping',
      'Unstructured polar route planning and crevasse hazard classification'
    ]
  },
  {
    id: 'data-coms',
    order: 4,
    name: 'Data coms',
    color: '#BA317D',
    leadRole: 'Comms & Data Function Manager',
    leadName: 'Betul Sener',
    engineers: [
      'Frederick Charles',
      'Domas Vrubliauskas',
      'Theo Bothma'
    ],
    scope: 'Sub-zero satellite communication uplinks, high-reliability polar data logging, sensor data packet aggregation, and long-range expedition telemetry transmission.',
    keyDeliverables: [
      'Satellite transceiver and Antarctic communication payload testing',
      'Real-time telemetry streaming and redundant data storage architectures',
      'High-bandwidth scientific data packet protocols for sensor payload integration'
    ]
  },
  {
    id: 'electrical',
    order: 5,
    name: 'Electrical',
    color: '#1A7B9B',
    leadRole: 'Electrical Lead Engineer',
    leadName: 'Mehmet Kaan Sakallioglu',
    engineers: [
      'Murat Tuna Akgun',
      'Bilge Yuce',
      'Nehir Gedek'
    ],
    scope: 'Power distribution, harness wiring, PCB engineering, sensor power rails, and sub-zero rated electrical hardware interlocks.',
    keyDeliverables: [
      'Power distribution and harness routing for extreme cold down to -40°C',
      'Sensor interface electronics for LiDAR and camera system power lines',
      'Fail-safe hardware interlocks and power management electronics'
    ]
  },
  {
    id: 'battery',
    order: 6,
    name: 'Battery',
    color: '#C88D1A',
    leadRole: 'Power & Energy Function Manager',
    leadName: 'Mikel Holland Moritz',
    engineers: [
      'Alicja Chabior',
      'Guillaume Salpetier',
      'Igor Derebecki',
      'Bas Coppus',
      'Ronan Bader',
      'Ysabel Milene Policar Visenio'
    ],
    scope: '6 m² solar panel array, cold-resilient battery pack, insulated environmentally sealed compartment, and maximum power point tracking (MPPT).',
    keyDeliverables: [
      '6 m² solar array integration delivering continuous power for 24/7 rover operation at 3 km/h',
      'Insulated and environmentally sealed battery and electronics compartment',
      'Maximum power point trackers (MPPT) optimized under the BOOST Innovation Grant'
    ]
  },
  {
    id: 'mobility',
    order: 7,
    name: 'Mobility',
    color: '#2A74C4',
    leadRole: 'Mobility & Navigation Function Manager',
    leadName: 'Emile Moriette-Sala',
    engineers: [
      'Afonso Saleiro',
      'Dominykas Laukaitis',
      'Povilas Kulis',
      'Dovydas Karvelis'
    ],
    scope: 'Rover suspension kinematics, sastrugi-traversing articulation, low-temperature electric drive hubs, and traction control for ice and packed snow.',
    keyDeliverables: [
      'High-torque sub-zero planetary wheel hub drive integration',
      'Articulated bogie suspension geometry tested on uneven snow sastrugi',
      'Traction vectoring algorithms to prevent wheel slip on glacial blue ice'
    ]
  },
  {
    id: 'mechanical',
    order: 8,
    name: 'Mechanical',
    color: '#66A024',
    leadRole: 'Mechanical Lead Engineer',
    leadName: 'Jan Sidelnik',
    engineers: [
      'Adomas Juska',
      'Maarten Zeggelaar',
      'Andrei Nastasa',
      'Juan Quemada Zabaleta',
      'Krishna Prakash',
      'Moritz Petry',
      'Rodrigo Agudo Segovia'
    ],
    scope: 'Structural chassis design, cuboid shell aerodynamics, and custom-designed airless, 3D-printed TPU wheels engineered to resist punctures and improve snow grip.',
    keyDeliverables: [
      'Custom airless 3D-printed TPU wheels (puncture-resistant, enhanced snow traction)',
      'Cuboid shell engineering for aerodynamic stability in katabatic winds up to 35 m/s',
      'Chassis structural FEA and mass optimization to meet the 320 kg vehicle specification'
    ]
  },
  {
    id: 'logistics',
    order: 9,
    name: 'Logistics',
    color: '#773714',
    leadRole: 'Logistics Lead',
    leadName: 'Daniel Hjelle & Antoni Liberak',
    engineers: [
      'Evgenia Filippou',
      'Elizaveta Bugrova',
      'Adham Shaaban'
    ],
    scope: 'Field testing expeditions (Arjeplog Sweden, Trondheim Norway), equipment transit, Antarctic expedition routing, and environmental compliance.',
    keyDeliverables: [
      'Logistical coordination of 20-member 3-day snow testing expedition to Arjeplog, Sweden',
      'Equipment transport and environmental safety clearance for polar regions',
      'Preparation for 2026 Antarctic station-to-station traverse operations'
    ]
  },
  {
    id: 'protection',
    order: 10,
    name: 'Protection',
    color: '#187E6D',
    leadRole: 'Protection Function Manager',
    leadName: 'Loay Nasriddin',
    engineers: [
      'Dominykas Laukaitis',
      'Rodrigo Agudo Segovia',
      'Ronan Bader'
    ],
    scope: 'Environmental sealing against fine polar drift snow, active thermal protection, crevasse safety bumpers, and emergency recovery anchorage.',
    keyDeliverables: [
      'IP67-grade drift snow seals engineered for sub-micron windblown crystals',
      'Thermal heating loop preventing electronic freeze-up during polar katabatic storms',
      'Frontal crevasse impact absorption structure and recovery harness points'
    ]
  }
];

export const PROGRAMME_HISTORY: HistoryMilestone[] = [
  {
    year: '2019',
    headline: 'Founding at TU/e as Honors Project',
    membersCount: '6 students',
    details: 'Team Polar was founded as an honors project at Eindhoven University of Technology. Antarctic explorer Wilco van Rooijen brought the project to TU/e, and 6 students took on the challenge to pioneer sustainable Antarctic mobility.'
  },
  {
    year: '2020 - 2021',
    headline: 'Initial Multi-Disciplinary Expansion',
    membersCount: '11 members',
    details: 'The team grew to 11 members representing 3 nationalities and 8 degree programmes, establishing the initial engineering foundations.'
  },
  {
    year: '2021 - 2022',
    headline: 'First Prototype Construction',
    membersCount: '17 part-time members',
    details: 'Grew to 17 part-time members and commenced construction of the team\'s first prototype rover, Ice Cube, to test the feasibility of polar robotic mobility.'
  },
  {
    year: '2022 - 2023',
    headline: 'Ice Cube Maiden Field Testing',
    membersCount: '27 members (80% international)',
    details: 'Expanded to 27 members representing 10 faculties (80% international). Ice Cube was tested for the first time, including a one-week field test with 12 members in Trondheim, Norway.'
  },
  {
    year: '2023 - 2024',
    headline: 'Mission Use Case Formalization',
    membersCount: '35 members',
    details: 'Grew to 35 members. The engineering focus shifted to establishing a concrete use case for the continental Antarctic mission: an unsupported 1,150 km traverse between two stations.'
  },
  {
    year: '2024 - 2025',
    headline: 'Gentoo Rover Design & Construction',
    membersCount: '47 members',
    details: 'Grew to 47 members. The team designed and built the second-generation rover, Gentoo, featuring custom 3D-printed TPU airless wheels, a 6 m² solar array, and a retrained autonomous stack.'
  },
  {
    year: '2025 - 2026',
    headline: 'Pre-Antarctic Snow Trials & Mission Readiness',
    membersCount: '57 members (8 full-time)',
    details: 'Currently 57 members (including 8 full-time) representing 14 majors and 25 nationalities. Successfully snow-tested Gentoo in Arjeplog, Sweden, and preparing for the 2026 Antarctic traverse.'
  }
];

export const TECHNICAL_COMPARISONS: TechnicalSpecification[] = [
  {
    metric: 'Vehicle Classification',
    value: 'Generation & Architecture',
    gentooValue: 'Second generation, named after Antarctic penguin species',
    iceCubeValue: 'First prototype, first generation test platform',
    notes: 'Direct design evolution from prototype to traverse vehicle'
  },
  {
    metric: 'Total Vehicle Mass',
    value: 'Weight',
    gentooValue: '320 kg',
    iceCubeValue: '350 kg',
    notes: 'Custom composite and 3D printing engineering ensuring structural rigidity and solar payload support (320 kg total mass)'
  },
  {
    metric: 'Photovoltaic Array',
    value: 'Solar Surface Area',
    gentooValue: '6 m²',
    iceCubeValue: '2 m²',
    notes: '3x solar capture area enabling continuous 24/7 polar summer operation'
  },
  {
    metric: 'Locomotion & Wheels',
    value: 'Running Gear',
    gentooValue: 'Custom-designed airless, 3D-printed TPU wheels (puncture-resistant, improved snow grip)',
    iceCubeValue: '28 inch wheels',
    notes: 'Engineered specifically for Antarctic snow compaction and crevasse margins'
  },
  {
    metric: 'Autonomy & Control',
    value: 'Navigation Level',
    gentooValue: 'Fully autonomous stack (adapted from road cars, retrained for snow/ice)',
    iceCubeValue: 'Remote-controlled, not autonomous',
    notes: 'Ice Cube developed and benchmarked the navigation stack before Gentoo'
  },
  {
    metric: 'Environmental Sensors',
    value: 'Perception Suite',
    gentooValue: 'LiDAR and camera used together for environmental mapping',
    iceCubeValue: 'Test sensors & remote telemetry suite',
    notes: 'Fuses spatial depth and surface visual contrast across unstructured snow'
  },
  {
    metric: 'Operational Velocity & Range',
    value: 'Speed & Endurance',
    gentooValue: 'Operates 24/7 at a mean speed of 3 km/h (~72 km/day over 1,150 km)',
    iceCubeValue: 'Range: 65 km per day',
    notes: 'Gentoo designed for unbroken continuous traverse between two stations'
  },
  {
    metric: 'Operating Temperature & Weather',
    value: 'Environmental Thresholds',
    gentooValue: 'Down to -40°C; withstands katabatic winds up to 35 m/s',
    iceCubeValue: 'Tested in Trondheim, Norway sub-zero snow conditions',
    notes: 'Insulated, environmentally sealed electronics and battery compartment'
  },
  {
    metric: 'Chassis Dimensions',
    value: 'Outer Envelope',
    gentooValue: '216 cm wide × 192 cm long × 166 cm tall',
    iceCubeValue: 'First generation prototype envelope',
    notes: 'Gentoo uses a cuboid shell shape chosen for aerodynamic stability'
  },
  {
    metric: 'Construction Methodology',
    value: 'Fabrication',
    gentooValue: 'Custom-engineered insulated compartment, 3D-printed TPU wheels, aerodynamic cuboid shell',
    iceCubeValue: 'Built mainly from off-the-shelf components',
    notes: 'Transitioned from COTS testbed to mission-custom polar engineering'
  },
  {
    metric: 'Key Field Testing Site',
    value: 'Proving Ground',
    gentooValue: 'Arjeplog, Sweden (3 days, 20 members, 11.3° incline, up to 1,300 N traction)',
    iceCubeValue: 'Trondheim, Norway (1 week, 12 members, chosen for Antarctic similarity)',
    notes: 'Empirical verification under real polar-analogue snow and ice conditions'
  }
];

export const PARTNER_TIERS: PartnerTier[] = [
  {
    tierName: 'Emperor Tier',
    speciesName: 'Emperor Penguin (Aptenodytes forsteri)',
    speciesHeightCm: 120,
    description: 'Premier tier named after the tallest penguin species (~120 cm). Founding university base and national research institutes.',
    partners: [
      'TU/e (Eindhoven University of Technology)',
      'TNO (Netherlands Organisation for Applied Scientific Research)'
    ]
  },
  {
    tierName: 'King Tier',
    speciesName: 'King Penguin (Aptenodytes patagonicus)',
    speciesHeightCm: 90,
    description: 'Second tier named after the second tallest penguin species (~90 cm). Core institutional and semiconductor technology partners.',
    partners: [
      'TU/e Innovation Space',
      'NXP Semiconductors'
    ]
  },
  {
    tierName: 'Gentoo Tier',
    speciesName: 'Gentoo Penguin (Pygoscelis papua)',
    speciesHeightCm: 75,
    description: 'Third tier named after the rover’s namesake species (~75 cm). High-tier engineering, simulation, solar, and apparel partners.',
    partners: [
      'EY',
      'MITO Solar',
      'Holit',
      'Septentrio',
      'Infinite Simulation Systems (Ansys)',
      'Altium',
      'Snickers Workwear'
    ]
  },
  {
    tierName: 'Chinstrap Tier',
    speciesName: 'Chinstrap Penguin (Pygoscelis antarcticus)',
    speciesHeightCm: 68,
    description: 'Fourth tier named after the Chinstrap penguin (~68 cm). Key technical components, electrical connectivity, and university funds.',
    partners: [
      'Universiteitsfonds Eindhoven (UFe)',
      'RS',
      'Uithof',
      'Phoenix Contact'
    ]
  },
  {
    tierName: 'Adelie Tier',
    speciesName: 'Adélie Penguin (Pygoscelis adeliae)',
    speciesHeightCm: 70,
    description: 'Fifth tier named after the Adélie penguin (~70 cm). Embedded engineering software, electronic components, and fabrication equipment.',
    partners: [
      'Segger',
      'Baeken',
      'TU/e TREE',
      'Würth Elektronik',
      'Altair',
      'Farnell',
      'Amada'
    ]
  },
  {
    tierName: 'Rockhopper Tier & Other Supporters',
    speciesName: 'Rockhopper Penguin (Eudyptes chrysocome)',
    speciesHeightCm: 50,
    description: 'Supporters tier named after the agile Rockhopper penguin (~50 cm). Specialized component suppliers, composite providers, and precision laser manufacturers.',
    partners: [
      'Siemens',
      'mobeye',
      'Imperx',
      'Nijkerk Electronics',
      'epic',
      'easycomposites',
      'AQC',
      'Tulip',
      'Sugatsune',
      'Aisler',
      'De Vries Constructie & Lasertechniek',
      'Eriks',
      'Gochermann Solar Technology'
    ]
  }
];

export const PARTNERSHIP_BENEFITS_MATRIX: PartnershipBenefit[] = [
  {
    category: 'Brand & Rover Exposure',
    deliverable: 'Company logo on Gentoo exploration rover',
    emperor: 'Primary front & sides (XL)',
    king: 'Prominent side flanks (L)',
    gentoo: 'Rover body panels (M)',
    chinstrap: 'Chassis perimeter (S)',
    adelie: 'Support panel (XS)',
    rockhopper: 'Digital only'
  },
  {
    category: 'Brand & Rover Exposure',
    deliverable: 'Brand presence on team apparel & expedition gear',
    emperor: 'Chest & sleeves (Primary)',
    king: 'Sleeves & back (Secondary)',
    gentoo: 'Team jacket badge',
    chinstrap: 'Team uniform listing',
    adelie: false,
    rockhopper: false
  },
  {
    category: 'Brand & Rover Exposure',
    deliverable: 'Recognition on expedition basecamp flag & transport trailer',
    emperor: true,
    king: true,
    gentoo: true,
    chinstrap: false,
    adelie: false,
    rockhopper: false
  },
  {
    category: 'Talent & Recruitment',
    deliverable: 'Access to multidisciplinary engineering CV pool (57 talents)',
    emperor: 'Unrestricted & priority direct intro',
    king: 'Full talent directory access',
    gentoo: 'Curated graduate CV book',
    chinstrap: 'Job board vacancy distribution',
    adelie: 'Job board distribution',
    rockhopper: false
  },
  {
    category: 'Talent & Recruitment',
    deliverable: 'Dedicated in-house recruitment Case Night at TU/e',
    emperor: 'Exclusive dedicated evening',
    king: 'Shared partner case session',
    gentoo: 'Challenge workshop slot',
    chinstrap: false,
    adelie: false,
    rockhopper: false
  },
  {
    category: 'Talent & Recruitment',
    deliverable: 'Direct project collaboration & thesis student placements',
    emperor: true,
    king: true,
    gentoo: 'Upon request',
    chinstrap: false,
    adelie: false,
    rockhopper: false
  },
  {
    category: 'Marketing & Digital PR',
    deliverable: 'Dedicated collaborative social media campaign (LinkedIn & IG)',
    emperor: 'Multi-post campaign + video feature',
    king: 'Dedicated spotlight feature post',
    gentoo: 'Partner welcome announcement',
    chinstrap: 'Group partner acknowledgement',
    adelie: 'Digital acknowledgement',
    rockhopper: 'Digital acknowledgement'
  },
  {
    category: 'Marketing & Digital PR',
    deliverable: 'Official press release co-branding & media kit rights',
    emperor: true,
    king: true,
    gentoo: true,
    chinstrap: true,
    adelie: false,
    rockhopper: false
  },
  {
    category: 'Events & Speaking Engagements',
    deliverable: 'Keynote presentation & tech talk by rover engineers & Wilco van Rooijen',
    emperor: 'Annual in-company keynote',
    king: 'Technical guest lecture',
    gentoo: 'On-campus seminar session',
    chinstrap: false,
    adelie: false,
    rockhopper: false
  },
  {
    category: 'Events & Speaking Engagements',
    deliverable: 'VIP invitations to Rover Unveilings, Roll-outs & Partner Days',
    emperor: 'VIP front row (8 passes)',
    king: 'Reserved seating (4 passes)',
    gentoo: 'Partner passes (2 passes)',
    chinstrap: 'Partner passes (2 passes)',
    adelie: 'General invitation',
    rockhopper: 'General invitation'
  }
];

export const BROCHURE_CHAPTERS: BrochureChapter[] = [
  {
    id: 'mission-traverse',
    title: 'The Mission Directive: 1,150 km Across Antarctica',
    pageRange: 'Pages 2–5',
    summary: 'An unassisted, zero-emission Antarctic traverse from Princess Elisabeth Antarctica to Kohnen Station. Demonstrating that autonomous solar rovers can replace heavy diesel vehicles in extreme research environments.',
    highlights: [
      '1,150 km traverse across the polar plateau without human trailing convoys',
      'Replacing kerosene/diesel emissions with 100% solar and cold-stabilized battery energy',
      'Continuous 24/7 autonomous travel under the midnight polar sun'
    ]
  },
  {
    id: 'gentoo-specs',
    title: 'The Gentoo Rover: Engineering Architecture & Blueprint',
    pageRange: 'Pages 6–9',
    summary: 'The technical specifications and innovation breakthroughs behind Gentoo: 320 kg total mass, 6 m² photovoltaic canopy, 3D-printed TPU airless tires, and sub-zero autonomous sensor fusion.',
    highlights: [
      '320 kg lightweight vehicle envelope (216 cm W × 192 cm L × 166 cm H)',
      'Custom 3D-printed TPU airless wheels for sastrugi and crevasse mitigation',
      'LiDAR & camera sensor fusion with road-car autonomy software retrained for polar snow',
      'Insulated hermetic core engineered for survivability down to -80°C'
    ]
  },
  {
    id: 'triple-value',
    title: 'Why Partner with Team Polar: The Triple Value Proposition',
    pageRange: 'Pages 10–13',
    summary: 'Partnering with Team Polar connects your enterprise to cutting-edge clean-tech innovation, high-visibility ESG climate impact, and an extraordinary pipeline of multidisciplinary engineering talent.',
    highlights: [
      'Technological Validation: Extreme-cold testing proving materials, sensors, and power systems in polar conditions',
      'Direct Talent Access: Connect with 57 driven engineering students from 14 degree disciplines at TU/e',
      'Global Visibility: Extensive media coverage across academic journals, national broadcasting, and polar expeditions'
    ]
  },
  {
    id: 'tier-benefits',
    title: 'Partnership Tiers & Deliverables Matrix',
    pageRange: 'Pages 14–17',
    summary: 'Six structured partnership tiers named after Antarctic penguin species (Emperor, King, Gentoo, Chinstrap, Adélie, and Rockhopper) offering tailored visibility, recruitment access, and technical collaboration.',
    highlights: [
      'Emperor & King: Front-and-center rover branding, exclusive case nights, keynotes, and executive access',
      'Gentoo & Chinstrap: Chassis logo integration, recruitment distribution, and joint social media PR',
      'Adélie & Rockhopper: Component testing, software licensing visibility, and technical acknowledgements'
    ]
  },
  {
    id: 'recruitment-case-nights',
    title: 'Student Recruitment, Case Nights & Academic Synergies',
    pageRange: 'Pages 18–19',
    summary: 'How corporate partners engage directly with TU/e students through dedicated case nights, guest lectures, engineering challenge workshops, and recruitment pipelines.',
    highlights: [
      'On-campus Case Nights hosted at TU/e Innovation Space',
      'Direct interview and talent matchmaking with senior subteam leads',
      'Sponsored graduation theses and specialized sub-zero engineering research topics'
    ]
  },
  {
    id: 'testing-contact',
    title: 'Field Validation Roadmap & Partnership Desk',
    pageRange: 'Pages 20–21',
    summary: 'Proving grounds from Trondheim Norway to Arjeplog Sweden, leading to the Austral 2026 departure. Official contacts for partnership onboarding and press briefings.',
    highlights: [
      'Empirical snow trials validated: 11.3° incline and 1,300 N peak traction in northern Sweden',
      'Partnership Manager: Savvas Saragiotis (info@teampolar.org)',
      'Media & External Affairs: Polina Savelyeva | TU/e Campus Eindhoven'
    ]
  }
];

export const PRESS_MENTIONS: PressEntry[] = [
  {
    id: 'news-svalbard-2026',
    date: '31 July 2026',
    headline: 'Research in Svalbard: Team Polar Contributes to International Arctic Research',
    summary: 'Team Polar co-authored a chapter on autonomous rover platforms for environmental observation, submitted for peer review, as part of a collaboration with the Svalbard Integrated Arctic Earth Observing System (SIOS).',
    category: 'Scientific Publication'
  },
  {
    id: 'news-reveal-2026',
    date: '23 May 2026',
    headline: 'Rover Reveal Event: Unveiling Gentoo',
    summary: 'Gentoo was formally revealed to partners, friends, and family at the TU/e Auditorium, showcasing its custom 3D-printed TPU airless wheels, cuboid aerodynamic shell, and 6 m² solar array.',
    category: 'Milestone Reveal'
  },
  {
    id: 'news-arjeplog-2026',
    date: '4 May 2026',
    headline: 'Testing Trip to Arjeplog: First Testing of Gentoo in the Snow',
    summary: '3 days of snow testing in northern Sweden with 20 members. Gentoo climbed an 11.3 degree incline on snow and ice. Traction averaged 834 N on hard-packed snow and 1,300 N on powder. Obstacle traversability and turning radius were identified as areas needing further work.',
    category: 'Field Testing'
  },
  {
    id: 'news-sprint-day-2025',
    date: '10 June 2025',
    headline: 'Sprint Day Highlights',
    summary: 'Comprehensive progress updates delivered across Energy Management, Mechanical Systems, Shell Development, Autonomy & Control, and Marketing.',
    category: 'Technical Review'
  },
  {
    id: 'news-boost-grant-2025',
    date: '30 April 2025',
    headline: 'BOOST Innovation Grant Success: €40,000 Awarded',
    summary: 'Team Polar received a 40,000 euro grant from BOOST and the Province of Noord-Brabant to develop cold-resilient batteries, maximum power point trackers, and solar panels.',
    category: 'Grant & Funding'
  },
  {
    id: 'news-atlas-event-2025',
    date: '10 March 2025',
    headline: 'Atlas Recruitment Event',
    summary: 'Recruitment event with over 15 TU/e student teams present, attracting multidisciplinary engineering candidates to the Team Polar intake cohort.',
    category: 'Recruitment'
  }
];

export const CONTACT_INFO = {
  primaryLocation: {
    title: 'Team Polar Primary Headquarters',
    street: 'De Rondom 70',
    postalCode: '5612 AP',
    city: 'Eindhoven',
    country: 'The Netherlands',
    coordinates: '51.4485° N, 5.4907° E'
  },
  secondLocation: {
    title: 'Second Location',
    facility: 'Matrix',
    street: 'Het Kranenveld 12',
    postalCode: '5612 AE',
    city: 'Eindhoven',
    country: 'The Netherlands'
  },
  phone: '+31 6 51 29 81 70',
  email: 'info@teampolar.org',
  social: [
    { platform: 'Instagram', url: 'https://instagram.com/teampolar_tue', handle: '@teampolar_tue' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/team-polar', handle: 'Team Polar' },
    { platform: 'YouTube', url: 'https://youtube.com/@teampolar', handle: 'Team Polar' }
  ]
};
