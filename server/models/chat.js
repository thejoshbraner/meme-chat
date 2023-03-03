const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Chat", chatSchema);
