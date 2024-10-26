
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import timeCardRoutes from "./routes/timeCard"
import userRoutes from "./routes/user"
import morgan from 'morgan'
import createHttpError, { isHttpError } from 'http-errors'

const app = express()

app.use(morgan("dev"))

app.use(express.json())

app.use("/api/timeCard",timeCardRoutes)
app.use("/api/user",userRoutes)

app.use((req,res,next)=>{
  next(createHttpError(404,"EndPoint not found"))
})


app.use((error:unknown,req:Request,res:Response,next:NextFunction)=>{
  console.log(error);
  let errorMessage = "An unknown error ocurred"
  let statusCode = 500
  if(isHttpError(error)){
statusCode = error.status
errorMessage = error.message
  }
  res.status(statusCode).json({error:errorMessage})
})

export default app
