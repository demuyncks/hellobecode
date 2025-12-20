import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import { Music2, Hand, FileText, Gift, Bot, Flag } from 'lucide-react';

const experiences = [
  {
    icon: Music2,
    title: 'Music Production',
    description: 'Guitar & mixing',
    color: 'from-pink-500 to-rose-600',
    delay: 0,
  },
  {
    icon: Hand,
    title: 'Hitchhiking',
    description: 'Across Europe',
    color: 'from-orange-500 to-amber-600',
    delay: 0.1,
  },
  {
    icon: FileText,
    title: 'Job Hunting',
    description: 'CVs & applications',
    color: 'from-blue-500 to-indigo-600',
    delay: 0.2,
  },
  {
    icon: Gift,
    title: 'Entrepreneurship',
    description: 'Year-end boxes',
    color: 'from-green-500 to-emerald-600',
    delay: 0.3,
  },
  {
    icon: Bot,
    title: 'AI Exploration',
    description: 'Growing fascination',
    color: 'from-purple-500 to-violet-600',
    delay: 0.4,
  },
  {
    icon: Flag,
    title: 'Armenia Internship',
    description: 'International experience',
    color: 'from-cyan-500 to-teal-600',
    delay: 0.5,
  },
];

const Scene3Experimentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <SceneWrapper id="scene-3" className="bg-gradient-to-b from-background via-muted/30 to-background">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">I Tasted Them All</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Music production, hitchhiking across Europe, job hunting, entrepreneurship, diving into AI, interning abroad...
          </p>
        </motion.div>

        {/* Grid of experiences */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: exp.delay,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 border border-border h-full overflow-hidden card-hover">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <exp.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-display font-semibold mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.description}</p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div
                    className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${exp.color} opacity-20 rotate-45`}
                  />
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
