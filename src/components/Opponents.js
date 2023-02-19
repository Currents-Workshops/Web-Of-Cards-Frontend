import React, { useEffect, useState } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import OpponentDisplay from "./Opponent";
import Cards from "../components/Cards/Cards";

export default function Opponents(props) {
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
  return (
    <Box height={window.outerHeight}>
      <Flex
        height="calc(100% - 240px)"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bg="white"
          borderRadius="lg"
          p={4}
          width="100%"
          height="15%"
          alignItems="center"
          backgroundColor="#C0EAFC"
          flex="1"
        >
          {/* Content for center container */}
          <Cards type={"deck"} turn={false} cards={props.cards} />
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        position="absolute"
        top="calc(45% - 100px)"
        bottom="calc(55% - 100px)"
        left="10px"
        right="10px"
      >
        <Box
          backgroundColor="#C0EAFC"
          borderRadius="lg"
          p={4}
          height="100%"
          width="18%"
        >
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
          backgroundColor="#C0EAFC"
          borderRadius="lg"
          p={4}
          height="100%"
          width="18%"
        >
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
        left="calc(40% )"
        right="calc(40%)"
      >
        <Box
          backgroundColor="#C0EAFC"
          borderRadius="lg"
          p={4}
          width="80%"
          height="18%"
        >
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

      {/* Content for bottom container*/}
      <Flex
        paddingBottom="0.9rem"
        paddingTop="0.9rem"
        shadow="lg"
        align="center"
        backgroundColor="#D3F4FA"
        borderRadius="10px"
        justifyContent="center"
        marginBottom="1"
        marginLeft="40%"
        marginRight="40%"
      >
        <Text fontSize="l" fontWeight="bold">
          YOUR DECK
        </Text>
      </Flex>
      <Flex align="center" justifyContent="center" marginRight="200">
        <Cards
          type={"player"}
          turn={props.turn}
          cards={props.currentusercards}
          sendJsonMessage={props.sendJsonMessage}
        />
      </Flex>
    </Box>
  );
}
