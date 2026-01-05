import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import { Music2, Hand, FileText, Gift, Bot, Flag } from 'lucide-react';

const experiences = [
  {
    icon: Music2,
    title: 'Music Production',
    description: 'Guitar & mixing',
    color: 'bg-pink-100 border-pink-400',
    iconColor: 'text-pink-600',
    emoji: '🎸',
    delay: 0,
  },
  {
    icon: Hand,
    title: 'Hitchhiking',
    description: 'Across Europe',
    color: 'bg-orange-100 border-orange-400',
    iconColor: 'text-orange-600',
    emoji: '👍',
    delay: 0.1,
  },
  {
    icon: FileText,
    title: 'Job Hunting',
    description: 'CVs & applications',
    color: 'bg-blue-100 border-blue-400',
    iconColor: 'text-blue-600',
    emoji: '📝',
    delay: 0.2,
  },
  {
    icon: Gift,
    title: 'Entrepreneurship',
    description: 'Year-end boxes',
    color: 'bg-accent/30 border-accent',
    iconColor: 'text-secondary',
    emoji: '🎁',
    delay: 0.3,
  },
  {
    icon: Bot,
    title: 'AI Exploration',
    description: 'Growing fascination',
    color: 'bg-purple-100 border-purple-400',
    iconColor: 'text-purple-600',
    emoji: '🤖',
    delay: 0.4,
  },
  {
    icon: Flag,
    title: 'Armenia Internship',
    description: 'International experience',
    color: 'bg-secondary/20 border-secondary',
    iconColor: 'text-secondary',
    emoji: '🇦🇲',
    delay: 0.5,
  },
];

const Scene3Experimentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <SceneWrapper id="scene-3" className="bg-background">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-shadow-cartoon">
            <span className="gradient-text">I Tasted Them All</span> 🍽️
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Music production, hitchhiking across Europe, job hunting, entrepreneurship, diving into AI, interning abroad...
          </p>
        </motion.div>

        {/* Grid of experiences - cartoon cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -3 : 3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: exp.delay,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, y: -5 }}
              className="group"
            >
              <div 
                className={`relative ${exp.color} border-3 p-6 h-full shadow-cartoon transition-all duration-300 group-hover:shadow-cartoon-lg`}
                style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
              >
                {/* Emoji decoration */}
                <motion.span 
                  className="absolute -top-3 -right-3 text-2xl"
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {exp.emoji}
                </motion.span>

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 md:w-16 md:h-16 ${exp.color} border-3 flex items-center justify-center mb-4 shadow-cartoon`}
                  style={{ borderRadius: '20px 4px 20px 4px/4px 20px 4px 20px' }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <exp.icon className={`w-7 h-7 md:w-8 md:h-8 ${exp.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2 text-foreground">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">{exp.description}</p>

                {/* Decorative corner doodle */}
                <div className="absolute bottom-2 right-2 text-lg opacity-30">
                  ✦
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SceneWrapper>
  );
};

export default Scene3Experimentation;