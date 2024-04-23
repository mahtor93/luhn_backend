import express from 'express'
import { getCardData, getBinData, generateCard } from '../controllers/creditCardUtilities.controllers.js'
const router = express.Router()

const raiz = '/card/'

router.get(`${raiz}`, getCardData)
router.get(`${raiz}:bin`, getBinData)
router.get(`${raiz}generate/:cantidad`, generateCard)

export default router