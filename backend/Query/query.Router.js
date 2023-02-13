const express=require("express")
const { QueryModel } = require("./query.Schema")

 
const Query=express.Router()


Query.get("/",async(req,res)=>{
      try {
           
           const QueryData=await QueryModel.find()
           res.send({data:QueryData})

      } catch (error) {
         res.status(500).send(error.message)
      }
})



Query.post("/",async(req,res)=>{
             
     const {name,email,mobile}=req.body
      
    try {

        const data=await QueryModel.create({name,email,mobile})
        res.send({data:data,message:"data added successfully"})
         

    } catch (error) {
       res.status(500).send(error.message)
    }
})


module.exports=Query