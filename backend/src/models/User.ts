import { getModelForClass, prop } from "@typegoose/typegoose";
import { Base } from "@typegoose/typegoose/lib/defaultClasses";

export interface UserClass extends Base {}

export class UserClass {
  @prop({ required: true, maxlength: 25 })
  public username!: string;
  
  @prop({ required: true })
  public password!: string;
}

const UserModel = getModelForClass(UserClass);

export default UserModel;
