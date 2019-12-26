/*jshint node:true*/
module.exports = function(app) {
  let express = require("express");
  let systemRouter = express.Router();

  systemRouter.get("/", function(req, res) {
    res.send([]);
  });

  app.use("/todos/", systemRouter);
};
