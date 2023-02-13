const express=require("express")
const { ContentModel } = require("./content.Schema")


 
const Content=express.Router()


Content.get("/",async(req,res)=>{
      try {
           
           const ContentData=await ContentModel.find()
           res.send({data:ContentData})

      } catch (error) {
         res.status(500).send(error.message)
      }
})



Content.post("/",async(req,res)=>{
             
     const {image,content}=req.body
      
    try {

        const data=await ContentModel.create({image,content})
        res.send({data:data,message:"content added successfully"})
         

    } catch (error) {
       res.status(500).send(error.message)
    }
})


module.exports=Content