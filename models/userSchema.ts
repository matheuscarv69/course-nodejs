import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String }
});

export default UserSchema;