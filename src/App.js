import './App.css';
import JoinCreate from './components/JoinCreate';
import Notification from "./components/Notification";
import * as React from "react";

function App() {
  const [displaytoast, setdisplaytoast] = React.useState(false);
  return (
    <div>
      <JoinCreate/>
    </div>
      {/* <button onClick={() => setdisplaytoast(true)}>button</button>
      {displaytoast && (
        <Notification title="hello" status="success" duration={9000} />
      )} */}
  );
}

export default App;
