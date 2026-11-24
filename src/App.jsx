import { Flex } from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader/Preloader";
import MainLayout from "./Layout/MainLayout";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Flex
      bg={"brand.mainBg"}
      minH={"100vh"}
      overflowX={"hidden"}
      w={"100%"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      className="font-link"
    >
      {loading ? <Preloader /> : <MainLayout />}
    </Flex>
  );
}

export default App;
