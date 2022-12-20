const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        fullname:{
            type: String,
           required:true,
        },
        university:{
            type: String,
           required:true,
        },
        department:{
            type: String,
           required:true,
        },
        email:{
            type: String,
           required: true,
           unique: true,
        },
        phone:{
            type: String,
           required:true,
        },
        year:{
            type: String,
           required:true,
        },
        dateofbirth:{
            type: String,
           required:true,
        },
        password:{
            type: String,
           required: true,
        
        },
        profilePics:{
            type: String,
            default: "",
        },
        role:{
            type:String,
            default:"",
        }
    },
   { timestamps: true}
);
module.exports = mongoose.model("user", userSchema);