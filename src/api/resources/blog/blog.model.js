const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    content: String,
    _user: Schema.Types.ObjectId
});

module.exports = mongoose.model('Blog', blogSchema);