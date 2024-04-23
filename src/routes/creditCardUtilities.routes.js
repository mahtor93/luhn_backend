import express from 'express'
import { getCardData } from '../controllers/creditCardUtilities.controllers.js'
const router = express.Router()

router.get('/card/:number', getCardData)


export default router