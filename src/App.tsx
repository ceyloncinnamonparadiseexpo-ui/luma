/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TideWeatherBar } from './components/TideWeatherBar';
import { Navbar, ActiveScreen } from './components/Navbar';
import { Footer } from './components/Footer';
import { SanctuaryView } from './views/SanctuaryView';
import { SuitesView } from './views/SuitesView';
import { AyurvedaView } from './views/AyurvedaView';
import { DiningView } from './views/DiningView';
import { ExperiencesView } from './views/ExperiencesView';
import { VernacularMenuDrawer } from './components/VernacularMenuDrawer';
import { ReservationModal } from './components/ReservationModal';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { TableReservationModal } from './components/TableReservationModal';
import { AyurvedaDoshaQuizModal } from './components/AyurvedaDoshaQuizModal';
import { MarineReportModal } from './components/MarineReportModal';
import { Suite, RESORT_SUITES } from './data/resortData';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('sanctuary');

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState(false);
  const [isTableReservationOpen, setIsTableReservationOpen] = useState(false);
  const [isMarineReportOpen, setIsMarineReportOpen] = useState(false);
  const [detailSuite, setDetailSuite] = useState<Suite | null>(null);
  const [bookingSuiteId, setBookingSuiteId] = useState<string | undefined>(undefined);

  const handleOpenBookingWithSuite = (suiteId: string) => {
    setBookingSuiteId(suiteId);
    setIsBookingOpen(true);
  };

  const handleOpenBooking = () => {
    setBookingSuiteId(undefined);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1F1B10] flex flex-col font-sans selection:bg-[#E6DCB8] selection:text-[#00324B]">
      {/* 1. Ambient Tide & Weather Strip */}
      <TideWeatherBar onOpenSurfGuide={() => setIsMarineReportOpen(true)} />

      {/* 2. Primary Navigation Bar */}
      <Navbar
        activeScreen={activeScreen}
        onSelectScreen={setActiveScreen}
        onOpenBooking={handleOpenBooking}
        onOpenMenuDrawer={() => setIsMenuDrawerOpen(true)}
      />

      {/* 3. Main Screen View Switcher */}
      <main className="flex-1">
        {activeScreen === 'sanctuary' && (
          <SanctuaryView
            onSelectSuite={(suite) => setDetailSuite(suite)}
            onBookSuite={handleOpenBookingWithSuite}
            onOpenBooking={handleOpenBooking}
            onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
            onOpenMenuDrawer={() => setIsMenuDrawerOpen(true)}
            onNavigate={(screen) => {
              setActiveScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'suites' && (
          <SuitesView
            onSelectSuite={(suite) => setDetailSuite(suite)}
            onBookSuite={handleOpenBookingWithSuite}
          />
        )}

        {activeScreen === 'ayurveda' && (
          <AyurvedaView
            onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
            onBookTreatment={(treatmentName) => {
              handleOpenBooking();
            }}
          />
        )}

        {activeScreen === 'dining' && (
          <DiningView
            onOpenMenuDrawer={() => setIsMenuDrawerOpen(true)}
            onOpenTableReservation={() => setIsTableReservationOpen(true)}
          />
        )}

        {activeScreen === 'experiences' && (
          <ExperiencesView
            onBookExperience={(expTitle) => {
              handleOpenBooking();
            }}
          />
        )}
      </main>

      {/* 4. Quiet Refined Footer */}
      <Footer
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={handleOpenBooking}
      />

      {/* 5. Modals & Drawers */}
      <VernacularMenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
        onReserveTable={() => setIsTableReservationOpen(true)}
      />

      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSuiteId={bookingSuiteId}
      />

      <SuiteDetailModal
        suite={detailSuite}
        isOpen={!!detailSuite}
        onClose={() => setDetailSuite(null)}
        onBookSuite={(suiteId) => {
          setDetailSuite(null);
          handleOpenBookingWithSuite(suiteId);
        }}
      />

      <TableReservationModal
        isOpen={isTableReservationOpen}
        onClose={() => setIsTableReservationOpen(false)}
      />

      <AyurvedaDoshaQuizModal
        isOpen={isDoshaQuizOpen}
        onClose={() => setIsDoshaQuizOpen(false)}
        onBookTreatment={() => {
          handleOpenBooking();
        }}
      />

      <MarineReportModal
        isOpen={isMarineReportOpen}
        onClose={() => setIsMarineReportOpen(false)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
