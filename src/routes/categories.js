const express = require("express");
const router = express.Router();

const Category = require("../models/categories");
const Product = require("../models/products");



//create Categories

router.post('/create', async (req, res) => {
    //  console.log(req.body, 9)

    var data = await new Category(req.body).save();

    res.json({ status: 1, data: data });

});


//update Categories

router.post('/update/:id', async (req, res) => {

    var data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json({ status: 1, data: data });

});
//get all  Categories 

router.get('/all', async (req, res) => {

    var data = await Category.find();

    res.json({ status: 1, data: data });

});

//get all  Categories  with products

router.get('/allwithproducts', async (req, res) => {

    var data = await Category.find();

    data = JSON.parse(JSON.stringify(data));
    var recProducts = await Product.find({ recommended: true })

    for (var i = 0; i < data.length; i++) {
        var prods = await Product.find({ categoryId: data[i]._id });
        data[i].products = prods;
    }

    res.json({ status: 1, data: data, recommended: recProducts });

});



module.exports = router;