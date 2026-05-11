import type { PropsWithChildren } from 'react';

type GradientTextProps = PropsWithChildren<{
  className?: string;
}>;

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-sky-300 via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
