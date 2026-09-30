import React, { useMemo } from 'react';
import { SUBTEAMS } from '../data/teamData';

interface StarSystemProps {
  activeSubteamId: string;
  onSelectSubteam?: (id: string) => void;
  interactive?: boolean;
  compact?: boolean;
}

export const StarSystem: React.FC<StarSystemProps> = ({
  activeSubteamId,
  onSelectSubteam,
  interactive = true,
  compact = false
}) => {
  const activeIndex = useMemo(() => {
    const idx = SUBTEAMS.findIndex((st) => st.id === activeSubteamId);
    return idx >= 0 ? idx : 0;
  }, [activeSubteamId]);

  const rotationDegrees = activeIndex * -36;

  const activeSubteam = SUBTEAMS[activeIndex] || SUBTEAMS[0];

  const size = compact ? 300 : 580;
  const center = size / 2;
  const rayLength = compact ? 80 : 160;
  const labelDistance = compact ? 98 : 195;

  const rayGeometry = useMemo(() => {
    return SUBTEAMS.map((subteam, index) => {
      const rayAngleDeg = -90 + index * 36;
      const angleRad = (rayAngleDeg * Math.PI) / 180;

      const nodeX = center + rayLength * Math.cos(angleRad);
      const nodeY = center + rayLength * Math.sin(angleRad);

      const labelX = center + labelDistance * Math.cos(angleRad);
      const labelY = center + labelDistance * Math.sin(angleRad);

      const currentWorldAngleDeg = ((rayAngleDeg + rotationDegrees) % 360 + 360) % 360;
      const worldCos = Math.cos((currentWorldAngleDeg * Math.PI) / 180);

      let textAnchor: 'start' | 'middle' | 'end' = 'middle';
      if (Math.abs(worldCos) > 0.25) {
        textAnchor = worldCos > 0 ? 'start' : 'end';
      }

      return {
        ...subteam,
        index,
        rayAngleDeg,
        nodeX,
        nodeY,
        labelX,
        labelY,
        textAnchor
      };
    });
  }, [center, rayLength, labelDistance, rotationDegrees]);

  return (
    <div className="flex flex-col items-center select-none w-full">
      
      <div 
        className="relative flex items-center justify-center w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[560px] aspect-square"
      >
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full overflow-visible"
        >
          <defs>
            
            <filter id="star-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.25" />
            </filter>
          </defs>

          
          <g
            style={{
              transformOrigin: `${center}px ${center}px`,
              transform: `rotate(${rotationDegrees}deg)`,
              transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            
            {rayGeometry.map((ray) => {
              const isActive = ray.id === activeSubteamId;
              return (
                <line
                  key={`line-${ray.id}`}
                  x1={center}
                  y1={center}
                  x2={ray.nodeX}
                  y2={ray.nodeY}
                  stroke={ray.color}
                  strokeWidth={isActive ? 4 : 2.5}
                  strokeLinecap="round"
                  opacity={isActive ? 1 : 0.85}
                  className="transition-all duration-300"
                />
              );
            })}

            
            <circle
              cx={center}
              cy={center}
              r={compact ? 5 : 8}
              fill="#0B132B"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />

            
            {rayGeometry.map((ray) => {
              const isActive = ray.id === activeSubteamId;
              return (
                <g 
                  key={`node-${ray.id}`}
                  onClick={() => interactive && onSelectSubteam?.(ray.id)}
                  className={interactive ? 'cursor-pointer' : ''}
                >
                  
                  <circle
                    cx={ray.nodeX}
                    cy={ray.nodeY}
                    r={isActive ? (compact ? 7 : 9.5) : (compact ? 4.5 : 6)}
                    fill={ray.color}
                    stroke="#FFFFFF"
                    strokeWidth={isActive ? 2.5 : 1.5}
                    filter={isActive ? 'url(#star-glow)' : undefined}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}

            
            {!compact && rayGeometry.map((ray) => {
              const isActive = ray.id === activeSubteamId;
              return (
                <g
                  key={`moving-label-group-${ray.id}`}
                  transform={`translate(${ray.labelX}, ${ray.labelY})`}
                >
                  
                  <text
                    transform={`rotate(${-rotationDegrees})`}
                    textAnchor={ray.textAnchor}
                    dominantBaseline="central"
                    fill={ray.color}
                    fontSize={isActive ? '14px' : '12px'}
                    fontWeight={isActive ? '700' : '600'}
                    fontFamily="'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif"
                    letterSpacing="-0.01em"
                    onClick={() => interactive && onSelectSubteam?.(ray.id)}
                    className={`transition-all duration-200 select-none ${
                      interactive ? 'cursor-pointer hover:opacity-100' : ''
                    } ${isActive ? 'opacity-100 font-bold' : 'opacity-85'}`}
                  >
                    {ray.name}
                  </text>
                </g>
              );
            })}
          </g>

          
          <polygon
            points={`${center},${center - rayLength - (compact ? 8 : 10)} ${center - (compact ? 4 : 6)},${center - rayLength - (compact ? 18 : 24)} ${center + (compact ? 4 : 6)},${center - rayLength - (compact ? 18 : 24)}`}
            fill={activeSubteam.color}
            className="transition-colors duration-300"
          />
        </svg>
      </div>
    </div>
  );
};
