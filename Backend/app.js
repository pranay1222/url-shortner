// if(process.env.NODE_ENV!=="production"){
//     require('dotenv').config()
// }
require('dotenv').config();
const express=require("express");//importing express module
const app=express();//creating express application
const cors=require("cors");
const mongoose=require("mongoose");

//connect to database
const dbUrl=process.env.Mongo_URL;
//MongoDB connection URL from environment variable

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=> console.log(err));

async function main(){
    await mongoose.connect(dbUrl);//connecting to MongoDB using mongoose
}

//middlewares
app.use(express.json({extended:false}));
app.use(cors()); // Enable CORS so React can talk to Node


// define routes
app.use("/api/url",require("./routes/url"))
app.use("/",require("./routes/index"))

app.listen(5000,()=>{
    console.log("Server is running on port 3000");
})