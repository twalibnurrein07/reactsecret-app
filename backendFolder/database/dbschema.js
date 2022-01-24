const mongoose = require("mongoose")

const db=require("./dbconnection");


const personSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Person",personSchema);