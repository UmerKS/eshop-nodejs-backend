const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({


    //address: String,
    totalPrice: Number,
    subTotal: Number,
    status: String,
    tax: Number,
    house: String,
    street: String,
    area: String,
    landmark: String,
    pincode: Number,
    //shippincost: Number,
    paymentstatus: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
        {
            qty: Number,
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        }

    ],

})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
