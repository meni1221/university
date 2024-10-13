import { Request, Response } from "express";
import { loginservice } from "../services/authService";
import loginDTO from "../models/DTO/loginDTO"

export const login = async (req: Request<any,any,loginDTO>, res: Response) => {
  try {
    const token = await loginservice(req.body);
    res.cookie("token", token);
    res.json({
      msg: `welcome ${req.body.user_name}! so good to see you!!`,
    })
  } catch (err:any) {
    res.status(400).send(err.message);
  }
};
