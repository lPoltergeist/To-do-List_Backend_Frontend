const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/TasksMiddleware')


const router = express.Router();

router.get('/tasks', tasksController.getAll);

router.post('/tasks', tasksMiddleware.validateTitle, tasksController.createTask);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id',  
tasksMiddleware.validateStatus, 
tasksMiddleware.validateTitle,
 tasksController.updateTask);

module.exports = router;