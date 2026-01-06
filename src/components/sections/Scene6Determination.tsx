import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SceneWrapper from '@/components/story/SceneWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Scene6Determination = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-20%' });
  const navigate = useNavigate();
  const [showFireworks, setShowFireworks] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFireworks(true);

    // Après 4 secondes, naviguer vers /contact
    setTimeout(() => {
      navigate('/contact');
    }, 4000);
  };

  // Générer des confettis aléatoires
  const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
  const confettiCount = 80;

  return (
    <SceneWrapper id="scene-6" className="relative overflow-hidden">
      {/* Feu d'artifice */}
      {showFireworks && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Confettis explosifs */}
          {[...Array(confettiCount)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = startX + (Math.random() - 0.5) * 150;
            const endY = startY + (Math.random() - 0.5) * 150;
            const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            const delay = Math.random() * 1;
            const duration = 2 + Math.random() * 2;

            return (
              <motion.div
                key={`confetti-${i}`}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: color,
                  left: `${startX}%`,
                  top: `${startY}%`,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  x: [`0vw`, `${endX - startX}vw`],
                  y: [`0vh`, `${endY - startY}vh`, `${endY - startY + 50}vh`],
                  scale: [0, 1.5, 0.5],
                  opacity: [0, 1, 0],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  ease: "easeOut",
                }}
              />
            );
          })}

          {/* Étoiles scintillantes */}
          {[...Array(30)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 2;

            return (
              <motion.div
                key={`star-${i}`}
                className="absolute text-4xl"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  delay: delay,
                  repeat: 1,
                }}
              >
                ✨
              </motion.div>
            );
          })}

          {/* Explosions circulaires */}
          {[...Array(8)].map((_, i) => {
            const x = 20 + Math.random() * 60;
            const y = 20 + Math.random() * 60;
            const delay = i * 0.5;

            return (
              <motion.div
                key={`explosion-${i}`}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                {[...Array(12)].map((_, j) => {
                  const angle = (j * 360) / 12;
                  return (
                    <motion.div
                      key={`particle-${j}`}
                      className="absolute w-2 h-2 rounded-full bg-yellow-400"
                      initial={{ x: 0, y: 0, scale: 0 }}
                      animate={{
                        x: Math.cos((angle * Math.PI) / 180) * 100,
                        y: Math.sin((angle * Math.PI) / 180) * 100,
                        scale: [0, 1, 0],
                        opacity: [1, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: delay,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}
              </motion.div>
            );
          })}

          {/* Flash lumineux */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0, 0.2, 0, 0.4, 0],
            }}
            transition={{
              duration: 5,
              times: [0, 0.1, 0.2, 0.4, 0.5, 0.7, 1],
            }}
          />

          {/* Message de célébration */}
<motion.div
  className="fixed inset-0 flex items-center justify-center z-[60] pointer-events-none"
  initial={{ scale: 0, opacity: 0 }}
  animate={{
    scale: [0, 1.5, 1],
    opacity: [0, 1, 1, 1, 0],
  }}
  transition={{
    duration: 5,
    times: [0, 0.2, 0.4, 0.8, 1],
  }}
>
  <div className="text-6xl md:text-8xl font-display font-black text-primary drop-shadow-2xl">
    🎉 LET'S GO! 
  </div>
</motion.div>
        </div>
      )}

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scattered celebration doodles */}
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['✦', '★', '✧', '○', '◇', '♦'][i % 6]}
          </motion.span>
        ))}
      </div>

      <div ref={ref} className="relative z-10 text-center">
        {/* Rocket figure - cartoon style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div 
              className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-secondary to-accent border-4 border-secondary flex items-center justify-center shadow-cartoon-lg"
              style={{ borderRadius: '50% 45% 50% 45%/45% 50% 45% 50%' }}
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl md:text-7xl"
              >
                🚀
              </motion.div>
            </motion.div>
            {/* Glow ring - dashed cartoon style */}
            <motion.div
              className="absolute inset-0 border-4 border-dashed border-secondary/40"
              style={{ borderRadius: '50% 45% 50% 45%/45% 50% 45% 50%' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow-cartoon"
        >
          Ready for{' '}
          <span className="gradient-text-warm">BeCode's</span>
          <br />
          <span className="gradient-text">Bootcamp</span> 🎓
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-body"
        >
          From curiosity to conviction, from exploration to expertise — the journey continues! ✨
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button 
            variant="cta" 
            size="xl" 
            className="group !text-xxl"
            onClick={handleClick}
          >
            I want to train that guy! 💪
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Button>
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-sm text-muted-foreground font-body"
        >
          Click the button to connect 👆
        </motion.p>
      </div>
    </SceneWrapper>
  );
};

export default Scene6Determination;