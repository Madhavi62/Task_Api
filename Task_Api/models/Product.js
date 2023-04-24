const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    id:{
        type:String
    },
    title:{
        type:String
    },
    is_Completed:{
        type:Boolean,
        default:true
    }
})
module.exports= mongoose.model("Product",productSchema)