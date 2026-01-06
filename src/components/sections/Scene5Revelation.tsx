import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import ProgressiveText from '@/components/story/ProgressiveText';
import FloatingIcon from '@/components/story/FloatingIcon';
import { Globe, Divide, Bird } from 'lucide-react';

const Scene5Revelation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  const surroundingIcons = [
    { icon: Globe, label: 'International', color: 'bg-blue-100 border-blue-400', iconColor: 'text-blue-600', position: 'top-10 left-1', emoji: '🌍' },
    { icon: Divide, label: 'Mathematical', color: 'bg-primary/20 border-primary', iconColor: 'text-primary', position: 'top-40 right-1', emoji: '➗' },
    { icon: Bird, label: 'Polyvalence', color: 'bg-accent/30 border-accent', iconColor: 'text-secondary', position: 'top-80 left-6', emoji: '🦅' },
  ];

  return (
    <SceneWrapper id="scene-5" className="!py-0 bg-background">
      <div ref={ref} className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold mb-16 text-shadow-cartoon"
        >
          The <span className="gradient-text">Revelation</span> 💡
        </motion.h2>

        {/* Central book with floating quote */}
        <div className="relative max-w-2xl mx-auto">
          {/* Surrounding value icons */}
          <div className="absolute inset-0">
            {surroundingIcons.map((item, index) => (
              <motion.div
                key={item.label}
                className={`absolute ${item.position}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              >
                <FloatingIcon delay={index * 0.5} className="relative">
                  <div 
                    className={`w-14 h-14 md:w-16 md:h-16 ${item.color} border-3 flex items-center justify-center shadow-cartoon`}
                    style={{ borderRadius: '20px 4px 20px 4px/4px 20px 4px 20px' }}
                  >
                    <item.icon className={`w-7 h-7 md:w-8 md:h-8 ${item.iconColor}`} />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap font-display">
                    {item.emoji} {item.label}
                  </span>
                </FloatingIcon>
              </motion.div>
            ))}
          </div>

          {/* Floating quote - hand-drawn style */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div 
              className="inline-block px-6 py-4 bg-secondary/10 border-3 border-secondary shadow-cartoon"
              style={{ borderRadius: '20px 5px 20px 5px/5px 20px 5px 20px' }}
            >
              <p className="text-lg md:text-xl font-display font-semibold italic gradient-text">
                "Follow something you are good at" ✨
              </p>
            </div>
          </motion.div>

          {/* Book image avec animation de lumière */}
          <div className="relative mx-auto w-80 md:w-96 my-12">
            {/* Conteneur des rayons de lumière */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
              {[...Array(16)].map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 origin-bottom"
                    style={{
                      width: '6px',
                      height: '180px',
                      background: 'linear-gradient(to top, rgba(250, 204, 21, 0.8), transparent)',
                      transform: `translateX(-3px) translateY(-180px) rotate(${angle}deg)`,
                      filter: 'blur(3px)',
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? {
                      scaleY: [0, 1.2, 1, 1.1],
                      opacity: [0, 0.9, 0.7, 0.8],
                    } : {}}
                    transition={{
                      duration: 2,
                      delay: 1 + (i * 0.05),
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
            </div>

            {/* Halo lumineux central */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.4) 0%, rgba(250, 204, 21, 0.2) 40%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? {
                scale: [0.8, 1.2, 1],
                opacity: [0.3, 0.6, 0.4],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* L'image du livre */}
            <motion.img
              src="/80000hours.png"
              alt="80,000 Hours Book"
              className="relative z-10 w-full h-auto"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />

            {/* Ombre portée */}
            <motion.div
              className="absolute -bottom-6 left-12 right-12 h-8 bg-gray-900/40 blur-2xl z-0"
              style={{ borderRadius: '50%' }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Text content */}
          <div className="mt-12 space-y-4">
            <ProgressiveText
              text="IT speaks to me — it combines my logical and mathematical strengths, offers international horizons, and provides polyvalence."
              className="text-lg md:text-xl text-foreground font-medium max-w-xl mx-auto font-body"
              delay={0.6}
            />

            <ProgressiveText
              text="Through readings, conversations, and research, the path became clear. 🛤️"
              className="text-base text-muted-foreground max-w-md mx-auto font-body"
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default Scene5Revelation;