import userController from "./user-controller";

export async function findTweetByUser(req, res){
    const { username } = req.params;

    if(!req.params){
        return res.sendStatus(500)
    }

    try {
        const tweetsDoUsuario = await searchTweetByUser(username)
        return res.status(200).send(tweetsDoUsuario)
    } catch (error) {
        return res.sendStatus(500)
    }
}
class TweetsController{
    constructor(){
        this.tweet = []
        this.create = this.create.bind(this)
        this.getAll = this.getAll.bild(this)
        this.getByUser = this.getByUser.bind(this)
    }

    create(req, res) {
        const { tweet, username } = req.body

        if (!username || !tweet) {
            return res.status(400).send('Todos os campos são obrigatórios!');
        }

        const { avatar } = userController.getLoggedUser(username)

        this.tweet.push({username, tweet, avatar});

        return res.status(201).send('OK, seu tweet foi criado')
    }

    getAll(req, res){
        const { page } = req.query

        if (page && page < 1) {
            res.status(400).send('Informe uma página válida!');
            return;
        }

        const limite = 10;
        const start = (page - 1) * limite;
        const end = page * limite;

        if (tweet.length <= 10) {
            return res.send(reverseTweets(tweets)).status(200);
        }

        res.status(200).send([...this.tweets].reverse().slice(start, end));
    }

    getByUser(req, res){
        const { username } = req.params;

        if(!req.params){
            return res.sendStatus(500)
        }

        const tweetsUser = this.tweet.filter(t => t.username === username)

        return res.status(200).send(tweetsUser)
    }

    reverseTweets() {
        return [...this.tweets].reverse();
    }
}

export default new TweetsController();