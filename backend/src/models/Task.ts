import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class TaskClass extends TimeStamps {
  @prop({ required: true, maxlength: 200 })
  public name!: string;
}

const TaskModel = getModelForClass(TaskClass);

export default TaskModel;
