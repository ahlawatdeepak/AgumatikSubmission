const mongoose=require("mongoose")


const mediaSchema=new mongoose.Schema({
        facebook:{type:String},
        linkdin:{type:String},
        instagram:{type:String},
        
})

const mediaModel=mongoose.model("media",mediaSchema)

module.exports={mediaModel}