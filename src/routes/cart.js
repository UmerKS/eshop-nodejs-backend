const express = require("express");
const router = express.Router();

const Cart = require("../models/cart");

//Create Cart
router.post('/create', async (req, res) => {
    //  console.log(req.body, 9)

    var data = await new Cart(req.body).save();

    res.json({ status: 1, data: data });

});


//update Cart

router.post('/update/:id', async (req, res) => {

    var data = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json({ status: 1, data: data });

});

//Delete Cart

router.delete("/delete/:id", async (req, res) => {
    var data = await Cart.deleteOne(req.params.id, res.body)
    res.json({ status: 1, data: data });
});

// Get all Cart

router.get('/all', async (req, res) => {

    var data = await Cart.find();

    res.json({ status: 1, data: data });

});

module.exports = router