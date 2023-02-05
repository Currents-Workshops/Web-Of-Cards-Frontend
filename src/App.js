import "./App.css";
import CardsWrapper from "./components/CardsWrapper";
import JoinCreate from "./components/JoinCreate";
import Notification from "./components/Notification";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";
import Card from "react-playing-card";

function App() {
  // const [displaytoast, setdisplaytoast] = React.useState(false);
  const arrayOfParticipants = [
    { name: "Participant a", score: 4, isHost: false },
    { name: "Participant b", score: 11, isHost: false },
    { name: "Participant c", score: 10, isHost: false },
    { name: "Participant d", score: 12, isHost: true },
    { name: "Participant e", score: 13, isHost: false },
  ];
  //sorting the array in descending order before passing as a prop.
  arrayOfParticipants.sort(function (a, b) {
    return b.score - a.score;
  });

  return (
    <>
      <ChakraProvider>
        {" "}
        <div>
          <Leaderboard
            participants={arrayOfParticipants}
            isHost={false}
          ></Leaderboard>
        </div>
      </ChakraProvider>
      <div>
        <Card rank="2" suit="S" />
      </div>
      <div className="App">
        <CardsWrapper cardsNumber="7" />
      </div>
    </>
  );
}

export default App;
