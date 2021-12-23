import { EventAction } from "../interfaces/action.interface";
import { TweetData } from "../interfaces/data.interface";
export default class SpecificLocationAction implements EventAction {

  city!: string;
  constructor(city: string) {
    this.city = city;
  }

  predicate(data: TweetData) {
    return data.location === this.city;
  }

  execute(data: TweetData) {
    console.log(`Specific city tweet was made to city: [${this.city}] with data: [${data}]`)
  }
}