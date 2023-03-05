const express = require("express");

const chatRouter = express.Router();

chatRouter.route("/").get((req, res, next) => {
    res.send(console.log("hello"));
});

module.exports = chatRouter;
