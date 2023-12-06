import UserModel, { UserClass } from "@/models/User";

const findOneUser = (): Promise<UserClass | null> => {
  return UserModel.findOne();
};

interface CreateUserData {
  username: string;
  password: string;
}

const createUser = (data: CreateUserData): Promise<UserClass> => {
  return UserModel.create(data);
};

export default {
  findOneUser,
  createUser,
};
