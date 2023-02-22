import React from "react";
import { Box, Text, Stack, Flex, Button } from "@chakra-ui/react";

export default function Leaderboard({
  participants,
  isHost,
  sendJsonMessage,
  setPage,
  setGame,
}) {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient={`linear(to-r, #004052, #002029)`}
    >
      <Box m="1rem" width="500px" height="500px">
        <Text fontSize="3xl" align="center" color="white" fontWeight="bold" fontFamily={"DuneRise"}>
          LEADERBOARD
        </Text>
        <Stack spacing={2}>
          <Flex
            p="0.75rem"
            shadow="lg"
            borderRadius="10px"
            align="center"
            backgroundColor="#00303D"
          >
            <Box w="30%" p="0.75rem">
              <Text fontSize="lg" color="white" textAlign={"center"}>
                RANK
              </Text>
            </Box>
            <Box w="70%" p="0.75rem">
              <Text fontSize="lg" color="white" textAlign={"center"}>
                NAME
              </Text>
            </Box>
          </Flex>

          {participants.map((participant, index) => (
            <Flex
              key={index}
              p="0.5rem"
              borderRadius="10px"
              shadow="lg"
              align="center"
              backgroundColor="#00607A"
            >
              <Box w="30%" p="0.5rem">
                <Text fontSize="lg" color="white" textAlign={"center"}>
                  {index + 1}.
                </Text>
              </Box>
              <Box w="70%" p="0.5rem">
                <Text fontSize="lg" color="white" textAlign={"center"}>
                  {participant.name}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
        <Flex spacing={2}>
          {isHost && (
            <Button
              backgroundColor="#004052"
              w="50%"
              color="white"
              marginRight={2}
              marginTop={2}
              onClick={() => {
                sendJsonMessage({
                  type: "Restart",
                });
                setGame({});
                setPage("game");
              }}
            >
              Restart
            </Button>
          )}
          <Button
            backgroundColor="#004052"
            w="50%"
            color="white"
            marginLeft={2}
            marginTop={2}
            onClick={() => {
              sendJsonMessage({
                type: "leaveGame",
              });
              setPage("home");
            }}
          >
            Exit
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
