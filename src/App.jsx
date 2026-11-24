import { Flex } from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader/Preloader";
import MainLayout from "./Layout/MainLayout";
import SmoothScroll from "./Components/SmoothScroll";
import CursorGlow from "./Components/CursorGlow";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <CursorGlow />
      <Flex
        bg="brand.mainBg"
        minH="100vh"
        overflowX="hidden"
        w="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        className="font-link"
        position="relative"
      >
        {loading ? <Preloader /> : <MainLayout />}
      </Flex>
    </SmoothScroll>
  );
}

export default App;
