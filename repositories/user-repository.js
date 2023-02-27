const usuarios = [];

export async function pushUser(user) {
  return usuarios.push(user);
}

export async function findUserAvatar(username) {
    const avatar = usuarios.find(user => user.username === username);
    return avatar.avatar
}