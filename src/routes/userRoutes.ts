import { Router } from "express";
import {createUser,addGrad,getAllGrads,updateGrad,getAverageGrads,getGrad,} from "../controllers/userController";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.patch("/:id", addGrad);
userRouter.get("/classrom", getAllGrads);
userRouter.patch("/up/:id", updateGrad);
userRouter.get("/classrom/avg/:id", getAverageGrads);
userRouter.get(":id", getGrad);

export default userRouter;
