
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import timeCardRoutes from "./routes/timeCard"
import userRoutes from "./routes/user"

const app = express()

app.use(express.json())

app.use("/api/timeCard",timeCardRoutes)
app.use("/api/user",userRoutes)

app.use((req,res,next)=>{
  next(Error("Endpoint not found"))
})


app.use((error:unknown,req:Request,res:Response,next:NextFunction)=>{
  console.log(error);
  let errorMessage = "An unknown error ocurred"
  if(error instanceof Error) errorMessage = error.message
  res.status(500).json({error:errorMessage})
})

export default app
