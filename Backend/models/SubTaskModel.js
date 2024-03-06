const mongoose =  require("mongoose") ; 

const SubTaskSchema = new mongoose.Schema({
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
    SubTaskTitle:{
        type: String , 
        required:true ,
        trim : true , 
        maxLength:20 ,
    },
    SubTaskContent:{
        type: String , 
        required:true ,
        trim : true , 
        maxLength:2000 , 
    },
    SubAdddate: {
        type: Date,
        required: true,
        trim: true,
    } , 
    SubTargetdate: {
        type: Date,
        required: true,
        trim: true,
    } ,

    
});

module.exports = mongoose.model('SubTask' , SubTaskSchema) ; 