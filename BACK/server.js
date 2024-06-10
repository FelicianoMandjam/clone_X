const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173"
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });

  socket.on('tweet', (tweet) => {
    io.emit('tweet', tweet);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
