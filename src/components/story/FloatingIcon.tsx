import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingIconProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  x?: number;
  y?: number;
}

const FloatingIcon = ({
  children,
  delay = 0,
  duration = 6,
  className = '',
  x = 0,
  y = 0,
}: FloatingIconProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x, y }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingIcon;
