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
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8"
      >
        {children}
      </motion.div>
      
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>
    </section>
  );
};

export default SceneWrapper;
