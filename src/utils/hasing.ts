import bcrypt from 'bcrypt'

//encrypt password
export const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}
