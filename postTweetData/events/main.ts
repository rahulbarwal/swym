import CONDITIONS_ACTIONS from "./conditionActionMapper";
import { TweetData } from "./interfaces/data.interface";
import { SpecificLocationAction, CrossXTweets, HashTagAction } from "./actions";

(function initializeConditionsActions() {
  CONDITIONS_ACTIONS.addConditionAction(new HashTagAction('awesome-hashtag'));

  CONDITIONS_ACTIONS.addConditionAction(new SpecificLocationAction('Pune'));
  CONDITIONS_ACTIONS.addConditionAction(new SpecificLocationAction('London'));

  CONDITIONS_ACTIONS.addConditionAction(new CrossXTweets(3));
})();

function onData(data: TweetData): string {
  return CONDITIONS_ACTIONS.runChecks(data);
}

export {
  onData
}