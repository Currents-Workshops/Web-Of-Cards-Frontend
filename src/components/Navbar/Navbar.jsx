import "./Navbar.css";
// import { Link } from "react-router-dom";
import {Flex, Box, Text,Button} from "@chakra-ui/react"

const Navbar = ({isHost,room,name,sendJsonMessage,isNotGameStart}) => {
  
  return (
    <nav className="navbar">
      <Flex
       padding="10px 30px 8px 30px"
       justify="space-between"
       alignItems="center"
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            {name}
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
           {room}
          </Text>
          </Flex>
        </Box>
        <Box>
          {isHost && isNotGameStart && (
        <Button backgroundColor={"#4299e1"} marginRight={"15px"} 
         onClick = {()=>{
          sendJsonMessage({
              "type": "StartGame"})
          }}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
            Start
            </Text>
          </Button>)}
            
          <Button backgroundColor={"red"} onClick={
            ()=>{
              sendJsonMessage({
                "type": "leaveGame"
              })
            }
          }>
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