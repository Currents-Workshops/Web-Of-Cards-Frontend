import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, Box } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    {/* <Box flex="1" backgroundColor="#C0EAFC"> */}
    <App />
    {/* </Box> */}
  </ChakraProvider>
);
