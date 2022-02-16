const express = require("express");


const app =  express();

app.get("/",(req , res)=>{
        res.send("I am working perfectly,yay!!")
})

app.listen(3000,()=>{
    console.log("Server is running smoothly on port 3000");
})