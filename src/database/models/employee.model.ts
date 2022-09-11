import { Model, DataTypes } from 'sequelize'
import sequelize from '../config'

class Employee extends Model<EmployeeAttributes, EmployeeInput> {
  public id!: number
  public name!: string
  public document!: string
  public email!: string
  public phone!: string
  public salary!: number
  public birthDate!: Date

  public readonly createdAt!: Date
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'birth_date',
    },
  },
  {
    sequelize,
    tableName: 'employees',
    createdAt: 'created_at',
    updatedAt: false,
  }
)

export default Employee
