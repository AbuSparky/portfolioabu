import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import FloatingGlassMesh from "./FloatingGlassMesh";
import FloatingParticles3D from "./FloatingParticles3D";

const FallbackLoader = () => (
  <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
    <Spinner size="xl" thickness="3px" speed="0.8s" color="brand.indigo" />
  </Flex>
);

const StaticFallback = () => (
  <Flex
    w="100%"
    h="100%"
    alignItems="center"
    justifyContent="center"
    position="relative"
  >
    <Box
      w={{ base: "220px", md: "320px" }}
      h={{ base: "220px", md: "320px" }}
      borderRadius="full"
      background="linear-gradient(135deg, rgba(124, 58, 237, 0.7) 0%, rgba(99, 102, 241, 0.7) 50%, rgba(34, 211, 238, 0.7) 100%)"
      filter="blur(20px)"
      boxShadow="0 20px 60px rgba(99, 102, 241, 0.3)"
    />
  </Flex>
);

const HeroCanvas = () => {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // If reduced motion is requested or device is very small/low memory
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setUseFallback(true);
    }
  }, []);

  if (useFallback) {
    return <StaticFallback />;
  }

  return (
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
  );
};

export default HeroCanvas;
