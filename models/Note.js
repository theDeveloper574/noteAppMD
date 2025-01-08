//1- scheme -> id, userId, title, content, dateadded
//2- create model  -> <scheme> Note

const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Note", noteSchema);