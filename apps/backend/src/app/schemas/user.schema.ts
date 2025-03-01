import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ type : String, required: true })
  name: string;

  @Prop({ type : String, required: true, unique: true })
  email: string;

  @Prop({ type : String, required: true })
  password: string;

  @Prop({ type : String })
  resetPasswordToken?: string;

  @Prop({ type : Date })
  resetPasswordExpires?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
