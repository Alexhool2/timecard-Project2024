import express from "express"
import * as TimeCardController from "../controllers/timeCard"
import timecards from "../models/timecards"

const router = express.Router()

router.get('/', TimeCardController.getTimeCard)
router.post('/',TimeCardController.createTimeCard)

export default router