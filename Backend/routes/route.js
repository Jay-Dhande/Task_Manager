const router = require('express').Router() ; 
const { addsubTask } = require('../controllers/subtasks');
const {addTask, getTask} = require('../controllers/tasks') ; 
// router.get("/" , r) ; 

router.post('/add-task' , addTask)
      .get('/get-tasks' , getTask)
      .post('/taskid/add-subtask' , addsubTask)
      


      module.exports = router ; 