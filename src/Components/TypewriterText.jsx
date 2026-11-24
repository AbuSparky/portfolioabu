/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TypewriterText = ({ text }) => {
  return (
    <Flex
      fontSize={{ base: "26px", sm: "32px", md: "40px", lg: "44px" }}
      fontWeight="800"
      fontFamily="'Space Grotesk', sans-serif"
      letterSpacing="-0.02em"
      color="brand.textPrimary"
      wrap="wrap"
      justify="center"
    >
      {text?.map((el, i) => (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.35,
              delay: i * 0.025,
            },
          }}
          viewport={{ once: true, amount: "some" }}
          key={i}
          style={{
            display: "inline-block",
            color: i === 0 ? "#6366F1" : "inherit",
            textTransform: "uppercase",
          }}
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </Flex>
  );
};

export default TypewriterText;
