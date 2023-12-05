import UserModel, { UserClass } from "@/models/User";

const findOneUser = (): Promise<UserClass | null> => {
  return UserModel.findOne();
};

const createUser = (data: UserClass): Promise<UserClass> => {
  return UserModel.create(data);
};

export default {
  findOneUser,
  createUser,
};
