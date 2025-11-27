// after clicking on the short link The browser sends a GET request directly to your Node server.
// this route will activate 

const express =require("express")
const router=express.Router()
const Url= require("../model/url")

router.get("/:code",async (req,res)=>{
    const code=req.params.code;
    try{
        const url= await Url.findOne({urlCode:code})

        if(url){
            return res.redirect(url.longUrl);
        }else{
            return res.status(404).json('No url found');
        }
    }catch(err){
        console.error(err);
    res.status(500).json('Server error');
    }
})

module.exports=router;