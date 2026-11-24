import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const footerIcon = [
  {
    iconName: CgMail,
    label: "Email",
    link: "mailto:nihamathullah.dev@gmail.com",
    color: "#6366F1",
  },
  {
    iconName: FaLinkedinIn,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/nihamathullah/",
    color: "#0A66C2",
  },
  {
    iconName: BsGithub,
    label: "GitHub",
    link: "https://github.com/AbuSparky",
    color: "#0F172A",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box w="100%" mt={{ base: 12, md: 20 }} borderTop="1px solid rgba(226, 232, 240, 0.85)">
      <Flex
        maxW="1320px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
        py={{ base: 8, md: 10 }}
        px={{ base: 6, md: 12 }}
        gap={4}
      >
        {/* Brand Left */}
        <Flex align="center" gap={3}>
          <Flex
            w="34px"
            h="34px"
            borderRadius="full"
            bg="linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #22D3EE 100%)"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
            fontSize="14px"
          >
            N
          </Flex>
          <Box>
            <Text
              fontSize="15px"
              fontWeight="700"
              fontFamily="'Space Grotesk', sans-serif"
              color="#0F172A"
            >
              Nihamathullah S
            </Text>
            <Text fontSize="12px" color="#64748B">
              Full-Stack Developer
            </Text>
          </Box>
        </Flex>

        {/* Copyright Center */}
        <Text color="#64748B" fontSize={{ base: "13px", md: "14px" }} textAlign="center">
          © {year} Nihamathullah S. All rights reserved.
        </Text>

        {/* Social Icons Right */}
        <Flex gap={3}>
          {footerIcon.map((data, i) => (
            <Link
              key={i}
              href={data.link}
              isExternal
              _hover={{ textDecoration: "none" }}
              aria-label={data.label}
            >
              <Flex
                w="40px"
                h="40px"
                borderRadius="full"
                align="center"
                justify="center"
                bg="white"
                border="1px solid rgba(226, 232, 240, 0.9)"
                color="#475569"
                boxShadow="0 2px 8px rgba(0, 0, 0, 0.04)"
                transition="all 0.25s ease"
                _hover={{
                  borderColor: data.color,
                  color: data.color,
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(99, 102, 241, 0.15)",
                }}
              >
                <Icon as={data.iconName} boxSize={4.5} />
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
