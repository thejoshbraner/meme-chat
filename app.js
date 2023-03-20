const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const io = require("socket.io")(3000, {
    cors: {
        origin: `https://localhost:${process.env.PORT || 3444}`,
        credentials: true,
    },
});
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const chatRouter = require("./routes/chatRouter");
const userRouter = require("./routes/userRouter");
const Chat = require("./models/chat");
require("dotenv").config();
const sslRedirect = require("express-sslify");

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

const connect = mongoose.connect(process.env.MONGO_ATLAS_URL);

connect.then(() => console.log("Connected to the database!")).catch((err) => console.log(err));

const app = express();

app.use(
    cors({
        origin: `https://localhost:${process.env.PORT || 3444}`,
        credentials: true,
    })
);
app.use(sslRedirect.HTTPS({ trustProtoHeader: true }));

app.use(bodyParser.json());
app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https" && process.env.NODE_ENV === "production") {
        return res.redirect("https://" + req.headers.host + req.url);
    }
    return next();
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Passport
app.use(passport.initialize());
app.use(cookieParser());

//Routes
// app.get("*.js", function (req, res, next) {
//     res.setHeader("Content-Type", "application/javascript");
//     next();
// });

app.use(express.static(path.join(__dirname, "client", "dist")));

app.use("/api/users", userRouter);
app.use("/api/chats", chatRouter);

//Let React app handle internal routing
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
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
