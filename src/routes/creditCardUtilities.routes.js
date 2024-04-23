import express from 'express'
import { getCardData } from '../controllers/creditCardUtilities.controllers.js'
const router = express.Router()

router.get('/card/', getCardData)


export default router