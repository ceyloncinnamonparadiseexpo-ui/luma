import React, { useState } from 'react';
import { Compass, Mail, Check, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: 'sanctuary' | 'suites' | 'ayurveda' | 'dining' | 'experiences') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#1F1B10] text-[#FFF8F0] border-t border-[#343024] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Top Tier: Wordmark & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold tracking-tight text-[#FFF8F0]">
              LUMA COVE WELIGAMA
            </h2>
            <p className="text-xs text-[#C1C7CE] max-w-md font-light leading-relaxed">
              A private coastal retreat and Ayurvedic healing sanctuary overlooking the Indian Ocean. Rooted in the vernacular terroir, spices, and serene hospitality of southern Sri Lanka.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#E6DCB8]/80 font-mono pt-1">
              <Compass className="w-3.5 h-3.5 text-[#8C4A2F]" />
              <span>05°58′32″N · 80°25′44″E · Weligama Bay, Sri Lanka</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3 bg-[#343024]/50 p-6 rounded-2xl border border-[#72787E]/30">
            <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#E6DCB8]">
              The Southern Equinox Gazette
            </span>
            <p className="text-xs text-[#C1C7CE]">
              Occasional dispatches on Ayurvedic monsoon wellness rituals, surf swell seasons, and seasonal retreat bookings.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#B9EEAB]">
                <Check className="w-4 h-4" />
                <span>Ayubowan. You have been added to our private guest register.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#1F1B10] border border-[#72787E] rounded-lg px-3.5 py-2 text-xs text-[#FFF8F0] placeholder-[#72787E] focus:outline-none focus:border-[#E6DCB8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8C4A2F] hover:bg-[#B85D36] text-[#FFF8F0] text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Join Register
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Tier: Navigation Links Mirror */}
        <div className="pt-8 border-t border-[#343024] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-[#C1C7CE]">
          <div className="space-y-2">
            <strong className="block text-[#E6DCB8] text-[10px] uppercase font-bold tracking-wider">
              Sanctuary
            </strong>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('sanctuary')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Overview & Terroir
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('suites')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Suites & Plunge Villas
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#FFF8F0] cursor-pointer">
                  Direct Reservations
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <strong className="block text-[#E6DCB8] text-[10px] uppercase font-bold tracking-wider">
              Healing & Movement
            </strong>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('ayurveda')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Ayurvedic Pavilion
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ayurveda')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Shirodhara Flow
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ayurveda')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Daily Yoga Shala
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <strong className="block text-[#E6DCB8] text-[10px] uppercase font-bold tracking-wider">
              Terroir Dining
            </strong>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('dining')} className="hover:text-[#FFF8F0] cursor-pointer">
                  The Ocean Verandah
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dining')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Ceylon Spice Lounge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dining')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Vernacular Dining Carte
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <strong className="block text-[#E6DCB8] text-[10px] uppercase font-bold tracking-wider">
              Expeditions
            </strong>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('experiences')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Private Weligama Surf
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experiences')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Mirissa Whale Catamaran
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experiences')} className="hover:text-[#FFF8F0] cursor-pointer">
                  Historic Galle Fort
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Quiet Legal Marks */}
        <div className="pt-8 border-t border-[#343024] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#72787E]">
          <div>
            © {new Date().getFullYear()} Luma Cove Weligama. All rights reserved. Sri Lanka Tourism Development Authority License #SLTDA/SQA/RES/2026/041.
          </div>
          <div className="flex items-center gap-4">
            <span>Coastal Heritage Sanctuary</span>
            <span>·</span>
            <span>Sustainable Marine Guardian</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
