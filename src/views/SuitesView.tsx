import React, { useState } from 'react';
import { Eye, Check, Bed, Users, Droplets, ArrowRight, Filter } from 'lucide-react';
import { RESORT_SUITES, Suite } from '../data/resortData';

interface SuitesViewProps {
  onSelectSuite: (suite: Suite) => void;
  onBookSuite: (suiteId: string) => void;
}

export const SuitesView: React.FC<SuitesViewProps> = ({
  onSelectSuite,
  onBookSuite,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'size'>('recommended');

  const filteredSuites = RESORT_SUITES.filter((suite) => {
    if (filterCategory === 'all') return true;
    return suite.category === filterCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.pricePerNight - b.pricePerNight;
    if (sortBy === 'price-desc') return b.pricePerNight - a.pricePerNight;
    if (sortBy === 'size') return b.sizeSqm - a.sizeSqm;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12 space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
          Private Sanctuaries
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#00324B] font-semibold tracking-tight text-balance">
          Suites, Pavilions & Ocean Villas
        </h1>
        <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
          Crafted from aged Jackwood, hand-waxed terracotta, and raw coral limestone. Each residence dissolves the boundary between open-air coastal verandas and serene sheltered living spaces.
        </p>
      </div>

      {/* Filter and Sort Bar (Segmented Controls) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
        {/* Category Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', label: 'All Residences' },
            { id: 'villa', label: 'Plunge Pool Villas' },
            { id: 'pavilion', label: 'Heritage Pavilions' },
            { id: 'suite', label: 'Canopy Suites' },
            { id: 'penthouse', label: 'Royal Penthouse' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-[#00324B] text-[#FFF8F0] shadow-sm'
                  : 'text-[#41474D] hover:bg-[#EAE2D0] hover:text-[#00324B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#72787E] font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#1F1B10] focus:outline-none focus:border-[#00324B] cursor-pointer"
          >
            <option value="recommended">Curated Order</option>
            <option value="price-asc">Nightly Rate (Low to High)</option>
            <option value="price-desc">Nightly Rate (High to Low)</option>
            <option value="size">Floor Area (Largest)</option>
          </select>
        </div>
      </div>

      {/* Suites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSuites.map((suite) => (
          <div
            key={suite.id}
            className="bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl overflow-hidden shadow-parchment hover:shadow-parchment-lg transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Media Container */}
              <div className="h-80 relative overflow-hidden bg-[#EAE2D0]">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#FFF8F0]/90 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest text-[#8C4A2F] rounded-md">
                    {suite.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#00324B]/95 backdrop-blur-sm text-[#FFF8F0] text-xs font-semibold rounded-md">
                  ${suite.pricePerNight} / night
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#72787E]">
                  <span>{suite.sizeSqm} sqm internal & verandah</span>
                  <span>·</span>
                  <span>{suite.view}</span>
                  <span>·</span>
                  <span>Max {suite.maxGuests} Guests</span>
                </div>

                <div>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#00324B]">
                    {suite.name}
                  </h2>
                  <p className="text-xs font-serif italic text-[#8C4A2F] mt-0.5">
                    {suite.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
                  {suite.description}
                </p>

                {/* Key Amenities */}
                <div className="pt-2 border-t border-[#E6DCB8]/60 space-y-1.5">
                  <span className="block text-[10px] uppercase font-bold text-[#8C4A2F] tracking-wider">
                    Architectural Inclusions
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#41474D]">
                    <div className="flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-[#1B4965]" />
                      <span className="truncate">{suite.features.pool}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#1B4965]" />
                      <span className="truncate">{suite.bedType}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 sm:p-8 pt-0 border-t border-[#E6DCB8]/50 mt-4 flex items-center justify-between gap-4">
              <button
                onClick={() => onSelectSuite(suite)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#00324B] hover:text-[#8C4A2F] cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Specifications</span>
              </button>
              <button
                onClick={() => onBookSuite(suite.id)}
                className="px-6 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Reserve Stay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tropical Modernist Architecture Note */}
      <div className="p-8 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
          Vernacular Craftsmanship
        </span>
        <h3 className="font-editorial text-2xl text-[#00324B] font-semibold">
          Built in Reverence to Geoffrey Bawa's Tropical Modernism
        </h3>
        <p className="text-xs text-[#41474D] leading-relaxed">
          Every pavilion at Luma Cove was constructed with reclaimed southern timber and hand-cut granite masonry. Natural airflow eliminates the constant need for artificial refrigeration, filling each living quarter with the therapeutic scent of sea salt and wild cinnamon bark.
        </p>
      </div>
    </div>
  );
};
