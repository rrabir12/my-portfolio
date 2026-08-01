export const smoothEase = [0.22, 1, 0.36, 1];
export const smoothExit = [0.4, 0, 1, 1];
export const hoverEase = [0.25, 0.8, 0.25, 1];
export const sectionTransition = { duration: 0.7, ease: smoothEase };

export const sectionViewport = { once: false, amount: 0.16 };

// Trigger when a section header is halfway visible
export const skillHalfViewport = { once: false, amount: 0.5 };

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
      duration: 0.6,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};
