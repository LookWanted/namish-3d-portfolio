import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  ease?: [number, number, number, number] | string;
  as?: 'div' | 'h1' | 'h2' | 'p' | 'span' | 'section' | 'header' | 'nav' | 'button';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  ease = [0.25, 0.1, 0.25, 1],
  as = 'div',
}) => {
  const Component = (motion as unknown as Record<string, React.ElementType>)[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </Component>
  );
};
