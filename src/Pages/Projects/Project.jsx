import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import TypewriterText from "../../Components/TypewriterText";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../common";

const Project = () => {
  const text = "P R O J E C T S ".split(" ");

  return (
    <Flex
      id="projects"
      w="100%"
      maxW="1320px"
      mx="auto"
      flexDir="column"
      alignItems="center"
      py={{ base: 12, md: 24 }}
      px={{ base: 4, sm: 6, md: 8 }}
      position="relative"
    >
      {/* Title */}
      <Flex flexDir="column" alignItems="center" mb={{ base: 8, md: 14 }}>
        <TypewriterText text={text} />
        <Box
          w="60px"
          h="3px"
          borderRadius="full"
          background="linear-gradient(90deg, #7C3AED, #22D3EE)"
          mt={2}
        />
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          color="brand.textMuted"
          mt={3}
          textAlign="center"
          px={3}
        >
          Selected web applications, platforms and systems I&apos;ve built
        </Text>
      </Flex>

      {/* Projects Grid */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: 6, md: 7, lg: 8 }}
        w="100%"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            stack={project.stack}
            nlink={project.nlink}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Project;
