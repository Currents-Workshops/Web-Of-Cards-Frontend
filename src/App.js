import "./App.css";
import JoinCreate from "./components/JoinCreate";
import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Leaderboard from "./components/LeaderBoard";
import Opponents from "./components/Opponents";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import useWebSocket from "react-use-websocket";
import generateOpponentArray from "./hook/opponent";
import Cards from "./components/Cards/Cards";
import turn from "./hook/turn";
import playerCards from "./hook/playerCards";
import deck from "./hook/deck";
import isHost from "./hook/host";
import isGameNotStart from "./hook/isGameNotStart";

const WS_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [page, setPage] = useState("join");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [userId, setUserId] = useState("");
  const [game, setGame] = useState({});

  const array = [
    { name: "name", id: 1, isPlaying: true },
    { name: "nam1e", id: 21, isPlaying: true },
  ];

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onMessage: (res) => {
      // handle messages from server
      let data = JSON.parse(res.data);
      console.log(data);
      switch (data.type) {
        case "feedback":
          if (data.data.user_id != null) setUserId(data.data.user_id);
          break;

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
          break;

        case "leaderboard":
          setPage("leaderboard");
          setGame(data.data.game);
          break;
        case "left_game":
          setPage("join");
          setGame({});
          setRoom("");
          break;

        default:
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
    case "game":
      return (
        <>
          <Navbar
            isHost={isHost(game, userId)}
            isNotGameStart={isGameNotStart(game)}
            room={room}
            name={name}
            sendJsonMessage={sendJsonMessage}
          />
          <Flex
            height="600px"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box alignSelf="center">
              <Opponents
                opponentsarray={generateOpponentArray(game, userId)}
              ></Opponents>
            </Box>
          </Flex>
          <Cards type={"deck"} turn={false} cards={deck(game)} />
          <Cards
            type={"player"}
            turn={turn(game, userId)}
            cards={playerCards(game, userId)}
            sendJsonMessage={sendJsonMessage}
          />
        </>
      );
    default:
      return <></>;
  }
}

export default App;
