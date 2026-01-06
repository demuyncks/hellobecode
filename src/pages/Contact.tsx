import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden bg-background">
      {/* Background doodle decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Scattered celebration elements */}
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-xl"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              color: i % 2 === 0 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))',
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['✦', '★', '✧', '○', '♦', '◇', '🎉', '✨'][i % 8]}
          </motion.span>
        ))}

        {/* Large decorative shapes */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-40 h-40 border-4 border-dashed border-accent/20"
          style={{ borderRadius: '50% 45% 50% 45%/45% 50% 45% 50%' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-32 h-32 border-4 border-primary/20"
          style={{ borderRadius: '30px 5px 30px 5px/5px 30px 5px 30px' }}
          animate={{ rotate: [0, -15, 0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link to="/">
          <Button variant="sketch" size="sm" className="gap-2">
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
              y: [0, -25, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            <div 
              className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary to-primary/70 border-4 border-primary flex items-center justify-center shadow-cartoon-lg mx-auto"
              style={{ borderRadius: '50% 45% 50% 45%/45% 50% 45% 50%' }}
            >
              <span className="text-7xl md:text-8xl">🙌</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-display font-bold mb-4 text-shadow-cartoon"
        >
          <span className="gradient-text-warm">Let's Connect!</span> 🤝
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 font-body"
        >
          Ready to start this journey together? Reach out through any of these channels!
        </motion.p>

        {/* Contact cards - cartoon style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Email */}
          <motion.a
            href="mailto:demuyncksimon@hotmail.com"
            className="group"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <div 
              className="bg-card border-3 border-border p-6 shadow-cartoon transition-all duration-300 group-hover:shadow-cartoon-lg group-hover:border-accent"
              style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
            >
              <div 
                className="w-14 h-14 bg-accent/20 border-3 border-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ borderRadius: '18px 4px 18px 4px/4px 18px 4px 18px' }}
              >
                <Mail className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Email 📧</h3>
              <p className="text-sm text-muted-foreground font-body break-words">And I'll answer</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/simon-de-muynck-a385712a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div 
              className="bg-card border-3 border-border p-6 shadow-cartoon transition-all duration-300 group-hover:shadow-cartoon-lg group-hover:border-blue-400"
              style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
            >
              <div 
                className="w-14 h-14 bg-blue-100 border-3 border-blue-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ borderRadius: '18px 4px 18px 4px/4px 18px 4px 18px' }}
              >
                <Linkedin className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">LinkedIn 💼</h3>
              <p className="text-sm text-muted-foreground font-body">Let's network!</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+32488172004"
            className="group"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <div 
              className="bg-card border-3 border-border p-6 shadow-cartoon transition-all duration-300 group-hover:shadow-cartoon-lg group-hover:border-primary"
              style={{ borderRadius: '25px 5px 25px 5px/5px 25px 5px 25px' }}
            >
              <div 
                className="w-14 h-14 bg-primary/20 border-3 border-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ borderRadius: '18px 4px 18px 4px/4px 18px 4px 18px' }}
              >
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Phone 📱</h3>
              <p className="text-sm text-muted-foreground font-body">+32 488 17 20 04</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Additional message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-muted-foreground font-body"
        >
          Looking forward to hearing from you! 🎉✨
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;