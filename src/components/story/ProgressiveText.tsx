import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgressiveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ProgressiveText = ({ text, className = '', delay = 0 }: ProgressiveTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  const words = text.split(' ');

  return (
    <p ref={ref} className={`${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: 'easeOut',
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default ProgressiveText;
