import { lazy, Suspense } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsArrowDown, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Titlename from "../Components/TitleName/Titlename";
import { motion } from "framer-motion";
import resume from "../assets/Nihamathullah_Software_Developer.pdf";

const HeroCanvas = lazy(() => import("../Components/three/HeroCanvas"));

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Nihamathullah_Software_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Flex
      id="home"
      w="100%"
      maxW="1320px"
      mx="auto"
      minH={{ lg: "92vh", base: "auto" }}
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ base: "column-reverse", lg: "row" }}
      pt={{ base: 28, md: 32, lg: 20 }}
      pb={{ base: 12, lg: 16 }}
      px={{ base: 5, md: 8, lg: 12 }}
      position="relative"
      gap={{ base: 8, lg: 4 }}
    >
      {/* Left Content */}
      <Flex
        w={{ lg: "54%", base: "100%" }}
        flexDir="column"
        gap={{ base: 4, md: 5 }}
        zIndex={2}
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            display="inline-flex"
            alignItems="center"
            gap={2}
            px={3.5}
            py={1.5}
            borderRadius="full"
            bg="rgba(99, 102, 241, 0.08)"
            border="1px solid rgba(99, 102, 241, 0.2)"
            color="#4F46E5"
            fontSize={{ base: "12px", md: "13px" }}
            fontWeight="600"
            textTransform="none"
          >
            <Icon as={HiSparkles} color="#6366F1" />
            Full-Stack Developer • Available for Projects
          </Badge>
        </motion.div>

        {/* Name Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Text
            fontSize={{ base: "34px", sm: "44px", md: "52px", lg: "58px" }}
            fontWeight="800"
            fontFamily="'Space Grotesk', sans-serif"
            lineHeight={{ base: 1.15, md: 1.1 }}
            color="#0F172A"
            letterSpacing="-0.03em"
          >
            Hello, I&apos;m{" "}
            <Box as="span" className="gradient-text">
              Nihamath!
            </Box>
          </Text>
        </motion.div>

        {/* Rotating Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Titlename />
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Text
            fontSize={{ base: "15px", md: "17px" }}
            color="#475569"
            lineHeight={1.65}
            maxW="560px"
          >
            I build modern, responsive websites that deliver seamless user
            experiences. With a passion for clean code and innovative
            solutions, I turn ideas into reality.
          </Text>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Flex gap={{ base: 3, sm: 4 }} align="center" pt={2} wrap="wrap">
            {/* Download CV CTA */}
            <Button
              onClick={handleDownload}
              h={{ base: "48px", md: "52px" }}
              px={{ base: 6, md: 8 }}
              borderRadius="full"
              background="linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #22D3EE 100%)"
              color="white"
              fontWeight="600"
              fontSize={{ base: "14px", md: "15px" }}
              boxShadow="0 10px 25px -5px rgba(99, 102, 241, 0.45)"
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 14px 30px -5px rgba(99, 102, 241, 0.6)",
                filter: "brightness(1.05)",
              }}
              _active={{ transform: "scale(0.98)" }}
              rightIcon={<Icon as={BsArrowDown} boxSize={4} />}
            >
              Download CV
            </Button>

            {/* Social Links */}
            <Flex gap={3}>
              <Link
                href="https://github.com/AbuSparky"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Flex
                  w={{ base: "48px", md: "52px" }}
                  h={{ base: "48px", md: "52px" }}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  bg="white"
                  border="1px solid rgba(226, 232, 240, 0.9)"
                  boxShadow="0 4px 14px rgba(0, 0, 0, 0.04)"
                  transition="all 0.25s ease"
                  _hover={{
                    borderColor: "#6366F1",
                    color: "#6366F1",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(99, 102, 241, 0.2)",
                  }}
                  color="#475569"
                >
                  <Icon as={BsGithub} boxSize={5} />
                </Flex>
              </Link>

              <Link
                href="https://www.linkedin.com/in/nihamathullah/"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Flex
                  w={{ base: "48px", md: "52px" }}
                  h={{ base: "48px", md: "52px" }}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  bg="white"
                  border="1px solid rgba(226, 232, 240, 0.9)"
                  boxShadow="0 4px 14px rgba(0, 0, 0, 0.04)"
                  transition="all 0.25s ease"
                  _hover={{
                    borderColor: "#0A66C2",
                    color: "#0A66C2",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(10, 102, 194, 0.2)",
                  }}
                  color="#475569"
                >
                  <Icon as={FaLinkedinIn} boxSize={5} />
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>

      {/* Right 3D Scene */}
      <Flex
        w={{ lg: "46%", base: "100%" }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        <Suspense
          fallback={
            <Flex h="350px" align="center" justify="center">
              <Spinner color="#6366F1" size="lg" />
            </Flex>
          }
        >
          <HeroCanvas />
        </Suspense>
      </Flex>
    </Flex>
  );
};

export default Home;
