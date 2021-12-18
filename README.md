# Web Server Template

This is a template that I will be using for Web servers from here on out. It uses `http` package, in the future this will change to `https` instead. There will also be an option for `express` instead of the standard `https` package.

# How it works

When the `Server` object is instantiated, it will create a server and load all the `RouteFunction` objects in `Functions` directory into memory. 

Then the `Server` object will listen to any incoming `request`, it will get the route name without the "/" from the `req.url` and then call the `run()` of that route name object from the `Map()` routes.

The `request` and `response` objects are passed into the `run()` as parameters to be used. 

The `run()` is where you will process the `request` and return a `response`.

**Functions** Directory is where you will put all the routes objects, there is an example of this in the directory.