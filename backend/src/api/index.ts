import { Router } from "express";

import tasksRoutes from "./tasks";
import usersRoutes from "./users";

const router = Router();

router.use("/tasks/", tasksRoutes);
router.use("/users/", usersRoutes);

export default router;
