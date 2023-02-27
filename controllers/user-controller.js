import { createUser } from "../services/user-service.js";

export async function userPost(req, res) {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  try {
    await createUser({ username, avatar });
    return res.sendStatus(200)
  } catch (error) {
    return res.sendStatus(500)
  }
}