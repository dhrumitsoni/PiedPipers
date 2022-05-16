const app = require("express")();
const httpServer = require("http").createServer(app);

// Handeling cors 
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

io.on("connection", socket => {
    console.log("Connected ")
});

httpServer.listen(8080);

module.exports = io;