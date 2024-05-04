import express from 'express'
import creditCardUtils from './src/luhn.js'
import router from './src/routes/creditCardUtilities.routes.js'
import dbConnection from './config/db.config.js'
import dotenv from 'dotenv'

dotenv.config()
dbConnection().catch(console.error)
let start = new Date().getTime()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3333

app.use('/',router)
app.listen(PORT, () => { });

export default app;