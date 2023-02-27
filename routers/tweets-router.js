import { Router } from "express";
import { findTweetByUser, newTweet, findTweets } from "../controllers/tweets-controller.js";


const tweetsRouter = Router();

tweetsRouter.post('/tweets', newTweet);
tweetsRouter.get('/tweets/:username',findTweetByUser)
tweetsRouter.get('/tweets',findTweets)

export { tweetsRouter };