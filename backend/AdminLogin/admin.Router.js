const express=require("express")
const { AdminModel } = require("./admin.schema")

 
const Admin=express.Router()


Admin.get("/",async(req,res)=>{
      try {
           
           const AdminData=await AdminModel.find()
           res.send({data:AdminData})

      } catch (error) {
         res.status(500).send(error.message)
      }
})



Admin.post("/",async(req,res)=>{
             
     const {email,password}=req.body
      
    try {
        const AdminData=await AdminModel.find({email})
      //   console.log(AdminData[0].password)
        if(AdminData.length>0 && AdminData[0].password==password){
           return   res.send({message:" login success"})
        }
        else if(AdminData.length>0 && AdminData[0].password!=password){
           return res.status(500).send({message:"Password not match"})
        }
        

        const data=await AdminModel.create({email,password})
        res.send({data:data,message:"admin login success"})
         

    } catch (error) {
       res.status(500).send(error.message)
    }
})

module.exports=Admin