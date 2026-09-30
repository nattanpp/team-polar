import React from 'react';
import { SITE_IMAGES } from '../data/imageCatalog';

interface ImagePlaceholderProps {
  label?: string;
  caption?: string;
  aspectRatio?: string;
  subtext?: string;
  className?: string;
  src?: string;
  imageKey?: keyof typeof SITE_IMAGES;
  fullBleed?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  aspectRatio = "aspect-[21/9]",
  className = "my-10",
  src,
  imageKey,
  label,
  fullBleed = true,
}) => {
  let imageSrc = src;
  if (!imageSrc && imageKey && SITE_IMAGES[imageKey]) {
    imageSrc = SITE_IMAGES[imageKey].url || SITE_IMAGES[imageKey].filePath;
  }

  if (!imageSrc) {
    const labelLower = (label || '').toLowerCase();
    if (labelLower.includes('traverse') || labelLower.includes('simulation') || labelLower.includes('expanse')) {
      imageSrc = SITE_IMAGES.homeTraverse.url || SITE_IMAGES.homeTraverse.filePath;
    } else if (labelLower.includes('wheel') || labelLower.includes('lattice')) {
      imageSrc = SITE_IMAGES.gentooWheelAssembly.url || SITE_IMAGES.gentooWheelAssembly.filePath;
    } else if (labelLower.includes('gentoo')) {
      imageSrc = SITE_IMAGES.gentooExterior.url || SITE_IMAGES.gentooExterior.filePath;
    } else if (labelLower.includes('mast') || labelLower.includes('sensor')) {
      imageSrc = SITE_IMAGES.iceCubeSensorMast.url || SITE_IMAGES.iceCubeSensorMast.filePath;
    } else if (labelLower.includes('ice cube') || labelLower.includes('sweden') || labelLower.includes('arjeplog')) {
      imageSrc = SITE_IMAGES.iceCubeFieldTesting.url || SITE_IMAGES.iceCubeFieldTesting.filePath;
    } else if (labelLower.includes('story') || labelLower.includes('founding') || labelLower.includes('conceptualization')) {
      imageSrc = SITE_IMAGES.storyFounding.url || SITE_IMAGES.storyFounding.filePath;
    } else if (labelLower.includes('cohort') || labelLower.includes('team')) {
      imageSrc = SITE_IMAGES.teamCohort.url || SITE_IMAGES.teamCohort.filePath;
    } else if (labelLower.includes('partner') || labelLower.includes('sourcing')) {
      imageSrc = SITE_IMAGES.partnersAssembly.url || SITE_IMAGES.partnersAssembly.filePath;
    } else if (labelLower.includes('press') || labelLower.includes('media') || labelLower.includes('unveil')) {
      imageSrc = SITE_IMAGES.pressUnveiling.url || SITE_IMAGES.pressUnveiling.filePath;
    } else if (labelLower.includes('headquarters') || labelLower.includes('campus') || labelLower.includes('facilities')) {
      imageSrc = SITE_IMAGES.contactHeadquarters.url || SITE_IMAGES.contactHeadquarters.filePath;
    } else if (labelLower.includes('bay') || labelLower.includes('hall') || labelLower.includes('join')) {
      imageSrc = SITE_IMAGES.joinWorkshop.url || SITE_IMAGES.joinWorkshop.filePath;
    } else {
      imageSrc = SITE_IMAGES.homeHero.url || SITE_IMAGES.homeHero.filePath;
    }
  }

  const containerClass = fullBleed
    ? `w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden ${className}`
    : `w-full overflow-hidden ${className}`;

  return (
    <div className={containerClass}>
      <div
        className={`w-full min-h-[300px] sm:min-h-[420px] md:min-h-[540px] lg:min-h-[640px] ${aspectRatio} relative overflow-hidden select-none bg-slate-900`}
      >
        <img
          src={imageSrc}
          alt={label || 'Team Polar Imagery'}
          className="w-full h-full object-cover object-center block"
          loading="lazy"
        />
      </div>
    </div>
  );
};
