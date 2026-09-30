import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 28,
  duration = 0.6
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, x: 0 };
      case 'down':
        return { opacity: 0, y: -distance, x: 0 };
      case 'left':
        return { opacity: 0, x: distance, y: 0 };
      case 'right':
        return { opacity: 0, x: -distance, y: 0 };
      case 'none':
      default:
        return { opacity: 0, y: 0, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface LightFadeScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export const LightFadeScroll: React.FC<LightFadeScrollProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  distance = 14
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7CBDE8] via-[#0B132B] to-[#7CBDE8] z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

interface ScrollDownPromptProps {
  targetId?: string;
  label?: string;
}

export const ScrollDownPrompt: React.FC<ScrollDownPromptProps> = ({
  targetId,
  label = 'SCROLL DOWN TO EXPLORE'
}) => {
  const handleScrollDown = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollDown}
      className="group inline-flex flex-col items-center gap-2 cursor-pointer focus:outline-none py-2.5 px-4 hover:bg-slate-50 transition-all text-[#252A34] hover:text-[#0B132B] active:scale-95"
      aria-label="Scroll down to explore page content"
    >
      <span className="font-mono-data text-[11px] uppercase tracking-widest text-[#252A34]/70 group-hover:text-[#2A74C4] transition-colors font-medium">
        {label}
      </span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="w-8 h-8 flex items-center justify-center bg-slate-100 group-hover:bg-[#7CBDE8]/20 border border-slate-200 group-hover:border-[#7CBDE8]/40 shadow-2xs transition-colors"
      >
        <ChevronDown className="w-4 h-4 text-[#0B132B] group-hover:text-[#2A74C4] transition-colors" />
      </motion.div>
    </button>
  );
};
