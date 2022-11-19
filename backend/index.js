const express = require('express');
const notes = require("./data/notes");

const app = express();

app.get("/",(req,res)=>{
    res.send("API is running...");
})
app.get("/api/notes",(req,res)=>{
    res.send("API is running...");
})
app.listen(5000,console.log("Server is running at port 5000"));
