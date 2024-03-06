const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String , 
        required: true , 
        unique:true
    } , 
    passWord:{
        type:String , 
        required:true
    } , 
    emailId:{
        type : String , 
        required:true 
    }
}) ; 


module.exports = mongoose.model("User" , UserSchema) ; 
