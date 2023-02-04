import "./Navbar.css";
import { Link } from "react-router-dom";
import {Flex, Box, Text,Button} from "@chakra-ui/react"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Flex
      //  color={textColor}
      //  flexDirection="row"
      //  width="70px"
      //  position="absolute"
      //  border="1px solid black"
       padding="10px 30px 8px 30px"


      
       justify="space-between"
       alignItems="center"
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            User Name
          </Text>
        </Box>
        <Box alignItems={"center"}>
          <Flex
          flexDirection={"column"}
          alignItems={"center"}
          >

          <Text fontSize="2xl" fontWeight="bold" color="white">
            Game code
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="white">
           123654
          </Text>
          </Flex>
        </Box>
        <Box>
          <Button backgroundColor={"red"}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              {/* <Link to="/about">About</Link> */}Leave
            </Text>
          </Button>
        </Box>
        

        </Flex>
     
    </nav>
  );
};

export default Navbar;