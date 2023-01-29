import "./App.css";
import Notification from "./components/Notification";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [displaytoast, setdisplaytoast] = React.useState(false);
  return (
    <ChakraProvider>
      {/* <button onClick={() => setdisplaytoast(true)}>button</button>
      {displaytoast && (
        <Notification title="hello" status="success" duration={9000} />
      )} */}
    </ChakraProvider>
  );
}

export default App;
