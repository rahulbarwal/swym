import { EventAction } from "./interfaces/action.interface";
import { TweetData } from "./interfaces/data.interface";

class ConditionActionMapper {
  private conditions: EventAction[];

  constructor() {
    this.conditions = [];
  }

  public addConditionAction(conditionAction: EventAction) {
    this.conditions.push(conditionAction);
  }

  public removeConditionAction(index: number) {
    this.conditions.splice(index, 1);
  }

  public runChecks(data: TweetData) {
    for (const cAction of this.conditions) {
      if (cAction.predicate(data)) {
        cAction.execute(data);
      }
    }
  }
}

const CONDITIONS_ACTIONS = new ConditionActionMapper();
export default CONDITIONS_ACTIONS;