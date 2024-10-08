import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      default: '',
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      default: '',
    },
    role: {
      type: String,
      default: 'regular',
    },
  },
  {
    timestamps: true,
  },
)

const UserModel = mongoose.model('User', userSchema)
export default UserModel
