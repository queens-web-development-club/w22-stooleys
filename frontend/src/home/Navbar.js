import { Box, HStack, Text, Button, Image, Link } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import "https://www.fbgcdn.com/embedder/js/ewm2.js";
import "./orderbutton.css";
import { Link as ReachLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      // w="70%"
      pl="5%"
      // pos="absolute" top="2%"
      bg="#0E0E0E"
      zIndex="99"
      w="100vw"
      pt="0.4rem"
    >
      <HStack spacing="3.5rem">
        <Image src={Logo} boxSize="6%" mr="50px"></Image>
        <Link
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
          as={ReachLink}
          to="/"
        >
          Home
        </Link>
        <Link
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
          // as={ReachLink}
          href="#about"
        >
          About
        </Link>
        <Link
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
          as={ReachLink}
          to="/menu"
        >
          Menu
        </Link>
        <Link
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
          as={ReachLink}
          to="/"
        >
          Drinks
        </Link>
        <Link
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
          as={ReachLink}
          to="/catering"
        >
          Catering
        </Link>
        <Link
          variant="ghost"
          color="#FEFFFF"
          fontWeight="thin"
          fontSize="0.7rem"
          _hover={{
            color: "#FFEEEE",
          }}
          as={ReachLink}
          to="/"
        >
          Contact
        </Link>

        <Box
          as="span"
          class="order-btn"
          data-glf-cuid="52f8881e-999c-4dc6-8881-126c9e2980a6"
          data-glf-ruid="e6894a38-768c-425d-8f1a-e7e95f3e3bc7"
          color="#0E0E0E"
          bg="#FFEEEE"
          fontWeight="thin"
          fontSize="0.7rem"
          p="0.5rem"
          borderRadius="4px"
          sx={{ cursor: "pointer" }}
          _hover={{
            background: "#0E0E0E",
            color: "#FFEEEE",
            border: "1px solid #FFEEEE",
            transition: "all 0.2s linear",
          }}
        >
          {" "}
          Order Delivery
        </Box>
      </HStack>
    </Box>
  );
}
