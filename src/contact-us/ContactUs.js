import React from "react";
import location from "../assets/location.png";
import {
  Flex,
  HStack,
  VStack,
  Heading,
  IconButton,
  Text,
  Box,
  Container,
  Image,
  Divider,
  Input,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
const ContactUs = () => {
  return (
    <Flex bg="#0E0E0E" w="100vw" h="100vh" align="center">
      {/* left */}
      <VStack w="50%" mt="15%" pb="15%">
        <VStack
          w="100%"
          align="flex-start"
          color="#EEE2E2"
          pl="10%"
          pr="10%"
          pt="15%"
          pb="5%"
        >
          <HStack>
            <a
              href="https://www.facebook.com/stooleysbg/"
              target="_blank"
              rel="noreferrer"
            >
              <input type="button" class="button" />
              <IconButton
                backgroundColor="transparent"
                icon={<FaFacebookF />}
              ></IconButton>
            </a>
            <a
              href="https://twitter.com/stooleysbg"
              target="_blank"
              rel="noreferrer"
            >
              <input type="button" class="button" />
              <IconButton
                backgroundColor="transparent"
                icon={<FaTwitter />}
              ></IconButton>
            </a>
            <a
              href="https://www.instagram.com/stooleysbargrill/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <input type="button" class="button" />
              <IconButton
                backgroundColor="transparent"
                icon={<FaInstagram />}
              ></IconButton>
            </a>
          </HStack>
          <Divider
            colorScheme="#3e3e3e"
            orientation="horizontal"
            width="320px"
          />
          <Heading
            fontFamily="Fraunces"
            fontSize="6xl"
            color="#feffff"
            fontWeight="bold"
          >
            Contact us
          </Heading>
          <HStack>
            <IconButton
              backgroundColor="transparent"
              icon={<MdPhone />}
            ></IconButton>
            <Text
              fontFamily="body"
              fontSize="md"
              color="#EEE2E2"
              fontWeight="normal"
            >
              +1 (613) 547 4044
            </Text>
          </HStack>
          <HStack>
            <IconButton
              backgroundColor="transparent"
              icon={<MdLocationOn />}
            ></IconButton>
            <Text
              fontFamily="body"
              fontSize="md"
              color="#EEE2E2"
              fontWeight="normal"
            >
              118 Division St, Kingston, ON
              <br />
              K7L 1Y8
            </Text>
          </HStack>
        </VStack>
        <Box pr="5%">
          <Image src={location} height="auto" width="85%" />
        </Box>
      </VStack>
      {/* right */}
      <VStack w="50%" align="flex-start" padding="5%">
        <Text
          fontFamily="body"
          fontSize="sm"
          color="#EEE2E2"
          fontWeight="normal"
        >
          Name
        </Text>
        <Input focusBorderColor="#cd553f" variant="outline" w="100%" />
        <Text
          fontFamily="body"
          fontSize="sm"
          color="#EEE2E2"
          fontWeight="normal"
        >
          Email
        </Text>
        <Input focusBorderColor="#cd553f" variant="outline" w="100%" />
        <Text
          fontFamily="body"
          fontSize="sm"
          color="#EEE2E2"
          fontWeight="normal"
        >
          Subject
        </Text>
        <Input focusBorderColor="#cd553f" variant="outline" w="100%" />
        <Text
          fontFamily="body"
          fontSize="sm"
          color="#EEE2E2"
          fontWeight="normal"
        >
          Message
        </Text>
        <Input focusBorderColor="#cd553f" variant="outline" w="100%" h="30vh" />
      </VStack>
    </Flex>
  );
};

export default ContactUs;
