let mongoose = require('mongoose');

// create a model class
// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number,

}, {
    collection: "book"
});
/**
 * add your code to 
 * create your model here
 * 
 */

module.exports = mongoose.model('Book', bookModel);