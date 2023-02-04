import "./App.css";
import JoinCreate from "./components/JoinCreate";
import Notification from "./components/Notification";
import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";
import Opponents from "./components/Opponents";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import useWebSocket from 'react-use-websocket';

const WS_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [page, setPage] = useState("join");
  const [isHost, setHost] = useState(false);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const {sendJsonMessage} = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage:(data) =>{
      // handle messages from server
      console.log(data)
    }
  });

  // test data
  const OpponentsList1 = [
    { name: "Player 1", id: "1122", isPlaying: true },
    { name: "Player 2", id: "1334", isPlaying: false },
    { name: "Player 3", id: "1565", isPlaying: false },
    { name: "Player 4", id: "14656", isPlaying: false },
    { name: "Player 5", id: "1464", isPlaying: false },
    
  ];
  const arrayOfParticipants = [
    { name: "Participant a", score: 4},
    { name: "Participant b", score: 11},
    { name: "Participant c", score: 10},
    { name: "Participant d", score: 12},
    { name: "Participant e", score: 13},

  ];
  // // //

  switch(page){
    case "join":
      return (<JoinCreate setName = {setName} setRoom = {setRoom} name = {name} room = {room} sendJsonMessage = {sendJsonMessage}/>)
    case "leaderboard":
      return (<Leaderboard participants={arrayOfParticipants} isHost={isHost}/>)
    case "game":
      return (<>
      <Navbar isStartButtonVisble={isHost}/>
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
      </>)
    default:
      return (<></>);
  }
}

export default App;
