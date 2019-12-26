/*jshint node:true*/
module.exports = function(app) {
  let globSync = require("glob").sync;
  let mocks = globSync("./mocks/**/*.js", { cwd: __dirname }).map(require);
  let proxies = globSync("./proxies/**/*.js", { cwd: __dirname }).map(require);
  let bodyParser = require("body-parser");

  // Log proxy requests
  let morgan = require("morgan");
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("dev"));

  mocks.forEach(function(route) {
    route(app);
  });
  proxies.forEach(function(route) {
    route(app);
  });
};
