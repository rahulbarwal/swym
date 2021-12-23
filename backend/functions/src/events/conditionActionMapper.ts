import { SystemAction } from "./action.interface";
import { ConditionPredicate } from "./types";


class ConditionActionMapper {
    private mapperObj: Map<ConditionPredicate, SystemAction>;
    get conditions() {
        return this.mapperObj;
    }

    constructor() {
        this.mapperObj = new Map<ConditionPredicate, SystemAction>();
    }

    public addConditionAction(predicate: ConditionPredicate, action: SystemAction) {
        if (this.mapperObj.get(predicate)) {
            console.error('Predicate already registered');
        } else {
            this.mapperObj.set(predicate, action);
        }
    }
}

const CONDITIONS_ACTIONS = new ConditionActionMapper();
export default CONDITIONS_ACTIONS;