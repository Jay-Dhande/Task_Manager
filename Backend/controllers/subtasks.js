const SubTaskSchema =  require('../models/SubTaskModel')

exports.addsubTask = async(req,res) => {
    const {name , taskTitle, taskDescription,taskType,SubTaskTitle, SubTaskContent, SubAdddate , SubTargetdate} = req.body ;

    const subTasks = SubTaskSchema({
        name , taskTitle, taskDescription,taskType,SubTaskTitle, SubTaskContent, SubAdddate , SubTargetdate
    }) ;
    try {
        await subTasks.save() ; 
        res.status(200).json({message:"subTask Added"}) ; 
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error"})
    }

}


