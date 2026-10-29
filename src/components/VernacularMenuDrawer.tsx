import React, { useState } from 'react';
import { X, Sparkles, Utensils, GlassWater, Clock, Award } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/resortData';

interface VernacularMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveTable: () => void;
}

export const VernacularMenuDrawer: React.FC<VernacularMenuDrawerProps> = ({
  isOpen,
  onClose,
  onReserveTable,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'desserts' | 'cocktails'>('all');

  if (!isOpen) return null;

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F1B10]/40 backdrop-blur-sm transition-opacity"
      />

      {/* Parchment Menu Panel */}
      <div className="relative w-full max-w-2xl bg-[#FFF8F0] shadow-2xl h-full flex flex-col border-l border-[#E6DCB8] z-10 overflow-y-auto">
        {/* Header with Hand-Printed Card Aesthetic */}
        <div className="p-6 sm:p-8 bg-[#F6EDDB] border-b border-[#E6DCB8] relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg text-[#00324B] hover:bg-[#EAE2D0] transition-colors cursor-pointer"
            aria-label="Close menu drawer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center max-w-md mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
              Hand-Printed Southern Ceylon Carte
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#00324B] font-semibold">
              The Verandah at Luma Cove
            </h2>
            <p className="text-xs text-[#41474D] font-light leading-relaxed">
              Harvested daily from the fishermen of Weligama Bay and our organic Mirissa spice estate. Cooked over tamarind wood embers and pressed coconut creams.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {[
              { id: 'all', label: 'Complete Card' },
              { id: 'starters', label: 'From The Boats' },
              { id: 'mains', label: 'Clay & Ember Mains' },
              { id: 'desserts', label: 'Kithul & Curd' },
              { id: 'cocktails', label: 'Estate Libations' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1 text-xs tracking-wide transition-all rounded-md cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#00324B] text-[#FFF8F0] font-medium shadow-sm'
                    : 'text-[#41474D] hover:text-[#00324B] hover:bg-[#EAE2D0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="p-6 sm:p-8 flex-1 space-y-8 bg-[#FFF8F0]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group border-b border-[#E6DCB8]/60 pb-6 last:border-b-0 space-y-2"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-editorial text-xl font-medium text-[#00324B] group-hover:text-[#8C4A2F] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-serif italic text-[#8C4A2F]/80">
                    {item.vernacularTitle}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-editorial text-lg font-semibold text-[#00324B]">
                    ${item.priceUsd}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-1 text-[11px] text-[#72787E]">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.ingredients.map((ing, i) => (
                    <span key={i} className="inline-block text-[#5C2C16]">
                      {ing}{i < item.ingredients.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
                {item.dietary && (
                  <span className="text-[#3B6934] font-medium shrink-0">
                    {item.dietary}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Terroir & Origin Note */}
          <div className="p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8] text-center space-y-2">
            <h4 className="font-editorial text-base text-[#00324B] font-semibold">
              Terroir & Seafood Provenance
            </h4>
            <p className="text-xs text-[#41474D] leading-relaxed">
              We do not accept frozen seafood. Every yellowfin tuna, mud crab, and rock lobster is line-caught or caught in sustainable pots by fishermen operating traditional outrigger oru boats along Weligama and Mirissa bays.
            </p>
          </div>
        </div>

        {/* Bottom Booking Action */}
        <div className="p-6 bg-[#F6EDDB] border-t border-[#E6DCB8] flex items-center justify-between gap-4">
          <div>
            <span className="block text-[11px] uppercase tracking-wider font-bold text-[#8C4A2F]">
              Oceanfront Seating
            </span>
            <span className="text-xs text-[#41474D]">Reservations open daily from 12:00 PM – 22:30 PM</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onReserveTable();
            }}
            className="px-5 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer whitespace-nowrap"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </div>
  );
};
