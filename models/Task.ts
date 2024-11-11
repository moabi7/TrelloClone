import { Object, Types, BSON } from "realm";

export class Task extends Object<Task, "description"> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  description!: string;
  isComplete = false;
  created_at: Date = new Date();
  user_id!: string;
 
  static primaryKey = '_id';
}