import { RequestHandler } from "express"
import TimeCardModel from "../models/timecards"

export const getTimeCard: RequestHandler = async (req, res,next) => {
    try {    
      const timeCard = await TimeCardModel.find().exec()
    res.status(200).json(timeCard)
    } catch (error) {
      next(error)
    }
    
  }


  export const createTimeCard: RequestHandler = async(req,res,next)=>{
    const {userId,date,time_start,time_end} = req.body
    try {
      const newTimeCard = await TimeCardModel.create({
       user:userId,
        date:date,
        time_start:time_start,
        time_end: time_end
      })  
      res.status(201).json(newTimeCard)
    } catch (error) {
        next(error)
    }
  }
