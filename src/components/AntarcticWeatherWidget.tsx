import React, { useState, useEffect } from 'react';
import { Sun, Wind, Compass, Thermometer, Radio, Gauge } from 'lucide-react';

interface StationWeather {
  name: string;
  coords: string;
  elevation: string;
  baseTemp: number;
  windSpeed: number;
  windDir: string;
  solarIrradiance: number;
  daylightHours: string;
  seasonStatus: string;
  pressure: string;
}

const STATIONS: Record<'elisabeth' | 'kohnen', StationWeather> = {
  elisabeth: {
    name: 'Princess Elisabeth Antarctica',
    coords: "71°57'00\" S, 23°20'49\" E",
    elevation: '1,382 m ASL',
    baseTemp: -23.4,
    windSpeed: 38,
    windDir: 'ESE (Katabatic)',
    solarIrradiance: 610,
    daylightHours: '24h Polar Daylight (Austral Summer)',
    seasonStatus: 'Traverse Launch Point',
    pressure: '822 hPa'
  },
  kohnen: {
    name: 'Kohnen Research Station (AWI)',
    coords: "75°00'06\" S, 00°04'04\" E",
    elevation: '2,892 m ASL',
    baseTemp: -43.8,
    windSpeed: 46,
    windDir: 'SSE (Inland Ice Sheet)',
    solarIrradiance: 540,
    daylightHours: '24h Continuous Polar Sun',
    seasonStatus: 'Traverse Destination (1,150 km)',
    pressure: '685 hPa'
  }
};

export const AntarcticWeatherWidget: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<'elisabeth' | 'kohnen'>('elisabeth');
  const [tempJitter, setTempJitter] = useState(0);
  const [windJitter, setWindJitter] = useState(0);
  const [solarJitter, setSolarJitter] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLastUpdated(
        now.toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' UTC'
      );
    };
    updateTime();

    const interval = setInterval(() => {
      setTempJitter((Math.random() - 0.5) * 0.8);
      setWindJitter((Math.random() - 0.5) * 4);
      setSolarJitter((Math.random() - 0.5) * 20);
      updateTime();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const station = STATIONS[selectedStation];
  const currentTemp = (station.baseTemp + tempJitter).toFixed(1);
  const currentWind = Math.max(15, Math.round(station.windSpeed + windJitter));
  const currentSolar = Math.max(300, Math.round(station.solarIrradiance + solarJitter));
  const estimatedPowerKw = ((currentSolar * 6 * 0.22) / 1000).toFixed(2);

  return (
    <div className="bg-[#0B132B] text-white p-6 sm:p-8 border-t-2 border-[#7CBDE8]">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#7CBDE8] animate-pulse" />
            <span className="font-mono-data text-xs text-[#7CBDE8] uppercase tracking-wider font-semibold">
              Live Polar Telemetry Feed
            </span>
            <span className="text-white/40 text-xs font-mono-data">• {lastUpdated}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Antarctic Ambient Conditions
          </h3>
        </div>

        
        <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-none self-start sm:self-auto">
          <button
            onClick={() => setSelectedStation('elisabeth')}
            className={`px-3 py-1.5 text-xs font-mono-data uppercase tracking-wider transition-colors cursor-pointer ${
              selectedStation === 'elisabeth'
                ? 'bg-[#7CBDE8] text-[#0B132B] font-bold shadow-xs'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Princess Elisabeth (0 km)
          </button>
          <button
            onClick={() => setSelectedStation('kohnen')}
            className={`px-3 py-1.5 text-xs font-mono-data uppercase tracking-wider transition-colors cursor-pointer ${
              selectedStation === 'kohnen'
                ? 'bg-[#7CBDE8] text-[#0B132B] font-bold shadow-xs'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Kohnen Station (1,150 km)
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 pb-4">
        
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-mono-data uppercase">
            <Thermometer className="w-3.5 h-3.5 text-[#7CBDE8]" />
            <span>Ambient Temperature</span>
          </div>
          <div className="font-mono-data text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {currentTemp}°C
          </div>
          <p className="text-xs text-white/60">
            {selectedStation === 'elisabeth' ? 'Zero-emission thermal envelope' : 'Extreme plateau deep freeze'}
          </p>
        </div>

        
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-mono-data uppercase">
            <Wind className="w-3.5 h-3.5 text-[#7CBDE8]" />
            <span>Katabatic Wind Velocity</span>
          </div>
          <div className="font-mono-data text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {currentWind} <span className="text-sm font-normal text-white/60">km/h</span>
          </div>
          <p className="text-xs text-white/60">
            {station.windDir}
          </p>
        </div>

        
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-mono-data uppercase">
            <Sun className="w-3.5 h-3.5 text-[#7CBDE8]" />
            <span>Photovoltaic Harvest</span>
          </div>
          <div className="font-mono-data text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {currentSolar} <span className="text-sm font-normal text-white/60">W/m²</span>
          </div>
          <p className="text-xs text-white/60">
            Yielding <span className="text-[#7CBDE8] font-bold">~{estimatedPowerKw} kW</span> from 6 m² array
          </p>
        </div>

        
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-mono-data uppercase">
            <Gauge className="w-3.5 h-3.5 text-[#7CBDE8]" />
            <span>Barometric & Elevation</span>
          </div>
          <div className="font-mono-data text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
            {station.elevation}
          </div>
          <p className="text-xs text-white/60 font-mono-data">
            {station.pressure} | {station.coords}
          </p>
        </div>
      </div>

      
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white/70 gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono-data text-white font-semibold">{station.name}:</span>
          <span>{station.seasonStatus}</span>
        </div>
        <div className="font-mono-data text-[#7CBDE8]">
          {station.daylightHours}
        </div>
      </div>
    </div>
  );
};
