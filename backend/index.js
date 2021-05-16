const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const fs=require('fs');
const bodyparser=require('body-parser');
var cors = require('cors')

const port = process.env.PORT || 8080;
const app = express();
app.use(cors())

const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});

var data=fs.readFileSync('data.json', 'utf8');
var ecgdata=JSON.parse(data);

let interval;
let ecgindex = 0;

io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 250);
  
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
    if(ecgindex === ecgdata.length){
        ecgindex = 0;
    }
    const response = ecgdata[ecgindex];
    ecgindex = ecgindex + 1;
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

app.get("/getData", (req, res, next) => {
    console.log('istek geldi')
    res.json(ecgdata);
});

server.listen(port, () =>{
  console.log(`BE is running at http://localhost:${port}`);
});