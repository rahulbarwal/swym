import * as functions from "firebase-functions";
import { HttpsError } from "firebase-functions/v1/https";
import { onData } from "../../events/main";
import { validateTweetData } from "../../data-validation/incomingdata.validation";

export const postNewTweet = functions.https.onRequest((request, response) => {
  if (request.method !== 'POST') {
    throw new HttpsError('unimplemented', `${request.method} is not implemented for this.`)
  }

  const data = validateTweetData(request.body);
  if (data) {
    response.send("Success");
    onData(data);
  } else {
    throw new HttpsError('invalid-argument', `Invalid data: \n ${data} `)
  }
});

