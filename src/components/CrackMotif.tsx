import React from 'react';

interface CrackMotifProps {
  className?: string;
  color?: string;
}

export const CrackLogomark: React.FC<CrackMotifProps> = ({ 
  className = "w-7 h-5", 
  color = "#7CBDE8" 
}) => {
  return (
    <svg 
      viewBox="0 0 36 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Team Polar fracture logomark"
    >
      <polyline
        points="1,11 9,4 16,16 24,5 29,13 35,8"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export const CrackDividerBold: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-full my-12",
  color = "#D9DEE7"
}) => {
  return (
    <div className={`overflow-hidden py-2 ${className}`} role="separator">
      <svg 
        viewBox="0 0 1000 24" 
        preserveAspectRatio="none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-4 block"
      >
        <polyline
          points="0,12 210,3 410,21 660,4 830,18 1000,9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
};

export const CrackDividerHairline: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-full my-6",
  color = "#D9DEE7"
}) => {
  return (
    <div className={`overflow-hidden py-1 ${className}`} role="separator">
      <svg 
        viewBox="0 0 1000 16" 
        preserveAspectRatio="none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-2 block"
      >
        <polyline
          points="0,8 190,2 380,14 620,3 810,13 1000,6"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
};
