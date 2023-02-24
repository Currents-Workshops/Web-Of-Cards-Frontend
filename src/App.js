// Importing necessary components and packages
import "./App.css";
import JoinCreate from "./components/JoinCreate";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";
import Opponents from "./components/Opponents";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import useWebSocket from "react-use-websocket";
import generateOpponentArray from "./helpers/opponent";
import turn from "./helpers/turn";
import playerCards from "./helpers/playerCards";
import deck from "./helpers/deck";
import isHost from "./helpers/host";
import isGameNotStart from "./helpers/isGameNotStart";


// Defining the WebSocket URL
const WS_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  // Defining states to keep track of page, name, room, userId, and game
  const [page, setPage] = useState("join");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [userId, setUserId] = useState("");
  const [game, setGame] = useState({});

  // Establishing WebSocket connection and handling messages from server
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onMessage: (res) => {
      // parsing the message from the server
      let data = JSON.parse(res.data);
      console.log(data);
      switch (data.type) {
        // Handling "new_game" event
        case "new_game":
          setPage("game");
          setRoom(data.data.game.code);
          setGame(data.data.game);
          break;
        // Handling "joined_game" event
        case "joined_game":
          setPage("game");
          setRoom(data.data.game.code);
          setGame(data.data.game);
          break;
        // Handling "start_game" event
        case "start_game":
          setPage("game");
          setGame(data.data.game);
          break;
        // Handling "game_data" event
        case "game_data":
          setGame(data.data.game);
          break;
        // Handling "lose_message" event
        case "lose_message":
          setGame(data.data.game);
          break;
        // Handling "leaderboard" event
        case "leaderboard":
          setPage("leaderboard");
          setGame(data.data.game);
          break;
        // Handling "left_game" event
        case "left_game":
          setPage("join");
          setGame({});
          setRoom("");
          setName("");
          break;
        // Handling other events
        default:
          if (data.data != null && data.data.user_id != null) setUserId(data.data.user_id);
            break;
      }
    },
  });

  // Rendering components based on page state
  switch (page) {
    // Render the JoinCreate component when page is "join"
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
    // Render the game components when page is "game"
    case "game":
      return (
        <>
          <Box flex="1">
            <Navbar
              isHost={isHost(game, userId)}
              isNotGameStart={isGameNotStart(game)}
              room={room}
              name={name}
              sendJsonMessage={sendJsonMessage}
            />
            <Box alignSelf="center" bgGradient={`linear(to-r, #004052, #002029)`}>
              <Opponents
                opponentsarray={generateOpponentArray(game, userId)}
                cards={deck(game)}
                turn={turn(game, userId)}
                currentusercards={playerCards(game, userId)}
                sendJsonMessage={sendJsonMessage}
              ></Opponents>
            </Box>
          </Box>
        </>
      );
      // Render the leaderboard components when page is "leaderboard"
    case "leaderboard":
      return (
        <Leaderboard
          participants={game.leaderboard}
          isHost={isHost(game, userId)}
          sendJsonMessage={sendJsonMessage}
          setPage={setPage}
          setGame={setGame}
        />
      );

    default:
      return <></>;
  }
}

export default App;
