const app = require("express");
const server = require("http").createServer(app);
const io = require("socket.io")(server,
    {cors:
        {origin:"",methods:["GET","POST"]}});
io.on("content", () => {
    console.log("new user");
});
server.listen(3000);

