import { Grid, GridItem, Image, Box, Flex, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import Maps from "../assets/googlemaps.png";

import SocialsList from "./SocialsList";

export default function Footer() {
  return (
    <Grid
      templateRows="auto auto"
      templateColumns="auto 1fr 43.4%"
      bg="#121212"
      overflow="hidden"
      color="white"
      pl="8%"
    >
      <GridItem>
        <Flex h="100%" align="center">
          <Image src={Logo} boxSize="200px" pos="relative" right="36px" />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex h="100%" ml="10%" flexFlow="column nowrap" justify="center">
          <SocialsList></SocialsList>
          <Text mt="18px" fontWeight="lighter">
            +1 (613) 547 4044
          </Text>
          <Text mt="10px" fontWeight="lighter">
            118 Division St, Kingston, ON K7L 1Y8
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        bgImg={Maps}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        rowSpan={2}
        minHeight="350px"
      ></GridItem>
      <GridItem colSpan={2} color="rgba(255, 255, 255, 0.2)">
        <Flex
          h="100%"
          flexFlow="column nowrap"
          justify="center"
          align="flex-start"
          fontSize="0.8rem"
          fontWeight="lighter"
        >
          <Text>
            Copyright 2022 | Stooley's Bar & Grill | All Rights Reserved | Terms
            of use & Disclaimer{" "}
          </Text>
          <Text>
            Stooley's Bar & Grill is a division of Aroma Hospitality Inc.
            registered in Canada.
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
