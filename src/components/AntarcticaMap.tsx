import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Minimize2, 
  Compass, 
  Wind, 
  AlertTriangle, 
  Thermometer, 
  Mountain, 
  MapPin, 
  Layers, 
  Navigation,
  Info
} from 'lucide-react';
import { LightFadeScroll } from './ScrollAnimation';

export interface Waypoint {
  id: string;
  index: number;
  name: string;
  shortName: string;
  km: number;
  coordinates: string;
  elevationMeters: number;
  tempRange: string;
  terrainType: string;
  roverFocus: string;
  description: string;
  x: number;
  y: number;
  labelOffsetX: number;
  labelOffsetY: number;
  hazardNote?: string;
}

export const WAYPOINTS: Waypoint[] = [
  {
    id: 'wp-1',
    index: 1,
    name: 'Utsteinen Basecamp (Start)',
    shortName: 'Utsteinen Launch (0 km)',
    km: 0,
    coordinates: "71°57'00\"S, 23°20'49\"E",
    elevationMeters: 1390,
    tempRange: '-25°C to -38°C',
    terrainType: 'Hard wind-packed firn & granite nunatak apron',
    roverFocus: 'Zero-emission smart grid decouple, solar array deployment, and onboard sensor check',
    description: 'Launchpad situated at the foot of Utsteinen Nunatak beside Princess Elisabeth Antarctica. Initial system boot, satellite telecommand sync, and high-capacity battery pre-conditioning before entering the open ice corridor.',
    x: 520,
    y: 260,
    labelOffsetX: 16,
    labelOffsetY: -10
  },
  {
    id: 'wp-2',
    index: 2,
    name: 'Sør Rondane Mountain Pass',
    shortName: 'Sør Rondane Pass (185 km)',
    km: 185,
    coordinates: "72°18'25\"S, 24°15'10\"E",
    elevationMeters: 2150,
    tempRange: '-34°C to -48°C',
    terrainType: 'Wind-scoured blue ice with hidden snow bridges',
    roverFocus: 'Active LiDAR crevasse mapping & aerodynamic cuboid hull katabatic stabilization',
    description: 'Narrow mountain gap between towering granite nunataks. Funnels severe katabatic winds exceeding 120 km/h with extensive sub-surface glacial crevasse hazards requiring real-time autonomous path re-planning.',
    x: 504,
    y: 290,
    labelOffsetX: 18,
    labelOffsetY: 2,
    hazardNote: 'Critical crevasse shear zone · Wind speeds up to 140 km/h'
  },
  {
    id: 'wp-3',
    index: 3,
    name: 'Queen Maud Escarpment Ingress',
    shortName: 'Plateau Ingress (380 km)',
    km: 380,
    coordinates: "73°05'12\"S, 20°35'40\"E",
    elevationMeters: 2820,
    tempRange: '-44°C to -58°C',
    terrainType: 'Deep sastrugi snowdrifts (up to 1.5m frozen ridges)',
    roverFocus: '3D-printed TPU flexible airless wheels & torque vectoring in-hub motors',
    description: 'Steep climb transitioning from coastal ice sheet onto the vast East Antarctic Plateau. Sastrugi snowdrifts present punishing mechanical shocks, validating flexible lattice wheels and multi-link active suspension articulation.',
    x: 482,
    y: 326,
    labelOffsetX: 18,
    labelOffsetY: 2,
    hazardNote: 'Steep 7.8% incline gradient with dense frozen sastrugi'
  },
  {
    id: 'wp-4',
    index: 4,
    name: 'Mid-Plateau Solar Basin',
    shortName: 'Solar Basin (620 km)',
    km: 620,
    coordinates: "73°58'30\"S, 14°12'05\"E",
    elevationMeters: 3100,
    tempRange: '-52°C to -66°C',
    terrainType: 'Endless high-altitude granular firn snow desert',
    roverFocus: 'Continuous 24-hour polar sun tracking & sub-surface radar logging',
    description: 'Vast, windswept high-altitude plateau experiencing perpetual polar daylight during summer traverse. Solar panels automatically tilt and orient toward the midnight sun to sustain 24-hour autonomous movement and scientific ice probing.',
    x: 458,
    y: 362,
    labelOffsetX: 18,
    labelOffsetY: 2
  },
  {
    id: 'wp-5',
    index: 5,
    name: 'East Antarctic Ridge Waypoint',
    shortName: 'Ridge Summit (890 km)',
    km: 890,
    coordinates: "74°32'40\"S, 07°10'15\"E",
    elevationMeters: 3450,
    tempRange: '-62°C to -80°C',
    terrainType: 'Cryogenic brittle ice crust & extreme low pressure',
    roverFocus: 'Thermal aerogel barrier protection & cold-start heating cycle',
    description: 'Highest elevation marker and most extreme thermal environment on the traverse. Temperatures plunge toward -80°C with thin atmospheric pressure, putting custom thermal sealed battery bays and cold-tolerant electronics to the ultimate test.',
    x: 436,
    y: 398,
    labelOffsetX: -140,
    labelOffsetY: 2,
    hazardNote: 'Thermal limit testing: ambient air down to -80°C'
  },
  {
    id: 'wp-6',
    index: 6,
    name: 'Kohnen Research Station (Finish)',
    shortName: 'Kohnen Station (1,150 km)',
    km: 1150,
    coordinates: "75°00'06\"S, 00°04'00\"E",
    elevationMeters: 2892,
    tempRange: '-42°C to -65°C',
    terrainType: 'Uniform flat continental plateau ice sheet',
    roverFocus: 'Autonomous docking protocol & 1,150 km mission telemetry offload',
    description: 'Final destination at the German Alfred Wegener Institute (AWI) deep ice core drilling station. Completes the historic 1,150 km unsupported zero-emission traverse, validating commercial-grade robotic polar mobility.',
    x: 414,
    y: 434,
    labelOffsetX: -150,
    labelOffsetY: 12
  }
];

interface PolarStation {
  name: string;
  nation: string;
  x: number;
  y: number;
  highlight?: boolean;
}

const POLAR_STATIONS: PolarStation[] = [
  { name: 'Princess Elisabeth', nation: 'Belgium / International', x: 520, y: 260, highlight: true },
  { name: 'Kohnen Station', nation: 'Germany (AWI)', x: 414, y: 434, highlight: true },
  { name: 'South Pole (Amundsen-Scott)', nation: 'USA (90°00\'S)', x: 470, y: 450, highlight: true },
  { name: 'Troll Station', nation: 'Norway', x: 405, y: 290 },
  { name: 'Neumayer III', nation: 'Germany', x: 375, y: 255 },
  { name: 'Halley VI', nation: 'United Kingdom', x: 320, y: 310 },
  { name: 'Dome Fuji', nation: 'Japan', x: 550, y: 410 },
  { name: 'Vostok Station', nation: 'Russia', x: 580, y: 520 },
  { name: 'Concordia (Dome C)', nation: 'France / Italy', x: 520, y: 600 },
  { name: 'McMurdo Station', nation: 'USA', x: 390, y: 630 }
];

export const AntarcticaMap: React.FC = () => {
  const [selectedWaypointIndex, setSelectedWaypointIndex] = useState<number>(0);
  const [isZoomedCorridor, setIsZoomedCorridor] = useState<boolean>(false);
  const [showCrevasses, setShowCrevasses] = useState<boolean>(true);
  const [showKatabaticWinds, setShowKatabaticWinds] = useState<boolean>(true);
  const [showStations, setShowStations] = useState<boolean>(true);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simKm, setSimKm] = useState<number>(0);
  const [hoveredWaypoint, setHoveredWaypoint] = useState<Waypoint | null>(null);

  const selectedWaypoint = WAYPOINTS[selectedWaypointIndex];
  const simTimerRef = useRef<number | null>(null);

  const routePathD = "M 520 260 C 514 274, 509 282, 504 290 C 496 304, 489 314, 482 326 C 472 342, 465 352, 458 362 C 448 378, 442 388, 436 398 C 427 412, 420 424, 414 434";

  const getCoordinatesForKm = (km: number): { x: number; y: number } => {
    const clampedKm = Math.max(0, Math.min(1150, km));
    for (let i = 0; i < WAYPOINTS.length - 1; i++) {
      const wpA = WAYPOINTS[i];
      const wpB = WAYPOINTS[i + 1];
      if (clampedKm >= wpA.km && clampedKm <= wpB.km) {
        const segDist = wpB.km - wpA.km;
        const t = segDist === 0 ? 0 : (clampedKm - wpA.km) / segDist;
        return {
          x: wpA.x + (wpB.x - wpA.x) * t,
          y: wpA.y + (wpB.y - wpA.y) * t
        };
      }
    }
    return { x: WAYPOINTS[0].x, y: WAYPOINTS[0].y };
  };

  useEffect(() => {
    if (isSimulating) {
      simTimerRef.current = window.setInterval(() => {
        setSimKm((prev) => {
          if (prev >= 1150) {
            setIsSimulating(false);
            return 1150;
          }
          const nextKm = prev + 12;
          const activeWpIdx = WAYPOINTS.findIndex(
            (w, i) => nextKm >= w.km && (i === WAYPOINTS.length - 1 || nextKm < WAYPOINTS[i + 1].km)
          );
          if (activeWpIdx !== -1) {
            setSelectedWaypointIndex(activeWpIdx);
          }
          return nextKm;
        });
      }, 70);
    } else {
      if (simTimerRef.current) {
        clearInterval(simTimerRef.current);
      }
    }
    return () => {
      if (simTimerRef.current) clearInterval(simTimerRef.current);
    };
  }, [isSimulating]);

  const handleToggleSimulation = () => {
    if (isSimulating) {
      setIsSimulating(false);
    } else {
      if (simKm >= 1150) {
        setSimKm(0);
        setSelectedWaypointIndex(0);
      }
      setIsSimulating(true);
    }
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setSimKm(0);
    setSelectedWaypointIndex(0);
  };

  const handleSelectWaypoint = (index: number) => {
    setSelectedWaypointIndex(index);
    setSimKm(WAYPOINTS[index].km);
  };

  const currentRoverPos = getCoordinatesForKm(simKm > 0 ? simKm : selectedWaypoint.km);

  const currentViewBox = isZoomedCorridor 
    ? "340 200 280 260" 
    : "80 60 780 670";

  return (
    <LightFadeScroll className="my-8" distance={16} duration={0.65}>
      <div className="overflow-hidden">
        
        <div className="bg-slate-50/90 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-data">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-700 mr-1 flex items-center gap-1 font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#0B132B]" /> LAYERS:
            </span>
            <button
              onClick={() => setShowCrevasses(!showCrevasses)}
              className={`px-3 py-1.5 text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 active:scale-[0.98] ${
                showCrevasses 
                  ? 'bg-[#0B132B] text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
              }`}
            >
              <AlertTriangle className={`w-3 h-3 ${showCrevasses ? 'text-[#E0A96D]' : 'text-slate-500'}`} />
              Crevasse Zones
            </button>
            <button
              onClick={() => setShowKatabaticWinds(!showKatabaticWinds)}
              className={`px-3 py-1.5 text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 active:scale-[0.98] ${
                showKatabaticWinds 
                  ? 'bg-[#0B132B] text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
              }`}
            >
              <Wind className={`w-3 h-3 ${showKatabaticWinds ? 'text-[#7CBDE8]' : 'text-slate-500'}`} />
              Katabatic Winds
            </button>
            <button
              onClick={() => setShowStations(!showStations)}
              className={`px-3 py-1.5 text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 active:scale-[0.98] ${
                showStations 
                  ? 'bg-[#0B132B] text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
              }`}
            >
              <MapPin className="w-3 h-3" />
              Research Stations
            </button>
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`px-3 py-1.5 text-[11px] font-semibold transition-all cursor-pointer active:scale-[0.98] ${
                showGrid 
                  ? 'bg-[#0B132B] text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
              }`}
            >
              Polar Grid
            </button>
          </div>

          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomedCorridor(!isZoomedCorridor)}
              className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 text-[#0B132B] text-[11px] font-semibold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5 active:scale-[0.98]"
            >
              {isZoomedCorridor ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-[#0B132B]" /> Full Continent View
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-[#0B132B]" /> Focus Corridor (Zoom)
                </>
              )}
            </button>
          </div>
        </div>

        
        <div className="relative bg-[#0B132B] w-full select-none overflow-hidden aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/11]">
          <div className="absolute top-3 right-4 pointer-events-none text-right font-mono-data text-[10px] z-10 bg-[#0B132B]/80 px-2 py-1 border border-white/10">
            <div className="text-[#7CBDE8] font-bold">ODOMETER: {Math.round(simKm > 0 ? simKm : selectedWaypoint.km)} KM</div>
            <div className="text-white/80">WAYPOINT: 0{selectedWaypoint.index} OF 06 ({selectedWaypoint.name.split(' (')[0]})</div>
          </div>

          
          <motion.svg
            viewBox={currentViewBox}
            className="w-full h-full"
            animate={{ viewBox: currentViewBox }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <defs>
              
              <pattern id="crevassePattern" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="10" stroke="#E0A96D" strokeWidth="2" strokeOpacity="0.75" />
              </pattern>
            </defs>

            
            <rect x="0" y="0" width="1000" height="800" fill="#0B132B" />

            
            {showGrid && (
              <g opacity="0.45">
                <circle cx="470" cy="450" r="360" fill="none" stroke="#7CBDE8" strokeWidth="0.8" strokeDasharray="3 4" />
                <circle cx="470" cy="450" r="270" fill="none" stroke="#7CBDE8" strokeWidth="0.8" strokeDasharray="3 4" />
                <circle cx="470" cy="450" r="140" fill="none" stroke="#7CBDE8" strokeWidth="0.8" strokeDasharray="3 4" />
                <line x1="470" y1="70" x2="470" y2="830" stroke="#7CBDE8" strokeWidth="0.6" strokeDasharray="3 4" />
                <line x1="90" y1="450" x2="850" y2="450" stroke="#7CBDE8" strokeWidth="0.6" strokeDasharray="3 4" />
                <text x="475" y="90" fill="#7CBDE8" fontSize="10" fontFamily="monospace" fontWeight="bold">0° (PRIME MERIDIAN)</text>
                <text x="475" y="810" fill="#7CBDE8" fontSize="10" fontFamily="monospace">180°</text>
                <text x="100" y="445" fill="#7CBDE8" fontSize="10" fontFamily="monospace">90°W</text>
                <text x="790" y="445" fill="#7CBDE8" fontSize="10" fontFamily="monospace">90°E</text>
                <text x="475" y="195" fill="#7CBDE8" fontSize="9" fontFamily="monospace">70°S</text>
                <text x="475" y="325" fill="#7CBDE8" fontSize="9" fontFamily="monospace">80°S</text>
              </g>
            )}

            
            <g id="antarctic-continent-main">
              
              <path
                d="M 470 160 
                   C 530 165, 595 180, 645 220 
                   C 690 255, 730 300, 755 365 
                   C 775 420, 785 480, 765 540 
                   C 745 600, 695 645, 635 675 
                   C 580 705, 520 720, 460 710 
                   C 410 700, 360 670, 330 635 
                   C 305 605, 305 575, 315 545
                   C 295 530, 275 510, 260 480
                   C 240 440, 235 395, 250 350
                   C 265 310, 290 270, 335 240
                   C 375 210, 420 180, 470 160 Z"
                fill="#162947"
                stroke="#7CBDE8"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              
              <path
                d="M 335 240
                   C 310 205, 280 160, 260 120
                   C 252 105, 245 90, 248 85
                   C 252 82, 260 95, 270 115
                   C 290 150, 320 195, 350 230 Z"
                fill="#162947"
                stroke="#7CBDE8"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              
              
              <path
                d="M 335 240 C 350 270, 375 295, 385 330 C 350 345, 315 340, 290 320 Z"
                fill="#203E6B"
                stroke="#A8D8F8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <rect x="305" y="292" width="95" height="15" fill="#0B132B" opacity="0.85" rx="2" />
              <text x="310" y="303" fill="#A8D8F8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">RONNE ICE SHELF</text>

              
              <path
                d="M 330 635 C 380 610, 420 590, 445 595 C 430 645, 380 670, 345 660 Z"
                fill="#203E6B"
                stroke="#A8D8F8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <rect x="350" y="622" width="90" height="15" fill="#0B132B" opacity="0.85" rx="2" />
              <text x="355" y="633" fill="#A8D8F8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">ROSS ICE SHELF</text>

              
              <circle cx="470" cy="450" r="190" fill="#243F6B" opacity="0.4" />
              <circle cx="470" cy="450" r="110" fill="#30548E" opacity="0.35" />

              
              
              <path
                d="M 385 330 Q 425 460 445 595"
                fill="none"
                stroke="#D9DEE7"
                strokeWidth="2"
                strokeDasharray="4 3"
                opacity="0.75"
              />
              <text x="390" y="475" fill="#D9DEE7" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.8" transform="rotate(78 390 475)">
                ▲▲ TRANSANTARCTIC MOUNTAINS
              </text>

              
              <path
                d="M 470 260 Q 525 285 570 300"
                fill="none"
                stroke="#E0A96D"
                strokeWidth="3"
                strokeDasharray="5 3"
              />
              <rect x="490" y="268" width="135" height="14" fill="#0B132B" opacity="0.9" rx="2" />
              <text x="494" y="278" fill="#E0A96D" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                ▲ SØR RONDANE RANGE
              </text>
            </g>

            
            {showCrevasses && (
              <g>
                <ellipse cx="505" cy="292" rx="22" ry="14" fill="url(#crevassePattern)" stroke="#E0A96D" strokeWidth="1.5" />
                <ellipse cx="482" cy="328" rx="20" ry="12" fill="url(#crevassePattern)" stroke="#E0A96D" strokeWidth="1.5" />
                <rect x="528" y="294" width="95" height="13" fill="#0B132B" rx="2" />
                <text x="531" y="304" fill="#E0A96D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">⚠ CREVASSE FIELD</text>
                <rect x="500" y="330" width="85" height="13" fill="#0B132B" rx="2" />
                <text x="503" y="340" fill="#E0A96D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">⚠ SHEAR ZONE</text>
              </g>
            )}

            
            {showKatabaticWinds && (
              <g opacity="0.75">
                <path d="M 450 380 Q 480 320 515 250" fill="none" stroke="#7CBDE8" strokeWidth="1.5" strokeDasharray="5 5" />
                <polygon points="515,250 509,258 518,258" fill="#7CBDE8" />
                <path d="M 430 400 Q 460 340 495 240" fill="none" stroke="#7CBDE8" strokeWidth="1.5" strokeDasharray="5 5" />
                <polygon points="495,240 489,248 498,248" fill="#7CBDE8" />
                <rect x="450" y="295" width="130" height="14" fill="#0B132B" rx="2" />
                <text x="454" y="305" fill="#7CBDE8" fontSize="8" fontFamily="monospace">KATABATIC WINDS &gt; 200 KM/H</text>
              </g>
            )}

            
            {showStations && (
              <g>
                {POLAR_STATIONS.map((station, i) => (
                  <g key={i}>
                    <circle
                      cx={station.x}
                      cy={station.y}
                      r={station.highlight ? 4.5 : 3}
                      fill={station.highlight ? "#7CBDE8" : "#94A3B8"}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />
                    <text
                      x={station.x + 8}
                      y={station.y + 4}
                      fill={station.highlight ? "#FFFFFF" : "#CBD5E1"}
                      fontSize={station.highlight ? "9" : "7.5"}
                      fontFamily="monospace"
                      fontWeight={station.highlight ? "bold" : "normal"}
                    >
                      {station.name}
                    </text>
                  </g>
                ))}
              </g>
            )}

            
            
            

            
            <path
              d={routePathD}
              fill="none"
              stroke="#0B132B"
              strokeWidth="6"
              strokeLinecap="round"
            />
            
            <path
              d={routePathD}
              fill="none"
              stroke="#38BDF8"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            
            <path
              d={routePathD}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />

            
            {(simKm > 0 || selectedWaypointIndex > 0) && (
              <path
                d={routePathD}
                fill="none"
                stroke="#67E8F9"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${((simKm > 0 ? simKm : selectedWaypoint.km) / 1150) * 260} 500`}
              />
            )}

            
            {[
              { km: '200 KM', x: 501, y: 295 },
              { km: '400 KM', x: 479, y: 330 },
              { km: '600 KM', x: 460, y: 358 },
              { km: '800 KM', x: 442, y: 388 },
              { km: '1,000 KM', x: 424, y: 418 }
            ].map((tick, i) => (
              <g key={i}>
                <circle cx={tick.x} cy={tick.y} r="2" fill="#FFFFFF" />
                {isZoomedCorridor && (
                  <text x={tick.x + 5} y={tick.y - 4} fill="#67E8F9" fontSize="6.5" fontFamily="monospace">
                    {tick.km}
                  </text>
                )}
              </g>
            ))}

            
            {WAYPOINTS.map((wp, index) => {
              const isSelected = selectedWaypointIndex === index;
              const isHovered = hoveredWaypoint?.id === wp.id;
              const isPassed = (simKm > 0 ? simKm : selectedWaypoint.km) >= wp.km;

              return (
                <g 
                  key={wp.id} 
                  className="cursor-pointer"
                  onClick={() => handleSelectWaypoint(index)}
                  onMouseEnter={() => setHoveredWaypoint(wp)}
                  onMouseLeave={() => setHoveredWaypoint(null)}
                >
                  
                  <circle cx={wp.x} cy={wp.y} r="18" fill="transparent" />

                  
                  {isSelected && (
                    <circle
                      cx={wp.x}
                      cy={wp.y}
                      r="12"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                    />
                  )}

                  
                  <circle
                    cx={wp.x}
                    cy={wp.y}
                    r={isSelected ? 9 : 7.5}
                    fill={isSelected ? "#38BDF8" : isPassed ? "#0B132B" : "#1E293B"}
                    stroke={isSelected ? "#FFFFFF" : "#7CBDE8"}
                    strokeWidth="2"
                  />

                  
                  <text
                    x={wp.x}
                    y={wp.y + 3}
                    textAnchor="middle"
                    fill={isSelected ? "#0B132B" : "#FFFFFF"}
                    fontSize={isSelected ? "9" : "8"}
                    fontFamily="monospace"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {wp.index}
                  </text>

                  
                  <g transform={`translate(${wp.x + wp.labelOffsetX}, ${wp.y + wp.labelOffsetY})`}>
                    <rect
                      x="0"
                      y="-12"
                      width={wp.shortName.length * 6.5 + 16}
                      height="17"
                      fill="#0B132B"
                      stroke={isSelected ? "#38BDF8" : "#334155"}
                      strokeWidth={isSelected ? "1.5" : "1"}
                      rx="2"
                    />
                    <text
                      x="8"
                      y="0"
                      fill={isSelected ? "#38BDF8" : "#F1F5F9"}
                      fontSize="8.5"
                      fontFamily="monospace"
                      fontWeight={isSelected ? "bold" : "600"}
                      className="pointer-events-none"
                    >
                      {wp.shortName}
                    </text>
                  </g>
                </g>
              );
            })}

            
            <g transform={`translate(${currentRoverPos.x}, ${currentRoverPos.y})`}>
              <rect
                x="-6"
                y="-6"
                width="12"
                height="12"
                transform="rotate(45)"
                fill="#38BDF8"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              <circle cx="0" cy="0" r="2.5" fill="#0B132B" />
              <line x1="0" y1="-8" x2="0" y2="-13" stroke="#FFFFFF" strokeWidth="2" />
            </g>
          </motion.svg>

          
          <AnimatePresence>
            {hoveredWaypoint && (
              <motion.div
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute pointer-events-none bottom-3 left-4 bg-[#0B132B] border border-[#38BDF8] text-white p-3 rounded-none shadow-xl max-w-sm z-20"
              >
                <div className="flex items-center justify-between text-xs font-mono-data text-[#7CBDE8] mb-1">
                  <span>WAYPOINT 0{hoveredWaypoint.index}</span>
                  <span className="font-bold">{hoveredWaypoint.km} KM</span>
                </div>
                <div className="font-bold text-sm text-white mb-1">
                  {hoveredWaypoint.name}
                </div>
                <div className="text-xs text-white/90 font-mono-data mb-1">
                  {hoveredWaypoint.coordinates} · Elev: {hoveredWaypoint.elevationMeters} m
                </div>
                <div className="text-xs text-[#E0A96D] font-mono-data">
                  {hoveredWaypoint.hazardNote || `Temp Range: ${hoveredWaypoint.tempRange}`}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          
          <div className="absolute bottom-3 right-4 pointer-events-none flex flex-col items-center gap-1 font-mono-data text-[10px] text-white/70 bg-[#0B132B]/80 px-2 py-1 border border-white/10">
            <Compass className="w-5 h-5 text-[#7CBDE8]" />
            <span>GRID SOUTH</span>
          </div>
        </div>

        
        <div className="bg-[#0B132B] px-3 sm:px-6 py-3 border-b border-[#252A34] overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[620px] gap-2">
            {WAYPOINTS.map((wp, i) => {
              const isSelected = selectedWaypointIndex === i;
              const isPassed = (simKm > 0 ? simKm : selectedWaypoint.km) >= wp.km;
              return (
                <button
                  key={wp.id}
                  onClick={() => handleSelectWaypoint(i)}
                  className={`flex-1 px-3 py-2 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#7CBDE8] text-[#0B132B] border-[#7CBDE8] font-bold shadow-sm ring-1 ring-[#7CBDE8]'
                      : isPassed
                      ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                      : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono-data mb-0.5">
                    <span>WP 0{wp.index}</span>
                    <span>{wp.km} KM</span>
                  </div>
                  <div className="text-xs truncate font-medium">
                    {wp.name.split(' (')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        
        <div className="p-4 sm:p-6 lg:p-8 bg-white border-t border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2">
              <div>
                <span className="font-mono-data text-xs text-[#2A74C4] font-bold tracking-wider block mb-1">
                  WAYPOINT DOSSIER · {selectedWaypoint.km} KM / 1,150 KM TRAVERSE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] tracking-tight">
                  0{selectedWaypoint.index}. {selectedWaypoint.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelectWaypoint(Math.max(0, selectedWaypointIndex - 1))}
                  disabled={selectedWaypointIndex === 0}
                  className="p-2.5 bg-slate-100 text-[#0B132B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs"
                  aria-label="Previous waypoint"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSelectWaypoint(Math.min(WAYPOINTS.length - 1, selectedWaypointIndex + 1))}
                  disabled={selectedWaypointIndex === WAYPOINTS.length - 1}
                  className="p-2.5 bg-slate-100 text-[#0B132B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-all active:scale-95 cursor-pointer shadow-2xs"
                  aria-label="Next waypoint"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="type-body text-[#1E293B] text-base sm:text-lg leading-relaxed text-pretty">
              {selectedWaypoint.description}
            </p>

            
            <div className="border-l-3 border-[#2A74C4] pl-4 py-2.5 my-3 bg-slate-50/60">
              <span className="font-mono-data text-xs text-[#0B132B] font-bold uppercase tracking-wider block mb-1">
                ENGINEERING VALIDATION DIRECTIVE:
              </span>
              <p className="text-sm font-medium text-[#1E293B] leading-relaxed text-pretty">
                {selectedWaypoint.roverFocus}
              </p>
            </div>

            {selectedWaypoint.hazardNote && (
              <div className="bg-[#FFF8E7] text-[#8C5200] p-3 text-xs font-mono-data flex items-center gap-2 border border-[#E0A96D]/30 font-medium">
                <AlertTriangle className="w-4 h-4 shrink-0 text-[#E0A96D]" />
                <span>EXPEDITION ADVISORY: {selectedWaypoint.hazardNote}</span>
              </div>
            )}
          </div>

          
          <div className="space-y-4 flex flex-col justify-between py-1">
            <div>
              <div className="font-mono-data text-xs text-slate-700 uppercase mb-3 font-bold tracking-wider">
                WAYPOINT TELEMETRY METRICS
              </div>

              <div className="space-y-3 font-mono-data text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px] font-medium">COORDINATES</span>
                  <span className="font-bold text-sm text-[#0B132B]">{selectedWaypoint.coordinates}</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px] font-medium">ELEVATION</span>
                  <span className="font-bold text-sm text-[#0B132B] flex items-center gap-1.5">
                    <Mountain className="w-4 h-4 text-[#2A74C4]" />
                    {selectedWaypoint.elevationMeters.toLocaleString()} m ASL
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px] font-medium">ESTIMATED TEMPERATURE RANGE</span>
                  <span className="font-bold text-sm text-[#0B132B] flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-[#2A74C4]" />
                    {selectedWaypoint.tempRange}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px] font-medium">SURFACE TOPOGRAPHY</span>
                  <span className="font-semibold text-xs text-[#0B132B]">{selectedWaypoint.terrainType}</span>
                </div>
              </div>
            </div>

            
            <div className="pt-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleSimulation}
                  className="flex-1 px-4 py-3 bg-[#0B132B] hover:bg-[#162947] text-white text-xs font-mono-data uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-bold active:scale-[0.98]"
                >
                  {isSimulating ? (
                    <>
                      <Pause className="w-4 h-4 text-[#7CBDE8]" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current text-[#7CBDE8]" /> Simulate Route
                    </>
                  )}
                </button>
                <button
                  onClick={handleResetSimulation}
                  className="p-3 bg-slate-100 hover:bg-slate-200 text-[#0B132B] transition-all active:scale-95 cursor-pointer shadow-2xs"
                  title="Reset simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-slate-50/70 border-t border-slate-100 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between text-xs font-mono-data mb-2">
            <span className="text-[#0B132B] font-bold flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5 text-[#7CBDE8]" />
              EXPEDITION ELEVATION PROFILE (0 KM → 1,150 KM)
            </span>
            <span className="text-slate-700 font-semibold">PEAK: 3,450 M (WP 05)</span>
          </div>

          
          <div className="w-full h-24 bg-[#0B132B]/5 relative">
            <svg viewBox="0 0 800 100" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="elevFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7CBDE8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7CBDE8" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              
              <line x1="0" y1="25" x2="800" y2="25" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="800" y2="50" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="75" x2="800" y2="75" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />

              
              <path
                d="M 0 68 C 60 62, 90 56, 128 52 C 180 46, 220 38, 264 34 C 330 28, 380 26, 431 26 C 500 24, 560 16, 619 14 C 690 18, 740 28, 800 32 L 800 100 L 0 100 Z"
                fill="url(#elevFill)"
              />
              <path
                d="M 0 68 C 60 62, 90 56, 128 52 C 180 46, 220 38, 264 34 C 330 28, 380 26, 431 26 C 500 24, 560 16, 619 14 C 690 18, 740 28, 800 32"
                fill="none"
                stroke="#0B132B"
                strokeWidth="2.5"
              />

              
              {[
                { x: 0, y: 68, i: 0 },
                { x: 128, y: 52, i: 1 },
                { x: 264, y: 34, i: 2 },
                { x: 431, y: 26, i: 3 },
                { x: 619, y: 14, i: 4 },
                { x: 800, y: 32, i: 5 }
              ].map((pt) => {
                const isSelected = selectedWaypointIndex === pt.i;
                return (
                  <g key={pt.i} className="cursor-pointer" onClick={() => handleSelectWaypoint(pt.i)}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isSelected ? 5 : 3.5}
                      fill={isSelected ? "#38BDF8" : "#0B132B"}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />
                    <text
                      x={pt.x > 750 ? pt.x - 14 : pt.x + 4}
                      y={pt.y - 6}
                      fill="#0B132B"
                      fontSize="8.5"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {WAYPOINTS[pt.i].elevationMeters}m
                    </text>
                  </g>
                );
              })}

              
              <line
                x1={((simKm > 0 ? simKm : selectedWaypoint.km) / 1150) * 800}
                y1="0"
                x2={((simKm > 0 ? simKm : selectedWaypoint.km) / 1150) * 800}
                y2="100"
                stroke="#38BDF8"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono-data text-slate-600 pt-1.5 px-0.5 font-medium">
            <span>0 KM · LAUNCH (1,390 M)</span>
            <span>380 KM · INGRESS (2,820 M)</span>
            <span>890 KM · SUMMIT RIDGE (3,450 M)</span>
            <span>1,150 KM · KOHNEN STATION (2,892 M)</span>
          </div>
        </div>
      </div>
    </LightFadeScroll>
  );
};
