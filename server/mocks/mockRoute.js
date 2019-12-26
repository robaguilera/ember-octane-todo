/*jshint node:true*/
const todosMock = require("../data/todosMock");

module.exports = function(app) {
  let express = require("express");
  let router = express.Router();
  const { todos } = todosMock;

  router.get("/", function(req, res) {
    res.send(todos);
  });

  app.use("/todos/", router);
};
