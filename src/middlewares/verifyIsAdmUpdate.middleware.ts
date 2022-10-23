import { NextFunction , Request, Response} from "express";
import {IUpdateToken} from "../interfaces/users"
import jwt from 'jsonwebtoken'

const verifyIsAdmUpdateMiddleware = async (req:Request, res:Response, next:NextFunction) =>{
  const {isAdm} = req.user
  const {id} = req.params
  let token = req.headers.authorization

  token = token!.split(' ')[1]
  
  const dataToken = jwt.decode(token) as IUpdateToken

  if(dataToken.id !== id && isAdm == false){
    return res.status(401).json({message:"You dont is a adm"})
  }
  next()
}

export default verifyIsAdmUpdateMiddleware