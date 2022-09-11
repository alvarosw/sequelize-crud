import Employee from './models/employee.model'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Employee.sync({ alter: isDev, logging: false })
}
export default dbInit
