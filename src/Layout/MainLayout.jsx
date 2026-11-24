import Header from "../Components/Header/Header";
import { Box, Flex } from "@chakra-ui/react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import Project from "../Pages/Projects/Project";
import Footer from "../Components/Footer/Footer";
import SectionDivider from "../Components/SectionDivider";

const MainLayout = () => {
  return (
    <Box w="100%" position="relative" overflow="hidden">
      {/* Ambient Pastel Background Glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      <div className="ambient-glow-3" />

      {/* Floating Glass Pill Navbar */}
      <Header />

      {/* Main Content Sections */}
      <Flex flexDir="column" position="relative" zIndex={2} w="100%">
        <Home />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Project />
      </Flex>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
