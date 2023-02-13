const mongoose=require("mongoose")


const QuerySchema=new mongoose.Schema({
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        mobile:{type:String,required:true},
})

const QueryModel=mongoose.model("Query",QuerySchema)

module.exports={QueryModel}