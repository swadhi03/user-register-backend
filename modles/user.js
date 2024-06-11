const mongoose = require("mongoose")
const schema=mongoose.Schema(
    {
        "name" :{type:String,required:true},
        "dob" :String,
        "bloodgrp" :{type:String,required:true},
        "mobile" :{type:String,required:true},
        "address" :{type:String,required:true},
        "pincode" :{type:String,required:true},
        "district" :{type:String,required:true},
        "place" :{type:String,required:true},
        "email" :{type:String,required:true},
        "username" :{type:String,required:true},
        "password" :String,
        "confirmpassword" :String
    }
)

let usermodel=mongoose.model("users",schema);
module.exports={usermodel}
