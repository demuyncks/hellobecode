import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Linkedin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'var(--gradient-tech)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-20"
          style={{ background: 'var(--gradient-warm)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Decorative sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-secondary/40" />
          </motion.div>
        ))}
      </div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link to="/">
          <Button variant="glass" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Story
          </Button>
        </Link>
      </motion.div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Happy jumping person emoji/illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center shadow-2xl mx-auto">
              <span className="text-7xl md:text-8xl">🙌</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-display font-bold mb-4"
        >
          <span className="gradient-text-warm">Let's Connect!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-12"
        >
          Ready to start this journey together? Reach out through any of these channels!
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Email */}
          <a
            href="mailto:hello@example.com"
            className="group"
          >
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(190,80%,55%,0.2)]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">hello@example.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-6 border border-border hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(210,80%,55%,0.2)]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Let's network!</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+32123456789"
            className="group"
          >
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-6 border border-border hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(38,92%,55%,0.2)]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+32 123 456 789</p>
            </div>
          </a>
        </motion.div>

        {/* Additional message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-muted-foreground"
        >
          Looking forward to hearing from you! 🎉
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
