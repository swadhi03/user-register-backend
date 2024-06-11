const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { usermodel } = require("./modles/user")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let user = new usermodel(input)
    user.save()
    console.log(user)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }).catch(
            (error)=>{
                res.json(error)
            }
        )
})



app.listen(8084, () =>{
    console.log("server started")
}
)