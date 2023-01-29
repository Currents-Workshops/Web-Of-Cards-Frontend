import "./App.css";
import Notification from "./components/Notification";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      {/* <Notification
        variant="subtle"
        title="Some title"
        desc="This is a description"
        duration={9000}
        status="success"
        isClosable={false}
        position="bottom-left"
      ></Notification> */}
    </ChakraProvider>
  );
}

export default App;
