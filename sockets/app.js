const app = require("express");
const server = require("http").createServer(app);

const io = require("socket.io")(server,
    {cors:
        {origin:"http://localhost:3000",
        methods:["GET","POST"]}});
io.on("connection", (socket) => {
    socket.on("run-start",(data)=> {
        io.emit("send-data", data);
        console.log(data);
    });    
});
server.listen(5000);

