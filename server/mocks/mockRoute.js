/*jshint node:true*/
const todosMock = require("../data/todosMock");

module.exports = function(app) {
  let express = require("express");
  let router = express.Router();
  let mockData = todosMock.todos;

  router.get("/", function(req, res) {
    res.send(mockData);
  });

  router.post("/", function(req, res) {
    const {
      body: { todos }
    } = req;

    mockData = todos;
    res.send(mockData);
  });

  app.use("/todos/", router);
};
