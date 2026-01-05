import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

const Scene4Focus = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const cascadeY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <SceneWrapper id="scene-4">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-block px-4 py-2 bg-secondary/20 border-3 border-secondary text-secondary text-sm font-display font-medium mb-6 shadow-cartoon"
            style={{ borderRadius: '15px 3px 15px 3px/3px 15px 3px 15px' }}
          >
            🇦🇲 Back from Armenia
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-shadow-cartoon">
            Time to <span className="gradient-text">Focus</span> 🎯
          </h2>
        </motion.div>

        {/* Three columns - cartoon style */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
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
                The conventional approach wasn't the right fit...
              </p>
              {/* X overlay */}
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
                  <span className="text-sm text-muted-foreground font-body">Deep learning</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                Courses, books, hands-on projects — building a solid foundation. 📚
              </p>
              {/* Check overlay */}
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
                Exploring the cutting edge of AI tools and technologies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cascading tech logos - cartoon tags */}
        <motion.div style={{ y: cascadeY }} className="overflow-hidden py-8">
          <div className="flex flex-wrap justify-center gap-3">
            {techLogos.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: -20, rotate: Math.random() * 10 - 5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.03,
                }}
                whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3, y: -5 }}
                className="px-3 py-1.5 bg-card border-3 border-border text-sm font-display font-medium cursor-default hover:border-primary hover:bg-primary/10 transition-colors shadow-cartoon"
                style={{ borderRadius: '12px 3px 12px 3px/3px 12px 3px 12px' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SceneWrapper>
  );
};

export default Scene4Focus;