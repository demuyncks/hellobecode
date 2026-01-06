import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import SceneWrapper from '@/components/story/SceneWrapper';
import { Guitar, CloudLightning, Beer, GraduationCap, Backpack, FlaskConical, Music, Laptop } from 'lucide-react';

const Scene2Graduation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  // Scroll automatique vers la section suivante après l'animation
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        document.getElementById('scene-3')?.scrollIntoView({ behavior: 'smooth' });
      }, 8000); // 7 secondes d'animation + 2 secondes d'attente

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Icônes le long du chemin avec leurs positions et délais
  const pathIcons = [
    { Icon: Guitar, x: 120, y: 30, delay: 0.7, color: 'bg-pink-100/20 border-pink-400', iconColor: 'text-pink-600', side: 'right' },
    { Icon: CloudLightning, x: 180, y: 200, delay: 2.1, color: 'bg-gray-100/20 border-gray-400', iconColor: 'text-gray-600', side: 'right' },
    { Icon: Beer, x: 240, y: 100, delay: 1.4, color: 'bg-amber-100/20 border-amber-400', iconColor: 'text-amber-600', side: 'left' },
    { text: 'PSAD', x: 60, y: 280, delay: 2.8, color: 'bg-accent/20 border-accent', textColor: 'text-secondary', side: 'left' },
    { Icon: GraduationCap, x: 230, y: 350, delay: 3.5, color: 'bg-purple-100/20 border-purple-400', iconColor: 'text-purple-600', side: 'right' },
    { Icon: Backpack, x: 150, y: 440, delay: 4.2, color: 'bg-green-100/20 border-green-400', iconColor: 'text-green-600', side: 'right' },
    { Icon: FlaskConical, x: 200, y: 560, delay: 4.9, color: 'bg-blue-100/20 border-blue-400', iconColor: 'text-blue-600', side: 'left' },
    { Icon: Music, x: 60, y: 590, delay: 5.6, color: 'bg-rose-100/20 border-rose-400', iconColor: 'text-rose-600', side: 'left' },
    { Icon: Laptop, x: 80, y: 710, delay: 6.3, color: 'bg-indigo-100/20 border-indigo-400', iconColor: 'text-indigo-600', side: 'left' },
  ];

  return (
    <SceneWrapper id="scene-2">
      <div ref={ref} className="relative min-h-screen flex items-center justify-center">
        {/* Chemin tortueux animé en pointillés */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Chemin principal ondulant style cartoon */}
          <motion.path
            d="M 200 0
               C 250 80, 280 120, 200 200
               C 120 280, 150 320, 220 400
               C 290 480, 260 520, 180 600
               C 100 680, 160 720, 200 800"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="15 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ 
              pathLength: { duration: 7, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
          />

          {/* Flèche à la fin du chemin */}
          <motion.polygon
            points="200,800 195,785 205,785"
            fill="hsl(var(--primary))"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              delay: 6.5,
              duration: 0.5,
              ease: "backOut"
            }}
          />
        </svg>

        {/* Icônes qui apparaissent le long du chemin */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full" style={{ maxWidth: '400px', margin: '0 auto' }}>
            {pathIcons.map((item, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: `${(item.x / 400) * 100}%`,
                  top: `${(item.y / 800) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0, rotate: -15 }}
                animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                transition={{ 
                  delay: item.delay,
                  duration: 0.5,
                  ease: "backOut"
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <div 
                  className={`w-16 h-16 md:w-20 md:h-20 ${item.color} border-3 flex items-center justify-center shadow-cartoon cursor-pointer`}
                  style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
                >
                  {item.Icon ? (
                    <item.Icon className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`} />
                  ) : (
                    <span className={`text-sm md:text-base font-display font-bold ${item.textColor}`}>
                      {item.text}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

export default Scene2Graduation;