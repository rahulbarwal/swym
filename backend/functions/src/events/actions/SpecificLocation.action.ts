import { EventAction } from "../interfaces/action.interface";
import { TweetData } from "../interfaces/data.interface";
export default class SpecificLocationAction implements EventAction {

  city!: string;
  constructor(city: string) {
    this.city = city;
  }

  predicate(data: TweetData) {
    return !!data.location && data.location === this.city;
  }

  execute(data: TweetData) {
    const operation = `${data.username} made a tweet from city: [${this.city}] with data: [${JSON.stringify(data)}]\n **********`;
    console.log(operation);
    return operation;
  }
}