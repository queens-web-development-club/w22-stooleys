import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import img from "../assets/landingImg.png";

const Landing = () => {
  return (
    <Flex
      bg="home.background"
      w="100vw"
      h="100vh"
      align="center"
      justify="space-between"
      pos="relative"
    >
      <VStack w="70%" h="auto" align="flex-start" pl="5%" overflow="hidden">
        <Heading
          fontSize="6xl"
          color="home.heading"
          lineHeight="60%"
          fontWeight="normal"
        >
          <Heading fontSize="6xl" fontWeight="normal" as="s">
            {" "}
            Not
          </Heading>{" "}
          just a restaurant,
        </Heading>
        <Heading
          fontSize="6xl"
          color="home.heading"
          fontFamily="accent"
          fontWeight="bold"
        >
          a way of life
        </Heading>
        <Container w="60%" align="flex-start" padding="0">
          <Text
            fontSize="sm"
            color="home.body"
            fontWeight="light"
            mt="1rem"
            mb="2.5rem"
          >
            The concept of a traditional restaurant reimagined in a modern way
          </Text>
        </Container>
        <Button
          colorScheme="red"
          bg="home.accent"
          color="#3C1A14"
          size="lg"
          fontWeight="lighter"
          borderRadius="4px"
        >
          Check us out!
        </Button>
      </VStack>
      <Image
        src={img}
        alt="hi"
        height="100%"
        width="auto"
        pos="absolute"
        top="0"
        right="0"
      ></Image>
    </Flex>
  );
};

export default Landing;
