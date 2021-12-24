import { EventAction } from "../interfaces/action.interface";
import { TweetData } from "../interfaces/data.interface";

export default class HashtagAction implements EventAction {
  searchTag!: string;

  constructor(tag: string) {
    this.searchTag = tag;
  }

  predicate(data: TweetData) {
    return Array.isArray(data.tags) && data.tags.includes(this.searchTag);
  }

  execute(data: TweetData) {
    const operation = `${data.username} hit this tag: [${this.searchTag}].\n Will include him in mails for this tag. \n Final data : ${JSON.stringify(data)} \n *********`;
    console.log(operation);
    return operation;
  }
}