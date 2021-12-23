import CONDITIONS_ACTIONS from "./conditionActionMapper";
import CrossXTweets from "./actions/CrossXTweets.action";
import SpecificLocationAction from "./actions/SpecificLocation.action";
import { TweetData } from "./interfaces/data.interface";


(function initializeConditionsActions() {
  CONDITIONS_ACTIONS.addConditionAction(new SpecificLocationAction('Pune'));
  CONDITIONS_ACTIONS.addConditionAction(new SpecificLocationAction('London'));

  CONDITIONS_ACTIONS.addConditionAction(new CrossXTweets(100));
})();

function onData(data: TweetData): void {
  CONDITIONS_ACTIONS.runChecks(data);
}

export {
  onData
}