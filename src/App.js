import "./App.css";
import JoinCreate from "./components/JoinCreate";
import * as React from "react";
import { Box, Container } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";
import Opponents from "./components/Opponents";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import useWebSocket from "react-use-websocket";
import generateOpponentArray from "./hook/opponent";
import turn from "./hook/turn";
import playerCards from "./hook/playerCards";
import deck from "./hook/deck";
import isHost from "./hook/host";
import isGameNotStart from "./hook/isGameNotStart";
//import Notification from "./components/Notification";

const WS_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [page, setPage] = useState("join");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [userId, setUserId] = useState("");
  const [game, setGame] = useState({});

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onMessage: (res) => {
      // handle messages from server
      let data = JSON.parse(res.data);
      console.log(data);
      switch (data.type) {

        case "new_game":
          setPage("game");
          setRoom(data.data.game.code);
          setGame(data.data.game);
          break;

        case "joined_game":
          setPage("game");
          setRoom(data.data.game.code);
          setGame(data.data.game);
          break;

        case "start_game":
          setPage("game");
          setGame(data.data.game);
          break;

        case "game_data":
          setGame(data.data.game);
          break;

        case "lose_message":
          setGame(data.data.game);
          break;

        case "leaderboard":
          setPage("leaderboard");
          setGame(data.data.game);
          break;

        case "left_game":
          setPage("join");
          setGame({});
          setRoom("");
          setName("");
          break;

        default:
          if (data.data != null && data.data.user_id != null) setUserId(data.data.user_id);
          if (data.data != null && data.data.message != null) //Notification({"title":data.data.message});
          break;
      }
    },
  });

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
            <Box alignSelf="center"bgGradient={`linear(to-r, #004052, #002029)`}>
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
