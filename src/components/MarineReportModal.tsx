import React from 'react';
import { X, Waves, Compass, Sun, Wind, Droplets, MapPin, Check } from 'lucide-react';

interface MarineReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MarineReportModal: React.FC<MarineReportModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F1B10]/50 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment-lg z-10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#F6EDDB] border-b border-[#E6DCB8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00324B] text-[#FFF8F0] flex items-center justify-center">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
                Live Marine & Swell Telemetry
              </span>
              <h3 className="font-editorial text-2xl text-[#00324B] font-semibold">
                Weligama Bay Coastal Report
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#00324B] hover:bg-[#EAE2D0] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Marine Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">Swell Wave</span>
              <strong className="text-sm font-semibold text-[#00324B]">3–4 ft Clean</strong>
              <span className="block text-[10px] text-[#72787E]">Period: 14s SW</span>
            </div>
            <div className="p-3.5 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">Ocean Temp</span>
              <strong className="text-sm font-semibold text-[#00324B]">28.2°C</strong>
              <span className="block text-[10px] text-[#72787E]">Rashguard only</span>
            </div>
            <div className="p-3.5 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">Wind</span>
              <strong className="text-sm font-semibold text-[#00324B]">8 kts NE</strong>
              <span className="block text-[10px] text-[#72787E]">Glassy morning</span>
            </div>
            <div className="p-3.5 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
              <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">Tide Level</span>
              <strong className="text-sm font-semibold text-[#00324B]">High at 20:30</strong>
              <span className="block text-[10px] text-[#72787E]">Peak 1.1m</span>
            </div>
          </div>

          {/* Local Surf Breaks Breakdown */}
          <div className="space-y-3">
            <h4 className="font-editorial text-lg text-[#00324B] font-semibold">
              Weligama & Neighborhood Surf Breaks
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#E6DCB8] flex items-start justify-between gap-4">
                <div>
                  <strong className="block text-sm text-[#00324B]">Weligama Main Beach Break</strong>
                  <p className="text-[#41474D] mt-0.5">
                    Gentle, peeling sand-bottom rollers ideal for beginners and longboarders. Directly accessible from our private beach cove.
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-[#B9EEAB] text-[#2D5A27] font-semibold rounded text-[11px] shrink-0">
                  Ideal Today
                </span>
              </div>

              <div className="p-3 bg-[#FDFBF7] rounded-xl border border-[#E6DCB8] flex items-start justify-between gap-4">
                <div>
                  <strong className="block text-sm text-[#00324B]">Fisherman’s Reef (Outrigger Point)</strong>
                  <p className="text-[#41474D] mt-0.5">
                    Fast left-hand reef break with gentle shoulder. Recommended for intermediate surfers during mid-to-high tide.
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-[#F6EDDB] text-[#8C4A2F] font-semibold rounded text-[11px] shrink-0">
                  Intermediate
                </span>
              </div>
            </div>
          </div>

          {/* Advice for resort guests */}
          <div className="p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8] text-xs space-y-1">
            <strong className="text-[#00324B] font-semibold block">Resident Guest Note:</strong>
            <p className="text-[#41474D]">
              Complimentary custom epoxy surfboards, leash setups, and rashguards are ready at the Beach Pavilion. Private coaching sessions depart daily at 07:00 AM and 16:30 PM.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-[#F6EDDB] border-t border-[#E6DCB8] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-[#E6DCB8] rounded-lg text-xs font-semibold text-[#00324B] hover:bg-[#EAE2D0] cursor-pointer"
          >
            Close Report
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="px-5 py-2 bg-[#00324B] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#8C4A2F] cursor-pointer"
          >
            Book Surf Stay
          </button>
        </div>
      </div>
    </div>
  );
};
