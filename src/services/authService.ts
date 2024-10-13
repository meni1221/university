import bcrypt from "bcrypt";
import UserModel from "../models/userModel";
import jwt from "jsonwebtoken";
import loginDTO from "../models/DTO/loginDTO";
import "dotenv/config"

export const loginservice = async (user: loginDTO) => {
  try {
    const dbUser = await UserModel.findOne({ user_name: user.user_name });

    if (!dbUser) throw new Error("user not found");

    if (!(await bcrypt.compare(user.password, dbUser.password))) {
      throw new Error("wrong password");
    }

    const token = await jwt.sign(
      {
        user_name: dbUser.user_name,
        is_Ateacher: dbUser.is_Ateacher,
        id: dbUser._id,
      },
      process.env.TOKEN_SECRET!,
      {
        expiresIn: "3m",
      }
    );
    return token;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
