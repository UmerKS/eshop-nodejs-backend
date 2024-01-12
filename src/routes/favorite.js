const express = require("express");
const router = express.Router();

const Favorite = require("../models/favorite");



//create user

router.post('/create', async (req, res) => {

    var data = await new Favorite(req.body).save();

    res.json({ status: 1, data: data });

});


//update user

router.post('/update/:id', async (req, res) => {

    var data = await Favorite.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json({ status: 1, data: data });

});
//get all users

router.get('/all', async (req, res) => {

    var data = await Favorite.find();

    res.json({ status: 1, data: data });

});



module.exports = router;