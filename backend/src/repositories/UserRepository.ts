import UserModel, { UserClass } from "@/models/User";

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

const getPasswordByUsername = async (username: string): Promise<string | undefined> => {
  const user = await UserModel.findOne({ username });

  return user?.password || undefined;
};

const getUserByUsername = async (username: string): Promise<Omit<UserClass, "password">> => {
  // password is omitted by default
  return UserModel.findOne({ username }).select("-password");
};

export default {
  createOne,
  existsByUsername,
  getPasswordByUsername,
  getUserByUsername,
};
