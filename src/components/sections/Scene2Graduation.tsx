import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import { Music, Backpack, Briefcase, GraduationCap, Bot, Plane } from 'lucide-react';

const orbitIcons = [
  { icon: Music, label: 'Music', color: 'from-pink-500/20 to-pink-600/30', borderColor: 'border-pink-500/30', iconColor: 'text-pink-400' },
  { icon: Backpack, label: 'Travel', color: 'from-orange-500/20 to-orange-600/30', borderColor: 'border-orange-500/30', iconColor: 'text-orange-400' },
  { icon: Briefcase, label: 'Work', color: 'from-blue-500/20 to-blue-600/30', borderColor: 'border-blue-500/30', iconColor: 'text-blue-400' },
  { icon: GraduationCap, label: 'Teaching', color: 'from-green-500/20 to-green-600/30', borderColor: 'border-green-500/30', iconColor: 'text-green-400' },
  { icon: Bot, label: 'AI', color: 'from-purple-500/20 to-purple-600/30', borderColor: 'border-purple-500/30', iconColor: 'text-purple-400' },
  { icon: Plane, label: 'Internship', color: 'from-cyan-500/20 to-cyan-600/30', borderColor: 'border-cyan-500/30', iconColor: 'text-cyan-400' },
];

const Scene2Graduation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  return (
    <SceneWrapper id="scene-2">
      <div ref={ref} className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold mb-16"
        >
          <span className="gradient-text-warm">So what now?</span>
        </motion.h2>

        {/* Central figure with orbiting icons */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Graduate figure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center">
              <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-primary" />
            </div>
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <span className="text-sm text-muted-foreground font-medium bg-card px-4 py-2 rounded-full border border-border">
                🎓 Graduated!
              </span>
            </motion.div>
          </motion.div>

          {/* Orbiting icons */}
          {orbitIcons.map((item, index) => {
            const angle = (index * 360) / orbitIcons.length;
            const radius = 160; // Adjust based on screen size
            
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
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex items-center justify-center backdrop-blur-sm cursor-pointer group`}
                  style={{
                    transform: `translateX(${radius}px)`,
                  }}
                  whileHover={{ scale: 1.2 }}
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
                  <span className="absolute -bottom-8 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbit ring */}
          <motion.div
            className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-muted-foreground/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-muted-foreground mt-8 max-w-xl mx-auto"
        >
          A world of possibilities awaited — from music to travel, teaching to tech...
        </motion.p>
      </div>
    </SceneWrapper>
  );
};

export default Scene2Graduation;
