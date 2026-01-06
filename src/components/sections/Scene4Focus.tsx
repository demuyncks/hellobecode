import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import { X, Check, BookOpen, Briefcase, Cpu } from 'lucide-react';

const techLogos = [
  'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib',
  'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Mistral',
  'Midjourney', 'n8n', 'Lovable', 'Framer', 'Figma',
  'Airtable', 'Bubble', 'Excel', 'PowerBI', 'SQL',
  'Jupyter', 'JavaScript', 'TypeScript', 'React', 'Angular',
  'HTML', 'CSS', 'Coursera', 'NocoDB', 'Looker Studio',
];

// Répartition des logos sur 4 orbites
const orbit1Logos = techLogos.slice(0, 5);   // 5 logos
const orbit2Logos = techLogos.slice(5, 13);  // 8 logos
const orbit3Logos = techLogos.slice(13, 22); // 9 logos
const orbit4Logos = techLogos.slice(22, 30); // 8 logos

const Scene4Focus = () => {
  const ref = useRef(null);
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const headRotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const headRotateY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headRef.current) return;
      
      const rect = headRef.current.getBoundingClientRect();
      const headCenterX = rect.left + rect.width / 2;
      const headCenterY = rect.top + rect.height / 2;
      
      // Calcul de l'angle avec amplitude prononcée
      const deltaX = e.clientX - headCenterX;
      const deltaY = e.clientY - headCenterY;
      
      const rotateY = (deltaX / window.innerWidth) * 60; // -60 à +60 degrés
      const rotateX = -(deltaY / window.innerHeight) * 40; // -40 à +40 degrés
      
      headRotateX.set(rotateX);
      headRotateY.set(rotateY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [headRotateX, headRotateY]);

  return (
    <SceneWrapper id="scene-4" className="!py-0">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-block px-6 py-5 bg-secondary/20 border-3 border-secondary text-secondary text-xl md:text-2xl font-display font-medium mb-6 shadow-cartoon"
            style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}
          >
            🇦🇲 Back from Armenia
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-shadow-cartoon">
            Motivation & <span className="gradient-text">Focus</span> 🎯
          </h2>
        </motion.div>

        {/* Three columns - cartoon style */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Job Search - Crossed */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: -1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="bg-card border-3 border-border p-6 h-full opacity-60 shadow-soft"
              style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 bg-destructive/20 border-3 border-destructive flex items-center justify-center"
                  style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}
                >
                  <Briefcase className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Job Search</h3>
                  <span className="text-sm text-muted-foreground font-body">Traditional path</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                The classical approach doesn't fit right now - too easy ?
              </p>
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-4 right-4"
              >
                <div 
                  className="w-10 h-10 bg-destructive/20 border-3 border-destructive flex items-center justify-center shadow-cartoon"
                  style={{ borderRadius: '12px 3px 12px 3px/3px 12px 3px 12px' }}
                >
                  <X className="w-6 h-6 text-destructive" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Data Analysis - Checked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div 
              className="bg-accent/10 border-3 border-accent p-6 h-full shadow-cartoon-lg"
              style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 bg-accent/30 border-3 border-accent flex items-center justify-center"
                  style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}
                >
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold gradient-text">Data Analysis</h3>
                  <span className="text-sm text-muted-foreground font-body">Professional Certificate</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                3-months online courses and hands-on projects — building a solid foundation. 📚
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9, type: 'spring' }}
                className="absolute top-4 right-4"
              >
                <div 
                  className="w-10 h-10 bg-accent/30 border-3 border-accent flex items-center justify-center shadow-cartoon"
                  style={{ borderRadius: '12px 3px 12px 3px/3px 12px 3px 12px' }}
                >
                  <Check className="w-6 h-6 text-secondary" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech & AI */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div 
              className="bg-primary/10 border-3 border-primary/50 p-6 h-full shadow-cartoon"
              style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 bg-primary/20 border-3 border-primary flex items-center justify-center"
                  style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}
                >
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Tech & AI 🤖</h3>
                  <span className="text-sm text-muted-foreground font-body">Deep dive</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                Exploring AI capabilities, tools and applications
              </p>
            </div>
          </motion.div>
        </div>

        {/* Orbites avec logos + Tête */}
        <div className="relative flex justify-center items-center py-16 min-h-[800px]">
          <div className="relative mx-auto" style={{ width: '800px', height: '800px' }}>
            
            {/* Orbite 4 (la plus externe) - sens horaire */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {orbit4Logos.map((logo, i) => {
                const angle = (i / orbit4Logos.length) * 360;
                return (
                  <div
                    key={`orbit4-${logo}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0',
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '-350px',
                        transform: 'translateX(-40px)',
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="inline-block px-3 py-1.5 bg-card border-2 border-primary/30 text-sm font-display opacity-70 whitespace-nowrap shadow-sm" style={{ borderRadius: '8px' }}>
                        {logo}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Orbite 3 - sens anti-horaire */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {orbit3Logos.map((logo, i) => {
                const angle = (i / orbit3Logos.length) * 360;
                return (
                  <div
                    key={`orbit3-${logo}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0',
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '-260px',
                        transform: 'translateX(-40px)',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="inline-block px-3 py-1.5 bg-card border-2 border-primary/30 text-sm font-display opacity-70 whitespace-nowrap shadow-sm" style={{ borderRadius: '8px' }}>
                        {logo}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Orbite 2 - sens horaire */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {orbit2Logos.map((logo, i) => {
                const angle = (i / orbit2Logos.length) * 360;
                return (
                  <div
                    key={`orbit2-${logo}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0',
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '-180px',
                        transform: 'translateX(-40px)',
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="inline-block px-3 py-1.5 bg-card border-2 border-primary/30 text-sm font-display opacity-70 whitespace-nowrap shadow-sm" style={{ borderRadius: '8px' }}>
                        {logo}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Orbite 1 - sens anti-horaire */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {orbit1Logos.map((logo, i) => {
                const angle = (i / orbit1Logos.length) * 360;
                return (
                  <div
                    key={`orbit1-${logo}`}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0',
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '-110px',
                        transform: 'translateX(-40px)',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="inline-block px-3 py-1.5 bg-card border-2 border-primary/30 text-sm font-display opacity-70 whitespace-nowrap shadow-sm" style={{ borderRadius: '8px' }}>
                        {logo}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Tête géométrique 3D qui suit le curseur */}
            <motion.div
              ref={headRef}
              className="absolute left-1/2 top-1/2 z-20"
              style={{
                width: '5cm',
                height: '5cm',
                marginLeft: '-2.5cm',
                marginTop: '-2.5cm',
                perspective: '1000px',
              }}
            >
              <motion.div
                style={{
                  rotateX: headRotateX,
                  rotateY: headRotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="w-full h-full relative"
              >
                {/* Visage - forme angulaire */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 border-4 border-amber-800"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    transform: 'translateZ(20px)',
                  }}
                >
                  {/* Yeux */}
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-gray-800 rounded-full" style={{ transform: 'translate(-50%, -50%)' }} />
                  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-800 rounded-full" style={{ transform: 'translate(50%, -50%)' }} />
                  
                  {/* Bouche */}
                  <div className="absolute bottom-1/3 left-1/2 w-8 h-1 bg-gray-800 rounded" style={{ transform: 'translateX(-50%)' }} />
                </div>

                {/* Ombre portée */}
                <div
                  className="absolute inset-0 bg-gray-900/20 blur-xl"
                  style={{ transform: 'translateZ(-10px) scale(0.9)' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default Scene4Focus;