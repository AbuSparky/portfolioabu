import { Box, Flex, Icon, Link, Text, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { motion } from "framer-motion";

const navTabs = [
  { name: "Home", id: "home", icon: IoHomeSharp },
  { name: "About", id: "about", icon: IoPerson },
  { name: "Skills", id: "skills", icon: FaCogs },
  { name: "Experience", id: "experience", icon: MdOutlineWork },
  { name: "Projects", id: "projects", icon: BsPersonWorkspace },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navTabs.map((tab) => document.getElementById(tab.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navTabs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <Box
      position="fixed"
      top={{ base: 3, md: 5 }}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1200}
      w={{ base: "94%", md: "auto" }}
      maxW="720px"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 3, md: 5 }}
        py={{ base: 2, md: 2.5 }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.78)"
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor="rgba(226, 232, 240, 0.85)"
        boxShadow={
          scrolled
            ? "0 14px 34px -10px rgba(99, 102, 241, 0.16), 0 4px 10px rgba(0, 0, 0, 0.03)"
            : "0 8px 25px -8px rgba(99, 102, 241, 0.1)"
        }
        transition="all 0.3s ease"
        gap={{ base: 1, sm: 2, md: 3 }}
      >
        {/* Brand Monogram */}
        <Link
          href="#home"
          onClick={(e) => scrollTo(e, "home")}
          _hover={{ textDecoration: "none" }}
          display="flex"
          alignItems="center"
          gap={2}
          pr={2}
        >
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
            boxShadow="0 4px 12px rgba(99, 102, 241, 0.35)"
          >
            N
          </Flex>
          <Text
            display={{ base: "none", sm: "block" }}
            fontWeight="700"
            fontSize="14px"
            fontFamily="'Space Grotesk', sans-serif"
            color="#0F172A"
          >
            Nihamath
          </Text>
        </Link>

        {/* Navigation Tabs */}
        <Flex alignItems="center" gap={{ base: 0.5, md: 1 }}>
          {navTabs.map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <Tooltip
                key={tab.id}
                label={tab.name}
                placement="bottom"
                hasArrow
                display={{ base: "none", md: "none" }}
              >
                <Link
                  href={`#${tab.id}`}
                  onClick={(e) => scrollTo(e, tab.id)}
                  _hover={{ textDecoration: "none" }}
                  position="relative"
                  px={{ base: 2.5, sm: 3, md: 3.5 }}
                  py={{ base: 1.5, md: 1.5 }}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                  fontSize={{ base: "12px", md: "13px" }}
                  fontWeight={isActive ? "600" : "500"}
                  color={isActive ? "#4F46E5" : "#475569"}
                  transition="color 0.2s ease"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "999px",
                        background:
                          "linear-gradient(135deg, rgba(124, 58, 237, 0.09) 0%, rgba(99, 102, 241, 0.12) 100%)",
                        border: "1px solid rgba(99, 102, 241, 0.25)",
                        zIndex: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <Box position="relative" zIndex={1}>
                    <Icon as={tab.icon} boxSize={{ base: 4, md: 3.5 }} />
                  </Box>
                  <Text
                    position="relative"
                    zIndex={1}
                    display={{ base: "none", sm: "block" }}
                  >
                    {tab.name}
                  </Text>
                </Link>
              </Tooltip>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
