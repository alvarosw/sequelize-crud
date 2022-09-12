import { FindOptions } from 'sequelize'
import Employee from '../models/employee.model'

export async function get(options?: FindOptions<EmployeeAttributes>) {
  return Employee.findAll(options)
}

export async function create(attrs: EmployeeAttributes) {
  return Employee.create(attrs)
}

export async function getOne(id: number) {
  return Employee.findByPk(id)
}

export async function update(id: number, attrs: Partial<EmployeeInput>) {
  const employee = await getOne(id)
  if (!employee) throw new Error('Not found')

  return employee.update(attrs)
}

export async function destroy(id: number) {
  const deletedCount = await Employee.destroy({
    where: { id },
  })

  return !!deletedCount
}
