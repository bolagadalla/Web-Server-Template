const RouteFunction = require("../Models/RouteFunction.js");

module.exports = new RouteFunction({
    name: "404", // route "localhost:3000/404"
    run(req, res) {
        console.log(`404 from ${req.socket.remoteAddress} for ${req.url}`);
        res.writeHead(404, "Not Found", {"Content-Type": "text/html"});
        res.write(`<h1>404 Not Found</h1>`);
        res.end();
    }
});