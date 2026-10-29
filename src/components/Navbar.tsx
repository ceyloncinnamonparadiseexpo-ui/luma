import React, { useState } from 'react';
import { Menu, X, Compass, UtensilsCrossed } from 'lucide-react';

export type ActiveScreen = 'sanctuary' | 'suites' | 'ayurveda' | 'dining' | 'experiences';

interface NavbarProps {
  activeScreen: ActiveScreen;
  onSelectScreen: (screen: ActiveScreen) => void;
  onOpenBooking: () => void;
  onOpenMenuDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  onSelectScreen,
  onOpenBooking,
  onOpenMenuDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ActiveScreen; label: string }[] = [
    { id: 'sanctuary', label: 'Sanctuary' },
    { id: 'suites', label: 'Suites & Villas' },
    { id: 'ayurveda', label: 'Ayurveda & Spa' },
    { id: 'dining', label: 'Coastal Dining' },
    { id: 'experiences', label: 'Experiences' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#E6DCB8] transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => {
            onSelectScreen('sanctuary');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-editorial text-xl sm:text-2xl font-semibold tracking-tight text-[#00324B] group-hover:text-[#8C4A2F] transition-colors whitespace-nowrap shrink-0 block">
            LUMA COVE WELIGAMA
          </span>
        </button>

        {/* Zone 2: 4–5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onSelectScreen(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative py-1 tracking-wide transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#00324B] font-semibold'
                    : 'text-[#41474D] hover:text-[#00324B]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8C4A2F] transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Vernacular Drawer Affordance */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenMenuDrawer}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#00324B] border border-[#00324B]/30 hover:border-[#00324B] hover:bg-[#F6EDDB] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            title="Open Hand-Printed Vernacular Dining Menu"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#8C4A2F]" />
            <span>Vernacular Menu</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#FFF8F0] bg-[#00324B] hover:bg-[#8C4A2F] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            Reserve Stay
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FFF8F0] bg-[#00324B] rounded-lg cursor-pointer"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#00324B] hover:bg-[#F6EDDB] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F6EDDB] border-b border-[#E6DCB8] px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectScreen(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left text-base py-1 font-medium ${
                  activeScreen === link.id
                    ? 'text-[#00324B] font-semibold pl-2 border-l-2 border-[#8C4A2F]'
                    : 'text-[#41474D]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E6DCB8] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMenuDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#00324B] border border-[#00324B] rounded-lg bg-[#FFF8F0]"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#8C4A2F]" />
              View Hand-Printed Dining Menu
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-[#FFF8F0] bg-[#00324B] rounded-lg"
            >
              Reserve Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
