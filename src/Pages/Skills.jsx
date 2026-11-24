import { useState } from "react";
import { Badge, Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import TypewriterText from "../Components/TypewriterText";

import bootstrap from "../assets/Skills/Bootstrap.png";
import css from "../assets/Skills/CSS3.png";
import github from "../assets/Skills/githubw.png";
import html from "../assets/Skills/HTML5.png";
import javascript from "../assets/Skills/js1.png";
import materialUi from "../assets/Skills/material-ui.png";
import mongo from "../assets/Skills/MongoDB.png";
import mysql from "../assets/Skills/MySQL.png";
import nodejs from "../assets/Skills/Nodejs.png";
import react from "../assets/Skills/React.png";
import tailwind from "../assets/Skills/tailwind.png";
import vscode from "../assets/Skills/vsCode.png";
import express from "../assets/Skills/Express.png";
import python from "../assets/Skills/Python.png";
import nextjs from "../assets/Skills/Nextjs.svg";
import typescript from "../assets/Skills/TypeScript.svg";
import graphql from "../assets/Skills/GraphQL.svg";
import java from "../assets/Skills/Java.svg";
import docker from "../assets/Skills/Docker.svg";
import aws from "../assets/Skills/AWS.svg";
import hostinger from "../assets/Skills/Hostinger.svg";
import firebase from "../assets/Skills/Firebase.svg";
import claude from "../assets/Skills/Claude.svg";
import cursor from "../assets/Skills/Cursor.svg";
import jquery from "../assets/Skills/jQuery.svg";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "AI Tools",
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const text = "P R O G R A M M I N G - S K I L L S ".split(" ");

  const filteredSkills =
    selectedCategory === "All"
      ? skillData
      : skillData.filter((skill) => skill.category === selectedCategory);

  return (
    <Flex
      id="skills"
      w="100%"
      maxW="1320px"
      mx="auto"
      flexDir="column"
      alignItems="center"
      py={{ base: 14, md: 24 }}
      px={{ base: 4, md: 8 }}
      position="relative"
    >
      {/* Title */}
      <Flex flexDir="column" alignItems="center" mb={6}>
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
          color="#64748B"
          mt={3}
          textAlign="center"
        >
          The skills, tools and technologies I use:
        </Text>
      </Flex>

      {/* Category Filter Pills */}
      <Flex
        wrap="wrap"
        gap={{ base: 2, sm: 2.5 }}
        justify="center"
        mb={{ base: 8, md: 10 }}
        p={{ base: 2, sm: 2, md: 1.5 }}
        borderRadius={{ base: "18px", md: "full" }}
        bg="brand.glassBg"
        backdropFilter="blur(16px)"
        border="1px solid"
        borderColor="brand.glassBorder"
        boxShadow="0 4px 20px rgba(99, 102, 241, 0.05)"
        maxW="100%"
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <Badge
              key={cat}
              as="button"
              onClick={() => setSelectedCategory(cat)}
              px={{ base: 3, sm: 3.5, md: 4 }}
              py={{ base: 1, sm: 1.2, md: 1.5 }}
              borderRadius="full"
              fontSize={{ base: "11px", sm: "12px", md: "13px" }}
              fontWeight="600"
              cursor="pointer"
              textTransform="none"
              transition="all 0.25s ease"
              bg={
                isSelected
                  ? "linear-gradient(135deg, #7C3AED, #6366F1)"
                  : "transparent"
              }
              color={isSelected ? "white" : "brand.textSecondary"}
              boxShadow={
                isSelected ? "0 4px 14px rgba(99, 102, 241, 0.35)" : "none"
              }
              _hover={{
                color: isSelected ? "white" : "#6366F1",
              }}
            >
              {cat}
            </Badge>
          );
        })}
      </Flex>

      {/* 3D Tilt Skill Cards Grid */}
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={{ base: 3, sm: 4, md: 5, lg: 6 }}
        w="100%"
        maxW="1180px"
      >
        {filteredSkills.map((skill, index) => {
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: (index % 6) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor="#6366F1"
                glarePosition="all"
                glareBorderRadius="20px"
                scale={1.03}
                transitionSpeed={1200}
                style={{ height: "100%" }}
              >
                <Flex
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  p={{ base: 3, sm: 4, md: 5 }}
                  h={{ base: "116px", sm: "130px", md: "145px" }}
                  borderRadius={{ base: "16px", md: "20px" }}
                  bg="brand.cardBg"
                  backdropFilter="blur(14px)"
                  border="1px solid"
                  borderColor="brand.cardBorder"
                  boxShadow="0 10px 25px -8px rgba(99, 102, 241, 0.08)"
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                    borderColor: "rgba(99, 102, 241, 0.4)",
                    boxShadow:
                      "0 18px 35px -10px rgba(99, 102, 241, 0.18), 0 0 16px rgba(34, 211, 238, 0.15)",
                    transform: "translateY(-4px)",
                  }}
                  cursor="default"
                >
                  <Flex
                    w={{ base: "44px", md: "56px" }}
                    h={{ base: "44px", md: "56px" }}
                    borderRadius={{ base: "12px", md: "16px" }}
                    bg="rgba(248, 250, 255, 0.95)"
                    border="1px solid rgba(226, 232, 240, 0.8)"
                    alignItems="center"
                    justifyContent="center"
                    mb={{ base: 2, md: 3 }}
                    boxShadow="inset 0 2px 4px rgba(0, 0, 0, 0.02)"
                  >
                    {typeof skill.icon === "string" ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        w={{ base: "24px", md: "32px" }}
                        h={{ base: "24px", md: "32px" }}
                        objectFit="contain"
                      />
                    ) : (
                      <skill.icon size={28} />
                    )}
                  </Flex>
                  <Text
                    fontSize={{ base: "12px", md: "14px" }}
                    fontWeight="600"
                    color="brand.textPrimary"
                    textAlign="center"
                    lineHeight={1.2}
                  >
                    {skill.name}
                  </Text>
                  <Text
                    fontSize={{ base: "10px", md: "11px" }}
                    color="brand.textMuted"
                    fontWeight="500"
                    mt={0.5}
                  >
                    {skill.category}
                  </Text>
                </Flex>
              </Tilt>
            </motion.div>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Skills;

const skillData = [
  // Frontend
  { icon: react, name: "React js", category: "Frontend" },
  { icon: nextjs, name: "Next js", category: "Frontend" },
  { icon: typescript, name: "Typescript", category: "Frontend" },
  { icon: javascript, name: "Javascript", category: "Frontend" },
  { icon: jquery, name: "JQuery", category: "Frontend" },
  { icon: html, name: "HTML", category: "Frontend" },
  { icon: css, name: "CSS", category: "Frontend" },
  { icon: tailwind, name: "Tailwind", category: "Frontend" },
  { icon: bootstrap, name: "Bootstrap", category: "Frontend" },
  { icon: materialUi, name: "Material UI", category: "Frontend" },

  // Backend
  { icon: nodejs, name: "Node.js", category: "Backend" },
  { icon: express, name: "Express.js", category: "Backend" },
  { icon: java, name: "Java", category: "Backend" },
  { icon: python, name: "Python", category: "Backend" },

  // Database
  { icon: mongo, name: "MongoDB", category: "Database" },
  { icon: mysql, name: "MySQL", category: "Database" },
  { icon: firebase, name: "Firebase", category: "Database" },

  // DevOps & Cloud
  { icon: docker, name: "Docker", category: "DevOps" },
  { icon: aws, name: "AWS", category: "DevOps" },
  { icon: hostinger, name: "Hostinger", category: "DevOps" },

  // AI & Developer Tools
  { icon: claude, name: "Claude", category: "AI Tools" },
  { icon: cursor, name: "Cursor", category: "AI Tools" },
  { icon: vscode, name: "VSCode", category: "AI Tools" },
  { icon: github, name: "Github", category: "AI Tools" },
  { icon: graphql, name: "Graphql", category: "AI Tools" },
];
