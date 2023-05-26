import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const AnimBlur = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    {children}
  </motion.div>
);

export const AnimZoom = ({ children }) => (
  <motion.div
    animate={{
      scale: [0, 1],
      opacity: [0, 1],
      rotate: [0, 360],
    }}
    transition={{ duration: 1, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideLeft = ({ children, delay }) => (
  <motion.div
    initial={{ translateX: "100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1.5, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideRight = ({ children, delay }) => (
  <motion.div
    initial={{ translateX: "-100vw" }}
    animate={{ translateX: 0 }}
    transition={{ duration: 1.5, delay: delay, ease: "easeIn" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideDown = ({ children, delay }) => (
  <motion.div
    initial={{ translateY: "-150vh" }}
    animate={{ translateY: 0 }}
    transition={{ duration: 1.2, delay: delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const AnimSlideUp = ({ children, delay }) => {
  const isMobileHorizontal = useMediaQuery({
    query: "(orientation: landscape)",
  });

  return (
    <motion.div
      initial={{
        translateY: "150vh",
        scale: isMobileHorizontal ? "0.75" : "1",
      }}
      animate={{ translateY: 0, scale: "0.75" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeInOut" }}
      style={{ scale: isMobileHorizontal ? "0.75" : "1" }}
    >
      {children}
    </motion.div>
  );
};

export const AnimPump = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    }}
  >
    {children}
  </motion.div>
);
