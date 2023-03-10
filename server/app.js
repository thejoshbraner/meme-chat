const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require("./config");
const cors = require("cors");
const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://127.0.0.1:5173"],
    },
});
const cookieParser = require("cookie-parser");
const chatRouter = require("./routes/chatRouter");
const userRouter = require("./routes/userRouter");
const Chat = require("./models/chat");

//Creates a new websocket and assigns ID to the client
io.on("connection", (socket) => {
    console.log(socket.id);

    //Receives message from client
    socket.on("newMessage", (data) => {
        console.log(`${data.username}, ${data.msg}`);

        const newChatMessage = new Chat({
            username: data.username,
            message: data.msg,
        });

        newChatMessage.save((err, savedMessage) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Message saved with ID: ${savedMessage._id}`);
                io.emit("sendMessage", savedMessage);
            }
        });

        //Broadcasts message object with local false flag back to all clients except for sender, sender gets it locally
    });
});

const connect = mongoose.connect(config.mongoUrl);

connect.then(() => console.log("Connected to the database!")).catch((err) => console.log(err));

const app = express();
app.use(
    cors({
        origin: "http://127.0.0.1:5173",
    })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(cookieParser());
//Routes

app.get("/", (req, res) => {
    res.json({ message: "Hello!" });
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRouter);
app.use("/api/chats", chatRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
