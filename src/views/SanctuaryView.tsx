import React from 'react';
import { ArrowRight, Compass, Sparkles, Waves, Sun, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { RESORT_SUITES, RESORT_IMAGES, GUEST_MONOGRAPHS, Suite } from '../data/resortData';
import { BookingBar } from '../components/BookingBar';

interface SanctuaryViewProps {
  onSelectSuite: (suite: Suite) => void;
  onBookSuite: (suiteId: string) => void;
  onOpenBooking: () => void;
  onOpenDoshaQuiz: () => void;
  onOpenMenuDrawer: () => void;
  onNavigate: (screen: 'sanctuary' | 'suites' | 'ayurveda' | 'dining' | 'experiences') => void;
}

export const SanctuaryView: React.FC<SanctuaryViewProps> = ({
  onSelectSuite,
  onBookSuite,
  onOpenBooking,
  onOpenDoshaQuiz,
  onOpenMenuDrawer,
  onNavigate,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[82vh] flex flex-col justify-end pb-12 sm:pb-16 overflow-hidden">
        {/* Background Image with Warm Scrim */}
        <div className="absolute inset-0 bg-[#EAE2D0]">
          <img
            src={RESORT_IMAGES.hero}
            alt="Luma Cove Weligama Coastal Pavilion overlooking Bay"
            className="w-full h-full object-cover object-center transform scale-[1.01] transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B10]/85 via-[#1F1B10]/35 to-transparent" />
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-[#FFF8F0] space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E6DCB8]">
              Weligama Bay · Southern Coast, Sri Lanka
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance leading-[1.12]">
              Where Ocean Rhythms Meet Vernacular Soul
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#F6EDDB]/90 font-light max-w-2xl leading-relaxed">
              Perched above the warm amber sands of southern Ceylon. Open-air teak pavilions, private plunge pools carved into granite headlands, and timeless Ayurvedic healing.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap pt-2">
            <button
              onClick={() => onNavigate('suites')}
              className="px-6 py-3 bg-[#FFF8F0] hover:bg-[#F6EDDB] text-[#00324B] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-parchment transition-all duration-200 cursor-pointer"
            >
              Explore Suites & Residences
            </button>
            <button
              onClick={onOpenDoshaQuiz}
              className="px-6 py-3 bg-transparent border border-[#FFF8F0]/80 hover:bg-[#FFF8F0]/15 text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Discover Your Ceylon Dosha
            </button>
          </div>
        </div>
      </section>

      {/* Floating Booking Engine Bar */}
      <section className="-mt-10 sm:-mt-14 relative z-20">
        <BookingBar
          onCheckRates={(criteria) => {
            onOpenBooking();
          }}
        />
      </section>

      {/* Philosophy & Terroir Narrative */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
              The Terroir of Weligama
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#00324B] font-semibold leading-tight text-balance">
              Refined Coastal Minimalism Rooted in Southern Ceylon
            </h2>
            <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
              Luma Cove was conceived not as a barrier against the tropics, but as an open-air celebration of them. We reject sterile hotel corridors in favor of cooling terracotta verandas, jackwood joinery, and the steady whisper of Indian Ocean swells.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('experiences')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C4A2F] hover:text-[#531F07] underline underline-offset-4 cursor-pointer"
              >
                <span>Read our Southern Coast Monograph</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] space-y-2.5">
              <span className="text-xl font-editorial font-bold text-[#8C4A2F]">01</span>
              <h3 className="font-editorial text-lg text-[#00324B] font-semibold">
                Vernacular Architecture
              </h3>
              <p className="text-xs text-[#41474D] leading-relaxed">
                Handmade clay tiles, aged Jackwood beams, and brass hardware created by hereditary southern craftsmen.
              </p>
            </div>

            <div className="p-6 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] space-y-2.5">
              <span className="text-xl font-editorial font-bold text-[#8C4A2F]">02</span>
              <h3 className="font-editorial text-lg text-[#00324B] font-semibold">
                Ocean & Earth Terroir
              </h3>
              <p className="text-xs text-[#41474D] leading-relaxed">
                Yellowfin tuna line-caught at dawn by outrigger boats, paired with organic spices from our private estate.
              </p>
            </div>

            <div className="p-6 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] space-y-2.5">
              <span className="text-xl font-editorial font-bold text-[#8C4A2F]">03</span>
              <h3 className="font-editorial text-lg text-[#00324B] font-semibold">
                Authentic Ayurveda
              </h3>
              <p className="text-xs text-[#41474D] leading-relaxed">
                Under the direct guidance of Dr. Wickremasinghe, every herb, oil, and ritual is calibrated to your dosha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suites & Residences */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E6DCB8] pb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
              Coastal Sanctuaries
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#00324B] font-semibold">
              Suites & Private Plunge Villas
            </h2>
          </div>
          <button
            onClick={() => onNavigate('suites')}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#00324B] hover:text-[#8C4A2F] cursor-pointer"
          >
            <span>View All 4 Residence Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESORT_SUITES.slice(0, 2).map((suite) => (
            <div
              key={suite.id}
              className="bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl overflow-hidden shadow-parchment hover:shadow-parchment-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-72 relative overflow-hidden bg-[#EAE2D0]">
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
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#00324B]/90 backdrop-blur-sm text-[#FFF8F0] text-xs font-semibold rounded-md">
                    From ${suite.pricePerNight} / night
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#72787E]">
                    <span>{suite.sizeSqm} sqm</span>
                    <span>·</span>
                    <span>{suite.view}</span>
                    <span>·</span>
                    <span>Up to {suite.maxGuests} Guests</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-semibold text-[#00324B]">
                    {suite.name}
                  </h3>

                  <p className="text-xs text-[#41474D] leading-relaxed line-clamp-2">
                    {suite.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#5C2C16]">
                    <span>✓ {suite.features.pool}</span>
                    <span>✓ {suite.features.bath}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E6DCB8]/50 mt-4 flex items-center justify-between gap-4">
                <button
                  onClick={() => onSelectSuite(suite)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#00324B] hover:text-[#8C4A2F] cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Floorplan & Amenities</span>
                </button>
                <button
                  onClick={() => onBookSuite(suite.id)}
                  className="px-5 py-2 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Reserve Suite
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ayurvedic & Dining Dual Spotlight (Asymmetric Bento) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ayurveda Spotlight */}
          <div className="bg-[#F6EDDB] border border-[#E6DCB8] rounded-2xl overflow-hidden p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B6934]">
                Ancient Ceylon Healing
              </span>
              <h2 className="font-editorial text-3xl text-[#00324B] font-semibold">
                The Ayurveda & Shirodhara Pavilion
              </h2>
              <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
                Step into an open-air sanctuary surrounded by pink water lotuses and tropical palms. Our resident Ayurvedic doctors prepare personalized medicated oils from 48 hand-gathered southern Sri Lankan botanicals.
              </p>

              <div className="rounded-xl overflow-hidden h-48 bg-[#EAE2D0]">
                <img
                  src={RESORT_IMAGES.wellness}
                  alt="Ayurvedic spa pavilion with stone lotus basin"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                onClick={onOpenDoshaQuiz}
                className="px-5 py-2.5 bg-[#00324B] hover:bg-[#3B6934] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Assess Your Dosha Profile
              </button>
              <button
                onClick={() => onNavigate('ayurveda')}
                className="text-xs font-semibold text-[#00324B] hover:text-[#8C4A2F] underline underline-offset-4 cursor-pointer"
              >
                View Daily Yoga & Treatments
              </button>
            </div>
          </div>

          {/* Dining Spotlight */}
          <div className="bg-[#F6EDDB] border border-[#E6DCB8] rounded-2xl overflow-hidden p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
                Vernacular Culinary Arts
              </span>
              <h2 className="font-editorial text-3xl text-[#00324B] font-semibold">
                The Verandah & Ceylon Spice Lounge
              </h2>
              <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
                Dine to the melody of breaking waves. Wood-fired lagoon crab, line-caught yellowfin tuna carpaccio, stone-ground cinnamon quills, and single-estate coconut arrack aperitifs.
              </p>

              <div className="rounded-xl overflow-hidden h-48 bg-[#EAE2D0]">
                <img
                  src={RESORT_IMAGES.dining}
                  alt="Fine coastal dining with spiced lobster on ocean verandah"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                onClick={onOpenMenuDrawer}
                className="px-5 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Open Hand-Printed Carte
              </button>
              <button
                onClick={() => onNavigate('dining')}
                className="text-xs font-semibold text-[#00324B] hover:text-[#8C4A2F] underline underline-offset-4 cursor-pointer"
              >
                Reserve Oceanfront Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Monographs (Testimonials with Strict Adjacency) */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
            Traveler Chronicles
          </span>
          <h2 className="font-editorial text-3xl text-[#00324B] font-semibold">
            Monographs from Weligama Bay
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUEST_MONOGRAPHS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment flex flex-col justify-between space-y-4"
            >
              <p className="font-editorial italic text-sm text-[#1F1B10] leading-relaxed">
                "{item.quote}"
              </p>
              <div className="pt-3 border-t border-[#E6DCB8]/60 text-xs">
                <strong className="block text-[#00324B] font-semibold">{item.guest}</strong>
                <span className="text-[#72787E]">{item.location}</span>
                <div className="mt-1 text-[11px] text-[#8C4A2F] font-medium">
                  {item.stayedIn} · {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
