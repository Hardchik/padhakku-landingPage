import React from "react";
import { Icon, Link, Stack, Tooltip } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const icons = {
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedin,
  youtube: FaYoutubeSquare,
  facebook: FaFacebookSquare,
  instagram: FaInstagram,
  mail: FaEnvelope,
};

const LinkIcon = ({ index, url, label, icon, hover_class }) => (
  <Tooltip label={label} aria-label={`${label}-tooltip`} key={`link-${index}`}>
    <Link
      aria-label={`Open link to ${url}`}
      display="inline-block"
      href={url}
      isExternal
    >
      <Icon
        as={icons[icon]}
        fontSize="2.5em"
        color="white"
        className={hover_class}
      />
    </Link>
  </Tooltip>
);

const LinkIconBar = ({ links, ...props }) => {
  return (
    <Stack
      mt={4}
      direction="row"
      spacing="12px"
      justify="center"
      mb={10}
      {...props}
    >
      {links.map((link, index) => (
        <LinkIcon key={link.label} index={index} {...link} />
      ))}
    </Stack>
  );
};

export default LinkIconBar;