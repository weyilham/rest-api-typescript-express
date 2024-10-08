import UserModel from '../models/user.model'
import UserInterface from '../types/user.type'

export const userRegister = async (payload: UserInterface) => {
  return await UserModel.create(payload)
}
