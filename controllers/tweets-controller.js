import { createTweet, searchTweetByUser, searchTweets } from "../services/tweets.service.js";

export async function newTweet(req, res) {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
        return res.status(400).send('Todos os campos são obrigatórios!');
        }

    try {
        await createTweet({ username, tweet });
        return res.status(201).send('OK, seu tweet foi criado');
    } catch (error) {
        return res.sendStatus(500)
    }
}

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

export async function findTweets(req, res){
    const { page } = req.query;

    if (page && page < 1) {
        res.status(400).send('Informe uma página válida!');
        return;
      }

    try {
        const tweets = await searchTweets()
        const limite = 10;
        const start = (page - 1) * limite;
        const end = page * limite;

        if (tweets.length <= 10) {
          return res.send(reverseTweets(tweets)).status(200);
        }
      
        return res.status(200).send([...tweets].reverse().slice(start, end));

    } catch (error) {
        return res.sendStatus(500)
    }
}

function reverseTweets(tweets) {
    return [...tweets].reverse();
  }