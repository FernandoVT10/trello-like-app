import { checkSchema, Schema } from "express-validator";

import checkValidation from "@/middlewares/checkValidation";
import UserRepository from "@/repositories/UserRepository";

const createUserSchema: Schema = {
  username: {
    exists: {
      options: { values: "falsy" },
      errorMessage: "Username is required",
      bail: true,
    },
    isLength: {
      options: { max: 25 },
      errorMessage: "Username max length is 25",
      bail: true,
    },
    custom: {
      options: async (username) => {
        const exists = await UserRepository.existsByUsername(username);

        if(exists) {
          throw new Error("Username is already taken");
        }

        return true;
      },
    },
  },
  password: {
    exists: {
      options: { values: "falsy" },
      errorMessage: "Password is required",
    },
  },
};

export default {
  createUser: [checkSchema(createUserSchema), checkValidation],
};
