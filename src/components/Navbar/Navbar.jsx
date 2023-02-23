import "./Navbar.css";
import { useState } from "react"; 
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const Navbar = ({ isHost, room, name, sendJsonMessage, isNotGameStart }) => {
  const [copyText, setCopyText] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <nav className="navbar"
    >
      <Flex
        padding="10px 30px 8px 30px"
        justify="space-between"
        alignItems="center"
        backgroundColor="#00303D"
        backdropFilter={"auto"}
        backdropBlur={"md"}
      >
        <Box width={250}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            {name}
          </Text>
        </Box>
        <Box alignItems={"center"}>
          <Flex flexDirection={"column"} alignItems={"center"}>
              {/* <Box> */}

                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg> */}
              {/* </Box> */}
            <Text fontSize="3xl" fontWeight="bold" color="white">
              GAME CODE{" "}
                
              
            </Text>
            <Flex>

            <Text fontSize="2xl" fontWeight="bold" color="white"paddingRight={"5px"} >
              {room}
            </Text>
          <CopyIcon _hover={{ cursor: "pointer", color: "blue.500" }} boxSize={"8"} paddingTop={"8px"} onClick={() => {
            setIsCopied(true);
              navigator.clipboard.writeText(room);
              setCopyText("Copied!");
              setTimeout(() => {
                setCopyText(null);
                setIsCopied(false);
              }, 1000);
            }}/>
            </Flex>
            {isCopied && <span>Copied!</span>}
          </Flex>
        </Box>
        <Box width={250}>
          <Button
            backgroundColor={"rgba(0, 64, 82, 1)"}
            _hover={{
              bg: "rgba(0, 64, 82, 0.8)"
            }}
            marginRight={"15px"}
            onClick={() => {
              sendJsonMessage({
                type: "StartGame",
              });
            }}
            visibility={isHost && isNotGameStart ? "visible" : "hidden"}
          >
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Start
            </Text>
          </Button>
          <Button
            backgroundColor={"rgba(255, 0, 0, 1)"}
            _hover={{
              bg: "rgba(255, 0, 0, 0.8)"
            }}
            onClick={() => {
              sendJsonMessage({
                type: "leaveGame",
              });
            }}
          >
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
