const express=require("express")
const { Connect } = require("./dbConnect/connect")
const cors=require("cors")
// Router --------------------------------------------------------

const Query=require("./Query/query.Router")
const Media=require("./Media/media.Router")
const Content=require("./Content/content.Router")
const Admin=require("./AdminLogin/admin.Router")


const app=express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use("/query",Query)
app.use("/media",Media)
app.use("/content",Content)
app.use("/admin",Admin)


app.get("/",(req,res)=>{
    res.send("This is for Agumentik Project")
})


app.listen(8000,async()=>{
    await Connect()
     console.log("port listen on 8000")
})