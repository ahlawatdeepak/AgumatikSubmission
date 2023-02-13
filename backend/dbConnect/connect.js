const mongoose=require("mongoose")

const Connect=()=>{
    return mongoose.connect("mongodb+srv://deepakahlawat10:deepakahlawat10@cluster0.qkndiwa.mongodb.net/agumentik?retryWrites=true&w=majority")
}

module.exports={Connect}