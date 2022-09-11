interface EmployeeAttributes {
  id: number
  name: string
  document: string
  email: string
  phone: string
  salary: number
  birthDate: Date
  createdAt?: Date
}

interface EmployeeInput extends Omit<EmployeeAttributes, 'id'> {}
interface EmployeeOutput extends Required<EmployeeAttributes> {}
