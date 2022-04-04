import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Catering from "./Catering/Catering";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/700.css";
import "@fontsource/fraunces/700.css";
import Home from "./home/Home.js";
import Menu from "./menu-drinks/Menu";
import ContactUs from "./contact-us/ContactUs";
import Footer from "./home/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import Navbar from "./home/Navbar";

const theme = extendTheme({
  colors: {
    home: {
      heading: "#FFF9F9",
      body: "#EEE2E2",
      accent: "#CD553F",
      background: "#0E0E0E",
    },
    food: {
      bg: "#0e0e0e",
      title: "#feffff",
      text: "#e5e5e5",
      button: "#cd553f",
    },
  },
  fonts: {
    heading: "Lexend",
    body: "Lexend",
    accent: "Fraunces",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
