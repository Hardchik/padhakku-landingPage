import {
    Box,
    Container,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
//   import copyright from "../../assets/copyright-symbol-png-11447.png";
  import LinkIconBar from "./LinkIconBar";
  import links from "./FooterLinks";
  
//   const Logo = () => {
//     const logo = useColorModeValue(
//       "https://padhakku.s3.ap-south-1.amazonaws.com/website_icon_logos/Padhakku+White.ico",
//       "https://padhakku.s3.ap-south-1.amazonaws.com/website_icon_logos/Padhakku+Blue.png"
//     );
  
//     return (
//       <Image
//         className="logo"
//         alt="logo"
//         src={logo}
//         htmlHeight="45px"
//         htmlWidth="200px"
//       />
//     );
//   };
  const Footer = () => {
    return (
      <Box
        bg={useColorModeValue("#23283b", "gray.900")}
        color={useColorModeValue("white", "gray.200")}
        as="footer"
      >
        <Container as={Stack} maxW={"6xl"} py={10} style={{ minWidth: "90vw" }}>
          <SimpleGrid
            templateColumns={{
              lg: "2fr 0.9fr 0.8fr 1fr 0.01fr 2.5fr",
  
              sm: "1fr 1fr 1fr 0.011fr 0.01fr 2.5fr",
            }}
            spacing={6}
          >
            <Stack
              spacing={6}
              gridColumn={{
                lg: "auto",
                sm: "1 / span 6",
              }}
            >
              <Box margin="0 auto">
                {/* <Logo /> */}
              </Box>
  
              <LinkIconBar links={links} />
              <Text
                fontSize="sm"
                ml="1rem"
                mr="1rem"
                textAlign="center"
                px="18px"
              >
                Office Address: Room No 305, IIT ROPAR-TBIF, Top Floor (East
                Wing), M.Visvesvaraya, Rupnagar PB, 140001
              </Text>
            </Stack>
          </SimpleGrid>
          <Text
            fontSize="sm"
            style={{ textAlign: "center" }}
            mt="1rem !important"
          >
            {/* <Image
              src={copyright}
              htmlHeight="15px"
              htmlWidth="15px"
              display="inline-block"
              margin="1px"
            /> */}©
            {new Date().getFullYear()} Padhakku Peek A Book Pvt Ltd
          </Text>
        </Container>
      </Box>
    );
  };
  
  export default Footer;