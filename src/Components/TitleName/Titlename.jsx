import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Javascript Developer",
  "Node Js Developer",
  "React Js Developer",
  "Web Developer",
  "Web Designer",
  "Java Developer",
  "SQL / Database Engineer",
];

const Titlename = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      h={{ base: "36px", md: "46px" }}
      display="flex"
      alignItems="center"
      position="relative"
      w="100%"
      overflow="hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Text
            fontSize={{ base: "22px", sm: "26px", md: "32px" }}
            fontWeight="700"
            fontFamily="'Space Grotesk', sans-serif"
            letterSpacing="-0.01em"
            color="#6366F1"
            background="linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #06B6D4 100%)"
            backgroundClip="text"
            sx={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            lineHeight={1.2}
            whiteSpace="nowrap"
          >
            {messages[currentIndex]}
          </Text>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Titlename;
