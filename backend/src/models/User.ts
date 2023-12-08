import { getModelForClass, prop } from "@typegoose/typegoose";
import { Base } from "@typegoose/typegoose/lib/defaultClasses";

// eslint-disable-next-line  @typescript-eslint/no-unsafe-declaration-merging
export interface UserClass extends Base {}

// eslint-disable-next-line  @typescript-eslint/no-unsafe-declaration-merging
export class UserClass {
  @prop({ required: true, maxlength: 25 })
  public username!: string;
  
  @prop({ required: true })
  public password!: string;
}

const UserModel = getModelForClass(UserClass);

export default UserModel;
