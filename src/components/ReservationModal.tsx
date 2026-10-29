import React, { useState } from 'react';
import { X, Check, Calendar, Users, ShieldCheck, Sparkles, CreditCard, Copy, ArrowLeft, ArrowRight, Printer } from 'lucide-react';
import { RESORT_SUITES, Suite } from '../data/resortData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuiteId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialSuiteId,
  initialCheckIn = '2026-11-12',
  initialCheckOut = '2026-11-16',
  initialGuests = 2,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(initialGuests);
  const [selectedSuiteId, setSelectedSuiteId] = useState(initialSuiteId || RESORT_SUITES[0].id);

  // Add-ons
  const [addons, setAddons] = useState<{
    airportTransfer: boolean;
    ayurvedicBoard: boolean;
    surfSession: boolean;
    floralBath: boolean;
  }>({
    airportTransfer: false,
    ayurvedicBoard: true,
    surfSession: false,
    floralBath: false,
  });

  // Guest details
  const [guestDetails, setGuestDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    specialNotes: '',
  });

  const [bookingReference, setBookingReference] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(d2.getTime() - d1.getTime(), 86400000);
  const nights = Math.max(Math.round(diffTime / (1000 * 60 * 60 * 24)), 1);

  const selectedSuite = RESORT_SUITES.find((s) => s.id === selectedSuiteId) || RESORT_SUITES[0];
  const suiteTotal = selectedSuite.pricePerNight * nights;

  // Addon costs
  const transferCost = addons.airportTransfer ? 95 : 0;
  const boardCost = addons.ayurvedicBoard ? 85 * guests * nights : 0;
  const surfCost = addons.surfSession ? 90 * guests : 0;
  const bathCost = addons.floralBath ? 180 : 0;
  const totalCost = suiteTotal + transferCost + boardCost + surfCost + bathCost;
  const taxesUsd = Math.round(totalCost * 0.12);
  const grandTotal = totalCost + taxesUsd;

  const handleNextToStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestDetails.fullName || !guestDetails.email) {
      setFormError('Please enter your full name and valid email address.');
      return;
    }
    setFormError('');
    const randomCode = `LCW-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingReference(randomCode);
    setStep(4);
  };

  const handleCopyRef = () => {
    navigator.clipboard?.writeText(bookingReference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F1B10]/50 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment-lg z-10 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-6 bg-[#F6EDDB] border-b border-[#E6DCB8] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
              Direct Sanctuary Booking
            </span>
            <h2 className="font-editorial text-2xl text-[#00324B] font-semibold">
              Reserve Your Stay at Luma Cove
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#00324B] hover:bg-[#EAE2D0] rounded-lg transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress */}
        <div className="bg-[#EAE2D0]/60 px-6 py-2.5 flex items-center justify-between text-xs border-b border-[#E6DCB8]">
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
              step >= 1 ? 'bg-[#00324B] text-[#FFF8F0]' : 'bg-[#E6DCB8] text-[#1F1B10]'
            }`}>1</span>
            <span className={step === 1 ? 'font-semibold text-[#00324B]' : 'text-[#41474D]'}>Suite & Dates</span>
          </div>
          <span className="text-[#C1C7CE]">/</span>
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
              step >= 2 ? 'bg-[#00324B] text-[#FFF8F0]' : 'bg-[#E6DCB8] text-[#1F1B10]'
            }`}>2</span>
            <span className={step === 2 ? 'font-semibold text-[#00324B]' : 'text-[#41474D]'}>Rituals & Add-ons</span>
          </div>
          <span className="text-[#C1C7CE]">/</span>
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
              step >= 3 ? 'bg-[#00324B] text-[#FFF8F0]' : 'bg-[#E6DCB8] text-[#1F1B10]'
            }`}>3</span>
            <span className={step === 3 ? 'font-semibold text-[#00324B]' : 'text-[#41474D]'}>Guest Details</span>
          </div>
          <span className="text-[#C1C7CE]">/</span>
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
              step === 4 ? 'bg-[#3B6934] text-[#FFF8F0]' : 'bg-[#E6DCB8] text-[#1F1B10]'
            }`}>4</span>
            <span className={step === 4 ? 'font-semibold text-[#3B6934]' : 'text-[#41474D]'}>Confirmation</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: Dates & Suite */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#8C4A2F] tracking-wider mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-3 py-2 text-xs font-semibold text-[#1F1B10] focus:border-[#00324B]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#8C4A2F] tracking-wider mb-1">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-3 py-2 text-xs font-semibold text-[#1F1B10] focus:border-[#00324B]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#8C4A2F] tracking-wider mb-1">
                    Guests ({nights} {nights === 1 ? 'Night' : 'Nights'})
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-3 py-2 text-xs font-semibold text-[#1F1B10] focus:border-[#00324B]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests (Penthouse)</option>
                  </select>
                </div>
              </div>

              {/* Suite Selection Grid */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-[#00324B]">
                  Choose Your Sanctuary Suite
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RESORT_SUITES.map((suite) => {
                    const isSelected = selectedSuiteId === suite.id;
                    return (
                      <div
                        key={suite.id}
                        onClick={() => setSelectedSuiteId(suite.id)}
                        className={`border rounded-xl p-3.5 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#00324B] bg-[#F6EDDB] shadow-md ring-1 ring-[#00324B]'
                            : 'border-[#E6DCB8] bg-[#FFF8F0] hover:border-[#8C4A2F]'
                        }`}
                      >
                        <div className="h-32 rounded-lg overflow-hidden mb-3 relative bg-[#EAE2D0]">
                          <img
                            src={suite.image}
                            alt={suite.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#00324B]/90 text-[#FFF8F0] text-[10px] font-semibold rounded">
                            ${suite.pricePerNight}/night
                          </div>
                        </div>

                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-editorial text-base font-semibold text-[#00324B]">
                              {suite.name}
                            </h4>
                            <p className="text-[11px] text-[#41474D] line-clamp-1">
                              {suite.tagline}
                            </p>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-[#00324B] text-[#FFF8F0] flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3" />
                            </div>
                          )}
                        </div>

                        <div className="mt-2 pt-2 border-t border-[#E6DCB8]/60 flex items-center justify-between text-[11px] text-[#72787E]">
                          <span>{suite.sizeSqm} sqm · {suite.view}</span>
                          <span className="font-semibold text-[#00324B]">
                            ${suite.pricePerNight * nights} ({nights}N)
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Bespoke Add-ons */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
                <h4 className="font-editorial text-lg text-[#00324B] font-semibold">
                  Curated Island Rituals & Add-ons
                </h4>
                <p className="text-xs text-[#41474D] mt-1">
                  Enrich your stay at Luma Cove with personalized restorative practices and private coastal transit.
                </p>
              </div>

              <div className="space-y-3">
                {/* Addon 1 */}
                <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E6DCB8] hover:bg-[#F6EDDB] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={addons.ayurvedicBoard}
                    onChange={(e) => setAddons({ ...addons, ayurvedicBoard: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#00324B] rounded border-[#E6DCB8] focus:ring-[#00324B]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00324B]">
                        Daily Ayurvedic Full Board Culinary Journey
                      </span>
                      <span className="text-xs font-semibold text-[#8C4A2F]">
                        +$85 / person / day
                      </span>
                    </div>
                    <p className="text-[11px] text-[#41474D] mt-0.5">
                      Sunrise tropical fruit elixir, dosha-tailored organic lunch, and 4-course seaside verandah dinner.
                    </p>
                  </div>
                </label>

                {/* Addon 2 */}
                <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E6DCB8] hover:bg-[#F6EDDB] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={addons.airportTransfer}
                    onChange={(e) => setAddons({ ...addons, airportTransfer: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#00324B] rounded border-[#E6DCB8] focus:ring-[#00324B]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00324B]">
                        Private Airport Chauffeur (Colombo BIA or Mattala)
                      </span>
                      <span className="text-xs font-semibold text-[#8C4A2F]">
                        +$95 one-way
                      </span>
                    </div>
                    <p className="text-[11px] text-[#41474D] mt-0.5">
                      Air-conditioned luxury estate sedan with fresh king coconut and cold scented towels on arrival.
                    </p>
                  </div>
                </label>

                {/* Addon 3 */}
                <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E6DCB8] hover:bg-[#F6EDDB] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={addons.surfSession}
                    onChange={(e) => setAddons({ ...addons, surfSession: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#00324B] rounded border-[#E6DCB8] focus:ring-[#00324B]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00324B]">
                        Private Dawn Surf Coaching & Equipment
                      </span>
                      <span className="text-xs font-semibold text-[#8C4A2F]">
                        +$90 / guest
                      </span>
                    </div>
                    <p className="text-[11px] text-[#41474D] mt-0.5">
                      2.5 hours private lesson in Weligama Bay gentle wave break with board and video analysis.
                    </p>
                  </div>
                </label>

                {/* Addon 4 */}
                <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E6DCB8] hover:bg-[#F6EDDB] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={addons.floralBath}
                    onChange={(e) => setAddons({ ...addons, floralBath: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#00324B] rounded border-[#E6DCB8] focus:ring-[#00324B]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00324B]">
                        Southern Ceylon Cinnamon Scrub & Pink Lotus Bath
                      </span>
                      <span className="text-xs font-semibold text-[#8C4A2F]">
                        +$180 / couple
                      </span>
                    </div>
                    <p className="text-[11px] text-[#41474D] mt-0.5">
                      105-minute signature ritual in the open-air stone pavilion with freshly harvested botanical oils.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* STEP 3: Guest Details & Summary */}
          {step === 3 && (
            <div className="space-y-6">
              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-lg">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#00324B] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Eleanor Vance"
                    value={guestDetails.fullName}
                    onChange={(e) => setGuestDetails({ ...guestDetails, fullName: e.target.value })}
                    className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-3 py-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#00324B] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={guestDetails.email}
                    onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                    className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-3 py-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#00324B] mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7911 123456"
                    value={guestDetails.phone}
                    onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                    className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-3 py-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#00324B] mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    value={guestDetails.country}
                    onChange={(e) => setGuestDetails({ ...guestDetails, country: e.target.value })}
                    className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg px-3 py-2 text-xs text-[#1F1B10] focus:border-[#00324B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#00324B] mb-1">
                  Special Dietary or Ayurvedic Focus (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Pescatarian, interested in stress relief or herbal sleep support..."
                  value={guestDetails.specialNotes}
                  onChange={(e) => setGuestDetails({ ...guestDetails, specialNotes: e.target.value })}
                  className="w-full bg-[#FFF8F0] border border-[#E6DCB8] rounded-lg p-2.5 text-xs text-[#1F1B10] focus:border-[#00324B]"
                />
              </div>

              {/* Price Calculation Card */}
              <div className="p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#41474D]">
                    {selectedSuite.name} ({nights} Nights × ${selectedSuite.pricePerNight})
                  </span>
                  <span className="font-semibold text-[#00324B]">${suiteTotal}</span>
                </div>
                {addons.ayurvedicBoard && (
                  <div className="flex justify-between text-[#41474D]">
                    <span>Ayurvedic Board ({guests} guests × {nights} nights)</span>
                    <span>${boardCost}</span>
                  </div>
                )}
                {addons.airportTransfer && (
                  <div className="flex justify-between text-[#41474D]">
                    <span>Chauffeur Airport Transfer</span>
                    <span>${transferCost}</span>
                  </div>
                )}
                {addons.surfSession && (
                  <div className="flex justify-between text-[#41474D]">
                    <span>Private Surf Coaching</span>
                    <span>${surfCost}</span>
                  </div>
                )}
                {addons.floralBath && (
                  <div className="flex justify-between text-[#41474D]">
                    <span>Cinnamon Scrub & Lotus Bath</span>
                    <span>${bathCost}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#41474D] pt-1 border-t border-[#E6DCB8]">
                  <span>Sri Lanka Tourism & Conservation Levy (12%)</span>
                  <span>${taxesUsd}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#00324B] pt-2 border-t border-[#00324B]/20">
                  <span>Total Estimated Sanctuary Investment</span>
                  <span className="font-editorial text-base text-[#8C4A2F]">${grandTotal} USD</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation */}
          {step === 4 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#B9EEAB] text-[#2D5A27] flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B6934]">
                  Reservation Confirmed
                </span>
                <h3 className="font-editorial text-3xl text-[#00324B] font-semibold">
                  Ayubowan, {guestDetails.fullName || 'Discerning Guest'}
                </h3>
                <p className="text-xs text-[#41474D] max-w-md mx-auto">
                  Your reservation at Luma Cove Weligama has been cataloged. Our concierge has dispatched a personalized itinerary to <strong className="text-[#00324B]">{guestDetails.email}</strong>.
                </p>
              </div>

              {/* Reference Box */}
              <div className="inline-flex items-center gap-3 p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8]">
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">
                    Sanctuary Reference Code
                  </span>
                  <span className="font-mono text-lg font-bold text-[#00324B] tracking-wider">
                    {bookingReference}
                  </span>
                </div>
                <button
                  onClick={handleCopyRef}
                  className="p-2 rounded-lg bg-[#FFF8F0] border border-[#E6DCB8] hover:bg-[#EAE2D0] text-[#00324B] transition-colors cursor-pointer"
                  title="Copy Reference"
                >
                  {copiedRef ? <Check className="w-4 h-4 text-[#3B6934]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-4 bg-[#FFF8F0] border border-[#E6DCB8] rounded-xl text-left text-xs space-y-2 text-[#41474D]">
                <div className="flex justify-between border-b border-[#E6DCB8] pb-1.5 font-medium">
                  <span>Selected Residence:</span>
                  <strong className="text-[#00324B]">{selectedSuite.name}</strong>
                </div>
                <div className="flex justify-between border-b border-[#E6DCB8] pb-1.5">
                  <span>Dates of Stay:</span>
                  <span>{checkIn} to {checkOut} ({nights} nights)</span>
                </div>
                <div className="flex justify-between border-b border-[#E6DCB8] pb-1.5">
                  <span>Party Size:</span>
                  <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-[#00324B]">
                  <span>Total Amount (Taxes Incl.):</span>
                  <span className="text-[#8C4A2F]">${grandTotal} USD</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E6DCB8] rounded-lg text-xs font-semibold text-[#00324B] hover:bg-[#F6EDDB] cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print Voucher
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-[#00324B] text-[#FFF8F0] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#8C4A2F] cursor-pointer"
                >
                  Return to Resort
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="p-4 sm:p-6 bg-[#F6EDDB] border-t border-[#E6DCB8] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((step - 1) as any)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#41474D] hover:text-[#00324B] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Step
              </button>
            ) : (
              <span className="text-xs text-[#72787E]">Best Rate Guarantee Direct Booking</span>
            )}

            {step === 1 && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer"
              >
                <span>Continue to Add-ons</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer"
              >
                <span>Continue to Guest Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 3 && (
              <button
                type="button"
                onClick={handleConfirmReservation}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#00324B] hover:bg-[#3B6934] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer"
              >
                <span>Confirm & Guarantee Stay</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
