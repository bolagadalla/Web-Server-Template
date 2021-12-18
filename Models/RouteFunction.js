const http = require("http");

/**
 * This is a function which will contain what we must do once we receive a request
 * 
 * @param {http.IncomingMessage} req The incoming request from clients
 * @param {http.ServerResponse} res The response that will be sent to the client
 */
function RunFunction(req, res) {}

/**
 * This is an object with an executable function for what will happen
 * when we receive an event of a route. For each route there will be a RouteFunction
 * that will be used to run the function assigned to that route.
 */
class RouteFunction {
    /**
     * @typedef {{name: string, run: RunFunction}} RouteOptions
     * @param {RouteOptions} options 
     */
    constructor(options) {
        /**
         * Exclude "/" from the url.
         * Create "" empty string for home/index page.
         * Create "404" for 404 page.
         */
        this.name = options.name;
        this.run = options.run;
    }
}

module.exports = RouteFunction;