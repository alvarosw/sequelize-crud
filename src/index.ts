require('dotenv').config()
import dbInit from './database/init'
import { start } from './server/server'

start()
dbInit()
