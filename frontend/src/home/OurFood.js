import React from "react";
import foodImg from "../assets/foodImg.png";
import {
  Flex,
  Text,
  Box,
  Heading,
  Image,
  Button,
  Container,
} from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
// rafce
const OurFood = () => {
  return (
    <Flex
      bg="food.bg"
      w="100vw"
      h="100vh"
      align="center"
      overflow="hidden"
      mt="-5%"
    >
      <HStack w="100%" h="68%" pos="relative">
        <VStack w="50%" h="100%" align="flex-start" justify="flex-end" pl="8%">
          <Heading
            fontFamily="title"
            fontSize="6xl"
            color="food.title"
            fontWeight="bold"
          >
            Our Food
          </Heading>
          <Container w="100%" padding="0">
            <Text
              color="food.text"
              fontFamily="body"
              fontSize="1rem"
              fontWeight="thin"
              mt="1rem"
              mb="1.5rem"
            >
              Food is an important part of life and we believe eating should be
              an experience. <br />
              Our experienced chefs have put together something for everyone,
              from the healthy to the hearty, for the meat lovers and the
              vegetarians.
              <br />
              We pride ourselves in using locally sourced, quality Canadian
              produce, prepared fresh and passionately served on your table.{" "}
              <br />
              Serving Stooley’s famous signature fries the menu includes premium
              quality sandwiches, wraps and char-broiled burgers. If you prefer
              a light snack with a few drinks, we have exciting finger foods to
              complement our great selection of cold draught beers and
              cocktails.
              <br />
              Pamper yourself with our specials and added selections from time
              to time.
            </Text>
          </Container>

          <Button
            bg="food.bg"
            color="food.button"
            size="lg"
            border="1px"
            borderRadius="4px"
            fontFamily="body"
            fontSize="lg"
          >
            Our Menu
          </Button>
        </VStack>
        <Box w="50%" h="100%" pl="20%">
          <Image
            src={foodImg}
            transform="scaleX(-1)"
            height="auto"
            width="55%"
            pos="absolute"
            // top='10%'
            right="-15%"
            bottom="0"
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default OurFood;
