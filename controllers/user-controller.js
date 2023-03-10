class UserController {
  constructor() {
    this.usuarios = []
    this.signin = this.signin.bind(this)
    this.getLoggedUser = this.getLoggedUser.bind(this)
  }

  signin(req, res){
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }

    this.usuarios.push({username, avatar})

    res.sendStatus(200)
  }

  getLoggedUser(username){
    return this.usuarios.find(user => user.username === username)
  }
}

export default new UserController()