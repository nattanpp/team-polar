
export interface CatalogImage {
  id: string;
  title: string;
  url: string;
  filePath: string; 
  page: string;
  component: string;
  aspectRatio: string;
  recommendedDimensions: string;
  description: string;
  format: 'avif';
}

export const SITE_IMAGES: Record<string, CatalogImage> = {
  homeHero: {
    id: 'home-hero',
    title: 'Team Polar Antarctic Continental Traverse',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790751812/6ba3b3_653ebe89a71347ae8ca9f2929f7cbf27_mv2.avif',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790751812/6ba3b3_653ebe89a71347ae8ca9f2929f7cbf27_mv2.avif',
    page: 'Home Page',
    component: 'src/components/HomeSection.tsx',
    aspectRatio: '16:9 (Fullscreen Background)',
    recommendedDimensions: '1920x1080 px or higher',
    description: 'High-contrast Antarctic polar expedition photography on the hero backdrop.',
    format: 'avif',
  },

  homeTraverse: {
    id: 'home-traverse',
    title: 'Gentoo Rover Antarctic Traverse',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790752324/Capture_d_e%CC%81cran_2026-09-30_a%CC%80_09.11.57.png',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790752324/Capture_d_e%CC%81cran_2026-09-30_a%CC%80_09.11.57.png',
    page: 'Home Page',
    component: 'src/components/HomeSection.tsx',
    aspectRatio: '24:9 (Panoramic Banner)',
    recommendedDimensions: '1920x720 px or 2400x900 px',
    description: 'Polar expedition photography and rover traverse.',
    format: 'avif',
  },

  gentooExterior: {
    id: 'gentoo-exterior',
    title: 'Gentoo Autonomous Rover : Technical Exterior Assembly',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790752498/Capture_d_e%CC%81cran_2026-09-30_a%CC%80_09.14.53.png',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790752498/Capture_d_e%CC%81cran_2026-09-30_a%CC%80_09.14.53.png',
    page: 'Gentoo Rover Specifications',
    component: 'src/components/GentooSection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'Full-scale polar rover featuring 6 m² photovoltaic canopy, airless TPU wheels, and insulated cuboid core.',
    format: 'avif',
  },

  gentooWheelAssembly: {
    id: 'gentoo-wheel-assembly',
    title: 'Airless TPU 3D-Printed Lattice Wheel Assembly & Hub Integration',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80&fm=avif',
    filePath: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80&fm=avif',
    page: 'Gentoo Rover Specifications',
    component: 'src/components/GentooSection.tsx',
    aspectRatio: '16:9 (Standard)',
    recommendedDimensions: '1600x900 px',
    description: 'Custom-designed non-pneumatic 3D-printed TPU lattice wheel structure tested on extreme snow and ice surfaces.',
    format: 'avif',
  },

  iceCubeFieldTesting: {
    id: 'ice-cube-field-testing',
    title: 'Ice Cube 1st Gen Rover : Field Testing in Arjeplog, Sweden',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753999/6ba3b3_223635def49e46d4ace8818e59a15e51_mv2.avif',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753999/6ba3b3_223635def49e46d4ace8818e59a15e51_mv2.avif',
    page: 'Ice Cube Prototype Overview',
    component: 'src/components/IceCubeSection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'First-generation prototype undergoing autonomy validation and low-temperature battery performance trials.',
    format: 'avif',
  },

  iceCubeSensorMast: {
    id: 'ice-cube-sensor-mast',
    title: 'Ice Cube Sensor Mast & Solar Panel Integration Testing',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80&fm=avif',
    filePath: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80&fm=avif',
    page: 'Ice Cube Prototype Overview',
    component: 'src/components/IceCubeSection.tsx',
    aspectRatio: '16:9 (Standard)',
    recommendedDimensions: '1600x900 px',
    description: 'Perception suite testing including LiDAR, stereo cameras, and solar power generation under dynamic tilt angles.',
    format: 'avif',
  },

  storyFounding: {
    id: 'story-founding',
    title: 'Founding Team Polar Cohort & Early Conceptualization',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790752830/6ba3b3_378b92550eed468ca53ca0f0a902b140_mv2.avif',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790752830/6ba3b3_378b92550eed468ca53ca0f0a902b140_mv2.avif',
    page: 'Our Story & Development Timeline',
    component: 'src/components/StorySection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'Early prototype assembly, brainstorming, and initial vehicle CAD architecture at Eindhoven University of Technology.',
    format: 'avif',
  },

  teamCohort: {
    id: 'team-cohort',
    title: 'Team Polar Full Multi-Disciplinary Cohort & Rover Integration Hall',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753667/6ba3b3_8b92d3ff41fb4cefbd1df8a673bafbdb_mv2.avif',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753667/6ba3b3_8b92d3ff41fb4cefbd1df8a673bafbdb_mv2.avif',
    page: 'The Team & Governance',
    component: 'src/components/TeamSection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'Full team gathering of software, mechanical, electrical, and operations subteams.',
    format: 'avif',
  },

  partnersAssembly: {
    id: 'partners-assembly',
    title: 'Partner Component Integration & Bench Testing',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753089/6ba3b3_fd5116b013a74b39b4200e8d2b7dbfdd_mv2.avif',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753089/6ba3b3_fd5116b013a74b39b4200e8d2b7dbfdd_mv2.avif',
    page: 'Partners & Supporters',
    component: 'src/components/PartnersSection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'Collaborative engineering validation with industrial sponsors at Eindhoven high-tech laboratories.',
    format: 'avif',
  },

  pressUnveiling: {
    id: 'press-unveiling',
    title: 'Gentoo Vehicle Unveiling & Press Conference',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80&fm=avif',
    filePath: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80&fm=avif',
    page: 'Press & Media Updates',
    component: 'src/components/PressSection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'Official public reveal of the Gentoo Antarctic research rover design to media and university leadership.',
    format: 'avif',
  },

  contactHeadquarters: {
    id: 'contact-headquarters',
    title: 'Team Polar Headquarters at TU/e Eindhoven',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753812/6ba3b3_2c570bbf269841a69fcd26bc385c1d52_mv2.avif',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753812/6ba3b3_2c570bbf269841a69fcd26bc385c1d52_mv2.avif',
    page: 'Contact Information',
    component: 'src/components/ContactSection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'Primary operations facility at De Rondom 70 with vehicle integration bay and test apparatus.',
    format: 'avif',
  },

  joinWorkshop: {
    id: 'join-workshop',
    title: 'Team Polar Innovation Space Workshop',
    url: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753089/6ba3b3_fd5116b013a74b39b4200e8d2b7dbfdd_mv2.avif',
    filePath: 'https://res.cloudinary.com/pt3vo3y3/image/upload/v1790753089/6ba3b3_fd5116b013a74b39b4200e8d2b7dbfdd_mv2.avif',
    page: 'Join Team Polar',
    component: 'src/components/JoinSection.tsx',
    aspectRatio: '21:9 (Wide Landscape)',
    recommendedDimensions: '1920x820 px',
    description: 'Student engineers collaborating on mechanical CAD, electronics prototyping, and software integration at TU/e.',
    format: 'avif',
  },
};
