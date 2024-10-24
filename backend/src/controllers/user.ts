import { RequestHandler } from "express";
import UserModel from "../models/user"

export const getUser:RequestHandler = async(req,res,next)=>{
    try {
        const user = await UserModel.find().exec()
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const createUser: RequestHandler = async(req,res,next)=>{
    const {username,password} = req.body
    try {
        const newUser = await UserModel.create({
            username:username,
            password:password
        })
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}