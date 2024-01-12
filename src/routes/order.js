const express = require("express");
const router = express.Router();

const Order = require("../models/order");
const User = require("../models/users");



//create Order

router.post('/create', async (req, res) => {
    try {

        var data = await new Order(req.body).save();
        console.log(data);
        res.json({ status: 1, data: data });
    } catch (err) {

        console.log('no data');
    }

});


//update Order

router.post('/update/:id', async (req, res) => {

    var data = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json({ status: 1, data: data });

});
//get all Order

router.get('/all', async (req, res) => {

    var data = await Order.find();

    res.json({ status: 1, data: data });

});
router.get('/allwithuser/:id', async (req, res) => {

    var data = await Order.find({ userId: req.params.id }).populate("products.productId")

    res.json({ status: 1, data: data, });

});


module.exports = router;