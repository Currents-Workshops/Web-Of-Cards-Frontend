import React from "react";
import { Box, Text, Stack, Flex, Button, HStack} from "@chakra-ui/react";
import OpponentDisplay from "./Opponent";

export default function Opponents(props){
   return(
    <Flex alignItems="center" justifyContent="center" height="100%" width="100%">
    <Box alignSelf="center">
    <HStack spacing="50px">
        {props.opponents.map((Opponent, index) => (
        <OpponentDisplay name={Opponent.name} id={Opponent.id} isPlaying={Opponent.isPlaying} key={index}></OpponentDisplay>
      ))}
    </HStack>
    </Box>
    </Flex>
   );
}
