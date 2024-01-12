const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    // userid: String,
    // productid: Number,
    //name:String,
    rating: Number,
    comment: String,
    like: Number,
    time: String,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },



})

const Reviews = mongoose.model('Review', reviewSchema);

module.exports = Reviews;