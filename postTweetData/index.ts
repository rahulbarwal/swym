import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { validateTweetData } from "../backend/functions/src/data-validation/incomingdata.validation";
import { onData } from "../backend/functions/src/events/main";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const response = {
    status: 200,
    body: ''
  };

  if (req.body) {
    const data = validateTweetData(req.body);
    if (data) {
      response.body = onData(data);
    } else {
      response.status = 400;
      response.body = `Data is invalid\n ${data}`;
    }
  }

  context.res = response;

};

export default httpTrigger;