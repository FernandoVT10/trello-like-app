import UserService from "@/services/UserService";
import UserValidator from "@/validators/UserValidator";
import asyncHandler from "express-async-handler";

import { Router } from "express";

const router = Router();

router.post("/", ...UserValidator.createUser, asyncHandler(async (req, res) => {
  await UserService.createUser(req.body);

  res.json({
    data: { message: "User created successfully" },
  });
}));

export default router;
