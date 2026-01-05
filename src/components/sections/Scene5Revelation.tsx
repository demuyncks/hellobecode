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
    { icon: Globe, label: 'International', color: 'bg-blue-100 border-blue-400', iconColor: 'text-blue-600', position: 'top-0 left-1/4', emoji: '🌍' },
    { icon: Divide, label: 'Mathematical', color: 'bg-primary/20 border-primary', iconColor: 'text-primary', position: 'top-0 right-1/4', emoji: '➗' },
    { icon: Bird, label: 'Independence', color: 'bg-accent/30 border-accent', iconColor: 'text-secondary', position: 'bottom-0 left-1/3', emoji: '🦅' },
  ];

  const actionIcons = [
    { icon: Phone, label: 'Calls', position: '-left-8 top-1/4', emoji: '📞' },
    { icon: Monitor, label: 'Research', position: '-right-8 top-1/3', emoji: '💻' },
    { icon: MessageCircle, label: 'Discussions', position: '-left-4 bottom-1/4', emoji: '💬' },
  ];

  return (
    <SceneWrapper id="scene-5" className="bg-background">
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

          {/* Book visual - cartoon style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto w-64 md:w-80"
          >
            <div className="relative">
              {/* Book cover */}
              <div 
                className="bg-primary border-4 border-primary shadow-cartoon-lg p-1"
                style={{ borderRadius: '5px 20px 20px 5px' }}
              >
                <div 
                  className="bg-card p-6 md:p-8"
                  style={{ borderRadius: '3px 15px 15px 3px' }}
                >
                  <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-lg md:text-xl mb-2">80,000 Hours 📖</h3>
                  <p className="text-sm text-muted-foreground font-body">Finding your path</p>
                </div>
              </div>
              
              {/* Book spine effect */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-primary to-primary/80"
                style={{ borderRadius: '5px 0 0 5px' }}
              />

              {/* Page lines decoration */}
              <div className="absolute right-2 top-4 bottom-4 w-1 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-2 bg-border/50 rounded" />
                ))}
              </div>
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
                <div 
                  className="w-10 h-10 bg-muted border-3 border-border flex items-center justify-center shadow-cartoon"
                  style={{ borderRadius: '12px 3px 12px 3px/3px 12px 3px 12px' }}
                >
                  <span className="text-lg">{item.emoji}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text content */}
          <div className="mt-12 space-y-4">
            <ProgressiveText
              text="IT speaks to me — it combines my logical and mathematical strengths, offers international horizons, and provides independence."
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