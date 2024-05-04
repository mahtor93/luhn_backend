import express from 'express'
import { getCardData,getBinData, getCountries,getBanks } from '../controllers/card.controller.js'
const router = express.Router()

const raiz = '/card'

router.get(`${raiz}/`, getCardData)
router.get(`${raiz}/:bin`, getBinData)
router.get(`/getBanks/:aimCountry`, getBanks)
router.get(`/getCountries`, getCountries)
/*
router.get(`${raiz}generate/:cantidad`, generateCard)
*/
export default router