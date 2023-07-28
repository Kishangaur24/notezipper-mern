const express = require("express")
const cors = require("cors")
const app = express()
const notes = require("./data/const")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

app.use(cors())
dotenv.config()
connectDB()
app.get("/",(req,res)=>{
    res.send("Api is Running")
})

app.get("/api/notes",(req,res)=>{
    res.json(notes)
})
app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=>n._id===req.params.id)
    res.send(note)

})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server port running on ${PORT}`))