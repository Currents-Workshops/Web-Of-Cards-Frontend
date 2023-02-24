import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.body.style.overflow = 'hidden';
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
