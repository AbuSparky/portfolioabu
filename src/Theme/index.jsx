import { extendTheme, theme as base } from "@chakra-ui/react";

// Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1050px",
  "2xl": "1600px",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints,
  semanticTokens: {
    colors: {
      "brand.mainBg": {
        default: "#F8FAFC",
        _dark: "#111111",
      },
      "brand.white": {
        default: "#0F172A",
        _dark: "#FFFFFF",
      },
      "brand.dark": {
        default: "#FFFFFF",
        _dark: "#000000",
      },
      "brand.buttonGreen": {
        default: "#0D9488",
        _dark: "#33FFCC",
      },
      "brand.cardBg": {
        default: "#FFFFFF",
        _dark: "#1A1A1A",
      },
      "brand.cardBorder": {
        default: "rgba(0, 0, 0, 0.1)",
        _dark: "rgba(63, 63, 63, 0.5)",
      },
      "brand.headerBg": {
        default: "rgba(255, 255, 255, 0.8)",
        _dark: "rgba(22, 22, 22, 0.4)",
      },
      "brand.headerBorder": {
        default: "rgba(0, 0, 0, 0.1)",
        _dark: "rgba(63, 63, 63, 0.5)",
      },
      "brand.sectionBg": {
        default: "rgba(241, 245, 249, 0.85)",
        _dark: "rgba(22, 22, 22, 0.3)",
      },
      "brand.textSecondary": {
        default: "#475569",
        _dark: "rgba(255, 255, 255, 0.7)",
      },
      "brand.textMuted": {
        default: "#64748B",
        _dark: "#A0AEC0",
      },
      "brand.codeBg": {
        default: "#F1F5F9",
        _dark: "#1D2023",
      },
      "brand.tagBg": {
        default: "rgba(13, 148, 136, 0.12)",
        _dark: "rgba(51, 255, 204, 0.1)",
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#111111" : "#F8FAFC",
        color: props.colorMode === "dark" ? "#FFFFFF" : "#0F172A",
        transitionProperty: "background-color, color, border-color",
        transitionDuration: "0.25s",
      },
    }),
  },
  fonts: {
    heading: `Poppins, sans-serif,${base.fonts?.heading}`,
    body: `Poppins, sans-serif,${base.fonts?.body}`,
  },
});

export default theme;
