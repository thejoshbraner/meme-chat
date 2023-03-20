const mongoose = require("mongoose");
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

module.exports = mongoose.model("Chat", chatSchema);
