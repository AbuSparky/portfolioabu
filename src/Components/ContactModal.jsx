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

const ContactRow = ({ icon, label, value, href, actionLabel }) => {
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Flex
      align={{ base: "flex-start", sm: "center" }}
      justify="space-between"
      p={{ base: 3, sm: 3.5 }}
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
      gap={3}
      flexDir={{ base: "column", sm: "row" }}
      w="100%"
    >
      <Flex align="center" gap={3} flex="1" minW={0}>
        <Flex
          w={{ base: "38px", sm: "42px" }}
          h={{ base: "38px", sm: "42px" }}
          borderRadius="14px"
          align="center"
          justify="center"
          bg="linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(99, 102, 241, 0.18) 100%)"
          color="#6366F1"
          flexShrink={0}
        >
          <Icon as={icon} boxSize={5} />
        </Flex>
        <Box minW={0} flex="1">
          <Text
            fontSize="11px"
            fontWeight="600"
            color="brand.textMuted"
            textTransform="uppercase"
            letterSpacing="0.05em"
          >
            {label}
          </Text>
          <Text
            fontSize={{ base: "13px", sm: "14px" }}
            fontWeight="600"
            color="brand.textPrimary"
            wordBreak="break-word"
            lineHeight={1.4}
            mt={0.5}
          >
            {value}
          </Text>
        </Box>
      </Flex>

      <Flex
        align="center"
        gap={1.5}
        alignSelf={{ base: "flex-end", sm: "center" }}
        flexShrink={0}
      >
        {href && (
          <Button
            as={Link}
            href={href}
            isExternal={href.startsWith("http")}
            size="xs"
            h="30px"
            px={2.5}
            borderRadius="full"
            bg="rgba(99, 102, 241, 0.1)"
            color="#4F46E5"
            fontSize="12px"
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
          label={hasCopied ? "Copied!" : "Copy to clipboard"}
          placement="top"
          closeOnClick={false}
          hasArrow
        >
          <IconButton
            size="xs"
            h="30px"
            w="30px"
            borderRadius="full"
            aria-label={`Copy ${label}`}
            icon={<Icon as={hasCopied ? FiCheck : FiCopy} boxSize={3.5} />}
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
      size={{ base: "xs", sm: "md", md: "lg" }}
    >
      <ModalOverlay
        bg="rgba(15, 23, 42, 0.45)"
        backdropFilter="blur(8px)"
      />
      <ModalContent
        borderRadius={{ base: "20px", sm: "24px" }}
        bg="brand.cardBg"
        backdropFilter="blur(24px)"
        border="1px solid"
        borderColor="brand.cardBorder"
        boxShadow="0 25px 50px -12px rgba(99, 102, 241, 0.28)"
        mx={{ base: 3, sm: 6 }}
        overflow="hidden"
        p={{ base: 2, sm: 4 }}
      >
        <ModalHeader pb={1} pr={10}>
          <Flex align="center" gap={2} mb={1.5}>
            <Badge
              display="inline-flex"
              alignItems="center"
              gap={1.5}
              px={3}
              py={1}
              borderRadius="full"
              bg="rgba(99, 102, 241, 0.08)"
              border="1px solid rgba(99, 102, 241, 0.2)"
              color="#4F46E5"
              fontSize="12px"
              fontWeight="600"
              textTransform="none"
            >
              <Icon as={HiSparkles} color="#6366F1" /> Get in Touch
            </Badge>
          </Flex>
          <Text
            fontSize={{ base: "19px", sm: "22px", md: "24px" }}
            fontWeight="800"
            fontFamily="'Space Grotesk', sans-serif"
            color="brand.textPrimary"
            letterSpacing="-0.02em"
          >
            Contact Information
          </Text>
          <Text
            fontSize={{ base: "12.5px", sm: "13.5px" }}
            color="brand.textSecondary"
            fontWeight="400"
            mt={1}
          >
            Reach out directly for freelance opportunities, full-time roles, or collaborations.
          </Text>
        </ModalHeader>
        <ModalCloseButton
          top={4}
          right={4}
          borderRadius="full"
          _hover={{ bg: "rgba(99, 102, 241, 0.1)" }}
        />

        <ModalBody py={{ base: 3, sm: 4 }}>
          <Flex flexDir="column" gap={{ base: 2.5, sm: 3 }}>
            {/* Phone Number */}
            <ContactRow
              icon={FiPhone}
              label="Mobile Number"
              value="+91 8778556357"
              href="tel:+918778556357"
              actionLabel="Call"
            />

            {/* Email Address */}
            <ContactRow
              icon={FiMail}
              label="Email Address"
              value="nihamathullah.dev@gmail.com"
              href="mailto:nihamathullah.dev@gmail.com"
              actionLabel="Email"
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
