import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface LoveLetterStepProps {
  onNext: () => void;
}

export default function LoveLetterStep({ onNext }: LoveLetterStepProps) {
  return (
    <main className="w-full max-w-3xl animate-fade-in">
      <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-valentine-primary/20 animate-scale-in">
        <CardContent className="p-8 md:p-12 flex flex-col min-h-[70vh]">
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {/* Love letter message */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-valentine-primary mb-6">
                Happy Velentine Day Sweetheart 💋🫂
              </h2>

              <div className="text-lg md:text-2xl text-valentine-dark leading-relaxed space-y-4">
                <p>I want you to know that I Love you More than you know</p>
                <p>I want you to be part of my life forever ♾️</p>
                <p>
                  I know we fight we but after every fight we became strong with eachother so Thank
                  you for by mine side
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-valentine-primary mt-6">
                  love you Rashmalai 😁🤤💋🫂
                </p>
              </div>
            </div>
          </div>

          {/* Bottom-aligned button */}
          <div className="flex justify-center pt-8 mt-8 border-t border-valentine-primary/10">
            <Button
              onClick={onNext}
              size="lg"
              className="text-xl px-12 py-6 bg-valentine-primary hover:bg-valentine-primary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Continue 💖
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
