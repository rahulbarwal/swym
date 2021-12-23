import { EventAction } from "./interfaces/action.interface";

class ConditionActionMapper {
  private conditions: EventAction[];
  get conditionsActions() {
    return this.conditions;
  }

  constructor() {
    this.conditions = [];
  }

  public addConditionAction(conditionAction: EventAction) {
    this.conditions.push(conditionAction);
  }

  public removeConditionAction(index: number) {
    this.conditions.splice(index, 1);
  }
}

const CONDITIONS_ACTIONS = new ConditionActionMapper();
export default CONDITIONS_ACTIONS;