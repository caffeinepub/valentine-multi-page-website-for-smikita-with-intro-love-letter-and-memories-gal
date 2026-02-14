import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Toaster } from 'sonner';
import ValentineLayout from '@/components/valentine/ValentineLayout';
import IntroStep from '@/components/valentine/steps/IntroStep';
import LoveLetterStep from '@/components/valentine/steps/LoveLetterStep';
import LovePicturesStep from '@/components/valentine/steps/LovePicturesStep';

type Step = 'intro' | 'letter' | 'pictures';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('intro');

  const handleNextStep = () => {
    if (currentStep === 'intro') {
      setCurrentStep('letter');
    } else if (currentStep === 'letter') {
      setCurrentStep('pictures');
    }
  };

  const handleBackToStart = () => {
    setCurrentStep('intro');
  };

  return (
    <ValentineLayout>
      {currentStep === 'intro' && <IntroStep onNext={handleNextStep} />}
      {currentStep === 'letter' && <LoveLetterStep onNext={handleNextStep} />}
      {currentStep === 'pictures' && <LovePicturesStep onBackToStart={handleBackToStart} />}

      <footer className="mt-12 text-center text-valentine-dark/70 text-sm animate-fade-in">
        <p className="flex items-center justify-center gap-2">
          © {new Date().getFullYear()}. Built with{' '}
          <Heart className="w-4 h-4 fill-valentine-primary text-valentine-primary inline animate-pulse" />{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              window.location.hostname
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-valentine-primary hover:text-valentine-primary-hover underline transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      <Toaster position="top-center" />
    </ValentineLayout>
  );
}

export default App;
