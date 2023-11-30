import TaskModel, { TaskClass } from "@/models/Task";

interface CreateTaskData {
  name: string;
}

const createOne = (data: CreateTaskData): Promise<TaskClass> => {
  return TaskModel.create(data);
};

const getAll = (): Promise<TaskClass[]> => {
  return TaskModel.find();
};

export default {
  createOne,
  getAll,
};
