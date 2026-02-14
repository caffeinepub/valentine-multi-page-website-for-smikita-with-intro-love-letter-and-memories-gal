import { ReactNode } from 'react';
import { Heart } from 'lucide-react';

interface ValentineLayoutProps {
  children: ReactNode;
}

export default function ValentineLayout({ children }: ValentineLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-valentine-light via-valentine-medium to-valentine-accent">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-background.dim_1200x800.png)',
        }}
      />

      {/* Decorative floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-heart" style={{ left: '10%', animationDelay: '0s' }}>
          <Heart className="w-8 h-8 text-valentine-primary/20 fill-valentine-primary/20" />
        </div>
        <div className="floating-heart" style={{ left: '20%', animationDelay: '2s' }}>
          <Heart className="w-6 h-6 text-valentine-secondary/20 fill-valentine-secondary/20" />
        </div>
        <div className="floating-heart" style={{ left: '80%', animationDelay: '1s' }}>
          <Heart className="w-10 h-10 text-valentine-primary/20 fill-valentine-primary/20" />
        </div>
        <div className="floating-heart" style={{ left: '70%', animationDelay: '3s' }}>
          <Heart className="w-7 h-7 text-valentine-secondary/20 fill-valentine-secondary/20" />
        </div>
        <div className="floating-heart" style={{ left: '40%', animationDelay: '1.5s' }}>
          <Heart className="w-9 h-9 text-valentine-primary/20 fill-valentine-primary/20" />
        </div>
        <div className="floating-heart" style={{ left: '60%', animationDelay: '2.5s' }}>
          <Heart className="w-8 h-8 text-valentine-secondary/20 fill-valentine-secondary/20" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {children}
      </div>
    </div>
  );
}
