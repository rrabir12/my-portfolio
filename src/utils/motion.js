export const smoothEase = [0.22, 1, 0.36, 1];
export const smoothExit = [0.4, 0, 1, 1];
export const hoverEase = [0.25, 0.8, 0.25, 1];

export const sectionViewport = { once: false, amount: 0.2 };

// Trigger when a section header is halfway visible
export const skillHalfViewport = { once: false, amount: 0.5 };

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: smoothEase,
    },
  },
};
