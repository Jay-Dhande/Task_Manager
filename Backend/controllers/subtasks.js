const SubTaskSchema =  require('../models/SubTaskModel')

exports.addSubTask = async(req,res) => {
    const {name , taskTitle,SubTaskTitle, SubTaskContent, SubAdddate , SubTargetdate} = req.body ;

    const subTasks = SubTaskSchema({
        name , taskTitle,SubTaskTitle, SubTaskContent, SubAdddate , SubTargetdate
    }) ;
    try {
        await subTasks.save() ; 
        res.status(200).json({message:"subTask Added"}) ; 
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error"})
    }

}

exports.getSubTasks = async(req , res) => {
    try{ 
        const subtasks =  await SubTaskSchema.find({
            name: req.query.name,
            taskTitle: req.query.taskTitle
          }).sort({ createdAt: -1 });
        res.status(200).json(subtasks) ; 
    }
    catch(err){
     res.status(500).json({message:"Some Error Occured" })
}
}
