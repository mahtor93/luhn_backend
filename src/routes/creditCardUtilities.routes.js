import express from 'express'
import { getCardData,getBinData, getCountries,getBanks,getNewtwork,generateCard } from '../controllers/card.controller.js'
const router = express.Router()

const raiz = '/card'

router.get(`${raiz}/:number`, getCardData)
router.get(`${raiz}/:bin`, getBinData)
router.get(`/getBanks/:aimCountry`, getBanks)
router.get(`/getNetworks/:aimBank`, getNewtwork)
router.get(`/getcountries`, getCountries)

router.get(`/generate`, generateCard)

export default router