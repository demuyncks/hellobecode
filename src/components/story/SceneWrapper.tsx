import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface SceneWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SceneWrapper = ({ children, className = '', id }: SceneWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  return (
    <section
      id={id}
      ref={ref}
      className={`scene-section py-20 md:py-32 ${className}`}
    >
      {/* Hand-drawn doodle decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Scattered stars */}
        <motion.span 
          className="absolute top-[15%] left-[10%] text-2xl text-secondary/40"
          animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦
        </motion.span>
        <motion.span 
          className="absolute top-[25%] right-[15%] text-xl text-accent/50"
          animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          ★
        </motion.span>
        <motion.span 
          className="absolute bottom-[20%] left-[8%] text-lg text-primary/40"
          animate={{ rotate: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          ✧
        </motion.span>
        <motion.span 
          className="absolute bottom-[30%] right-[12%] text-2xl text-secondary/30"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
        >
          ○
        </motion.span>
        
        {/* Wavy doodle lines */}
        <svg className="absolute top-[10%] right-[5%] w-20 h-20 text-accent/20" viewBox="0 0 100 100">
          <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-[15%] left-[5%] w-16 h-16 text-primary/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10 5" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8"
      >
        {children}
      </motion.div>
      
      {/* Soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>
    </section>
  );
};

export default SceneWrapper;