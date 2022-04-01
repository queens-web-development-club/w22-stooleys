import { Flex } from "@chakra-ui/react";
import { VStack, HStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import img from "../assets/cateringimg.png";
import Navbar from "../home/Navbar";

function Catering() {
  return (
    <Flex
      bg="#0E0E0E"
      width="100vw"
      height="160vh"
      justifyContent="space-between"
      margin="0"
      p="0"
      //   pt="9%"
      pt="1rem"
    >
      <Image src={img}></Image>

      <VStack w="40%" mx="auto" pt="5%">
        <Heading color="#FEFFFF" fontFamily="Fraunces" fontSize="40px" w="100%">
          Catering Service
        </Heading>

        <Text color="#EEE2E2">
          From business meetings to conferences to company or private parties,
          we’ve got you covered. We provide the highest quality fresh food and
          service in Kingston district. <br />
          <br />
          Whether you have a team building exercise, a bridal shower, a formal
          or casual dinner or a luncheon for an excursion, we will cater to your
          needs by preparing bespoke menus for the occasion.
          <Flex
            border="1px"
            borderColor="#EEE2E2"
            justifyContent="space-around"
            py="1rem"
            marginY="1.5rem"
          >
            <ul>
              <li>Private party Dinners</li>
              <li>Wedding Receptions</li>
              <li>Conferences</li>
              <li>Graduations</li>
            </ul>
            <ul>
              <li>Birthdays</li>
              <li>Milestone events</li>
              <li>Special events</li>
              <li>Tour lunches</li>
            </ul>
          </Flex>
          <Heading fontFamily="Fraunces" fontSize="36px" color="#FEFFFF">
            Let us do the work for you
          </Heading>
          <br />
          With more than fifty years of combined experience as culinary experts
          dishing out various cuisines, we know a thing or two about events. You
          can rely on our expert team for the finest in catering services and
          vendor coordination. We offer the best in service for every customer
          and pride ourselves on our reputation. Our commitment to quality and
          freshness in the food we cater or deliver sets us apart from the
          competition.
          <br />
          <br />
          Talk to us regarding your requirements and we will be happy to work
          with you
        </Text>
      </VStack>
    </Flex>
  );
}

export default Catering;
