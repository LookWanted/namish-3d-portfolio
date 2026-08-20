import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for natural layout & spacing */}
      <span className="opacity-0">{children}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {children}
      </motion.span>
    </span>
  );
};

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  startIndex: number;
  totalChars: number;
}

const Word: React.FC<WordProps> = ({ word, progress, startIndex, totalChars }) => {
  const characters = word.split('');

  return (
    <span className="inline-block whitespace-nowrap">
      {characters.map((char, index) => {
        const charGlobalIndex = startIndex + index;
        const start = charGlobalIndex / totalChars;
        const end = Math.min(start + 1 / totalChars, 1);

        return (
          <Character
            key={index}
            progress={progress}
            range={[start, end]}
          >
            {char}
          </Character>
        );
      })}
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let currentTotal = 0;

  return (
    <p ref={elementRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIdx) => {
        const startIndex = currentTotal;
        // +1 for the space after the word
        currentTotal += word.length + 1;

        return (
          <React.Fragment key={wordIdx}>
            <Word
              word={word}
              progress={scrollYProgress}
              startIndex={startIndex}
              totalChars={totalChars}
            />
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};
