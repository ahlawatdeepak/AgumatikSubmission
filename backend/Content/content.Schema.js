const mongoose=require("mongoose")


const ContentSchema=new mongoose.Schema({
        image:{type:String,required:true},
        content:{type:String,require:true},
})


const ContentModel=mongoose.model("Content",ContentSchema)

module.exports={ContentModel}