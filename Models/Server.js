const fs = require("fs");
const RouteFunction = require("./RouteFunction.js");
const http = require("http");


class Server {
    constructor() {
        /**
         * It hold the routes where the key is the route name without "/" and value is the RouteFunction object
         * @type {Map<string, RouteFunction>} 
         */
        this.routes = new Map();
        this.port = 3000;
        this.server = http.createServer();
    }

    loadRoutes() {
        // Loads all the routes into memory
        fs.readdirSync("./Functions").filter(file => file.endsWith(".js")).forEach(file => {
            /**
             * @type {RouteFunction}
             */
            const routeFunction = require(`../Functions/${file}`);
            console.log(`Route Function ${routeFunction.name} Loaded`);
            this.routes.set(routeFunction.name, routeFunction);
        });
    }

    start() {
        this.loadRoutes();

        // Listens for any requests and call the run function on any route that we find with the same url
        this.server.on("request", (req, res) => {
            // Look up the route name in the map and execute the function
            const route = req.url.substring(1).split("/")[0];
            // If it doesnt have the route then call "404" route
            if (!this.routes.has(route)) {
                // Call run function and pass in the req and res object
                this.routes.get("404").run(req, res);
            }
            else {
                // Call run function and pass in the req and res object
                this.routes.get(route).run(req, res);
            }
        });

        // Prints to the console when we start listening to port
        this.server.on("listening", () => {
            console.log(`Now Listening On Port ${this.port}`);
        });
        this.server.listen(this.port);
    }
}

module.exports = Server;