import UserModel from "@/models/User";

interface CreateUserData {
  username: string;
  password: string;
}

const createOne = async (data: CreateUserData): Promise<boolean> => {
  UserModel.create(data);
  return true;
};

const existsByUsername = async (username: string): Promise<boolean> => {
  const count = await UserModel.countDocuments({ username }).limit(1);
  return count > 0;
};

export default {
  createOne,
  existsByUsername,
};
