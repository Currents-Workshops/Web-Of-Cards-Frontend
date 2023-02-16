import React from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Button,
  HStack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import OpponentDisplay from "./Opponent";

export default function Opponents(props) {
  return (
    <Box height={window.innerHeight}>
      {/* <Box bg="gray.800" color="white" py={4} px={8}>
        <Heading as="h1" size="xl">
          Header
        </Heading>
      </Box> */}
      <Flex
        height="calc(130% - 80px)"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={4}
          width="90%"
          height="25%"
        >
          <Heading as="h2" size="md">
            Center Container
          </Heading>
          {/* Content for center container */}
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        position="absolute"
        top="calc(35% - 100px)"
        bottom="calc(52% - 100px)"
        left="100px"
        right="100px"
      >
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={4}
          height="120%"
          width="18%"
        >
          <Heading as="h2" size="md">
            Left Container
          </Heading>
          {/* Content for left container */}
        </Box>
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={4}
          height="120%"
          width="18%"
        >
          <Heading as="h2" size="md">
            Right Container
          </Heading>
          {/* Content for right container */}
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        position="absolute"
        top="100px"
        bottom="100px"
        left="calc(40% - 100px)"
        right="calc(40% - 100px)"
      >
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={4}
          width="100%"
          height="18%"
        >
          <Heading as="h2" size="md">
            Top Container
          </Heading>
          {/* Content for top container */}
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        position="absolute"
        top="calc(65%)"
        bottom="100px"
        left="calc(40% - 100px)"
        right="calc(40% - 100px)"
      >
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={4}
          width="100%"
          height="60%"
        >
          <Heading as="h2" size="md">
            Bottom Container
          </Heading>
          {/* Content for bottom container */}
        </Box>
      </Flex>
    </Box>
  );
  //   <Flex alignItems="center" justifyContent="center" height="100%" width="100%">
  //   <Box alignSelf="center">
  //   <HStack spacing="50px">
  //       {props.opponents.map((Opponent, index) => (
  //       <OpponentDisplay name={Opponent.name} id={Opponent.id} isPlaying={Opponent.isPlaying} key={index}></OpponentDisplay>
  //     ))}
  //   </HStack>
  //   </Box>
  //   </Flex>
  //  );
}
