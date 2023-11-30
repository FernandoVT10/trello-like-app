import { Router } from "express";
import asyncHandler from "express-async-handler";

import TaskRepository from "@/repositories/TaskRepository";
import TaskValidator from "@/validators/TaskValidator";

const router = Router();

router.post("/", ...TaskValidator.createTask, asyncHandler(async (req, res) => {
  const name = req.body.name;

  const createdTask = await TaskRepository.createOne({ name });

  res.json({
    data: createdTask,
  });
}));

router.get("/", asyncHandler(async (_, res) => {
  const tasks = await TaskRepository.getAll();

  res.json({
    data: tasks,
  });
}));

export default router;
