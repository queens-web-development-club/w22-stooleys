import React from "react";
import {
  Flex,
  Text,
  Box,
  Heading,
  Image,
  Button,
  Container,
  Divider,
} from "@chakra-ui/react";

const Item = (data) => {
  if (data.item.sizes.length > 0) {
    //   Item with many sizes
    return (
      <Flex flexDirection="column" w="50vw" mb="2rem">
        <Heading fontSize="l" color="#BEBABA">
          {data.item.name}
        </Heading>
        <Flex>
          {data.item.sizes.map((size) => {
            return (
              <Text
                color="#8B8585"
                fontSize="sm"
                mt="0.8rem"
                fontWeight="bolder"
                mr="2rem"
              >
                {`${size.name} • $${data.item.price + size.price}`}
              </Text>
            );
          })}
        </Flex>
        {data.item.description != "" ? (
          <Text color="#8B8585" fontSize="sm" fontWeight="300px" mt="1.5rem">
            {data.item.description}
          </Text>
        ) : null}
        <Divider mt="2rem" />
      </Flex>
    );
  } else {
    //   Item with only one size
    return (
      <Flex w="50vw" flexDirection="column">
        <Flex w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Heading fontSize="l" color="#BEBABA">
              {data.item.name}
            </Heading>
            <Text
              color="#8B8585"
              fontSize="sm"
              fontWeight="bolder"
            >{`$${data.item.price}`}</Text>
          </Flex>
          {data.item.description != "" ? (
            <Text color="#8B8585" fontSize="sm" fontWeight="300px" mt="1.5rem">
              {data.item.description}
            </Text>
          ) : null}
        </Flex>
        <Divider mt="2rem" />
      </Flex>
    );
  }
};

export default Item;
