import React, { useState } from 'react';
import { Compass, Clock, Check, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { EXPERIENCES, Experience } from '../data/resortData';

interface ExperiencesViewProps {
  onBookExperience: (expTitle: string) => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  onBookExperience,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [bookedExp, setBookedExp] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.category === activeCategory);

  const handleBook = (title: string) => {
    setBookedExp(title);
    setTimeout(() => {
      setBookedExp(null);
    }, 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
          Southern Ceylon Expeditions
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#00324B] font-semibold tracking-tight text-balance">
          Curated Coastal Journeys
        </h1>
        <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
          Weligama Bay is an ancient crossroads of maritime explorers, spice traders, and coastal artisans. We design private, unhurried excursions that step away from commercial tourist circuits into living cultural heritage.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 p-2 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8] flex-wrap">
        {[
          { id: 'all', label: 'All Curated Expeditions' },
          { id: 'ocean', label: 'Ocean & Surf' },
          { id: 'culture', label: 'Heritage & Spice' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-[#00324B] text-[#FFF8F0] shadow-sm'
                : 'text-[#41474D] hover:bg-[#EAE2D0] hover:text-[#00324B]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Booking Alert feedback */}
      {bookedExp && (
        <div className="p-4 bg-[#B9EEAB] border border-[#3F6D38]/30 rounded-xl flex items-center gap-3 text-xs text-[#2D5A27] animate-in fade-in">
          <Check className="w-5 h-5 shrink-0" />
          <span>
            Expedition slot requested for <strong>"{bookedExp}"</strong>. Our resident concierge will confirm timing and equipment with your villa butler.
          </span>
        </div>
      )}

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((exp) => (
          <div
            key={exp.id}
            className="p-6 sm:p-8 bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment flex flex-col justify-between space-y-6 hover:border-[#00324B]/40 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
                  {exp.category.toUpperCase()} EXPEDITION
                </span>
                <span className="font-editorial text-xl font-bold text-[#00324B]">
                  ${exp.priceUsd} <span className="text-xs font-normal text-[#72787E]">/ person</span>
                </span>
              </div>

              <div>
                <h2 className="font-editorial text-2xl font-semibold text-[#00324B]">
                  {exp.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-[#72787E] mt-1">
                  <span>Duration: {exp.duration}</span>
                  <span>·</span>
                  <span>Departure: {exp.timeOfDay}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
                {exp.description}
              </p>

              <div className="pt-2 border-t border-[#E6DCB8]/60 space-y-1.5">
                <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">
                  Sanctuary Inclusions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#41474D]">
                  {exp.included.map((inc, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#3B6934] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6DCB8]/50 flex items-center justify-between">
              <span className="text-[11px] text-[#72787E]">Private Guided Experience</span>
              <button
                onClick={() => handleBook(exp.title)}
                className="px-5 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Inquire & Book Slot
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stilt Fishermen & Marine Preservation Note */}
      <div className="p-8 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] max-w-3xl mx-auto text-center space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
          Regenerative Stewardship
        </span>
        <h3 className="font-editorial text-2xl text-[#00324B] font-semibold">
          Preserving the Living Heritage of Weligama Bay
        </h3>
        <p className="text-xs text-[#41474D] leading-relaxed">
          10% of proceeds from all our expeditions are reinvested into the Southern Coral Rehabilitation Nursery in Mirissa and the hereditary Stilt Fishermen Guild of Ahangama and Koggala.
        </p>
      </div>
    </div>
  );
};
