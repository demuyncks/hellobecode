import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface OrbitingIconProps {
  children: ReactNode;
  radius?: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  className?: string;
}

const OrbitingIcon = ({
  children,
  radius = 120,
  duration = 20,
  delay = 0,
  reverse = false,
  className = '',
}: OrbitingIconProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      <motion.div
        className="absolute"
        style={{
          left: '50%',
          top: 0,
          transform: 'translateX(-50%)',
        }}
        animate={{
          rotate: reverse ? 360 : -360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default OrbitingIcon;
