const express = require("express");
const router = express.Router();

const Setting = require("../mdoels/setting");


//create
router.post('/create', async (req, res) => {

    var data = await new Setting(req.body).save();

    res.json({ status: 1, data: data });

});


//update user

router.post('/update/:id', async (req, res) => {

    var data = await Setting.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.json({ status: 1, data: data });

});
//get all users

router.get('/all', async (req, res) => {

    var data = await Setting.find();

    res.json({ status: 1, data: data });

});



module.exports = router;