import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasClicked, setHasClicked] = useState(false);
  const [matrixColumns, setMatrixColumns] = useState<number[]>([]);

  // Bloquer le scroll tant qu'on n'a pas cliqué
  useEffect(() => {
    if (!hasClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasClicked]);

  // Générer les colonnes Matrix
  useEffect(() => {
    if (hasClicked) {
      const columns = Array.from({ length: 30 }, (_, i) => i);
      setMatrixColumns(columns);
    }
  }, [hasClicked]);

  const scrollToNext = () => {
    setHasClicked(true);
    
    // Attendre un peu pour l'effet Matrix avant de scroller
    setTimeout(() => {
      document.getElementById('scene-1')?.scrollIntoView({ behavior: 'smooth' });
    }, 3500);
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Effet Matrix après le clic */}
      {hasClicked && (
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {matrixColumns.map((col) => (
            <motion.div
              key={col}
              className="absolute top-0 text-xs font-mono text-gray-400/70"
              style={{
                left: `${(col / 30) * 100}%`,
              }}
              initial={{ y: -100 }}
              animate={{
                y: ['0vh', '110vh'],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 2,
              }}
            >
              {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
            </motion.div>
          ))}
        </div>
      )}

      {/* Animated doodle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-32 h-32 border-4 border-dashed border-accent/30 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-24 h-24 border-4 border-primary/30"
          style={{ borderRadius: '30px 4px 30px 4px/4px 30px 4px 30px' }}
          animate={{
            rotate: [0, -15, 0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-16 h-16 bg-secondary/10"
          style={{ borderRadius: '20px 3px 20px 3px/3px 20px 3px 20px' }}
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
        
        {/* Scattered doodle stars */}
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              color: i % 2 === 0 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))',
              opacity: 0.4,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {i % 3 === 0 ? '✦' : i % 3 === 1 ? '★' : '✧'}
          </motion.span>
        ))}

        {/* Hand-drawn arrow doodles */}
        <motion.svg 
          className="absolute bottom-[40%] left-[15%] w-12 h-12 text-primary/30"
          viewBox="0 0 50 50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <path d="M10,10 Q25,30 40,10 M25,25 L25,45 M20,40 L25,45 L30,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </motion.svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block text-sm md:text-base text-secondary font-display font-medium tracking-widest uppercase mb-6 px-4 py-2 bg-secondary/10 border-2 border-dashed border-secondary/30 rounded-full">
            HOW and WHY I'm here today 🎒
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-shadow-cartoon"
        >
          My Journey to{' '}
          <span className="gradient-text hand-underline">Data Science</span>
          <br />& <span className="gradient-text-warm">AI</span> 👾​
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body"
        >
          From curiosity to conviction — a story of exploration, experimentation, and finding purpose in technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToNext}
            className="group"
          >
            Start the Story ↓
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator - pencil doodle style */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-8 h-12 border-3 border-border bg-card/50 flex justify-center"
          style={{ borderRadius: '20px 4px 20px 4px/4px 20px 4px 20px' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-2 h-3 bg-primary mt-2"
            style={{ borderRadius: '4px' }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;