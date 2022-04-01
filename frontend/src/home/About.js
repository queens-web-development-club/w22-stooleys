import React from "react";
import { Heading, HStack, IconButton } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import SocialsList from "./SocialsList";

function About() {
  return (
    <section id="about">
      <Flex
        bg="#0E0E0E"
        width="100vw"
        height="100vh"
        align="center"
        margin="0"
        p="0"
      >
        <Flex
          height="90vh"
          pr="5%"
          align="center"
          boxSizing="border-box"
          border="1px"
          borderColor="#EEE2E2"
          borderLeft="0"
        >
          <Heading>
            <Text
              fontSize="72px"
              color="#FEFFFF"
              fontFamily="Fraunces"
              transform="rotate(-90deg)"
              fontStyle="normal"
              fontWeight="bold"
            >
              About us
            </Text>
          </Heading>

          <VStack
            align="flex-start"
            color="#EEE2E2"
            height="299px"
            width="68vw"
          >
            <HStack width="144px" height="25px">
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
            <Divider orientation="horizontal" width="341px" />
            <div></div>
            <text>
              STOOLEY’S Bar and Grill serves popular Canadian cuisine,
              handcrafted cocktails and service par excellence in a relaxed
              restaurant atmosphere. The well-stacked bar boasts of a wide
              selection of domestic and imported beers, wines, spirits and our
              exclusive house cocktails.
            </text>
            <div></div>

            <text>
              Set up over 30 years ago by a young entrepreneur with a passion
              for food and drinks the culinary tradition continues in Kingston
              the “Limestone city” on Lake Ontario. Located a short walk away
              from the Queens University Campus and close to downtown.
            </text>
            <div></div>
            <text>
              The detailed service and sizeable portions of the sumptuous spread
              from an elaborate menu is sure to fancy your palate. So, sit back,
              relax, have a drink and a bite. Enjoy and don’t feel shy in making
              some noise with your friends!
            </text>
            <div></div>
            <text>
              We welcome you to have an enchanted dining experience in our newly
              renovated and refurbished premises.
            </text>
          </VStack>
        </Flex>
      </Flex>
    </section>
  );
}

export default About;
