import { Box, Flex, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
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
      <Box>
        {/* Compact Toggle Button for Mobile (< md) */}
        <Flex display={{ base: "flex", md: "none" }} alignItems="center">
          <IconButton
            aria-label="Toggle Theme"
            onClick={toggleColorMode}
            w="32px"
            h="32px"
            minW="32px"
            borderRadius="full"
            bg={isDark ? "rgba(30, 41, 59, 0.85)" : "rgba(241, 245, 249, 0.95)"}
            border="1.5px solid"
            borderColor="brand.buttonGreen"
            boxShadow={
              isDark
                ? "0 0 10px rgba(99, 102, 241, 0.35)"
                : "0 2px 6px rgba(0, 0, 0, 0.08)"
            }
            icon={
              <motion.div
                key={colorMode}
                initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isDark ? (
                  <IoSunny size={14} color="#F59E0B" />
                ) : (
                  <IoMoon size={13} color="#4F46E5" />
                )}
              </motion.div>
            }
            _hover={{
              transform: "scale(1.08)",
            }}
            _active={{ transform: "scale(0.92)" }}
          />
        </Flex>

        {/* Full Pill Switch for Desktop (>= md) */}
        <Flex
          display={{ base: "none", md: "flex" }}
          as="button"
          role="switch"
          aria-checked={isDark}
          aria-label="Toggle dark and light theme"
          onClick={toggleColorMode}
          w="58px"
          h="30px"
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
              ? "0 0 12px rgba(99, 102, 241, 0.25)"
              : "0 2px 8px rgba(99, 102, 241, 0.15)"
          }
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.04)",
            boxShadow: isDark
              ? "0 0 16px rgba(99, 102, 241, 0.4)"
              : "0 4px 12px rgba(99, 102, 241, 0.25)",
          }}
          _active={{ transform: "scale(0.96)" }}
          outline="none"
        >
          {/* Track Icons */}
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            px="5px"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            pointerEvents="none"
          >
            <IoSunny
              size={12}
              color={isDark ? "#64748B" : "#F59E0B"}
              style={{ transition: "color 0.3s ease" }}
            />
            <IoMoon
              size={11}
              color={isDark ? "#818CF8" : "#94A3B8"}
              style={{ transition: "color 0.3s ease" }}
            />
          </Flex>

          {/* Sliding Animated Knob */}
          <motion.div
            animate={{
              x: isDark ? 28 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
            }}
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Flex
              w="22px"
              h="22px"
              borderRadius="full"
              bg={isDark ? "brand.buttonGreen" : "#F59E0B"}
              alignItems="center"
              justifyContent="center"
              boxShadow="0 2px 4px rgba(0, 0, 0, 0.25)"
            >
              {isDark ? (
                <IoMoon size={11} color="#FFFFFF" />
              ) : (
                <IoSunny size={12} color="#FFFFFF" />
              )}
            </Flex>
          </motion.div>
        </Flex>
      </Box>
    </Tooltip>
  );
};

export default ThemeSwitcher;
