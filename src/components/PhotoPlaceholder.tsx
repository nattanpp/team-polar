import React from 'react';

interface PhotoPlaceholderProps {
  figureNumber: string;
  title: string;
  specification: string;
  dimensions?: string;
  aspectRatio?: string;
  isIceCube?: boolean;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  figureNumber,
  title,
  specification,
  dimensions = "W: 216 cm | L: 192 cm | H: 166 cm | Mass: 320 kg",
  aspectRatio = "aspect-16/9",
  isIceCube = false
}) => {
  return (
    <div className="w-full bg-slate-50 border border-slate-200 p-6 sm:p-10 my-10 shadow-sm">
      <div className={`relative w-full ${aspectRatio} min-h-[360px] sm:min-h-[460px] flex flex-col justify-between p-4 sm:p-6 bg-white border border-slate-100 shadow-2xs`}>
        
        <div className="absolute top-1 left-1 font-mono-data text-[10px] text-slate-400 select-none">+</div>
        <div className="absolute top-1 right-1 font-mono-data text-[10px] text-slate-400 select-none">+</div>
        <div className="absolute bottom-1 left-1 font-mono-data text-[10px] text-slate-400 select-none">+</div>
        <div className="absolute bottom-1 right-1 font-mono-data text-[10px] text-slate-400 select-none">+</div>

        
        <div className="flex justify-between items-center text-[11px] font-mono-data text-[#0B132B] pb-2 font-semibold">
          <span>{figureNumber}</span>
          <span className="text-[#2A74C4] font-bold">CAD / FIELD PROOF</span>
        </div>

        
        <div className="my-auto py-6 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-md h-32 sm:h-44 relative flex items-center justify-center p-2 mb-3 bg-white">
            {isIceCube ? (
              <svg viewBox="0 0 320 120" className="w-full h-full" fill="none" stroke="#0B132B" strokeWidth="1.2">
                
                <rect x="70" y="42" width="180" height="36" stroke="#0B132B" strokeWidth="1.5" />
                
                <line x1="80" y1="36" x2="240" y2="36" stroke="#7CBDE8" strokeWidth="2" />
                
                <circle cx="95" cy="85" r="22" stroke="#0B132B" strokeWidth="1.6" />
                <circle cx="95" cy="85" r="7" stroke="#7CBDE8" />
                <circle cx="225" cy="85" r="22" stroke="#0B132B" strokeWidth="1.6" />
                <circle cx="225" cy="85" r="7" stroke="#7CBDE8" />
                
                <line x1="160" y1="42" x2="160" y2="18" stroke="#0B132B" strokeWidth="1.4" />
                <circle cx="160" cy="16" r="3" stroke="#7CBDE8" fill="#7CBDE8" />
              </svg>
            ) : (
              <svg viewBox="0 0 320 120" className="w-full h-full" fill="none" stroke="#0B132B" strokeWidth="1.2">
                
                <rect x="55" y="30" width="210" height="52" stroke="#0B132B" strokeWidth="1.6" />
                
                <line x1="50" y1="28" x2="270" y2="28" stroke="#7CBDE8" strokeWidth="2.5" />
                
                <circle cx="85" cy="86" r="20" stroke="#0B132B" strokeWidth="1.6" />
                <circle cx="85" cy="86" r="12" stroke="#7CBDE8" strokeDasharray="3 2" />
                <circle cx="85" cy="86" r="5" stroke="#0B132B" />

                <circle cx="235" cy="86" r="20" stroke="#0B132B" strokeWidth="1.6" />
                <circle cx="235" cy="86" r="12" stroke="#7CBDE8" strokeDasharray="3 2" />
                <circle cx="235" cy="86" r="5" stroke="#0B132B" />

                
                <line x1="220" y1="28" x2="220" y2="12" stroke="#0B132B" strokeWidth="1.5" />
                <rect x="214" y="8" width="12" height="6" stroke="#7CBDE8" fill="#7CBDE8" />
                <circle cx="220" cy="18" r="2.5" stroke="#0B132B" fill="#0B132B" />

                
                <rect x="95" y="44" width="125" height="26" stroke="#D9DEE7" strokeDasharray="2 2" />
                <text x="110" y="60" fill="#252A34" fontSize="8" fontFamily="IBM Plex Mono">INSULATED CORE</text>
              </svg>
            )}
          </div>
          <span className="text-xs sm:text-sm tracking-wider uppercase text-[#0B132B] font-semibold">
            {title}
          </span>
          <span className="font-mono-data text-xs text-slate-600 mt-1 font-medium">
            [SCHEMATIC SPECIFICATION : TEAM POLAR]
          </span>
        </div>

        
        <div className="flex flex-wrap justify-between items-center text-[10px] sm:text-xs font-mono-data text-slate-700 pt-2 border-t border-slate-100 font-medium">
          <span>SPEC: {specification}</span>
          <span>{dimensions}</span>
        </div>
      </div>
    </div>
  );
};
