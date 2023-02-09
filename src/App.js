import "./App.css";
import CardsWrapper from "./components/CardsWrapper";
import JoinCreate from "./components/JoinCreate";
import Notification from "./components/Notification";
import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";
import Card from "react-playing-card";

import Opponents from "./components/Opponents";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import useWebSocket from "react-use-websocket";
import generateOpponentArray from "./hook/opponent";

const WS_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [page, setPage] = useState("join");
  const [isHost, setHost] = useState(false);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [userId, setUserId] = useState("");
  const [game,setGame] = useState({});

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onMessage: (res) => {
      // handle messages from server
      let data = JSON.parse(res.data)
      console.log(data);
      switch (data.type) {

        case "feedback":
          if(data.data.user_id!=null) setUserId(data.data.user_id)
          break;

        case "new_game":
          setPage("game");
          setHost(true);
          setRoom(data.data.game.code);
          setGame(data.data.game);
          break;
        
        case  "joined_game":
          setPage("game");
          setRoom(data.data.game.code);
          setGame(data.data.game);
          break;

        case "start_game":
          setGame(data.data.game);
          break;

        default:
          break;
      }
    },
  });

  // test data
  const arrayOfParticipants = [
    { name: "Participant a", score: 4 },
    { name: "Participant b", score: 11 },
    { name: "Participant c", score: 10 },
    { name: "Participant d", score: 12 },
    { name: "Participant e", score: 13 },
  ];

  switch (page) {
    case "join":
      return (
        <>
          <JoinCreate
            setName={setName}
            setRoom={setRoom}
            name={name}
            room={room}
            sendJsonMessage={sendJsonMessage}
          />
        </>
      );
    case "leaderboard":
      return <Leaderboard participants={arrayOfParticipants} isHost={isHost} />;
    case "game":
      return (
        <>
          <Navbar isHost={isHost} room = {room} name = {name} sendJsonMessage={sendJsonMessage} />
          <Flex
            height="600px"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box alignSelf="center">
              <Opponents opponents={generateOpponentArray(game,userId)}></Opponents>
            </Box>
          </Flex>
          <div>
            <Card rank="2" suit="S" />
          </div>
          <div className="App">
            <CardsWrapper cardsNumber="7" />
          </div>
        </>
      );
    default:
      return <></>;
  }
}

export default App;
