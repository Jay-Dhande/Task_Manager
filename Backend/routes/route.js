const router = require('express').Router() ; 
const { addSubTask ,getSubTasks } = require('../controllers/subtasks');
const {addTask, getTask , getdata , DeleteTask} = require('../controllers/tasks') ; 
const {addUser} =require('../controllers/user')
// router.get("/" , r) ; 

router.post('/add-task' , addTask)
      .get('/get-tasks' , getTask)
      .get('/get-data' , getdata)
      .post('/add-subTask' , addSubTask)
      .get('/get-subTasks' , getSubTasks)
      .post('/add-user' , addUser) 
      .delete('/delete-Task/:id' , DeleteTask)

      module.exports = router ; 