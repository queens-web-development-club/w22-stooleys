import OurFood from "./OurFood";
import AboutUs from "./About";
import Landing from "./Landing";
import { ChakraProvider, Box } from "@chakra-ui/react";

import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      <Landing />
      <AboutUs />
      <OurFood />
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
