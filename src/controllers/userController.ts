import { Request, Response } from "express";
import userDTO from "../models/DTO/usersDTO";
import {CreateUser} from "../services/userService"
export const createUser = async (req: Request<any,any,userDTO>, res: Response) => {
    try {
        await CreateUser(req.body)
        res.status(201).json({
          msg:"user created"
        })
      } catch (err) {
        res.status(400).json(err)
      }
};

export const addGrad = async (req: Request, res: Response) => {};

export const getAllGrads = async (req: Request, res: Response) => {};

export const updateGrad = async (req: Request, res: Response) => {};

export const getAverageGrads = async (req: Request, res: Response) => {};

export const getGrad = async (req: Request, res: Response) => {};


