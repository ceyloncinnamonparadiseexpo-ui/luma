import React from 'react';
import { X, Check, Droplets, Bed, Users, Maximize2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Suite } from '../data/resortData';

interface SuiteDetailModalProps {
  suite: Suite | null;
  isOpen: boolean;
  onClose: () => void;
  onBookSuite: (suiteId: string) => void;
}

export const SuiteDetailModal: React.FC<SuiteDetailModalProps> = ({
  suite,
  isOpen,
  onClose,
  onBookSuite,
}) => {
  if (!isOpen || !suite) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F1B10]/50 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment-lg z-10 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Media Header */}
        <div className="relative h-64 sm:h-80 bg-[#EAE2D0] shrink-0">
          <img
            src={suite.image}
            alt={suite.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B10]/80 via-transparent to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#1F1B10]/60 hover:bg-[#1F1B10] text-[#FFF8F0] transition-colors cursor-pointer"
            aria-label="Close suite details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E6DCB8]">
                {suite.category.toUpperCase()} RESIDENCE
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#FFF8F0]">
                {suite.name}
              </h2>
            </div>
            <div className="text-right">
              <span className="block text-xs text-[#E6DCB8]">From</span>
              <span className="font-editorial text-2xl font-bold text-[#FFF8F0]">
                ${suite.pricePerNight}
              </span>
              <span className="text-xs text-[#E6DCB8]/90"> / night</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Tagline & Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8] text-center">
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">Dimensions</span>
              <span className="text-xs font-semibold text-[#00324B]">{suite.sizeSqm} sqm</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">Bed Configuration</span>
              <span className="text-xs font-semibold text-[#00324B]">{suite.bedType}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">Occupancy</span>
              <span className="text-xs font-semibold text-[#00324B]">Up to {suite.maxGuests} Guests</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">View</span>
              <span className="text-xs font-semibold text-[#00324B]">{suite.view}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-editorial text-lg font-semibold text-[#00324B]">
              Vernacular Space & Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
              {suite.description}
            </p>
          </div>

          {/* Highlights & Inclusions */}
          <div className="space-y-3">
            <h4 className="font-editorial text-base font-semibold text-[#00324B]">
              Sanctuary Inclusions & Bespoke Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {suite.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#41474D]">
                  <Check className="w-4 h-4 text-[#3B6934] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Specifications */}
          <div className="p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8] space-y-2 text-xs">
            <span className="block font-bold text-[10px] uppercase tracking-wider text-[#8C4A2F]">
              Structural Features
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-[#41474D]">
              <div><strong className="text-[#00324B]">Pool:</strong> {suite.features.pool}</div>
              <div><strong className="text-[#00324B]">Bathing:</strong> {suite.features.bath}</div>
              <div><strong className="text-[#00324B]">Verandah:</strong> {suite.features.verandah}</div>
              <div>
                <strong className="text-[#00324B]">Butler:</strong>{' '}
                {suite.features.butler ? 'Dedicated Ayurvedic Butler' : 'Estate Concierge On Call'}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#F6EDDB] border-t border-[#E6DCB8] flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#72787E]">Inclusive of Daily Ceylon Breakfast & Yoga</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookSuite(suite.id);
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer"
          >
            <span>Reserve {suite.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
