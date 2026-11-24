import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1600px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    brand: {
      mainBg: "#F8FAFF",
      white: "#0F172A", // primary text
      textPrimary: "#0F172A",
      textSecondary: "#475569",
      textMuted: "#64748B",
      surface: "#FFFFFF",
      glassBg: "rgba(255, 255, 255, 0.75)",
      glassBorder: "rgba(226, 232, 240, 0.85)",
      cardBg: "rgba(255, 255, 255, 0.85)",
      cardBorder: "rgba(99, 102, 241, 0.16)",
      headerBg: "rgba(255, 255, 255, 0.8)",
      headerBorder: "rgba(226, 232, 240, 0.85)",
      sectionBg: "rgba(241, 245, 255, 0.45)",
      violet: "#7C3AED",
      indigo: "#6366F1",
      cyan: "#06B6D4",
      buttonGreen: "#6366F1",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #22D3EE 100%)",
      tagBg: "rgba(99, 102, 241, 0.08)",
      codeBg: "rgba(255, 255, 255, 0.95)",
    },
  },
  semanticTokens: {
    colors: {
      "brand.mainBg": { default: "#F8FAFF" },
      "brand.white": { default: "#0F172A" },
      "brand.textPrimary": { default: "#0F172A" },
      "brand.textSecondary": { default: "#475569" },
      "brand.textMuted": { default: "#64748B" },
      "brand.surface": { default: "#FFFFFF" },
      "brand.glassBg": { default: "rgba(255, 255, 255, 0.75)" },
      "brand.glassBorder": { default: "rgba(226, 232, 240, 0.85)" },
      "brand.cardBg": { default: "rgba(255, 255, 255, 0.85)" },
      "brand.cardBorder": { default: "rgba(99, 102, 241, 0.16)" },
      "brand.headerBg": { default: "rgba(255, 255, 255, 0.8)" },
      "brand.headerBorder": { default: "rgba(226, 232, 240, 0.85)" },
      "brand.sectionBg": { default: "rgba(241, 245, 255, 0.45)" },
      "brand.buttonGreen": { default: "#6366F1" },
      "brand.tagBg": { default: "rgba(99, 102, 241, 0.08)" },
      "brand.codeBg": { default: "rgba(255, 255, 255, 0.95)" },
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "#F8FAFF",
        color: "#0F172A",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      },
      "::selection": {
        bg: "rgba(99, 102, 241, 0.2)",
        color: "#4338CA",
      },
    },
  },
  fonts: {
    heading: `'Space Grotesk', -apple-system, sans-serif`,
    body: `'Inter', -apple-system, sans-serif`,
  },
});

export default theme;
