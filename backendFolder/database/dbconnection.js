const mongoose=require("mongoose");


const db=mongoose.connect(process.env.DATABASE_ACCESS,
    ()=>{
    console.log("successfully created database connection");
})

module.exports=db;