import React from "react";
import { Text, Stack, Flex } from "@chakra-ui/react";
import Cards from "./Cards/Cards";

export default function OpponentDisplay(props) {
  return (
    <Stack>
      <Flex
        paddingBottom="0.9rem"
        paddingTop="0.9rem"
        shadow="lg"
        align="center"
        backgroundColor="#D3F4FA"
        borderRadius="10px"
        justifyContent="center"
        marginBottom="1"
      >
        {props.isPlaying && (
          <Text color="#293D41" fontSize="22px" fontWeight="bold">
            {props.name}
          </Text>
        )}
        {!props.isPlaying && <Text>{props.name}</Text>}
      </Flex>
      <Flex align="center" justifyContent="flex-start" paddingLeft="5">
        <Cards numberOfCards={props.numberofcards} type="opponent"></Cards>
      </Flex>
    </Stack>
  );
}
