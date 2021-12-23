import { EventAction } from "../interfaces/action.interface";
import { TweetData } from "../interfaces/data.interface";

export default class CrossXTweets implements EventAction {
  limit!: number;

  constructor(limit: number) {
    this.limit = limit;
  }

  predicate(data: TweetData) {
    return data.tweetCount && data.tweetCount > this.limit;
  }

  execute(data: TweetData) {
    data.color = 'Green';
    console.log(`${data['user-name']} crossed ${this.limit} tweets.\n\n Marking his tweets ${data.color}.`)
  }
}