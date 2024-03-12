const mongoose =  require("mongoose") ; 

const TaskSchema = new mongoose.Schema({
    email: {
        type: String ,
        required: true ,  
        trim: true , 
    }
     , 
    taskTitle:{
        type: String , 
        required:true ,
        trim : true , 
        maxLength:40 , 
    }, 
    taskDescription:{
        type: String , 
        required:true ,
        trim : true , 
        maxLength:300 ,
    },
    taskType:{
        type: String , 
        required:true , 
        maxLength:20 , 
        trim:true  , 
    },
    Adddate: {
        type: Date,
        required: true,
        trim: true,
    } , 
    Targetdate: {
        type: Date,
        required: true,
        trim: true,
    } ,
    Done:{
        type: Boolean ,
        required:true
    }

    
});

module.exports = mongoose.model('Task' , TaskSchema) ; 