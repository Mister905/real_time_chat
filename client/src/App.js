import React, { useState, useEffect } from "react";

import Landing from "./components/landing/Landing";
import Chat from "./components/chat/Chat";


import socketIOClient from "socket.io-client";
const socket = io.connect("/");

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        It's <time dateTime={response}>{response}</time>
        <Landing />
        <Chat socket={socket} />
      </div>
    </div>
  );
}

export default App;
