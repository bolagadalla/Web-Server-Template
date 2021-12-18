const RouteFunction = require("../Models/RouteFunction.js");

module.exports = new RouteFunction({
    name: "", // Home route "localhost:3000/"
    run(req, res) {
        console.log(`New Request from ${req.socket.remoteAddress} for ${req.url}`);
        res.writeHead(200, "OK", {'Content-Type':'text/html'});
        res.write(`<h1>Hello World</h1>`);
        res.end();
    }
});