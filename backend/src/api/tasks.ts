import { Router } from "express";
import asyncHandler from "express-async-handler";

import TaskRepository from "./repositories/TaskRepository";

const router = Router();

router.post("/", asyncHandler(async (req, res) => {
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
