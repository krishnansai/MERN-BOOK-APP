const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");

const cors = require("cors");
const app = express();


app.use(express.json());

app.use(cors());

app.use("/books",router);


app.use('/',(req,res,next)=>{
    res.send("this is our app");
}
);

mongoose.connect("mongodb+srv://admin:TUJ5xTc3wKwxxIuj@cluster0.mzwt1.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected..."))
    .then(() => {
        app.listen(process.env.PORT || 5000, 
            () => console.log("Server is running..."));
})
.catch((err) => console.log(err));

// app.listen(process.env.PORT || 3000, 
// 	() => console.log("Server is running..."));

//TUJ5xTc3wKwxxIuj