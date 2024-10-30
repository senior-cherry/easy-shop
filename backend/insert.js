const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.CONNECTION_STRING);
const db = mongoose.connection;
mongoose.set('strictQuery', false);
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");

    const BookSchema = mongoose.Schema({
        name: String,
        price: Number,
        quantity: Number
    });

    const Book = mongoose.model('Book', BookSchema, 'products');

    const book1 = new Book({name: 'Introduction to Mongoose', price: 10, quantity: 25});

    book1.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
    });

});
