const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Api is Running")
})

app.listen(5000,console.log("Server port running on 5000"))