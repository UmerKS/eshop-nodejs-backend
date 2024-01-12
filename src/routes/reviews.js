const express = require("express");
const Product = require("../models/products");
const router = express.Router();

const Reviews = require("../models/reviews");



//create Reviews

router.post('/create', async (req, res) => {

    var data = await new Reviews(req.body).save();

    res.json({ status: 1, data: data });

});


//update Reviews

router.post('/update/:id', async (req, res) => {

    var data = await Reviews.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json({ status: 1, data: data });

});
//get all Reviews

router.get('/all', async (req, res) => {

    var data = await Reviews.find();

    res.json({ status: 1, data: data });

});
//get  Reviews against product
// router.get('/all/:productId', async (req, res) => {

//     var data = await Reviews.find({ productId: req.params.productId }).populate('userId')

//     res.json({ status: 1, data: data });

// });

router.get('/allwithproducts', async (req, res) => {

    var data = await Product.find();


    data = JSON.parse(JSON.stringify(data));
    var recReviews = await Reviews.find()

    for (var i = 0; i < data.length; i++) {
        var rew = await Reviews.find({ productId: data[i]._id });

        data[i].Reviews = rew;
    }

    res.json({ status: 1, data: data, recommended: recReviews });

});


module.exports = router;