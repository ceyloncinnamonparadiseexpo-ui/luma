import React from 'react';
import { Utensils, GlassWater, Flame, Compass, ArrowRight, Clock, MapPin } from 'lucide-react';
import { MENU_ITEMS, RESORT_IMAGES } from '../data/resortData';

interface DiningViewProps {
  onOpenMenuDrawer: () => void;
  onOpenTableReservation: () => void;
}

export const DiningView: React.FC<DiningViewProps> = ({
  onOpenMenuDrawer,
  onOpenTableReservation,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12 space-y-16">
      {/* Header Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
            Indian Ocean Terroir & Spice Heritage
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#00324B] font-semibold tracking-tight text-balance">
            The Verandah & Ceylon Spice Lounge
          </h1>
          <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
            Dining at Luma Cove is governed by the morning catch and the scent of wild cinnamon wood smoke. We do not maintain freezers; our boats dock at dawn in Mirissa and Weligama Bay. Every curry is simmered in earthenware chatties over clay woodfires, finished with freshly pressed coconut milk from our palm groves.
          </p>
          <div className="pt-2 flex items-center gap-4 flex-wrap">
            <button
              onClick={onOpenMenuDrawer}
              className="px-6 py-3 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Open Hand-Printed Carte
            </button>
            <button
              onClick={onOpenTableReservation}
              className="px-6 py-3 border border-[#00324B] text-[#00324B] hover:bg-[#F6EDDB] text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Reserve Oceanfront Table
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl overflow-hidden h-72 sm:h-80 shadow-parchment relative bg-[#EAE2D0]">
          <img
            src={RESORT_IMAGES.dining}
            alt="Candlelit beachfront dining verandah at sunset with lobster"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B10]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-[#FFF8F0] text-xs">
            <strong className="block font-editorial text-base">The Ocean Verandah</strong>
            <span className="text-[#E6DCB8]">Lunch 12:00 – 15:30 · Sunset Dinner 18:00 – 22:30</span>
          </div>
        </div>
      </div>

      {/* Culinary Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] space-y-2">
          <Flame className="w-5 h-5 text-[#8C4A2F]" />
          <h3 className="font-editorial text-lg text-[#00324B] font-semibold">
            Tamarind Wood & Clay Pots
          </h3>
          <p className="text-xs text-[#41474D] leading-relaxed">
            Authentic southern black pork, young jackfruit, and crab curry cooked low and slow inside unglazed terracotta chatties.
          </p>
        </div>

        <div className="p-6 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] space-y-2">
          <Compass className="w-5 h-5 text-[#1B4965]" />
          <h3 className="font-editorial text-lg text-[#00324B] font-semibold">
            Zero-Kilometer Seafood
          </h3>
          <p className="text-xs text-[#41474D] leading-relaxed">
            Yellowfin sashimi, spiny lobster, and lagoon prawns sourced directly from local outrigger artisanal fishermen.
          </p>
        </div>

        <div className="p-6 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] space-y-2">
          <GlassWater className="w-5 h-5 text-[#3B6934]" />
          <h3 className="font-editorial text-lg text-[#00324B] font-semibold">
            Heritage Coconut Arrack
          </h3>
          <p className="text-xs text-[#41474D] leading-relaxed">
            Handcrafted cocktail pairings featuring single-estate distilled palm arrack, wild kithul treacle, and cinnamon smoke.
          </p>
        </div>
      </div>

      {/* Featured Menu Selection */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E6DCB8] pb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
              Daily Offerings
            </span>
            <h2 className="font-editorial text-3xl text-[#00324B] font-semibold">
              Selected Southern Dishes
            </h2>
          </div>
          <button
            onClick={onOpenMenuDrawer}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#00324B] hover:text-[#8C4A2F] cursor-pointer"
          >
            <span>View All Courses & Drinks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment space-y-2 hover:border-[#00324B]/40 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-editorial text-xl font-semibold text-[#00324B]">
                    {item.title}
                  </h3>
                  <span className="text-xs font-serif italic text-[#8C4A2F]">
                    {item.vernacularTitle}
                  </span>
                </div>
                <span className="font-editorial text-lg font-bold text-[#00324B]">
                  ${item.priceUsd}
                </span>
              </div>

              <p className="text-xs text-[#41474D] leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-2 text-[11px] text-[#72787E]">
                <span>{item.ingredients.slice(0, 3).join(' · ')}</span>
                {item.dietary && (
                  <span className="text-[#3B6934] font-medium">{item.dietary}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Booking Banner */}
      <div className="p-8 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] text-center max-w-2xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
          Private Seaside Dinners
        </span>
        <h3 className="font-editorial text-2xl text-[#00324B] font-semibold">
          Reserve a Candlelit Table on the Cliffside
        </h3>
        <p className="text-xs text-[#41474D] leading-relaxed">
          Open to both resort residents and outside culinary travelers. Advanced reservations recommended for sunset pergolas.
        </p>
        <button
          onClick={onOpenTableReservation}
          className="px-6 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
        >
          Book Your Table
        </button>
      </div>
    </div>
  );
};
