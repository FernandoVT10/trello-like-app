import UserRepository from "@/repositories/UserRepository";
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

export default {
  createUser,
};
