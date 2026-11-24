import { Flex, Text, Image, Divider, Icon } from "@chakra-ui/react";
import dev from "../assets/Skills/dev.svg";
import teach from "../assets/Skills/teach.svg";
import TypewriterText from "../Components/TypewriterText";
import { complex, motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
const Experience = () => {
  const text = "E x p e r i e n c e ".split(" ");
  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="experience"
      alignItems={"center"}
      // minH={{ md: "100vh", base: "auto" }}
      gap={10}
      py={20}
      bg={"rgba(22, 22, 22, 0.3)"}
      backdropFilter={"blur(2px)"}
    >
      <Flex flexDir={"column"}>
        <TypewriterText text={text} />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: "100%", // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <Divider borderColor="brand.buttonGreen" borderWidth={2} />
        </motion.div>
      </Flex>
      {/* Experience Section */}
      <Flex flexDir={"column"} alignItems={"center"} w={"100%"}>
        {/* First Experience */}
        {experienceData.map((data, i) => {
          return (
            <Flex
              gap={{ md: 2, base: 1 }}
              key={i}
              w={{ md: "100%", base: "90%" }}
              justifyContent={"center"}
              m={"auto"}
            >
              {/* First Section Starts */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
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
                  bg={"brand.buttonGreen"}
                  h={{ md: 8, base: 7 }}
                  alignItems={"center"}
                  width={{ lg: 180, md: 130, base: "100px" }}
                  borderRadius={20}
                  mt={2}
                  justifyContent={"center"}
                  display={{ base: "none", md: "flex" }}
                >
                  <Text
                    fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                    fontWeight={600}
                    color={"black"}
                  >
                    {data.period}
                  </Text>
                </Flex>
              </motion.div>
              {/* First Section Ends */}
              {/* Second Section Starts */}
              <Flex flexDir={"column"} alignItems={"center"}>
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Flex
                    width={{ md: "50px", base: "40px" }}
                    height={{ md: "50px", base: "40px" }}
                    border={"2px solid "}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderColor={"brand.buttonGreen"}
                    borderRadius={50}
                    p={1.5}
                    boxShadow=" 1px 0 10px 0px #33FFCC"
                  >
                    <Image src={data.icon} alt="dev" mt={3} />
                  </Flex>
                </motion.div>
                {/* Line */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{
                    opacity: 1,
                    height: "100%", // Slide in to its original position
                    marginBottom: 5,
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Divider
                    orientation="vertical"
                    // h={"100%"}
                    borderWidth={2}
                    w={0}
                    my={1}
                    borderColor={"#33FFCC"}
                  />
                </motion.div>
              </Flex>
              {/* Second Section Starts */}

              {/* Second Experience */}
              {/* Third Section Starts */}
              <Flex
                color={"white"}
                flexDir={"column"}
                ml={{ md: 4, base: 2 }}
                w={{ xl: "35%", lg: "45%", md: "50%", base: "100%" }}
                mb={5}
              >
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
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
                    bg={"brand.buttonGreen"}
                    h={{ md: 8, base: 7 }}
                    alignItems={"center"}
                    width={{ lg: 180, md: 130, base: 120 }}
                    borderRadius={20}
                    mt={1}
                    mb={2}
                    justifyContent={"center"}
                    display={{ base: "flex", md: "none" }}
                  >
                    <Text
                      fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                      fontWeight={600}
                      color={"black"}
                    >
                      {data.period}
                    </Text>
                  </Flex>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
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
                  <Text
                    fontSize={{ md: "3xl", base: "18px" }}
                    fontWeight={"bold"}
                  >
                    {data.role}
                  </Text>
                  <Text fontSize={{ md: "xl", base: "15px" }} fontWeight={600}>
                    {data.company}
                  </Text>
                </motion.div>
                <Flex
                  flexDir={"column"}
                  width={"100%"}
                  pl={{ lg: 4, md: 2, base: 1 }}
                >
                  {data.description.map((desc, i) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                          opacity: 1,
                          y: 0, // Slide in to its original position
                          transition: {
                            duration: 0.7, // Animation duration
                            delay: 0.5,
                          },
                        }}
                        viewport={{ once: true }}
                        key={i}
                      >
                        <Flex
                          alignItems={"center"}
                          gap={2}
                          w={{ lg: "100%", md: "100%", base: "95%" }}
                        >
                          <Icon as={CiStar} color={"#33FFCC"} />
                          <Text
                            fontSize={{ md: "14px", base: "12px" }}
                            mt={2}
                            color={"whiteAlpha.800"}
                          >
                            {desc}
                          </Text>
                        </Flex>
                      </motion.div>
                    );
                  })}
                </Flex>
              </Flex>
              {/* Third Section Ends */}
            </Flex>
          );
        })}
        {/* First Experience Ends */}
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
      "In my last acacdemic year 2024 I choose a Internship in Jilaba Software Service Pvt. Ltd as a Technical Support Executive .",
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
      "Worked in HTML , CSS , Bootstrap, DBMS",
      "During my college days, I had the opportunity to work in an industrial environment, where I gained hands-on experience and developed flexibility in adapting to real-world workflows and team dynamics. This exposure helped me bridge the gap between academic learning and practical application, enhancing both my technical and interpersonal skills."
    ]
  }
];
