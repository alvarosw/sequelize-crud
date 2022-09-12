import { Router } from 'express'
import EmployeeController from '../controllers/employee.controller'

const router = Router()

router.get('/', EmployeeController.get)
router.post('/', EmployeeController.create)
router.get('/:id', EmployeeController.getById)
router.put('/:id', EmployeeController.update)
router.delete('/:id', EmployeeController.destroy)

export default router
