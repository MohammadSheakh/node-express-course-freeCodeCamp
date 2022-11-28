const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request event"); /// ei ta print hoitei thakbe .. console e ...
    res.end("Hello World");
});

// asynchronous event ..
server.listen(5000, () => {
    console.log("Server listening on port : 5000....");
});
