import React, { Component, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FloatingGlassMesh from "./FloatingGlassMesh";
import FloatingParticles3D from "./FloatingParticles3D";

// Error Boundary specifically to catch any WebGL context creation errors
class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL is unavailable or context creation failed, rendering fallback.", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const FallbackLoader = () => (
  <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
    <Spinner size="xl" thickness="3px" speed="0.8s" color="#6366F1" />
  </Flex>
);

// High-end CSS 3D Animated Floating Glass Orb Fallback
const ModernCSSGlassHero = () => (
  <Flex
    w="100%"
    h={{ base: "320px", md: "460px", lg: "520px" }}
    alignItems="center"
    justifyContent="center"
    position="relative"
  >
    {/* Outer Atmospheric Glow */}
    <Box
      position="absolute"
      w={{ base: "220px", sm: "280px", md: "340px" }}
      h={{ base: "220px", sm: "280px", md: "340px" }}
      borderRadius="full"
      background="radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(99, 102, 241, 0.2) 40%, rgba(34, 211, 238, 0.1) 70%, transparent 90%)"
      filter="blur(40px)"
      pointerEvents="none"
    />

    {/* Floating Glass Orb with Framer Motion */}
    <motion.div
      animate={{
        y: [-12, 12, -12],
        rotate: [0, 180, 360],
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      <Box
        w={{ base: "190px", sm: "240px", md: "290px" }}
        h={{ base: "190px", sm: "240px", md: "290px" }}
        borderRadius="full"
        background="linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(226, 232, 240, 0.45) 50%, rgba(99, 102, 241, 0.35) 100%)"
        backdropFilter="blur(24px)"
        border="1.5px solid rgba(255, 255, 255, 0.9)"
        boxShadow="0 25px 50px -12px rgba(99, 102, 241, 0.35), inset 0 0 30px rgba(255, 255, 255, 0.6), inset 0 -15px 30px rgba(124, 58, 237, 0.25)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        {/* Inner Refraction Ring */}
        <Box
          w="75%"
          h="75%"
          borderRadius="full"
          background="linear-gradient(135deg, rgba(34, 211, 238, 0.45) 0%, rgba(124, 58, 237, 0.45) 100%)"
          filter="blur(18px)"
          transform="rotate(45deg)"
        />

        {/* Center Geometric Core */}
        <Box
          position="absolute"
          w="45%"
          h="45%"
          borderRadius="18px"
          background="linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #22D3EE 100%)"
          boxShadow="0 0 25px rgba(99, 102, 241, 0.6)"
          transform="rotate(25deg)"
          opacity={0.85}
        />
      </Box>
    </motion.div>

    {/* Orbiting Satellite Dots */}
    <motion.div
      animate={{
        rotate: [360, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        width: "360px",
        height: "360px",
        pointerEvents: "none",
      }}
    >
      <Box
        position="absolute"
        top="10%"
        left="15%"
        w="10px"
        h="10px"
        borderRadius="full"
        bg="#6366F1"
        boxShadow="0 0 14px #6366F1"
      />
      <Box
        position="absolute"
        bottom="12%"
        right="18%"
        w="14px"
        h="14px"
        borderRadius="full"
        bg="#22D3EE"
        boxShadow="0 0 16px #22D3EE"
      />
    </motion.div>
  </Flex>
);

const checkWebGL = () => {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch (e) {
    return false;
  }
};

const HeroCanvas = () => {
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const hasWebGL = !prefersReducedMotion && checkWebGL();
    setCanRenderWebGL(hasWebGL);
    setChecked(true);
  }, []);

  if (!checked) {
    return <FallbackLoader />;
  }

  if (!canRenderWebGL) {
    return <ModernCSSGlassHero />;
  }

  return (
    <CanvasErrorBoundary fallback={<ModernCSSGlassHero />}>
      <Box
        w="100%"
        h={{ base: "320px", md: "460px", lg: "540px" }}
        position="relative"
        cursor="grab"
        _active={{ cursor: "grabbing" }}
      >
        <Suspense fallback={<FallbackLoader />}>
          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" />
            <pointLight position={[-4, -3, -2]} intensity={2} color="#7C3AED" />
            <pointLight position={[3, -2, 4]} intensity={2} color="#22D3EE" />

            <FloatingGlassMesh />
            <FloatingParticles3D count={35} />
          </Canvas>
        </Suspense>
      </Box>
    </CanvasErrorBoundary>
  );
};

export default HeroCanvas;
