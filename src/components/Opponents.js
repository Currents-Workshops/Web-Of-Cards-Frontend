import React, { useEffect, useState } from "react";
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
import Cards from "../components/Cards/Cards";

export default function Opponents(props) {
  // const opponentlist = props.Opponents;
  // console.log(props.opponentsarray[0]);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    if (props.opponentsarray.length > 0) {
      setUsersList((prevList) => {
        const filteredList = prevList.filter(
          (user) => !props.opponentsarray.find(({ id }) => id === user.id)
        );
        return [...filteredList, ...props.opponentsarray];
      });
    }
  }, [props.opponentsarray]);

  // console.log(typeof props.opponentsarray);
  // console.log(props.opponentsarray);
  // console.log(props);
  // console.log(props.opponentsarray.length > 0);
  console.log(usersList);
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
          alignItems={"center"}
        >
          <Heading as="h2" size="md">
            Center Container
          </Heading>
          {/* Content for center container */}
          <Box>
            <Cards type={"deck"} turn={false} cards={props.cards} />
          </Box>
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
          <OpponentDisplay
            name={usersList[0] ? usersList[0].name : "no-user"}
            id={usersList[0] ? usersList[0].id : 0}
            isPlaying={usersList[0] ? usersList[0].isPlaying : false}
            numberofcards={usersList[0] ? usersList[0].number_of_cards : 0}
            isLost={usersList[0] ? usersList[0].isLost : true}
          ></OpponentDisplay>
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
          <OpponentDisplay
            name={usersList[1] ? usersList[1].name : "no-user"}
            id={usersList[1] ? usersList[1].id : 0}
            isPlaying={usersList[1] ? usersList[1].isPlaying : false}
            numberofcards={usersList[1] ? usersList[1].number_of_cards : 0}
            isLost={usersList[1] ? usersList[1].isLost : true}
          ></OpponentDisplay>
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
          <OpponentDisplay
            name={usersList[2] ? usersList[2].name : "no-user"}
            id={usersList[2] ? usersList[2].id : 0}
            isPlaying={usersList[2] ? usersList[2].isPlaying : false}
            numberofcards={usersList[2] ? usersList[2].number_of_cards : 0}
            isLost={usersList[2] ? usersList[2].isLost : true}
          ></OpponentDisplay>
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        position="absolute"
        top="calc(80%)"
        bottom="10px"
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
          {/* Content for bottom container*/}
          <Box>
            <Cards
              type={"player"}
              turn={props.turn}
              cards={props.currentusercards}
              sendJsonMessage={props.sendJsonMessage}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
  //   <Flex alignItems="center" justifyContent="center" height="100%" width="100%">
  //   <Box alignSelf="center">
  //   <HStack spacing="50px">
  //   {props.opponents.map((Opponent, index) => (
  //   <OpponentDisplay name={Opponent.name} id={Opponent.id} isPlaying={Opponent.isPlaying} key={index}></OpponentDisplay>
  // ))}
  //   </HStack>
  //   </Box>
  //   </Flex>
  //  );
}
