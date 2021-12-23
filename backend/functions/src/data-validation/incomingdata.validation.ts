import { TweetData } from "../events/interfaces/data.interface";

function validateTweetData(data: any): TweetData | null {
  if (data['user-name'] && data['location'] && data['text']) {
    return data as TweetData;
  }
  return null;
}

export {
  validateTweetData
}