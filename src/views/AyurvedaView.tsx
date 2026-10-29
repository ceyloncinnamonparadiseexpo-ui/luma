import React, { useState } from 'react';
import { Sparkles, Leaf, Sun, Clock, Check, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { WELLNESS_TREATMENTS, YOGA_SCHEDULE, RESORT_IMAGES, WellnessTreatment } from '../data/resortData';

interface AyurvedaViewProps {
  onOpenDoshaQuiz: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const AyurvedaView: React.FC<AyurvedaViewProps> = ({
  onOpenDoshaQuiz,
  onBookTreatment,
}) => {
  const [reservedYogaIndex, setReservedYogaIndex] = useState<number | null>(null);

  const handleReserveYoga = (index: number) => {
    setReservedYogaIndex(index);
    setTimeout(() => {
      setReservedYogaIndex(null);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12 space-y-16">
      {/* Header Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B6934]">
            Hela Veda & Vedic Ayurveda
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#00324B] font-semibold tracking-tight text-balance">
            The Ayurveda & Shirodhara Sanctuary
          </h1>
          <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
            In Sri Lanka, healing is inseparable from the land. Our pavilion operates under the direct supervision of resident Ayurvedic physician Dr. Wickremasinghe. We prepare pure herbal decotions, warm medicated oils, and continuous warm streams of oil that dissolve decades of accumulated cognitive fatigue.
          </p>
          <div className="pt-2 flex items-center gap-4 flex-wrap">
            <button
              onClick={onOpenDoshaQuiz}
              className="px-6 py-3 bg-[#00324B] hover:bg-[#3B6934] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Take the 3-Minute Dosha Assessment
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl overflow-hidden h-72 sm:h-80 shadow-parchment relative bg-[#EAE2D0]">
          <img
            src={RESORT_IMAGES.wellness}
            alt="Ayurvedic spa pavilion with pink lotus blossoms in stone basin"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B10]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-[#FFF8F0] text-xs">
            <strong className="block font-editorial text-base">The Open-Air Lotus Pavilion</strong>
            <span className="text-[#E6DCB8]">Open daily 06:00 – 19:30 · Weligama Headland</span>
          </div>
        </div>
      </div>

      {/* Ayurvedic Dosha Interactive Callout */}
      <div className="p-8 bg-[#F6EDDB] rounded-2xl border border-[#E6DCB8] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
            Personalized Constitution
          </span>
          <h2 className="font-editorial text-2xl text-[#00324B] font-semibold">
            Every Treatment is Calibrated to Your Dosha
          </h2>
          <p className="text-xs text-[#41474D] leading-relaxed">
            Whether your nervous system requires the grounding warmth of Vata therapies, the cooling botanical oils of Pitta, or the invigorating spice stimulation of Kapha, our Vaidya formulates fresh oils on the morning of your session.
          </p>
        </div>
        <button
          onClick={onOpenDoshaQuiz}
          className="px-6 py-3 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          Begin Free Assessment
        </button>
      </div>

      {/* Signature Treatments */}
      <div className="space-y-6">
        <div className="border-b border-[#E6DCB8] pb-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
            Authentic Therapies
          </span>
          <h2 className="font-editorial text-3xl text-[#00324B] font-semibold">
            Signature Ayurvedic Rituals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WELLNESS_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="p-6 sm:p-8 bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-editorial text-xl font-semibold text-[#00324B]">
                      {treatment.name}
                    </h3>
                    <span className="text-xs font-serif italic text-[#8C4A2F]">
                      {treatment.sanskritName}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-editorial text-xl font-bold text-[#00324B]">
                      ${treatment.priceUsd}
                    </span>
                    <span className="block text-[11px] text-[#72787E]">
                      {treatment.durationMinutes} Minutes
                    </span>
                  </div>
                </div>

                <div className="p-2.5 bg-[#F6EDDB] rounded-lg text-xs text-[#3B6934] font-medium">
                  Benefit: {treatment.benefit}
                </div>

                <p className="text-xs sm:text-sm text-[#41474D] leading-relaxed">
                  {treatment.description}
                </p>

                <div className="pt-2 text-[11px] text-[#72787E]">
                  <strong className="text-[#00324B]">Therapeutic Botanicals:</strong>{' '}
                  {treatment.botanicals.join(' · ')}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6DCB8]/60 flex justify-end">
                <button
                  onClick={() => onBookTreatment(treatment.name)}
                  className="px-5 py-2 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Yoga & Meditation Timetable */}
      <div className="space-y-6">
        <div className="border-b border-[#E6DCB8] pb-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
            Circadian Movement
          </span>
          <h2 className="font-editorial text-3xl text-[#00324B] font-semibold">
            Daily Seaside Yoga & Prana Timetable
          </h2>
          <p className="text-xs text-[#72787E] mt-1">
            Held in our open-air teak shala facing the Indian Ocean breakers. Complimentary for all resident guests.
          </p>
        </div>

        <div className="bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl overflow-hidden shadow-parchment divide-y divide-[#E6DCB8]/70">
          {YOGA_SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F6EDDB]/50 transition-colors"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-semibold text-[#8C4A2F]">{item.time}</span>
                  <span className="text-[#C1C7CE]">·</span>
                  <span className="text-[#3B6934] font-medium">{item.level}</span>
                </div>
                <h3 className="font-editorial text-xl font-medium text-[#00324B]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#41474D]">
                  {item.focus}
                </p>
                <span className="block text-[11px] text-[#72787E] italic">
                  Guide: {item.instructor}
                </span>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => handleReserveYoga(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    reservedYogaIndex === idx
                      ? 'bg-[#3B6934] text-[#FFF8F0]'
                      : 'border border-[#00324B] text-[#00324B] hover:bg-[#00324B] hover:text-[#FFF8F0]'
                  }`}
                >
                  {reservedYogaIndex === idx ? '✓ Mat Reserved' : 'Reserve Shala Mat'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
