const mongoose = require("mongoose")
const schema=mongoose.Schema(
    {
        "username":{type:String,required:true},
        "password":{type:String,required:true}
    }
)
let loginmodel=mongoose.model=("logins",schema);
module.exports(loginmodel)
