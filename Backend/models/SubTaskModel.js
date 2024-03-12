const mongoose =  require("mongoose") ; 

const SubTaskSchema = new mongoose.Schema({
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
    SubTaskTitle:{
        type: String , 
        required:true ,
        trim : true , 
        maxLength:60 ,
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
    Done:{
        type: Boolean ,
        required:true
    }


    
});

module.exports = mongoose.model('SubTask' , SubTaskSchema) ; 