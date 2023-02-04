import "./App.css";
import JoinCreate from "./components/JoinCreate";
import Notification from "./components/Notification";
import * as React from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";
import OpponentDisplay from "./components/Opponent";
import Opponents from "./components/Opponents";

function App() {
  // const [displaytoast, setdisplaytoast] = React.useState(false);
  // const arrayOfParticipants = [
  //   { name: "Participant a", score: 4, isHost: false },
  //   { name: "Participant b", score: 11, isHost: false },
  //   { name: "Participant c", score: 10, isHost: false },
  //   { name: "Participant d", score: 12, isHost: true },
  //   { name: "Participant e", score: 13, isHost: false },
  // ];
  // //sorting the array in descending order before passing as a prop.
  // arrayOfParticipants.sort(function (a, b) {
  //   return b.score - a.score;
  // });
  const OpponentsList1 = [
    { name: "Player 1", id: "1122", isPlaying: true },
    { name: "Player 2", id: "1334", isPlaying: false },
    { name: "Player 3", id: "1565", isPlaying: false },
    { name: "Player 4", id: "14656", isPlaying: false },
    { name: "Player 5", id: "1464", isPlaying: false },
    
  ];
  return (
    <ChakraProvider>
      <Flex
        height="600px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box alignSelf="center">
          <Opponents opponents={OpponentsList1}></Opponents>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
