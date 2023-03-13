const express = require("express");
const User = require("../models/user");
const authenticate = require("../authenticate");
const passport = require("passport");

const userRouter = express.Router();

userRouter.route("/").get(authenticate.verifyUser, (req, res, next) => {
    User.find()
        .then((users) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
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
            if (req.body.email) {
                user.email = req.body.email;
            }
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
                    res.send(console.log("Success"));
                });
            });
        }
    });
});

userRouter.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
    const token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: false,
        maxAge: 360000,
    });

    res.json({
        success: true,
        token: token,
        status: "You are successfully logged in!",
        user: {
            username: req.user.username,
        },
    });
});

userRouter.get("/checkAuth", authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        success: true,
        status: "You are logged in",
        user: {
            username: req.user.username,
        },
    });
});

module.exports = userRouter;
