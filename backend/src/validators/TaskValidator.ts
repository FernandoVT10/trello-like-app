import { checkSchema, Schema } from "express-validator";

import checkValidation from "@/middlewares/checkValidation";

const createTaskSchema: Schema = {
  name: {
    isLength: {
      options: { max: 100 },
      errorMessage: "Name max length is 100",
    },
  },
};

export default {
  createTask: [checkSchema(createTaskSchema), checkValidation],
};
