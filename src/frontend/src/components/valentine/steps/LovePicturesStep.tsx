import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface LovePicturesStepProps {
  onBackToStart: () => void;
}

export default function LovePicturesStep({ onBackToStart }: LovePicturesStepProps) {
  const loveImages = [
    {
      src: '/assets/generated/teddy-love.dim_800x800.png',
      alt: 'Cute teddy bear with hearts',
      caption: 'Teddy Love',
    },
    {
      src: '/assets/generated/flowers-bouquet.dim_800x800.png',
      alt: 'Beautiful bouquet of flowers',
      caption: 'Flowers',
    },
    {
      src: '/assets/generated/chocolates-gift.dim_800x800.png',
      alt: 'Assorted chocolates gift box',
      caption: 'Chocolates',
    },
    {
      src: '/assets/generated/ring-sparkle.dim_800x800.png',
      alt: 'Engagement ring with sparkle',
      caption: 'Forever',
    },
  ];

  return (
    <main className="w-full max-w-5xl animate-fade-in">
      <Card className="backdrop-blur-sm bg-white/95 shadow-2xl border-valentine-primary/20 animate-scale-in">
        <CardContent className="p-8 md:p-12">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-valentine-primary">
                Gifts of Love 💝
              </h2>
              <p className="text-lg md:text-xl text-valentine-dark">
                Every moment with you is a treasure
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {loveImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="aspect-square bg-gradient-to-br from-valentine-primary/5 to-valentine-secondary/5">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-valentine-primary/80 via-valentine-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <p className="text-white text-xl font-semibold">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom button */}
            <div className="flex justify-center pt-8 mt-8 border-t border-valentine-primary/10">
              <Button
                onClick={onBackToStart}
                size="lg"
                className="text-xl px-12 py-6 bg-valentine-primary hover:bg-valentine-primary-hover text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Back to Start 💖
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
