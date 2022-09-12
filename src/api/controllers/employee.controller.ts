import { Request, Response } from 'express'
import * as service from '../../database/services/employee.service'

export default class EmployeeController {
  static async get(req: Request, res: Response) {
    try {
      const employees = await service.get(req.query)

      return res.json(employees)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error getting employees', data: error })
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const employee = await service.getOne(+req.params.id)

      return res.json(employee)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error getting employee', data: error })
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const employee = await service.create(req.body)

      return res.json(employee)
    } catch (error) {
      const status =
        (<any>error).name === 'SequelizeValidationError' ? 400 : 500
      return res
        .status(status)
        .json({ message: 'Error creating employee', data: error })
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const employee = await service.update(+req.params.id, req.body)

      return res.json(employee)
    } catch (error) {
      const status =
        (<any>error).name === 'SequelizeValidationError' ? 400 : 500
      return res
        .status(status)
        .json({ message: 'Error updating employee', data: error })
    }
  }

  static async destroy(req: Request, res: Response) {
    try {
      const deleted = await service.destroy(+req.params.id)

      return res.json({ deleted })
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error creating employees', data: error })
    }
  }
}
