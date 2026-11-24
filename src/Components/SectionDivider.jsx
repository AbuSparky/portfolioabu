import { Box, Flex } from "@chakra-ui/react";

const SectionDivider = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      py={{ base: 6, md: 10 }}
      position="relative"
      pointerEvents="none"
    >
      <Box
        w={{ base: "70%", md: "50%" }}
        maxW="600px"
        h="1px"
        background="linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.25) 50%, transparent 100%)"
      />
      <Box
        position="absolute"
        w="6px"
        h="6px"
        borderRadius="full"
        bg="brand.indigo"
        boxShadow="0 0 10px rgba(99, 102, 241, 0.8)"
      />
    </Flex>
  );
};

export default SectionDivider;
