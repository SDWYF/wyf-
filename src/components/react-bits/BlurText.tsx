import { motion } from 'framer-motion';

type BlurTextProps = {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  className?: string;
};

export default function BlurText({
  text,
  delay = 80,
  animateBy = 'words',
  direction = 'top',
  className = '',
}: BlurTextProps) {
  const units = animateBy === 'words' ? text.split(' ') : Array.from(text);
  const startY = direction === 'top' ? -18 : 18;

  return (
    <span className={`inline-flex flex-wrap justify-center gap-x-3 ${className}`}>
      {units.map((unit, index) => (
        <motion.span
          // Text animation units are stable for static headings.
          key={`${unit}-${index}`}
          initial={{ opacity: 0, filter: 'blur(12px)', y: startY }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.72,
            delay: (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {unit}
          {animateBy === 'letters' ? '' : ' '}
        </motion.span>
      ))}
    </span>
  );
}
