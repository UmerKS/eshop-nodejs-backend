const { application } = require("express");

const express = require("express");
const router = express.Router();
// const multer = require("multer") 
// const upload = multer({dest:'/images/'}); 

const Product = require("../models/products");



//create user

router.post('/create', async (req, res) => {
    // console.log(req.body, 13)
    var data = await new Product(req.body).save();

    res.json({ status: 1, data: data });


});


//update user

router.post('/update/:id', async (req, res) => {

    var data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json({ status: 1, data: data });

});

//get all users

router.get('/all', async (req, res) => {

    var data = await Product.find();
    res.json({ status: 1, data: data });

});

router.get('/allproductwithchef/:id', async (req, res) => {
    let data = await Product.find({ schoolId: req.params.id }).populate("chefId")
    res.json({ status: 1, data });
});



module.exports = router;