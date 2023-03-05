const express = require("express");
const User = require("../models/user");
const authenticate = require("../authenticate");
const passport = require("passport");

const userRouter = express.Router();

userRouter.route("/").get((req, res, next) => {
    User.find()
        .then((users) => {
            res.statusCode = 200;
            res.setHeader = ("Content-Type", "application/json");
            res.json(users);
        })
        .catch((err) => next(err));
});

userRouter.post("/register", (req, res) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ err: err });
        } else {
            user.save((err) => {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.json({ err: err });
                    return;
                }
                passport.authenticate("local")(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json({
                        success: true,
                        status: "Registration Successful!",
                    });
                });
            });
        }
    });
});

module.exports = userRouter;
