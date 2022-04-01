import React from "react";
import {
  Flex,
  Text,
  Box,
  Heading,
  Image,
  Button,
  Container,
} from "@chakra-ui/react";
import Category from "./Category";

const Menu = (data) => {
  return (
    <Flex
      h="auto"
      w="100vw"
      bg="#0E0E0E"
      flexDirection="column"
      px="10%"
      py="8%"
    >
      <Heading
        fontSize="6xl"
        fontWeight="normal"
        fontFamily="accent"
        color="#FEFFFF"
        mb="5%"
      >
        Menu
      </Heading>
      {data.categories.map((category) => {
        return <Category category={category} />;
      })}
    </Flex>
  );
};

// For testing purposes
Menu.defaultProps = {
  categories: [
    {
      id: 100,
      name: "Appetizers & Shareables",
      items: [
        {
          name: "Go Deep & Fry It!",
          description:
            "Dill pickle spears, jalapeno poppers, zucchini, mozzarella sticks, mushrooms, cheddar balls",
          price: 8,
          sizes: [
            {
              name: "Each",
              price: 0,
            },
            {
              name: "Pick 3",
              price: 14,
            },
            {
              name: "Pick 4",
              price: 20,
            },
            {
              name: "Pick 5",
              price: 26,
            },
            {
              name: "Get 'em all",
              price: 31,
            },
          ],
        },
        {
          name: "Tower of Onion Rings",
          description: "",
          price: 8.5,
          sizes: [],
        },
      ],
    },
    {
      id: 100,
      name: "Salads",
      items: [
        {
          name: "Garden",
          description: "romaine, mixed greens, peppers, tomato, cucumber",
          price: 6.5,
          sizes: [
            {
              name: "Side",
              price: 0,
            },
            {
              name: "Large",
              price: 2.5,
            },
          ],
        },
        {
          name: "Tower of Onion Rings",
          description: "",
          price: 8.5,
          sizes: [],
        },
      ],
    },
  ],
};
export default Menu;
