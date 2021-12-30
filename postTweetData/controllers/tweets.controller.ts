import { TweetData } from "../events/interfaces/data.interface"
import TweetsDB from "../db/tweets.db";
import { onData } from "../events/main";

class TweetsController {

  constructor() {
  }

  processTweet(tweet: TweetData): string {
    TweetsDB.getInstance().addNewTweet(tweet);
    const tweetCount = TweetsDB.getInstance().getTweetsOfUser(tweet.username).length;
    return onData({ ...tweet, tweetCount });
  }

}
export default (new TweetsController());