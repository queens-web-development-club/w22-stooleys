import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {HStack, IconButton} from '@chakra-ui/react'

export default function SocialsList() {

  return (
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
  );


}