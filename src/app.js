const express = require("express");
const morgan = require("morgan");

require("./db/conn");
// const fileupload = require('express-fileupload');


const app = express();
const port = process.env.PORT || 8000;
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

app.use(express.json());

app.use(morgan("dev"))
app.get("/", (req, res) => {
    res.send("You did it Umer Khalid");
})

// app.use(fileupload({
//     useTempFiles: true,
//     tempFileDir: 'images/'
// }))

// app.post("/eshop", async (req, es) => {
//     console.log(req.file)
//     let result = {
//         id: 12,
//         name: "image"
//     }
//     res.status(200).json(result)
// })

// const bcrypt = require("bcryptjs");

// const securePassword = async (password) =>{

// const passwordHash = await bcrypt.hash(password, 10); console.log(passwordHash);
// console.log(passwordHash);

// const passwordHash = await bcrypt.compare(password, 10); console.log(passwordHash);
// console.log(passwordHash);

// }
// securePassword("umer123")

//Routes

app.use("/user", require("./routes/users"));
app.use("/category", require("./routes/categories"));
app.use("/product", require("./routes/products"));
app.use("/order", require("./routes/order"));
app.use("/review", require("./routes/reviews"));
app.use("/cart", require("./routes/cart"));




//Connection 

app.listen(port, () => {
    console.log(`Connection is setup qt ${port}`)
})


