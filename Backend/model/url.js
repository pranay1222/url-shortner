const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const urlSchema= new Schema({
    urlCode:String,
    longUrl:String,
    shortUrl:String,
    data:{ type: String, default: Date.now }
});

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;