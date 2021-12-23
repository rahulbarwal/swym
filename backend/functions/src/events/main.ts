import CONDITIONS_ACTIONS from "./conditions";

function onNewData(data: any) {
    for (let [predicate, action] of CONDITIONS_ACTIONS.conditions.entries()) {
        if (predicate(data)) {
            action.execute();
        }
    }
}