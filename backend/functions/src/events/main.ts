import CONDITIONS_ACTIONS from "./conditionActionMapper";
import CrossXTweets from "./actions/CrossXTweets.action";
import SpecificLocationAction from "./actions/SpecificLocationAction.action";


(function initializeConditionsActions() {
  CONDITIONS_ACTIONS.addConditionAction(new SpecificLocationAction('Pune'));
  CONDITIONS_ACTIONS.addConditionAction(new SpecificLocationAction('London'));

  CONDITIONS_ACTIONS.addConditionAction(new CrossXTweets(100));
})();

function onData(data: any) {
  for (let cAction of CONDITIONS_ACTIONS.conditionsActions) {
    if (cAction.predicate(data)) {
      cAction.execute();
    }
  }
}

export {
  onData
}