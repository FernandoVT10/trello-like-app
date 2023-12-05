import { getModelForClass, prop } from "@typegoose/typegoose";

export class UserClass {
  @prop({ required: true, maxlength: 25 })
  public username!: string;
  
  @prop({ required: true })
  public password!: string;
}

const UserModel = getModelForClass(UserClass);

export default UserModel;
