import { Router } from 'express'
import { deleteTasks, getTask, getTasks, getTasksCount, saveTasks, updateTasks } from '../controllers/tasks'

const router = Router()

router.get('/tasks', getTasks)

router.get('/tasks/count' , getTasksCount)

router.get('/tasks/:id', getTask)

router.post('/tasks', saveTasks)

router.delete('/tasks/:id', deleteTasks)

router.put('/tasks/:id', updateTasks)

module.exports = router