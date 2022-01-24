const express=require('express');
const app=express();
const cors=require("cors");
require("dotenv").config();


// const routeUrls=require("./routes/routes.js");

app.use(express.json()) 
app.use(cors())
app.use(require("./routes/routes.js"));
// app.use(bodyParser.urlencoded({extended:true}))
// app.use("/",routeUrls)

const db=require("./database/dbconnection.js")
app.listen(4000,()=>{
    console.log('Server is up and running at port 4000');
})


   























