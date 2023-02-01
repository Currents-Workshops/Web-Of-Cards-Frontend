import "./App.css";
import Notification from "./components/Notification";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";

function App() {
  // const [displaytoast, setdisplaytoast] = React.useState(false);
  const arrayOfParticipants = [
    { name: "Participant a", score: 4 },
    { name: "Participant b", score: 11 },
    { name: "Participant c", score: 10 },
    { name: "Participant d", score: 12 },
    { name: "Participant e", score: 13 },
  ];
  //sorting the array in descending order before passing as a prop.
  arrayOfParticipants.sort(function (a, b) {
    return b.score - a.score;
  });

  return (
    <ChakraProvider>
      <div width={200}>
        <Leaderboard participants={arrayOfParticipants}></Leaderboard>
      </div>
    </ChakraProvider>
  );
}

export default App;
