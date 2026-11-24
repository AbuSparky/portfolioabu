import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import aboutRight from "../assets/nihamath.jpg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const About = () => {
  return (
    <Flex
      id="about"
      w="100%"
      maxW="1320px"
      mx="auto"
      alignItems="center"
      justifyContent="space-between"
      py={{ base: 14, md: 24 }}
      px={{ base: 5, md: 8, lg: 12 }}
      flexDir={{ base: "column-reverse", lg: "row" }}
      gap={{ base: 10, lg: 12 }}
      position="relative"
    >
      {/* Left Side: Story & Terminal Glass Card */}
      <Flex flexDir="column" w={{ lg: "62%", base: "100%" }} zIndex={2}>
        <motion.div
          initial={{ opacity: 0, y: 25, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Badge
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            px={3}
            py={1}
            borderRadius="full"
            bg="rgba(99, 102, 241, 0.08)"
            border="1px solid rgba(99, 102, 241, 0.2)"
            color="#4F46E5"
            fontSize="12px"
            fontWeight="600"
            textTransform="none"
            mb={3}
          >
            <HiSparkles /> About Me
          </Badge>

          <Text
            fontSize={{ base: "28px", sm: "36px", md: "42px" }}
            fontWeight="800"
            fontFamily="'Space Grotesk', sans-serif"
            color="#0F172A"
            lineHeight={1.2}
            mb={6}
          >
            Crafting Scalable,{" "}
            <Box as="span" className="gradient-text">
              High-Impact
            </Box>{" "}
            Web Solutions
          </Text>
        </motion.div>

        {/* Glassmorphic Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Flex
            flexDir="column"
            p={{ base: 5, sm: 6, md: 8 }}
            borderRadius="24px"
            bg="rgba(255, 255, 255, 0.88)"
            backdropFilter="blur(20px)"
            border="1px solid rgba(226, 232, 240, 0.9)"
            boxShadow="0 20px 45px -15px rgba(99, 102, 241, 0.1), 0 4px 6px rgba(0, 0, 0, 0.02)"
            position="relative"
            overflow="hidden"
          >
            {/* Window header dots */}
            <Flex align="center" gap={2} mb={5} pb={3} borderBottom="1px solid rgba(226, 232, 240, 0.8)">
              <Box w="10px" h="10px" borderRadius="full" bg="#EF4444" opacity={0.8} />
              <Box w="10px" h="10px" borderRadius="full" bg="#F59E0B" opacity={0.8} />
              <Box w="10px" h="10px" borderRadius="full" bg="#10B981" opacity={0.8} />
              <Text fontSize="12px" color="#94A3B8" fontWeight="500" ml={2}>
                developer-bio.md
              </Text>
            </Flex>

            <Flex flexDir="column" gap={3.5} fontSize={{ base: "13.5px", md: "15px" }} color="#334155" lineHeight={1.7}>
              <Text>
                Hi, I&apos;m <Text as="strong" color="#0F172A">Nihamath</Text>, a passionate{" "}
                <Text as="span" fontWeight="600" color="#4F46E5">
                  Full-Stack Developer
                </Text>{" "}
                with over a year of experience building end-to-end web applications. I love turning ideas
                into fast, scalable and user-friendly products, from pixel-perfect interfaces to secure,
                high-performance APIs and well-structured databases.
              </Text>

              <Text>
                I have hands-on experience with{" "}
                <Text as="span" fontWeight="600" color="#7C3AED">
                  React.js, Next.js, Node.js, Express.js, SQL, MongoDB, PostgreSQL
                </Text>
                , and I&apos;m familiar with{" "}
                <Text as="span" fontWeight="600" color="#06B6D4">
                  backend &amp; backendless
                </Text>{" "}
                technology. On the DevOps side, I deploy and manage applications using{" "}
                <Text as="span" fontWeight="600" color="#4F46E5">
                  AWS, Hostinger, Docker and CI/CD pipelines
                </Text>{" "}
                for smooth, automated releases.
              </Text>

              <Text>
                I write clean, maintainable code in{" "}
                <Text as="span" fontWeight="600" color="#0F172A">
                  JavaScript, Java, Python and SQL
                </Text>
                , and I enjoy solving real-world problems, learning new tools and shipping features that make a difference. I also use AI tools like{" "}
                <Text as="span" fontWeight="600" color="#7C3AED">
                  Claude, ChatGPT, GitHub Copilot and Cursor
                </Text>{" "}
                to speed up development, debug faster and ship better features.
              </Text>

              <Text>
                I love taking on complex tasks and finding creative solutions to challenging problems, especially when it comes to{" "}
                <Text as="span" fontWeight="600" color="#4F46E5">
                  debugging
                </Text>{" "}
                and improving code.
              </Text>

              <Text>
                I&apos;m constantly exploring new technologies and pushing myself to grow as a developer. My goal is to{" "}
                <Text as="span" fontWeight="600" color="#06B6D4">
                  keep learning
                </Text>{" "}
                and contribute to projects that have a meaningful impact.
              </Text>

              <Text color="#64748B" fontStyle="italic" pt={1}>
                When I&apos;m not coding, I enjoy reading books and travelling, which help me stay creative and inspired.
              </Text>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>

      {/* Right Side: 3D Tilt Portrait */}
      <Flex
        w={{ lg: "34%", base: "100%" }}
        justifyContent="center"
        alignItems="center"
        zIndex={2}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#6366F1"
            glareBorderRadius="36px"
            scale={1.03}
            transitionSpeed={1200}
          >
            <Box
              position="relative"
              p={3}
              borderRadius="36px"
              bg="rgba(255, 255, 255, 0.75)"
              backdropFilter="blur(20px)"
              border="1px solid rgba(226, 232, 240, 0.9)"
              boxShadow="0 25px 60px -15px rgba(99, 102, 241, 0.2), 0 0 30px rgba(34, 211, 238, 0.1)"
            >
              <Image
                src={aboutRight}
                alt="Nihamathullah"
                w={{ base: "260px", sm: "300px", lg: "320px" }}
                h={{ base: "260px", sm: "300px", lg: "320px" }}
                borderRadius="28px"
                objectFit="cover"
              />

              {/* Decorative floating badge */}
              <Box
                position="absolute"
                bottom="-12px"
                right="16px"
                px={4}
                py={2}
                borderRadius="full"
                bg="white"
                border="1px solid rgba(99, 102, 241, 0.25)"
                boxShadow="0 10px 25px rgba(99, 102, 241, 0.15)"
              >
                <Text fontSize="12px" fontWeight="700" color="#4338CA">
                  ⚡ 2+ Year Experience
                </Text>
              </Box>
            </Box>
          </Tilt>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default About;
