import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    // Hide on touch or reduced motion
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        width: 380,
        height: 380,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(34, 211, 238, 0.06) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "multiply",
      }}
    />
  );
};

export default CursorGlow;
