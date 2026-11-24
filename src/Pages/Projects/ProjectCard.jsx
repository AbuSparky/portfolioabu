/* eslint-disable react/prop-types */
import { Link } from "@chakra-ui/react";
import { Flex, Text, Image, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
const ProjectCard = ({ title, description, image, stack, nlink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 0.5, // Animation duration
          delay: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <Flex
        w={{ lg: "350px", md: "320px", base: "300px" }}
        flexDir={"column"}
        borderRadius="15px"
        pb={4}
        mb="1rem"
        h={"100%"}
        bg={"brand.cardBg"}
        border={"1px solid"}
        borderColor={"brand.cardBorder"}
        boxShadow={"0 4px 20px rgba(0, 0, 0, 0.08)"}
        alignItems={"center"}
      >
        {/* Hero Image */}
        <Image
          src={image}
          alt={title}
          borderRadius="10px"
          height={{ lg: "280px", md: "250px", base: "200px" }}
          w={{ lg: "280px", md: "270px", base: "250px" }}
          objectFit={"cover"}
          mt={6}
        />

        {/* Main Content */}
        <Flex mt="1.2rem" flexDir={"column"} gap={2} overflow={"hidden"} px={8}>
          <Text
            fontSize={{ lg: "20px", md: "16px", base: "15px" }}
            color="brand.white"
            fontWeight={"bold"}
          >
            {title}
          </Text>
          <Text
            color={"brand.textMuted"}
            fontSize={{ lg: "13px", md: "12px", base: "11px" }}
            lineHeight={1.6}
          >
            {description}
          </Text>
          {nlink && (
            <Text
              color={"brand.white"}
              fontSize={{ lg: "13px", md: "12px", base: "11px" }}
            >
              Link :{" "}
              <Link
                href={nlink}
                color="brand.buttonGreen"
                p={1}
                fontSize={{ lg: "13px", md: "12px", base: "11px" }}
                isExternal
                fontWeight={500}
              >
                {nlink}
              </Link>
            </Text>
          )}

          <Flex align="center" gap={2} mt={"5px"} wrap={"wrap"}>
            {stack?.map((data, i) => {
              return (
                <Badge
                  key={i}
                  variant="subtle"
                  bg={"brand.tagBg"}
                  color={"brand.buttonGreen"}
                  border={"1px solid"}
                  borderColor={"brand.buttonGreen"}
                  px={2}
                  py={0.5}
                  borderRadius={20}
                  fontSize={"11px"}
                >
                  {data}
                </Badge>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default ProjectCard;
