import express from "express"
import * as TimeCardController from "../controllers/timeCard"


const router = express.Router()

router.get('/', TimeCardController.getTimeCards)
router.get('/:timeCardId',TimeCardController.getTimeCard)
router.post('/',TimeCardController.createTimeCard)

export default router