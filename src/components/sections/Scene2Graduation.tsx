import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import { Music, Backpack, Briefcase, GraduationCap, Bot, Plane } from 'lucide-react';

const orbitIcons = [
  { icon: Music, label: 'Music', color: 'bg-pink-100 border-pink-400', iconColor: 'text-pink-600' },
  { icon: Backpack, label: 'Travel', color: 'bg-orange-100 border-orange-400', iconColor: 'text-orange-600' },
  { icon: Briefcase, label: 'Work', color: 'bg-blue-100 border-blue-400', iconColor: 'text-blue-600' },
  { icon: GraduationCap, label: 'Teaching', color: 'bg-accent/20 border-accent', iconColor: 'text-secondary' },
  { icon: Bot, label: 'AI', color: 'bg-purple-100 border-purple-400', iconColor: 'text-purple-600' },
  { icon: Plane, label: 'Internship', color: 'bg-secondary/20 border-secondary', iconColor: 'text-secondary' },
];

const Scene2Graduation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  return (
    <SceneWrapper id="scene-2">
      <div ref={ref} className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold mb-16 text-shadow-cartoon"
        >
          <span className="gradient-text-warm">So what now?</span> 🤔
        </motion.h2>

        {/* Central figure with orbiting icons */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Graduate figure - cartoon style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <div 
              className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary flex items-center justify-center shadow-cartoon-lg"
              style={{ borderRadius: '50% 45% 50% 45%/45% 50% 45% 50%' }}
            >
              <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-primary" />
            </div>
            <motion.div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <span 
                className="text-sm text-foreground font-display font-medium bg-card px-4 py-2 border-3 border-border shadow-cartoon"
                style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}
              >
                🎓 Graduated!
              </span>
            </motion.div>
          </motion.div>

          {/* Orbiting icons - cartoon style */}
          {orbitIcons.map((item, index) => {
            const angle = (index * 360) / orbitIcons.length;
            const radius = 160;
            
            return (
              <motion.div
                key={item.label}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: [angle, angle + 360],
                      }
                    : {}
                }
                transition={{
                  opacity: { duration: 0.5, delay: 0.5 + index * 0.1 },
                  scale: { duration: 0.5, delay: 0.5 + index * 0.1 },
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.5 + index * 0.1,
                  },
                }}
                style={{
                  transformOrigin: 'center center',
                }}
              >
                <motion.div
                  className={`w-14 h-14 md:w-16 md:h-16 ${item.color} border-3 flex items-center justify-center shadow-cartoon cursor-pointer group`}
                  style={{
                    transform: `translateX(${radius}px)`,
                    borderRadius: '20px 4px 20px 4px/4px 20px 4px 20px',
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{
                    rotate: [-angle, -angle - 360],
                  }}
                  transition={{
                    rotate: {
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  <item.icon className={`w-7 h-7 md:w-8 md:h-8 ${item.iconColor}`} />
                  <span className="absolute -bottom-8 text-xs font-display font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbit ring - dashed hand-drawn style */}
          <motion.div
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] border-3 border-dashed border-border/50"
            style={{ borderRadius: '50% 48% 52% 48%/48% 50% 48% 52%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-muted-foreground mt-12 max-w-xl mx-auto font-body"
        >
          A world of possibilities awaited — from music to travel, teaching to tech... ✨
        </motion.p>
      </div>
    </SceneWrapper>
  );
};

export default Scene2Graduation;