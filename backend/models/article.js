const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    headline: {
        type: String,
        required: true,
        trim: true
    },
    imgURL: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        // required: true,
        trim: true
    },
})

var Article = mongoose.model('Article', articleSchema);

module.exports = {
    Article,
    articleSchema
}