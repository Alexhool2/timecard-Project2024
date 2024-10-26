import { RequestHandler } from "express"
import TimeCardModel from "../models/timecards"

export const getTimeCards: RequestHandler = async (req, res,next) => {
    try {    
      const timeCards = await TimeCardModel.find().exec()
    res.status(200).json(timeCards)
    } catch (error) {
      next(error)
    }
    
  }

  export const getTimeCard: RequestHandler = async (req,res,next)=>{
    const timeCardId = req.params.timeCardId
    try {
      const timeCard = await TimeCardModel.findById(timeCardId).exec()
      res.status(200).json(timeCard)
    } catch (error) {
      next(error)
    }
  }


interface CreateTimeCardBody {
  user_id: string,
  date:Date,
  time_start?:Date,
  time_end?:Date,
  status: String
}

  export const createTimeCard: RequestHandler = async(req,res,next)=>{
    const {user_id,date,time_start,time_end,status} = req.body

const currentDate =  new Date().toISOString().split("T")[0]
    try {
      const newTimeCard = await TimeCardModel.create({
       user:user_id,
        date:currentDate,
        time_start:time_start? new Date(time_start).toISOString() : null,
        time_end: time_end? new Date(time_end).toISOString() : null,
        status: status || "absent"
      })  
      res.status(201).json(newTimeCard)
    } catch (error) {
        next(error)
    }
  }
