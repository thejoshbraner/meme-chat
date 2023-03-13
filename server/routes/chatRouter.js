const express = require("express");
const Chat = require("../models/chat");

const chatRouter = express.Router();

chatRouter.route("/").get((req, res, next) => {
    Chat.find()
        .then((data) => {
            console.log("Chat log fetch successful");
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(data);
        })
        .catch((err) => next(err));
});
module.exports = chatRouter;
