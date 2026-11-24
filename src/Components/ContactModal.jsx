/* eslint-disable react/prop-types */
import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { FiCheck, FiCopy, FiExternalLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const ContactRow = ({ icon, label, value, href, actionLabel, isPhone = false, isEmail = false }) => {
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      align={{ base: "stretch", md: "center" }}
      justify="space-between"
      p={{ base: 3, sm: 3.5, md: 4 }}
      borderRadius="18px"
      bg="brand.sectionBg"
      border="1px solid"
      borderColor="brand.cardBorder"
      transition="all 0.25s ease"
      _hover={{
        borderColor: "rgba(99, 102, 241, 0.4)",
        transform: "translateY(-1px)",
        boxShadow: "0 8px 20px -6px rgba(99, 102, 241, 0.15)",
      }}
      gap={{ base: 2.5, md: 3 }}
      w="100%"
    >
      {/* Icon + Information Block */}
      <Flex align="center" gap={{ base: 2.5, sm: 3 }} flex="1" minW={0}>
        <Flex
          w={{ base: "38px", md: "42px" }}
          h={{ base: "38px", md: "42px" }}
          borderRadius="12px"
          align="center"
          justify="center"
          bg="linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(99, 102, 241, 0.18) 100%)"
          color="#6366F1"
          flexShrink={0}
        >
          <Icon as={icon} boxSize={{ base: 4, md: 5 }} />
        </Flex>

        <Box flex="1" minW={0}>
          <Text
            fontSize={{ base: "10px", sm: "11px" }}
            fontWeight="600"
            color="brand.textMuted"
            textTransform="uppercase"
            letterSpacing="0.05em"
            lineHeight={1.2}
          >
            {label}
          </Text>

          <Text
            fontSize={{ base: "12.5px", sm: "13.5px", md: "14px" }}
            fontWeight="600"
            color="brand.textPrimary"
            mt={0.5}
            lineHeight={1.4}
            whiteSpace={isPhone ? "nowrap" : "normal"}
            wordBreak={isEmail ? "break-all" : "normal"}
            overflowWrap={isPhone ? "normal" : "break-word"}
          >
            {value}
          </Text>
        </Box>
      </Flex>

      {/* Action Buttons: on mobile align to right below text, on desktop align alongside */}
      <Flex
        align="center"
        justify={{ base: "flex-end", md: "flex-end" }}
        gap={1.5}
        flexShrink={0}
        pt={{ base: 0.5, md: 0 }}
      >
        {href && (
          <Button
            as={Link}
            href={href}
            isExternal={href.startsWith("http")}
            size="xs"
            h={{ base: "28px", md: "30px" }}
            px={{ base: 3, md: 3.5 }}
            borderRadius="full"
            bg="rgba(99, 102, 241, 0.1)"
            color="#4F46E5"
            fontSize={{ base: "11.5px", md: "12px" }}
            fontWeight="600"
            _hover={{
              textDecoration: "none",
              bg: "linear-gradient(135deg, #7C3AED, #6366F1)",
              color: "white",
            }}
            rightIcon={
              href.startsWith("http") ? (
                <Icon as={FiExternalLink} boxSize={3} />
              ) : undefined
            }
          >
            {actionLabel}
          </Button>
        )}

        <Tooltip
          label={hasCopied ? "Copied!" : "Copy"}
          placement="top"
          closeOnClick={false}
          hasArrow
        >
          <IconButton
            size="xs"
            h={{ base: "28px", md: "30px" }}
            w={{ base: "28px", md: "30px" }}
            borderRadius="full"
            aria-label={`Copy ${label}`}
            icon={<Icon as={hasCopied ? FiCheck : FiCopy} boxSize={3} />}
            color={hasCopied ? "green.500" : "brand.textSecondary"}
            bg="brand.surface"
            border="1px solid"
            borderColor="brand.headerBorder"
            onClick={onCopy}
            _hover={{
              borderColor: "#6366F1",
              color: "#6366F1",
            }}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay
        bg="rgba(15, 23, 42, 0.45)"
        backdropFilter="blur(8px)"
      />
      <ModalContent
        borderRadius={{ base: "20px", md: "24px" }}
        bg="brand.cardBg"
        backdropFilter="blur(24px)"
        border="1px solid"
        borderColor="brand.cardBorder"
        boxShadow="0 25px 50px -12px rgba(99, 102, 241, 0.28)"
        mx={{ base: 3, sm: 4, md: "auto" }}
        maxW={{ base: "calc(100vw - 24px)", sm: "460px", md: "520px" }}
        overflow="hidden"
        p={{ base: 2, sm: 3, md: 4 }}
      >
        <ModalHeader pb={1} pr={10}>
          <Flex align="center" gap={2} mb={1}>
            <Badge
              display="inline-flex"
              alignItems="center"
              gap={1.5}
              px={2.5}
              py={0.5}
              borderRadius="full"
              bg="rgba(99, 102, 241, 0.08)"
              border="1px solid rgba(99, 102, 241, 0.2)"
              color="#4F46E5"
              fontSize="11px"
              fontWeight="600"
              textTransform="none"
            >
              <Icon as={HiSparkles} color="#6366F1" /> Get in Touch
            </Badge>
          </Flex>

          <Text
            fontSize={{ base: "18px", sm: "20px", md: "22px" }}
            fontWeight="800"
            fontFamily="'Space Grotesk', sans-serif"
            color="brand.textPrimary"
            letterSpacing="-0.02em"
          >
            Contact Information
          </Text>

          <Text
            fontSize={{ base: "12px", sm: "13px" }}
            color="brand.textSecondary"
            fontWeight="400"
            mt={0.5}
          >
            Reach out directly for freelance opportunities, full-time roles, or collaborations.
          </Text>
        </ModalHeader>

        <ModalCloseButton
          top={3.5}
          right={3.5}
          borderRadius="full"
          _hover={{ bg: "rgba(99, 102, 241, 0.1)" }}
        />

        <ModalBody py={{ base: 2.5, sm: 3, md: 4 }}>
          <Flex flexDir="column" gap={{ base: 2.5, sm: 3 }}>
            {/* Phone Number */}
            <ContactRow
              icon={FiPhone}
              label="Mobile Number"
              value="+91 8778556357"
              href="tel:+918778556357"
              actionLabel="Call"
              isPhone={true}
            />

            {/* Email Address */}
            <ContactRow
              icon={FiMail}
              label="Email Address"
              value="nihamathullah.dev@gmail.com"
              href="mailto:nihamathullah.dev@gmail.com"
              actionLabel="Email"
              isEmail={true}
            />

            {/* Physical Address */}
            <ContactRow
              icon={FiMapPin}
              label="Address"
              value="Palayamkottai, Tirunelveli, Tamil Nadu, India 627002"
              href="https://maps.google.com/?q=Palayamkottai,+Tirunelveli,+Tamil+Nadu,+India+627002"
              actionLabel="Maps"
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
