const app = require("express")();
const httpServer = require("http").createServer(app);

// Handeling cors 
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "https://piedpiperplayer.herokuapp.com/",
      methods: ["GET", "POST"]
    }
  });

io.on("connection", socket => {
    console.log("Connected ")
});

httpServer.listen(process.env.PORT || 8080);

module.exports = io;