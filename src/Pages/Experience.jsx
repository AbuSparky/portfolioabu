import { Badge, Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import dev from "../assets/Skills/dev.svg";
import TypewriterText from "../Components/TypewriterText";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  const text = "E X P E R I E N C E ".split(" ");

  return (
    <Flex
      id="experience"
      w="100%"
      maxW="1200px"
      mx="auto"
      flexDir="column"
      alignItems="center"
      py={{ base: 14, md: 24 }}
      px={{ base: 4, md: 8 }}
      position="relative"
    >
      {/* Title */}
      <Flex flexDir="column" alignItems="center" mb={{ base: 10, md: 16 }}>
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
          My professional journey and industry experience
        </Text>
      </Flex>

      {/* Vertical Timeline Container */}
      <Flex flexDir="column" w="100%" position="relative">
        {/* Timeline Center/Left Line */}
        <Box
          position="absolute"
          top="20px"
          bottom="40px"
          left={{ base: "14px", sm: "18px", md: "50%" }}
          transform={{ base: "none", md: "translateX(-50%)" }}
          w="2px"
          background="linear-gradient(180deg, #7C3AED 0%, #6366F1 50%, #22D3EE 100%)"
          opacity={0.4}
        />

        {experienceData.map((data, i) => {
          const isEven = i % 2 === 0;
          return (
            <Flex
              key={i}
              w="100%"
              mb={{ base: 8, md: 14 }}
              position="relative"
              flexDir={{ base: "column", md: isEven ? "row" : "row-reverse" }}
              alignItems={{ base: "flex-start", md: "center" }}
              pl={{ base: "34px", sm: "42px", md: 0 }}
            >
              {/* Timeline Center Glowing Node */}
              <Box
                position="absolute"
                left={{ base: "5px", sm: "8px", md: "50%" }}
                top={{ base: "4px", md: "50%" }}
                transform={{
                  base: "none",
                  md: "translate(-50%, -50%)",
                }}
                zIndex={3}
              >
                <Flex
                  w="20px"
                  h="20px"
                  borderRadius="full"
                  bg="white"
                  border="3px solid #6366F1"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 0 16px rgba(99, 102, 241, 0.6)"
                >
                  <Box w="6px" h="6px" borderRadius="full" bg="#7C3AED" />
                </Flex>
              </Box>

              {/* 3D Tilt Experience Card Container */}
              <Box w={{ base: "100%", md: "46%" }}>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                    x: 0,
                  }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <Tilt
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.08}
                    glareColor="#6366F1"
                    glareBorderRadius="24px"
                    scale={1.01}
                    transitionSpeed={1200}
                  >
                    <Flex
                      flexDir="column"
                      p={{ base: 4, sm: 5, md: 7 }}
                      borderRadius={{ base: "20px", md: "24px" }}
                      bg="brand.cardBg"
                      backdropFilter="blur(16px)"
                      border="1px solid"
                      borderColor="brand.cardBorder"
                      boxShadow="0 14px 34px -10px rgba(99, 102, 241, 0.1), 0 4px 6px rgba(0, 0, 0, 0.02)"
                      transition="all 0.3s ease"
                      _hover={{
                        borderColor: "rgba(99, 102, 241, 0.35)",
                        boxShadow:
                          "0 20px 40px -12px rgba(99, 102, 241, 0.18), 0 0 20px rgba(34, 211, 238, 0.12)",
                      }}
                    >
                      {/* Top Header Row */}
                      <Flex
                        justifyContent="space-between"
                        alignItems="flex-start"
                        gap={3}
                        mb={3}
                        wrap="wrap"
                      >
                        <Flex align="center" gap={3}>
                          <Flex
                            w="40px"
                            h="40px"
                            borderRadius="12px"
                            bg="rgba(99, 102, 241, 0.08)"
                            border="1px solid rgba(99, 102, 241, 0.2)"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Image
                              src={data.icon}
                              alt="icon"
                              w="22px"
                              h="22px"
                              objectFit="contain"
                            />
                          </Flex>
                          <Box>
                            <Text
                              fontSize={{ base: "17px", md: "19px" }}
                              fontWeight="700"
                              fontFamily="'Space Grotesk', sans-serif"
                              color="#0F172A"
                              lineHeight={1.25}
                            >
                              {data.role}
                            </Text>
                            <Text
                              fontSize="14px"
                              fontWeight="600"
                              color="#4F46E5"
                              mt={0.5}
                            >
                              {data.company}
                            </Text>
                          </Box>
                        </Flex>

                        <Badge
                          px={3}
                          py={1}
                          borderRadius="full"
                          bg="linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)"
                          border="1px solid rgba(99, 102, 241, 0.25)"
                          color="#4338CA"
                          fontSize="12px"
                          fontWeight="600"
                          textTransform="none"
                        >
                          {data.period}
                        </Badge>
                      </Flex>

                      {/* Bullet Descriptions */}
                      <Flex flexDir="column" gap={2} mt={2}>
                        {data.description.map((desc, idx) => (
                          <Flex key={idx} alignItems="flex-start" gap={2.5}>
                            <Box mt={1} flexShrink={0}>
                              <Icon
                                as={HiSparkles}
                                color="#6366F1"
                                boxSize={3.5}
                              />
                            </Box>
                            <Text
                              fontSize={{ base: "13px", md: "13.5px" }}
                              color="#475569"
                              lineHeight={1.6}
                            >
                              {desc}
                            </Text>
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  </Tilt>
                </motion.div>
              </Box>

              {/* Spacer on other side for desktop alternating layout */}
              <Box w={{ base: "0", md: "46%" }} display={{ base: "none", md: "block" }} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Experience;

const experienceData = [
  {
    company: "Danam Infotech Pvt. Ltd",
    role: "Full-Stack Developer",
    icon: dev,
    period: "Sep 2025 - Mar 2026",
    description: [
      "Worked on Sev AI, an AI-powered ERP product built as a complete replacement for SAP, giving businesses one platform to manage their finance and operations.",
      "The platform covers the full business cycle, from procurement to payroll, with finance and accounting processes connected end to end.",
      "Included dedicated Hotel and Restaurant POS modules, so billing, orders and day-to-day outlet operations run inside the same system.",
      "Built the application using Next.js, Express.js, JavaScript and PostgreSQL, designing features across the frontend, backend APIs and database.",
      "Deployed and hosted the application on Hostinger and set up CI/CD pipelines for automated, reliable releases.",
      "Gained experience in building large, modular enterprise software where many business processes share one data model.",
    ],
  },
  {
    company: "Digival IT Solutions Pvt. Ltd",
    role: "Frontend Developer - Internship",
    icon: dev,
    period: "Apr 2025 - Jul 2025",
    description: [
      "Worked as a Frontend Developer using HTML, CSS, Bootstrap and jQuery to build responsive, user-friendly interfaces.",
      "Digi Screener: an online examination platform used to conduct exams, track and monitor candidates, and publish results.",
      "The platform uses AI integration to detect and prevent malpractice, creating a secure environment for the whole exam process.",
      "Built and improved frontend screens and interactions for the exam flow, and worked with the team to keep the experience smooth and reliable.",
    ],
  },
  {
    company: "STZ Technologies",
    role: "Associate Software Developer",
    icon: dev,
    period: "May 2024 - Apr 2025",
    description: [
      "Built and maintained web applications using React.js, Node.js, Express.js, MongoDB, GraphQL, MUI, Tailwind CSS, JavaScript, Docker and GitHub, and contributed to Version 1.0 (React.js, Java, MySQL) and Version 2.0 (React) of the product.",
      "Buffle (Affiliate Marketing Platform): social media influencers promote ads and posts, and every click that leads to a purchase is recorded as a sale, so the influencers whose posts reach the most users and drive the most sales are rewarded. I worked on the backend with Node.js, Express.js, MongoDB, GraphQL and Docker.",
      "On Buffle, I gained hands-on experience in building a standalone environment, writing bug-free code, debugging, and understanding software architecture.",
      "EdVis (Education Vision): a school management application for UAE schools covering facilities, scheduling and accounts. I worked on the frontend with React.js and Tailwind CSS. The app uses a scheduling algorithm to generate timetables automatically, which makes day-to-day management easier for school staff.",
      "Developed applications from scratch, covering design, development, testing and documentation.",
      "These projects strengthened my problem-solving skills, broadened my technical expertise, and improved my ability to deliver end-to-end software solutions.",
    ],
  },
  {
    company: "Jilaba Software Service Pvt. Ltd",
    role: "Technical Support Executive - Internship",
    icon: dev,
    period: "Nov 2023 - Apr 2024",
    description: [
      "In my last academic year 2024 I chose an Internship in Jilaba Software Service Pvt. Ltd as a Technical Support Executive.",
      "Wrote MSSQL queries to analyse application records and find the root cause of issues, such as fields being passed empty or going missing.",
      "Investigated data and bugs, resolved them with optimised SQL queries, and reported the findings to the team lead.",
      "Used SQL Server Profiler to trace running queries, find slow or problematic ones, and prepared reports from the results.",
      "Handled software installation and setup, and debugged application and database issues as part of the support role.",
    ],
  },
  {
    company: "Internshala",
    role: "Trainee - Internship",
    icon: dev,
    period: "Mar 2023 - May 2023",
    description: [
      "Worked in HTML, CSS, Bootstrap, DBMS.",
      "During my college days, I had the opportunity to work in an industrial environment, where I gained hands-on experience and developed flexibility in adapting to real-world workflows and team dynamics. This exposure helped me bridge the gap between academic learning and practical application, enhancing both my technical and interpersonal skills.",
    ],
  },
];
