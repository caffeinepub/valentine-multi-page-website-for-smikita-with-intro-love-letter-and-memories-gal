import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

export default function HeartBurstAnimation() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate random hearts
    const newHearts: FloatingHeart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      size: 20 + Math.random() * 30,
      duration: 2 + Math.random() * 2,
    }));

    setHearts(newHearts);

    // Clean up after animation completes
    const timer = setTimeout(() => {
      setHearts([]);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 heart-burst"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart
            className="text-valentine-primary fill-valentine-primary"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
