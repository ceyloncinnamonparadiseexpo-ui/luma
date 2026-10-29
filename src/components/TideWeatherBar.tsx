import React from 'react';
import { Waves, Sun, Wind, Droplets, Compass } from 'lucide-react';

interface TideWeatherProps {
  onOpenSurfGuide?: () => void;
}

export const TideWeatherBar: React.FC<TideWeatherProps> = ({ onOpenSurfGuide }) => {
  return (
    <div className="w-full bg-[#F6EDDB] border-b border-[#E6DCB8] text-[#1F1B10] text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        {/* Left: Location & Ambient Tide Status */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 font-semibold text-[#00324B]">
            <Compass className="w-3.5 h-3.5 text-[#8C4A2F]" />
            <span className="tracking-wide uppercase text-[10px] text-[#8C4A2F] font-bold">Weligama Bay · 05°58′N 80°25′E</span>
          </div>
          <span className="text-[#C1C7CE] hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5 text-[#41474D]">
            <Waves className="w-3.5 h-3.5 text-[#1B4965]" />
            <span>Swell: <strong className="text-[#1F1B10] font-medium">3–4 ft Clean Rollers</strong></span>
          </div>
          <span className="text-[#C1C7CE] hidden md:inline">·</span>
          <div className="flex items-center gap-1.5 text-[#41474D] hidden md:flex">
            <span>High Tide: <strong className="text-[#1F1B10] font-medium">1.1m (20:30)</strong></span>
            <span className="text-[#C1C7CE]">/</span>
            <span>Low Tide: <strong className="text-[#1F1B10] font-medium">0.3m (14:15)</strong></span>
          </div>
        </div>

        {/* Right: Weather & Water Conditions */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-[#41474D]">
            <Sun className="w-3.5 h-3.5 text-[#B85D36]" />
            <span>Air: <strong className="text-[#1F1B10] font-medium">29°C Warm Breeze</strong></span>
          </div>
          <span className="text-[#C1C7CE] hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 text-[#41474D]">
            <Droplets className="w-3.5 h-3.5 text-[#386380]" />
            <span>Indian Ocean: <strong className="text-[#1F1B10] font-medium">28°C</strong></span>
          </div>
          <span className="text-[#C1C7CE] hidden lg:inline">·</span>
          <div className="flex items-center gap-1.5 text-[#41474D] hidden lg:flex">
            <Wind className="w-3.5 h-3.5 text-[#3B6934]" />
            <span>Wind: <strong className="text-[#1F1B10] font-medium">Offshore 8 kts NE</strong></span>
          </div>
          {onOpenSurfGuide && (
            <button
              onClick={onOpenSurfGuide}
              className="ml-2 text-[11px] font-semibold text-[#8C4A2F] hover:text-[#531f07] underline underline-offset-2 transition-colors cursor-pointer"
            >
              Marine & Surf Report
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
