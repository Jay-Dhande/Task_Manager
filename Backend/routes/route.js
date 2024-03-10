const router = require('express').Router() ; 
const { addSubTask ,getSubTasks } = require('../controllers/subtasks');
const {addTask, getTask , getdata} = require('../controllers/tasks') ; 
// router.get("/" , r) ; 

router.post('/add-task' , addTask)
      .get('/get-tasks' , getTask)
      .get('/get-data' , getdata)
      .post('/add-subTask' , addSubTask)
      .get('/get-subTasks' , getSubTasks)
      module.exports = router ; 