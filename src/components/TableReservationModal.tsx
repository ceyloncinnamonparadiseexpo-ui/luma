import React, { useState } from 'react';
import { X, Check, Utensils, Calendar, Clock, Users, Sparkles } from 'lucide-react';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [date, setDate] = useState('2026-11-13');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [seating, setSeating] = useState('ocean-pergola');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [confCode, setConfCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    const code = `TBL-${Math.floor(100 + Math.random() * 900)}`;
    setConfCode(code);
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F1B10]/50 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-lg bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment-lg z-10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#F6EDDB] border-b border-[#E6DCB8] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
              The Verandah Restaurant
            </span>
            <h3 className="font-editorial text-2xl text-[#00324B] font-semibold">
              Reserve Coastal Table
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#00324B] hover:bg-[#EAE2D0] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#B9EEAB] text-[#2D5A27] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-editorial text-2xl text-[#00324B] font-semibold">
              Table Reserved for {name}
            </h4>
            <p className="text-xs text-[#41474D]">
              We have prepared your evening at The Verandah for <strong className="text-[#00324B]">{guests} guests</strong> on {date} at {time}.
            </p>
            <div className="p-3 bg-[#F6EDDB] rounded-lg border border-[#E6DCB8] inline-block font-mono text-sm font-bold text-[#00324B]">
              Confirmation #{confCode}
            </div>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#00324B] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#8C4A2F] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#00324B] mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#00324B] mb-1">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                >
                  <option value="12:30">12:30 PM (Midday Breeze Lunch)</option>
                  <option value="14:00">02:00 PM (Late Seafood Lunch)</option>
                  <option value="18:30">06:30 PM (Sunset Aperitif & Dinner)</option>
                  <option value="19:30">07:30 PM (Twilight Oceanfront)</option>
                  <option value="20:30">08:30 PM (Starlight Candlelight)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#00324B] mb-1">Party Size</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={6}>6 Guests (Feast Table)</option>
                  <option value={8}>8 Guests (Private Verandah)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#00324B] mb-1">Seating Ambiance</label>
                <select
                  value={seating}
                  onChange={(e) => setSeating(e.target.value)}
                  className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                >
                  <option value="ocean-pergola">Cliffside Pergola (Closest to Waves)</option>
                  <option value="lantern-lawn">Lantern Lawn under Coconut Palms</option>
                  <option value="teak-room">Open-Air Teak Dining Pavilion</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#00324B] mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Julian Vance"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#00324B] mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="julian@vance.ch"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#00324B] mb-1">Dietary Preferences or Occasion</label>
              <input
                type="text"
                placeholder="e.g. Anniversay, seafood allergies, preference for mild spice..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Confirm Table
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
