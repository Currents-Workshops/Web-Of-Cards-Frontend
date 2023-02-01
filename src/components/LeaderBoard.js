import React from "react";
import { Box, Text, Stack, Flex } from "@chakra-ui/react";

export default function Leaderboard(props) {
  return (
    <Box m="3rem">
      <Stack spacing={2}>
        <Flex
          p="2rem"
          shadow="md"
          borderRadius="10px"
          borderWidth="5px"
          align="center"
          borderColor="gray.500"
          backgroundColor="gray.400"
        >
          <Box w="30%" p="1rem">
            <Text fontSize="lg">RANK</Text>
          </Box>
          <Box w="50%" p="1rem">
            <Text fontSize="lg">NAME</Text>
          </Box>
          <Box w="20%" p="1rem">
            <Text fontSize="lg">SCORE</Text>
          </Box>
        </Flex>

        {props.participants.map((participant, index) => (
          <Flex
            p="1rem"
            borderRadius="10px"
            shadow="md"
            borderWidth="2px"
            align="center"
            backgroundColor="gray.200"
          >
            <Box w="30%" p="1rem">
              <Text fontSize="lg">{index + 1}.</Text>
            </Box>
            <Box w="50%" p="1rem">
              <Text fontSize="lg">{participant.name}</Text>
            </Box>
            <Box w="20%" p="1rem">
              <Text fontSize="lg">{participant.score}</Text>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}
