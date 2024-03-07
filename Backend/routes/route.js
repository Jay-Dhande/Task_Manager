const router = require('express').Router() ; 
const { addsubTask } = require('../controllers/subtasks');
const {addTask, getTask , getdata} = require('../controllers/tasks') ; 
// router.get("/" , r) ; 

router.post('/add-task' , addTask)
      .get('/get-tasks' , getTask)
      .post('/taskid/add-subtask' , addsubTask)
      .get('/get-data' , getdata)


      module.exports = router ; 