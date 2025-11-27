const mongoose=require("mongoose");

const dbUrl=process.env.Mongo_URL;

const ConnectDB= async ()=>{
    try{
        await mongoose.connect(dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to MongoDB")
    }catch(err){
        console.log(err.message)
    }
}
module.exports=ConnectDB;
