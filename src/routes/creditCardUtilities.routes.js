import express from 'express'
import { getCardData, getBinData } from '../controllers/creditCardUtilities.controllers.js'
const router = express.Router()

router.get('/card/', getCardData)
router.get('/card/:bin', getBinData)

export default router