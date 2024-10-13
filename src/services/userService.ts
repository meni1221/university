import bcrypt from "bcrypt";
import userModel from "../models/userModel";
import userDTO from "../models/DTO/usersDTO";

export const CreateUser = async (user: userDTO) => {
  try {
    const { user_name, email, password,classroom } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const dbUser = new userModel({
      user_name,
      email,
      password: hashedPassword,
      classroom
    });
    await dbUser.save();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
