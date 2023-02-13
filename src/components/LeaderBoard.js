import React from "react";
import { Box, Text, Stack, Flex, Button } from "@chakra-ui/react";

export default function Leaderboard({participants,isHost,sendJsonMessage}) {
  return (
    <Flex
            bg="gray.100"
            minH="100vh"
            align="center"
            justify="center"
        >
    <Box m="1rem" width="500px" height="500px">
      <Text fontSize="2xl" align="center">
        LEADERBOARD
      </Text>
      <Stack spacing={2}>
        <Flex
          p="0.75rem"
          shadow="md"
          borderRadius="10px"
          borderWidth="5px"
          align="center"
          borderColor="gray.500"
          backgroundColor="gray.400"
        >
          <Box w="50%" p="0.75rem">
            <Text fontSize="lg">RANK</Text>
          </Box>
          <Box w="50%" p="0.75rem">
            <Text fontSize="lg">NAME</Text>
          </Box>
        </Flex>

        {participants.map((participant, index) => (
          <Flex key={index}
            p="0.5rem"
            borderRadius="10px"
            shadow="md"
            borderWidth="2px"
            align="center"
            backgroundColor="gray.200"
          >
            <Box w="50%" p="0.5rem">
              <Text fontSize="lg">{index + 1}.</Text>
            </Box>
            <Box w="50%" p="0.5rem">
              <Text fontSize="lg">{participant.name}</Text>
            </Box>
          </Flex>
        ))}
      </Stack>
      <Flex m="0.5rem" align="stretch">
        {isHost && (
          <Button backgroundColor="gray.500" w="50%" color="white" onClick ={()=>sendJsonMessage({
            "type": "Restart"})}>
            Restart
          </Button>
        )}
        <Button backgroundColor="gray.500" w="50%" color="white">
          Exit
        </Button>
      </Flex>
    </Box>
    </Flex>
  );
}
