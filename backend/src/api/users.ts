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

router.post("/login", ...UserValidator.login, asyncHandler(async (req, res) => {
  const username = req.body.username;
  const token = await UserService.generateJWT(username);

  res.json({
    data: { token },
  });
}));

export default router;
