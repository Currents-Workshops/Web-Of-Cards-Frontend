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
        backgroundColor={props.isPlaying ? "#272C3D" : "#002029" }
        borderRadius="10px"
        justifyContent="center"
        marginBottom="1"
        border={`1px solid white`}
        transform={ !props.left ? `translate(12.5%)` : `translate(10%)` }
      >
        {props.isPlaying && (
          <Text color="#bfcfd4" fontSize="28px" fontWeight="bold">
            {props.name}
          </Text>
        )}
        {props.isLost && (
          <Text color="red" fontSize="22px" fontWeight="bold">
            {props.name}
          </Text>
        )}
        {!props.isPlaying && (
          <Text color="white" fontSize="22px" fontWeight="bold">
            {props.name}
          </Text>
        )}
      </Flex>
      <Flex align="center" justifyContent="flex-start" paddingLeft="5">
        <Cards numberOfCards={props.numberofcards} type="opponent"></Cards>
      </Flex>
    </Stack>
  );
}
