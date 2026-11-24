import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.75,
  yOffset = 45,
  scale = 0.98,
  width = "100%",
  className = "",
  style = {},
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale: scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // cinematic smooth ease-out
      }}
      className={className}
      style={{ width, ...style }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
