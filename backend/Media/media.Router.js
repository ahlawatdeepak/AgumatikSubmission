const express=require("express")
const { mediaModel } = require("./media.Schema")
 
const media=express.Router()


media.get("/",async(req,res)=>{
      try {
           
           const mediaData=await mediaModel.find()
           res.send({data:mediaData[mediaData.length-1]})

      } catch (error) {
         res.status(500).send(error.message)
      }
})



media.patch("/",async(req,res)=>{
             
     const {facebook,linkdin,instagram}=req.body
      
    try {
          
         const data=await mediaModel.findById("63e8c2e70376af4d5ce12dc7")
   
         let temp={
               facebook: facebook ? facebook : data.facebook,
               linkdin : linkdin ? linkdin :  data.linkdin,
               instagram : instagram ? instagram : data.instagram
         }
          
        const UpdateData=await mediaModel.findByIdAndUpdate("63e8c2e70376af4d5ce12dc7",temp)
    
        res.send({data:UpdateData,message:"data added successfully"})
         

    } catch (error) {
       res.status(500).send(error.message)
    }
})


module.exports=media