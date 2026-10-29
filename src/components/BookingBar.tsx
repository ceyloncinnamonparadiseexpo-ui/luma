import React, { useState } from 'react';
import { Calendar, Users, Home, Search, ArrowRight } from 'lucide-react';
import { RESORT_SUITES } from '../data/resortData';

interface BookingBarProps {
  onCheckRates: (criteria: {
    checkIn: string;
    checkOut: string;
    guests: number;
    category: string;
  }) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onCheckRates }) => {
  const [checkIn, setCheckIn] = useState('2026-11-12');
  const [checkOut, setCheckOut] = useState('2026-11-16');
  const [guests, setGuests] = useState(2);
  const [category, setCategory] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckRates({
      checkIn,
      checkOut,
      guests,
      category,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFF8F0] border border-[#E6DCB8] rounded-xl p-3 sm:p-4 shadow-parchment transition-all hover:border-[#1B4965]/40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:divide-x lg:divide-[#E6DCB8]/80">
          {/* Check-In / Check-Out */}
          <div className="flex items-center gap-3 px-2">
            <Calendar className="w-5 h-5 text-[#8C4A2F] shrink-0" />
            <div className="flex-1">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-[#8C4A2F]">
                Dates of Stay
              </label>
              <div className="flex items-center gap-2 mt-0.5">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#1F1B10] focus:outline-none w-[110px] cursor-pointer"
                />
                <span className="text-[#8C4A2F]/60 text-xs font-serif">to</span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#1F1B10] focus:outline-none w-[110px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 px-2 lg:pl-4">
            <Users className="w-5 h-5 text-[#1B4965] shrink-0" />
            <div className="flex-1">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-[#8C4A2F]">
                Guests & Sanctuary
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="mt-0.5 bg-transparent text-xs font-semibold text-[#1F1B10] focus:outline-none w-full cursor-pointer"
              >
                <option value={1}>1 Discerning Guest</option>
                <option value={2}>2 Guests (Couple / Retreat)</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests (Family / Residence)</option>
              </select>
            </div>
          </div>

          {/* Villa Category */}
          <div className="flex items-center gap-3 px-2 lg:pl-4">
            <Home className="w-5 h-5 text-[#3B6934] shrink-0" />
            <div className="flex-1">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-[#8C4A2F]">
                Residence Tier
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-0.5 bg-transparent text-xs font-semibold text-[#1F1B10] focus:outline-none w-full cursor-pointer"
              >
                <option value="all">All Suites & Villas</option>
                <option value="villa">Ocean Cliff Villa (Plunge Pool)</option>
                <option value="pavilion">Cinnamon Heritage Pavilion</option>
                <option value="suite">Palm Canopy Verandah</option>
                <option value="penthouse">Weligama Royal Penthouse</option>
              </select>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-end px-2 lg:pl-4">
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
            >
              <span>Check Rates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
