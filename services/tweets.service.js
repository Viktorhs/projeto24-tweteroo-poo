import { findTweet, findTweetByUser, pushTweet } from "../repositories/tweet-repository.js";
import { findUserAvatar } from "../repositories/user-repository.js";
import { Tweet } from "../models/tweets-models.js";

export async function createTweet({ username, tweet}) {
    const avatar = await findUserAvatar(username)
    const newTweet = new Tweet({
        tweet,
        username,
        avatar
    })

    return await pushTweet(newTweet);
}

export async function searchTweetByUser(user){
    return findTweetByUser(user)
}

export async function searchTweets(page){
    const tweets = await findTweet()
    return tweets
}
