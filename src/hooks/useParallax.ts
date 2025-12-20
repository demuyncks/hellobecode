import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface ParallaxConfig {
  offset?: [string, string];
  speed?: number;
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  config: ParallaxConfig = {}
): MotionValue<number> => {
  const { offset = ["start end", "end start"], speed = 0.5 } = config;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  
  return y;
};

export const useScrollOpacity = (
  ref: RefObject<HTMLElement>,
  range: [number, number] = [0, 0.5]
): MotionValue<number> => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  
  return useTransform(scrollYProgress, range, [0, 1]);
};
