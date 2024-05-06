import express from 'express'
import creditCardUtils from './src/luhn.js'
import router from './src/routes/creditCardUtilities.routes.js'
import dbConnection from './config/db.config.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
dbConnection().catch(console.error)
let start = new Date().getTime()

const app = express()

app.use(cors())
const corsOptions = {
    origin: 'http://localhost:3000', // Especifica el origen permitido
    optionsSuccessStatus: 200 // Algunos navegadores antiguos (IE11, varias versiones de Android) no envían la cabecera 'Access-Control-Allow-Origin' en las solicitudes de recursos CORS preflight. Seteando este campo a 200 indica al navegador que la solicitud CORS fue exitosa y que el recurso puede ser usado.
  };
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3333

app.use('/',router)
app.listen(PORT, () => { });

export default app;