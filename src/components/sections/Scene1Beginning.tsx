import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import ProgressiveText from '@/components/story/ProgressiveText';
import FloatingIcon from '@/components/story/FloatingIcon';
import { Leaf, Users, Calculator } from 'lucide-react';

const Scene1Beginning = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-20%' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const iconY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const iconY2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const iconY3 = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <SceneWrapper id="scene-1" className="bg-background">
      <div ref={containerRef} className="relative">
        {/* Age indicator - hand-drawn style */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: -3 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute -left-4 md:left-0 top-0"
        >
          <span className="text-6xl md:text-8xl font-display font-bold text-primary/30 text-shadow-cartoon">18</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center pt-16">
          {/* Visual: Computer with code - sketch style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative sketch-card p-6">
              {/* Monitor frame */}
              <div className="bg-muted p-4 aspect-video relative overflow-hidden border-3 border-border" style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}>
                {/* MatLab-like interface */}
                <div className="absolute inset-0 bg-card p-3 font-body text-xs md:text-sm">
                  <div className="text-secondary mb-2 font-semibold">{">> % MatLab / SciLab 📊"}</div>
                  <div className="text-muted-foreground mb-1">{">> x = linspace(0, 2*pi, 100);"}</div>
                  <div className="text-muted-foreground mb-1">{">> y = sin(x) .* exp(-x/10);"}</div>
                  <div className="text-muted-foreground mb-1">{">> plot(x, y, 'LineWidth', 2)"}</div>
                  <div className="text-accent mt-3 font-semibold">{"% First steps into programming... ✨"}</div>
                  <motion.div
                    className="inline-block w-2 h-4 bg-primary ml-1"
                    style={{ borderRadius: '2px' }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>
              {/* Monitor stand - sketchy */}
              <div className="flex justify-center mt-4">
                <div className="w-16 h-4 bg-muted border-2 border-border" style={{ borderRadius: '8px 2px 0 0' }} />
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-3 bg-muted border-2 border-t-0 border-border" style={{ borderRadius: '0 0 8px 8px' }} />
              </div>
            </div>

            {/* Floating icons with parallax - cartoon style */}
            <motion.div
              style={{ y: iconY1 }}
              className="absolute -top-8 -right-4 md:-right-8"
            >
              <FloatingIcon delay={0} className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/20 border-3 border-accent flex items-center justify-center shadow-cartoon" style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}>
                  <Leaf className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                </div>
              </FloatingIcon>
            </motion.div>

            <motion.div
              style={{ y: iconY2 }}
              className="absolute -bottom-4 -left-4 md:-left-8"
            >
              <FloatingIcon delay={1} className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary/20 border-3 border-secondary flex items-center justify-center shadow-cartoon" style={{ borderRadius: '20px 4px 20px 4px/4px 20px 4px 20px' }}>
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-secondary" />
                </div>
              </FloatingIcon>
            </motion.div>

            <motion.div
              style={{ y: iconY3 }}
              className="absolute top-1/2 -right-6 md:-right-12"
            >
              <FloatingIcon delay={2} className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 border-3 border-primary flex items-center justify-center shadow-cartoon" style={{ borderRadius: '18px 3px 18px 3px/3px 18px 3px 18px' }}>
                  <Calculator className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
              </FloatingIcon>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl font-display font-bold text-shadow-cartoon"
            >
              The <span className="gradient-text">Beginning</span> 🌱
            </motion.h2>

            <ProgressiveText
              text="First programming experience with MatLab and SciLab."
              className="text-lg md:text-xl text-foreground font-medium font-body"
              delay={0.4}
            />

            <ProgressiveText
              text="Driven by curiosity about the world, strong mathematical skills, and values centered on ecology and social impact."
              className="text-base md:text-lg text-muted-foreground leading-relaxed font-body"
              delay={0.6}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['Ecology 🌱', 'Social Impact 🤝', 'Mathematics 📐'].map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-card border-3 border-border text-sm font-display font-medium shadow-cartoon"
                  style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default Scene1Beginning;