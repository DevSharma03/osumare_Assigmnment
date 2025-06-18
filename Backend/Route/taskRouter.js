const express = require('express');
const router = express.Router();
const { gTasks, gTaskById, cTask, uTask, dTask } = require('../Controller/taskController');

router.get('/tasks', gTasks);      // route to get task
router.get('/tasks/:id', gTaskById);    // route to get task by id
router.post('/tasks', cTask);      // route to create a new task
router.put('/tasks/:id', uTask);    // route to update a task with the help of id
router.delete('/tasks/:id', dTask);     // route to delete a task by filtering it with the help of id

module.exports = router;