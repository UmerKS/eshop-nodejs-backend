const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    discount: Number,
    image: String,
    color: String,
    description: String,
    recommended: { type: Boolean, default: false },
    status: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;