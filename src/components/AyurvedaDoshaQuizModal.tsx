import React, { useState } from 'react';
import { X, Sparkles, Check, Leaf, Wind, Flame, Mountain, ArrowRight } from 'lucide-react';

interface AyurvedaDoshaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const AyurvedaDoshaQuizModal: React.FC<AyurvedaDoshaQuizModalProps> = ({
  isOpen,
  onClose,
  onBookTreatment,
}) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: 'vata' | 'pitta' | 'kapha' }>({});
  const [resultDosha, setResultDosha] = useState<'vata' | 'pitta' | 'kapha' | null>(null);

  if (!isOpen) return null;

  const questions = [
    {
      q: 'How does your mind, attention, and sleep rhythm typically manifest when traveling?',
      options: [
        {
          type: 'vata' as const,
          label: 'Quick and creative, but easily scattered, light sleeper prone to midnight waking',
        },
        {
          type: 'pitta' as const,
          label: 'Goal-driven and focused; sleep is sound but waking up with intense alertness',
        },
        {
          type: 'kapha' as const,
          label: 'Calm, patient, unhurried; deep and heavy sleeper who loves morning slumber',
        },
      ],
    },
    {
      q: 'How does your body naturally respond to tropical heat and ocean breezes?',
      options: [
        {
          type: 'vata' as const,
          label: 'I get cold easily in air-conditioning; I love warm dry sunshine and gentle breezes',
        },
        {
          type: 'pitta' as const,
          label: 'I overheat quickly and flush in midday sun; I crave cold ocean plunges and shade',
        },
        {
          type: 'kapha' as const,
          label: 'Comfortable in most temperatures; can feel slightly sluggish in humid midday stillness',
        },
      ],
    },
    {
      q: 'What is the natural rhythm of your digestion and daily appetite?',
      options: [
        {
          type: 'vata' as const,
          label: 'Irregular appetite—sometimes famished, sometimes skipping meals without noticing',
        },
        {
          type: 'pitta' as const,
          label: 'Fierce, reliable hunger; irritable if lunch or dinner is delayed',
        },
        {
          type: 'kapha' as const,
          label: 'Slow, steady metabolism; satisfied with light broth and simple morning fruits',
        },
      ],
    },
  ];

  const handleSelectOption = (type: 'vata' | 'pitta' | 'kapha') => {
    const updated = { ...answers, [step]: type };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate winner
      const counts = { vata: 0, pitta: 0, kapha: 0 };
      Object.values(updated).forEach((t) => counts[t]++);
      let dominant: 'vata' | 'pitta' | 'kapha' = 'vata';
      if (counts.pitta > counts.vata && counts.pitta >= counts.kapha) dominant = 'pitta';
      else if (counts.kapha > counts.vata && counts.kapha > counts.pitta) dominant = 'kapha';

      setResultDosha(dominant);
      setStep(3); // Result step
    }
  };

  const doshaProfiles = {
    vata: {
      name: 'Vata (Air & Space)',
      sanskrit: 'वात दोष',
      icon: Wind,
      color: '#1B4965',
      summary:
        'Your nature is quick, visionary, and expressive. When unbalanced by travel fatigue, you may experience nervous restlessness, dry skin, or insomnia.',
      recommendedRitual: 'Shirodhara Meditative Flow & Warm Sesame Abhyanga',
      botanicals: 'Brahmi, Ashwagandha, and Warm Wild Cinnamon Leaf Oil',
      herbalElixir: 'Warm Golden Milk with Fresh Cardamom & Southern Kithul',
    },
    pitta: {
      name: 'Pitta (Fire & Water)',
      sanskrit: 'पित्त दोष',
      icon: Flame,
      color: '#8C4A2F',
      summary:
        'Your nature is sharp, passionate, and discerning. Tropical heat can intensify internal fire, leading to irritability, inflammation, or sensitive skin.',
      recommendedRitual: 'Southern Ceylon Royal Pink Lotus Bath & Coconut Oil Marma',
      botanicals: 'Sandalwood, Fresh Vetiver Root (Sevandara), and Pink Lotus',
      herbalElixir: 'Chilled Fresh Gotu Kola & King Coconut Water Infusion',
    },
    kapha: {
      name: 'Kapha (Earth & Water)',
      sanskrit: 'कफ दोष',
      icon: Mountain,
      color: '#2D5A27',
      summary:
        'Your nature is grounded, loving, and resilient. Excess stillness can produce lethargy, fluid retention, or feeling heavy in the mornings.',
      recommendedRitual: 'Cinnamon Bark Dry Swedana Scrub & Sunrise Prana Flow',
      botanicals: 'True Ceylon Cinnamon Quill, Crushed Black Pepper, and Raw Turmeric',
      herbalElixir: 'Spiced Ginger & Wild Southern Honey Decoction',
    },
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1F1B10]/50 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-[#FFF8F0] border border-[#E6DCB8] rounded-2xl shadow-parchment-lg z-10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#F6EDDB] border-b border-[#E6DCB8] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
              Vaidya Consultation Assessment
            </span>
            <h3 className="font-editorial text-2xl text-[#00324B] font-semibold">
              Discover Your Ceylon Dosha
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#00324B] hover:bg-[#EAE2D0] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step < 3 ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-[#8C4A2F]">
                <span>Question {step + 1} of 3</span>
                <span className="font-semibold">{Math.round(((step + 1) / 3) * 100)}% Complete</span>
              </div>

              <div className="space-y-4">
                <h4 className="font-editorial text-xl font-medium text-[#00324B] leading-snug">
                  {questions[step].q}
                </h4>

                <div className="space-y-3 pt-2">
                  {questions[step].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.type)}
                      className="w-full text-left p-4 rounded-xl border border-[#E6DCB8] bg-[#FDFBF7] hover:bg-[#F6EDDB] hover:border-[#00324B] transition-all cursor-pointer text-xs sm:text-sm text-[#1F1B10] leading-relaxed group"
                    >
                      <span className="font-medium group-hover:text-[#00324B]">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            resultDosha && (
              <div className="space-y-5 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F6EDDB] border border-[#E6DCB8] flex items-center justify-center mx-auto text-[#00324B]">
                  {React.createElement(doshaProfiles[resultDosha].icon, { className: 'w-8 h-8' })}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4A2F]">
                    {doshaProfiles[resultDosha].sanskrit}
                  </span>
                  <h3 className="font-editorial text-3xl font-semibold text-[#00324B]">
                    {doshaProfiles[resultDosha].name}
                  </h3>
                  <p className="text-xs text-[#41474D] max-w-md mx-auto pt-1 leading-relaxed">
                    {doshaProfiles[resultDosha].summary}
                  </p>
                </div>

                {/* Recommendations Card */}
                <div className="p-4 bg-[#F6EDDB] rounded-xl border border-[#E6DCB8] text-left text-xs space-y-2.5">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">
                      Prescribed Sanctuary Ritual
                    </span>
                    <strong className="text-sm font-editorial text-[#00324B]">
                      {doshaProfiles[resultDosha].recommendedRitual}
                    </strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">
                      Key Therapeutic Botanicals
                    </span>
                    <span className="text-[#41474D]">
                      {doshaProfiles[resultDosha].botanicals}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#8C4A2F]">
                      Daily Complimentary Herbal Elixir
                    </span>
                    <span className="text-[#41474D]">
                      {doshaProfiles[resultDosha].herbalElixir}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setStep(0);
                      setAnswers({});
                    }}
                    className="px-4 py-2 border border-[#E6DCB8] rounded-lg text-xs font-semibold text-[#41474D] hover:bg-[#F6EDDB] cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onBookTreatment(doshaProfiles[resultDosha].recommendedRitual);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#00324B] hover:bg-[#8C4A2F] text-[#FFF8F0] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Reserve Ritual</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
