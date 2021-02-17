var host = "127.0.0.1";
var port = 8000;
var express = require("express");

var app = express();
app.use(express.static("../public"));

app.get("/", response => {
    response.sendFile("index.html",{root:__dirname});
});

app.listen(port, host,()=> console.log(`express runnning on host: ${host} port: ${port}`));