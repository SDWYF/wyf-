import type { CSSProperties, PropsWithChildren } from 'react';
import { useRef, useState } from 'react';

type SpotlightCardProps = PropsWithChildren<{
  className?: string;
  spotlightColor?: string;
}>;

type SpotlightPosition = {
  x: number;
  y: number;
};

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(96, 165, 250, 0.18)',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<SpotlightPosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-glow backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-sky-300/35 ${className}`}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setPosition({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
        });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={
          {
            background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
            opacity: isHovered ? 1 : 0,
          } satisfies CSSProperties
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
