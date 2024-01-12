const mongoose = require("mongoose");


const usersSchema = mongoose.Schema({
    email: String,
    password: String,
    phonecode: Number,
    phonenumber: Number,
    name: String,
    image: String,
    notification: String,
    country: String,
    status: String,


})

// create a new Collection using this model


// password hash 
// usersSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         // console.log(`password befor hash is: ${thsi.password}`);
//         this.password = await bcrypt.hash(password, 10);
//         // console.log(`password  after hash is: ${thsi.password}`);
//     }
//     next();
// })



const User = mongoose.model('User', usersSchema);

module.exports = User;
