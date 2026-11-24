import { Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Tooltip
      label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      placement="bottom"
      hasArrow
    >
      <Flex
        as="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark and light theme"
        onClick={toggleColorMode}
        w="62px"
        h="32px"
        borderRadius="full"
        p="3px"
        cursor="pointer"
        alignItems="center"
        position="relative"
        bg={isDark ? "rgba(30, 41, 59, 0.7)" : "rgba(226, 232, 240, 0.9)"}
        border="1.5px solid"
        borderColor="brand.buttonGreen"
        boxShadow={
          isDark
            ? "0 0 12px rgba(51, 255, 204, 0.25)"
            : "0 2px 8px rgba(13, 148, 136, 0.2)"
        }
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: isDark
            ? "0 0 16px rgba(51, 255, 204, 0.45)"
            : "0 4px 12px rgba(13, 148, 136, 0.3)",
        }}
        _active={{ transform: "scale(0.95)" }}
        outline="none"
      >
        {/* Track Icons */}
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          px="6px"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          pointerEvents="none"
        >
          <IoSunny
            size={13}
            color={isDark ? "#64748B" : "#F59E0B"}
            style={{ transition: "color 0.3s ease" }}
          />
          <IoMoon
            size={13}
            color={isDark ? "#33FFCC" : "#94A3B8"}
            style={{ transition: "color 0.3s ease" }}
          />
        </Flex>

        {/* Sliding Animated Knob */}
        <motion.div
          animate={{
            x: isDark ? 30 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Flex
            w="24px"
            h="24px"
            borderRadius="full"
            bg={isDark ? "brand.buttonGreen" : "#F59E0B"}
            alignItems="center"
            justifyContent="center"
            boxShadow="0 2px 5px rgba(0, 0, 0, 0.25)"
          >
            {isDark ? (
              <IoMoon size={13} color="#111111" />
            ) : (
              <IoSunny size={14} color="#FFFFFF" />
            )}
          </Flex>
        </motion.div>
      </Flex>
    </Tooltip>
  );
};

export default ThemeSwitcher;
