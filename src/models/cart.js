const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    name: String,
    price: Number,
    status: String,

})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;