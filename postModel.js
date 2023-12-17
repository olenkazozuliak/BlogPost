let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

let PostModel = mongoose.model("PostModel", postSchema); // Fix the variable name

module.exports = PostModel; // Correct export statement
