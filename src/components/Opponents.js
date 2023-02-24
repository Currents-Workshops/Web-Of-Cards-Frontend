import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import OpponentDisplay from "./Opponent";
import Cards from "../components/Cards/Cards";

export default function Opponents(props) {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    console.log(props.opponentsarray)
    if (props.opponentsarray.length > 0) {
      setUsersList(props.opponentsarray)
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
          backgroundColor="rgba(0, 0, 0, 0)"
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
        {usersList[1] && usersList[1].name && (
          <Box
            backgroundColor="rgba(0, 0, 0, 0)"
            borderRadius="lg"
            p={4}
            height="100%"
            width="18%"
          >
            {/* Content for left container */}
            <OpponentDisplay
              name={usersList[1].name}
              id={usersList[1].id}
              isPlaying={usersList[1].isPlaying}
              numberofcards={usersList[1].number_of_cards}
              isLost={usersList[1].isLost}
              left={true}
            ></OpponentDisplay>
          </Box>
        )}
        {usersList[2] && usersList[2].name && (
          <Box
            backgroundColor="rgba(0, 0, 0, 0) "
            borderRadius="lg"
            p={4}
            height="100%"
            width="18%"
          >
            {/* Content for right container */}
            <OpponentDisplay
              name={usersList[2].name}
              id={usersList[2].id}
              isPlaying={usersList[2].isPlaying}
              numberofcards={usersList[2].number_of_cards}
              isLost={usersList[2].isLost}
              left={true}
            ></OpponentDisplay>
          </Box>
        )}
      </Flex>
      <Flex
        justifyContent="space-between"
        position="absolute"
        top="100px"
        bottom="100px"
        left="calc(40% )"
        right="calc(40%)"
      >
        {usersList[0] && usersList[0].name && (
          <Box
            backgroundColor="rgba(0, 0, 0, 0)"
            borderRadius="lg"
            p={4}
            width="80%"
            height="18%"
          >
            {/* Content for top container */}

            <OpponentDisplay
              name={usersList[0].name}
              id={usersList[0].id}
              isPlaying={usersList[0].isPlaying}
              numberofcards={usersList[0].number_of_cards}
              isLost={usersList[0].isLost}
            ></OpponentDisplay>
          </Box>
        )}
      </Flex>

      {/* Content for bottom container*/}
      <Flex
        paddingBottom="0.9rem"
        paddingTop="0.9rem"
        shadow="lg"
        align="center"
        backgroundColor="#002029"
        border={`1px solid white`}
        borderRadius="10px"
        justifyContent="center"
        marginBottom="1"
        marginLeft="30%"
        marginRight="30%"
        marginTop={"-50px"}
      >
        <Text fontSize="l" fontWeight="bold">
          {!props.turn ? "YOUR DECK" : "YOUR TURN"}
        </Text>
      </Flex>
      <Flex align="center" justifyContent="center" >
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
