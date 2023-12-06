import UserRepository from "@/repositories/UserRepository";
import jwtHelper from "@/utils/jwtHelper";

import { hashPassword } from "@/utils/passwordHasher";

interface CreateUserData {
  username: string;
  password: string;
}

const createUser = async (data: CreateUserData): Promise<void> => {
  const hashedPassword = await hashPassword(data.password);

  await UserRepository.createOne({
    username: data.username,
    password: hashedPassword,
  });
};

const generateJWT = async (username: string): Promise<string> => {
  const user = await UserRepository.getUserByUsername(username);
  const token = await jwtHelper.signToken({ userId: user._id });
  return token;
};

export default {
  createUser,
  generateJWT,
};
