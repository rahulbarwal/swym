import { TweetData } from "../events/interfaces/data.interface"

class TweetsDB {
  private store: Map<string, TweetData[]>;
  private constructor() {
    this.store = new Map();
  }

  private static _singleton: TweetsDB;
  static getInstance(){
    if(TweetsDB._singleton) {
      return TweetsDB._singleton;
    }
    TweetsDB._singleton = new TweetsDB();
    return TweetsDB._singleton;
  }

  addNewTweet(tweet: TweetData) {
    const existing = this.store.get(tweet.username);
    if (existing) {
      existing.push(tweet);
    } else {
      this.store.set(tweet.username, [tweet]);
    }
    return true;
  }

  getTweetsOfUser(username: string) {
    return this.store.get(username);
  }
}
export default TweetsDB;