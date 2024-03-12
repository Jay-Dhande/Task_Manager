const TaskSchema =  require('../models/TaskModel') ; 

exports.addTask =  async( req , res) => {

    const { email ,taskTitle, taskDescription,taskType,Adddate , Targetdate ,Done } = req.body ;
    
    const tasks = TaskSchema({
        email, taskTitle, taskDescription,taskType,Adddate , Targetdate , Done
    }) 

    try {

        if(!email || !taskTitle || !taskDescription || !taskType || !Adddate  ){
            
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
            const tasks =  await TaskSchema.find({name:req.query.email}).sort({createdAt: -1}) ; 
            res.status(200).json(tasks) ; 
    }
    catch(err){
         res.status(500).json({message:"Some Error Occured" })
    }
}

exports.getdata = async(req , res) => {
    try{
        const tasks =  await TaskSchema.find({
            email: req.query.email,
            taskTitle: req.query.taskTitle , 
          }).sort({ createdAt: -1 });
        res.status(200).json(tasks) ; 
    }
    catch(err){
     res.status(500).json({message:"Some Error Occured" })
}
}

exports.DeleteTask = async (req , res) => {
    // console.log("req params" , req.body , req.query)

    const id =req.params.id ; 
    // console.log(id) ; 
    // console.log(req.body) ; 
    TaskSchema.findByIdAndDelete(id)
    .then(
        res.status(200).json({message:'Task deleted'})
    )
    .catch((err) => {
        res.status(500).json({message:'Server Error'})
    }) 
}

