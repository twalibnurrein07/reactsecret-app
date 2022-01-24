
const express=require("express");
const router=express.Router();
const Person=require("../database/dbschema.js");





router.post('/login',(req,res)=>{
    const person=new Person({
        username:req.body.username,
        password:req.body.password
    })
    Person.find({},(docs,err)=>{
        if(docs.length===0){
            Person.create({person},(err,res)=>{
                if(!err){
                    console.log("successfully inserted data");
                }
            })
        }
    })

    

    // person.save((err,res)=>{
    //     if(!err){
    //         console.log("successfully inserted document");
    //     }
    // })

})

module.exports=router