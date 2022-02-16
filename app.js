const express = require("express");
const https = require ("https");

const app =  express();
const url = "https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=c842a18c6341c30721ca65fb7e1014c0&units=metric";
app.get("/",(req , res)=>{
    https.get(url , (response)=>{
        console.log(response);

    })    


        res.send("I am working perfectly,yay!!")
})

app.listen(3000,()=>{
    console.log("Server is running smoothly on port 3000");
})