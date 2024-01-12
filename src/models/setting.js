const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
    pp: String,

})

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;