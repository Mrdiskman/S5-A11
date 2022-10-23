import "dotenv/config";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const account = await userRepository.findOneBy({ email });

  if (!account) {
    throw new Error("Wrong email/password");
  }
  if (!bycrypt.compareSync(password, account.password!)) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    {
      email: email,
      isAdm: account.isAdm,
      isActive: account.isActive,
      id: account.id,
    },
    "123",
    { expiresIn: "1d" }
  );

  return token;
};

export default userLoginService;
