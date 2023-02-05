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
            p="1rem"
            shadow="md"
            borderWidth="1px"
            align="stretch"
            borderColor="gray.500"
            backgroundColor="gray.400"
            borderRadius="5px"
            justifyContent="center"
          >
            {props.isPlaying && (
              <Text color="white" fontSize="22px">
                {props.name}
              </Text>
            )}
            {!props.isPlaying && <Text>{props.name}</Text>}
          </Flex>
          <Image src={Img}></Image>
        </Stack>
      </Box>
    </div>
  );
}
