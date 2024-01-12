const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },


})

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;