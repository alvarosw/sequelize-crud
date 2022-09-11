import { Sequelize } from 'sequelize'

const { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD } = process.env as Record<
  string,
  string
>

export default new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
})
