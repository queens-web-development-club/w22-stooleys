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
import Item from "./Item";

const Category = (data) => {
  return (
    <section id={data.category.id}>
      <Flex flexDirection="column" mb="8%">
        <Heading fontFamily="accent" fontSize="2xl" color="#FEFFFF" mb="5%">
          {data.category.name}
        </Heading>
        {data.category.items.map((itemData) => {
          return <Item item={itemData} />;
        })}
      </Flex>
    </section>
  );
};

export default Category;
