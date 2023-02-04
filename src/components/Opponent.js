import React from "react";
import { Box, Text, Stack, Flex, Button, Spacer } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Img from "../images/CardBack.jpg";

export default function OpponentDisplay(props) {
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <Box width="180px">
        <Stack>
          <Flex
            p="0.75rem"
            shadow="md"
            borderWidth="1px"
            align="stretch"
            borderColor="gray.500"
            backgroundColor="gray.400"
            borderRadius="5px"
          >
            {props.isPlaying && (
              <Text w="50%" color="white" fontSize="19px">
                {props.name}
              </Text>
            )}
            {!props.isPlaying && <Text w="50%">{props.name}</Text>}
            <Spacer />
            {props.isPlaying && <Text w="40%" fontSize="19px">{props.id}</Text>}
            {!props.isPlaying && <Text w="40%">{props.id}</Text>}
          </Flex>
          <Image src={Img}></Image>
        </Stack>
      </Box>
    </div>
  );
}
