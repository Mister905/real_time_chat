const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");
const { isObject } = require("util");

const server = http.createServer(app);

const io = socketio(server);

app.use(express.json({ extended: false }));

var cors_options = {
  origin: "http://localhost:3000",
};

app.use(cors(cors_options));

let interval;

io.on("connection", (socket) => {

  console.log("New client connection...");

  if (interval) {
    clearInterval(interval);
  }
  
  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected...");
    clearInterval(interval);
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
