import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import ProgressiveText from '@/components/story/ProgressiveText';
import FloatingIcon from '@/components/story/FloatingIcon';
import { Globe, Divide, Bird, Phone, Monitor, MessageCircle, BookOpen } from 'lucide-react';

const Scene5Revelation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });

  const surroundingIcons = [
    { icon: Globe, label: 'International', color: 'text-blue-400', bg: 'from-blue-500/20 to-blue-600/30', border: 'border-blue-500/30', position: 'top-0 left-1/4' },
    { icon: Divide, label: 'Mathematical', color: 'text-amber-400', bg: 'from-amber-500/20 to-amber-600/30', border: 'border-amber-500/30', position: 'top-0 right-1/4' },
    { icon: Bird, label: 'Independence', color: 'text-cyan-400', bg: 'from-cyan-500/20 to-cyan-600/30', border: 'border-cyan-500/30', position: 'bottom-0 left-1/3' },
  ];

  const actionIcons = [
    { icon: Phone, label: 'Calls', position: '-left-8 top-1/4' },
    { icon: Monitor, label: 'Research', position: '-right-8 top-1/3' },
    { icon: MessageCircle, label: 'Discussions', position: '-left-4 bottom-1/4' },
  ];

  return (
    <SceneWrapper id="scene-5" className="bg-gradient-to-b from-background via-card to-background">
      <div ref={ref} className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-display font-bold mb-16"
        >
          The <span className="gradient-text">Revelation</span>
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
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.bg} border ${item.border} flex items-center justify-center backdrop-blur-sm`}>
                    <item.icon className={`w-7 h-7 md:w-8 md:h-8 ${item.color}`} />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                    {item.label}
                  </span>
                </FloatingIcon>
              </motion.div>
            ))}
          </div>

          {/* Floating quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-lg md:text-xl font-display font-semibold italic gradient-text">
                "Follow something you are good at"
              </p>
            </div>
          </motion.div>

          {/* Book visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto w-64 md:w-80"
          >
            <div className="relative perspective-1000">
              {/* Book cover */}
              <div className="bg-gradient-to-br from-secondary to-orange-600 rounded-lg p-1 shadow-2xl transform hover:rotate-y-5 transition-transform duration-500">
                <div className="bg-card rounded-md p-6 md:p-8">
                  <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-secondary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-lg md:text-xl mb-2">80,000 Hours</h3>
                  <p className="text-sm text-muted-foreground">Finding your path</p>
                </div>
              </div>
              
              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-secondary to-orange-600 rounded-l-lg" />
            </div>

            {/* Action icons around the book */}
            {actionIcons.map((item, index) => (
              <motion.div
                key={item.label}
                className={`absolute ${item.position}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text content */}
          <div className="mt-12 space-y-4">
            <ProgressiveText
              text="IT speaks to me — it combines my logical and mathematical strengths, offers international horizons, and provides independence."
              className="text-lg md:text-xl text-foreground font-medium max-w-xl mx-auto"
              delay={0.6}
            />

            <ProgressiveText
              text="Through readings, conversations, and research, the path became clear."
              className="text-base text-muted-foreground max-w-md mx-auto"
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default Scene5Revelation;
