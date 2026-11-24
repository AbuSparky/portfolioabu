/* eslint-disable react/prop-types */
import { Badge, Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";

const ProjectCard = ({ title, description, image, stack, nlink }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        typeof window !== "undefined" &&
          (window.innerWidth < 992 ||
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0)
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -20px 0px" }}
      style={{ height: "100%", width: "100%" }}
    >
      <Tilt
        perspective={1000}
        glareEnable={!isMobile}
        glareMaxOpacity={0.08}
        glareColor="#6366F1"
        glareBorderRadius="24px"
        scale={isMobile ? 1 : 1.02}
        tiltEnable={!isMobile}
        transitionSpeed={1200}
        style={{ height: "100%", width: "100%" }}
      >
        <Flex
          flexDir="column"
          borderRadius="24px"
          overflow="hidden"
          h="100%"
          bg="brand.cardBg"
          backdropFilter="blur(16px)"
          border="1px solid"
          borderColor="brand.cardBorder"
          boxShadow="0 14px 34px -10px rgba(99, 102, 241, 0.08), 0 4px 6px rgba(0, 0, 0, 0.02)"
          transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            borderColor: "rgba(99, 102, 241, 0.4)",
            boxShadow:
              "0 22px 45px -12px rgba(99, 102, 241, 0.2), 0 0 20px rgba(34, 211, 238, 0.15)",
            transform: isMobile ? "none" : "translateY(-6px)",
          }}
          p={{ base: 4, sm: 5 }}
        >
          {/* Card Hero Image */}
          <Box
            w="100%"
            h={{ base: "180px", sm: "190px", md: "210px" }}
            borderRadius="18px"
            overflow="hidden"
            bg="brand.sectionBg"
            position="relative"
            mb={4}
          >
            <Image
              src={image}
              alt={title}
              w="100%"
              h="100%"
              objectFit="cover"
              loading="lazy"
              transition="transform 0.5s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Box>

          {/* Content */}
          <Flex flexDir="column" flex="1" justifyContent="space-between">
            <Box>
              <Text
                fontSize={{ base: "17px", sm: "18px", md: "20px" }}
                color="brand.textPrimary"
                fontWeight="700"
                fontFamily="'Space Grotesk', sans-serif"
                lineHeight={1.3}
                mb={2}
              >
                {title}
              </Text>

              <Text
                color="brand.textSecondary"
                fontSize={{ base: "12.5px", md: "13px" }}
                lineHeight={1.65}
                mb={4}
                noOfLines={4}
              >
                {description}
              </Text>
            </Box>

            <Box pt={2}>
              {/* Tech Stack Badges */}
              <Flex wrap="wrap" gap={1.5} mb={nlink ? 4 : 1}>
                {stack?.map((tech, i) => (
                  <Badge
                    key={i}
                    px={2.5}
                    py={0.5}
                    borderRadius="full"
                    bg="rgba(99, 102, 241, 0.08)"
                    border="1px solid rgba(99, 102, 241, 0.2)"
                    color="#4F46E5"
                    fontSize="11px"
                    fontWeight="600"
                    textTransform="none"
                  >
                    {tech}
                  </Badge>
                ))}
              </Flex>

              {/* Action Link Button if provided */}
              {nlink && (
                <Link
                  href={nlink}
                  isExternal
                  display="inline-flex"
                  alignItems="center"
                  gap={1.5}
                  fontSize="13px"
                  fontWeight="600"
                  color="#4338CA"
                  px={3.5}
                  py={1.5}
                  borderRadius="full"
                  bg="rgba(99, 102, 241, 0.08)"
                  transition="all 0.2s ease"
                  _hover={{
                    textDecoration: "none",
                    bg: "linear-gradient(135deg, #7C3AED, #6366F1)",
                    color: "white",
                    transform: "translateX(2px)",
                  }}
                >
                  Visit Project <Icon as={FiExternalLink} boxSize={3.5} />
                </Link>
              )}
            </Box>
          </Flex>
        </Flex>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
