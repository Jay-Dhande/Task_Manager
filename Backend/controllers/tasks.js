const TaskSchema =  require('../models/TaskModel') ; 

exports.addTask =  async( req , res) => {

    const { name ,taskTitle, taskDescription,taskType,Adddate , Targetdate  } = req.body ;
    
    const tasks = TaskSchema({
        name, taskTitle, taskDescription,taskType,Adddate , Targetdate
    }) 

    try {
        if(!name  ){
            
            return res.status(400).json({message:"Fill name Properly"})
        }
        if(!taskTitle ){
            
            return res.status(400).json({message:"Fill !taskTitle Properly"})
        }
        if(!taskDescription ){
            
            return res.status(400).json({message:"Fill !taskDescription Properly"})
        }
        if( !taskType ){
            
            return res.status(400).json({message:"Fill !taskType Properly"})
        }
        if(!name || !taskTitle || !taskDescription || !taskType || !Adddate ){
            
            return res.status(400).json({message:"Fill All Fields Properly"})
        }



        if(!name || !taskTitle || !taskDescription || !taskType || !Adddate ){
            
            return res.status(400).json({message:"Fill All Fields Properly"})
        }
        if(Adddate > Targetdate && Targetdate){
            return res.status(400).json({message:"TargetDate should be after Start Date "})
        }

        await tasks.save()
        res.status(200).json({message:'Tasks Added'})
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error"})
    }

}

exports.getTask = async(req , res) => {
    try{
            const tasks =  await TaskSchema.find({name:req.query.name}).sort({createdAt: -1}) ; 
            res.status(200).json(tasks) ; 
    }
    catch(err){
         res.status(500).json({message:"Some Error Occured" })
    }
}

exports.getdata = async(req , res) => {
    // console.log("req.params out", req.params);
    // console.log("req body out" , req.body) ; 
    // console.log("req query out" , req.query) ; 
    // console.log("req out" , req) ; 
    
    try{
        // console.log("req.params", req.params);
        // console.log("req body" , req.body) ; 
        // console.log("req query" , req.query) ; 
        const tasks =  await TaskSchema.find({
            name: req.query.name,
            taskTitle: req.query.taskTitle
          }).sort({ createdAt: -1 });
        res.status(200).json(tasks) ; 
    }
    catch(err){
     res.status(500).json({message:"Some Error Occured" })
}
}

// {
//    "name": "user one", 
//     "taskTitle":"task-two", 
//     "taskDescription":"check task added or not 2nd time ",
//     "taskType":"web dev",
//     "Adddate":"2024-03-04", 
//     "Targetdate":"2024-03-08"
// }