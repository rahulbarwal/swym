import { EventAction } from "../interfaces/action.interface";
import { TweetData } from "../interfaces/data.interface";

export default class CrossXTweets implements EventAction {
  limit!: number;

  constructor(limit: number) {
    this.limit = limit;
  }

  predicate(data: TweetData) {
    return !!data.tweetCount && data.tweetCount > this.limit;
  }

  execute(data: TweetData) {
    data.color = 'Green';
    const operation = `${data.username} crossed ${this.limit} tweets.\n Adding him to active users list and marking his tweets ${data.color}. \n Final data : ${JSON.stringify(data)} \n *********`;
    console.log(operation)
    return operation
  }
}