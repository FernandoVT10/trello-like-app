import { checkSchema, Schema } from "express-validator";

import checkValidation from "@/middlewares/checkValidation";
import UserRepository from "@/repositories/UserRepository";
import { comparePassword } from "@/utils/passwordHasher";

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

const loginSchema: Schema = {
  username: {
    exists: {
      options: { values: "falsy" },
      errorMessage: "Username is required",
      bail: true,
    },
    custom: {
      options: async (username) => {
        const exists = await UserRepository.existsByUsername(username);

        if(!exists) throw new Error("Username doesn't exist");

        return true;
      },
    },
  },
  password: {
    exists: {
      options: { values: "falsy" },
      errorMessage: "Password is required",
      bail: true,
    },
    custom: {
      options: async (password, { req }) => {
        const hashedPassword = await UserRepository.getPasswordByUsername(req.body.username);

        if(!hashedPassword) return false;

        if(await comparePassword(password, hashedPassword)) {
          return true;
        }

        throw new Error("Password is incorrect");
      },
    }
  }
};

export default {
  createUser: [checkSchema(createUserSchema), checkValidation],
  login: [checkSchema(loginSchema), checkValidation],
};
