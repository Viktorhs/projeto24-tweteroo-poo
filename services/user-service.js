import { pushUser } from "../repositories/user-repository.js";
import { User } from "../models/user-models.js";

export async function createUser({ username, avatar}) {
  const newUser = new User({
    username,
    avatar
  })
  return await pushUser(newUser);
}