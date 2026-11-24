import Header from "../Components/Header/Header";
import { Box, Flex, Image } from "@chakra-ui/react";
import ParticlesComponent from "../Components/Particles";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import Project from "../Pages/Projects/Project";
import Footer from "../Components/Footer/Footer";
import logo from "../assets/Skills/logo.png";
import ThemeSwitcher from "../Components/ThemeSwitcher";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Flex
        w={"90%"}
        alignSelf={"center"}
        mt={4}
        justifyContent={"space-between"}
        alignItems={"center"}
        display={{ base: "flex", md: "none" }}
      >
        <Image
          src={logo}
          alt="logo"
          w={"90px"}
          h={38}
          objectFit={"contain"}
        />
        <Box>
          <ThemeSwitcher />
        </Box>
      </Flex>
      <ParticlesComponent id="particle" />
      <Flex flexDir={"column"} zIndex={100}>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Project />
      </Flex>
      <Footer />
    </>
  );
};

export default MainLayout;
