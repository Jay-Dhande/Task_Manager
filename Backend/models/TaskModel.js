const mongoose =  require("mongoose") ; 

const TaskSchema = new mongoose.Schema({
    name: {
        type: String ,
        required: true ,  
        trim: true , 
    }
     , 
    taskTitle:{
        type: String , 
        required:true ,
        trim : true , 
        maxLength:20 , 
    }, 
    taskDescription:{
        type: String , 
        required:true ,
        trim : true , 
        maxLength:100 ,
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

    
});

module.exports = mongoose.model('Task' , TaskSchema) ; 