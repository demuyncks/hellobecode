import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SceneWrapper from '@/components/story/SceneWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Scene6Determination = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  return (
    <SceneWrapper id="scene-6" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scattered celebration doodles */}
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['✦', '★', '✧', '○', '◇', '♦'][i % 6]}
          </motion.span>
        ))}
      </div>

      <div ref={ref} className="relative z-10 text-center">
        {/* Rocket figure - cartoon style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div 
              className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-secondary to-accent border-4 border-secondary flex items-center justify-center shadow-cartoon-lg"
              style={{ borderRadius: '50% 45% 50% 45%/45% 50% 45% 50%' }}
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl md:text-7xl"
              >
                🚀
              </motion.div>
            </motion.div>
            {/* Glow ring - dashed cartoon style */}
            <motion.div
              className="absolute inset-0 border-4 border-dashed border-secondary/40"
              style={{ borderRadius: '50% 45% 50% 45%/45% 50% 45% 50%' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow-cartoon"
        >
          Ready for{' '}
          <span className="gradient-text-warm">BeCode's</span>
          <br />
          <span className="gradient-text">Bootcamp</span> 🎓
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-body"
        >
          From curiosity to conviction, from exploration to expertise — the journey continues! ✨
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/contact">
            <Button variant="cta" size="xl" className="group text-lg">
              I want to train that guy! 💪
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-sm text-muted-foreground font-body"
        >
          Click the button to connect 👆
        </motion.p>
      </div>
    </SceneWrapper>
  );
};

export default Scene6Determination;