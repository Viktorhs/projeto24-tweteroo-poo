const tweets = [];

export async function pushTweet(tweet) {
    return tweets.push(tweet);
    
}

export async function findTweetByUser(username) {
    const tweet = tweets.filter(t => t.username === username);
    return tweet
}

export async function findTweet() {
    const tweet = [...tweets]
    return tweet
}