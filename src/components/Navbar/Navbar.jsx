import "./Navbar.css";
// import { Link } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";

const Navbar = ({ isHost, room, name, sendJsonMessage, isNotGameStart }) => {
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
            <Text fontSize="3xl" fontWeight="bold" color="white">
              GAME CODE{" "}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              {room}
            </Text>
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
