import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface IntroStepProps {
  onNext: () => void;
}

export default function IntroStep({ onNext }: IntroStepProps) {
  return (
    <main className="w-full max-w-2xl animate-fade-in">
      <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-valentine-primary/20 animate-scale-in">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-8">
            {/* Heart icon decoration */}
            <div className="flex justify-center mb-6">
              <img
                src="/assets/generated/heart-icon.dim_64x64.png"
                alt="Heart"
                className="w-20 h-20 animate-pulse-slow"
              />
            </div>

            {/* Main message */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-valentine-primary leading-tight">
                Happy Velentine Day Smikita ❤️‍🩹🫶🏻
              </h1>
            </div>

            {/* Decorative hearts image */}
            <div className="flex justify-center my-8">
              <img
                src="/assets/generated/valentine-hearts-decoration.dim_400x300.png"
                alt="Valentine Hearts"
                className="w-full max-w-sm rounded-lg"
              />
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                onClick={onNext}
                size="lg"
                className="text-xl px-12 py-6 bg-valentine-primary hover:bg-valentine-primary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Click Here 💕
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
