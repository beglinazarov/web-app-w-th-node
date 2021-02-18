// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var express = require("express");

var app = express();
app.use(express.static("./public"));

app.get("/", response => {
    response.sendFile("index.html",{root:__dirname});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);