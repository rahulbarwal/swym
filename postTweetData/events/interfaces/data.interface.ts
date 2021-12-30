interface TweetData {
  'username': string;
  'text': string;
  'location'?: string;
  'tweetCount'?: number;
  'color'?: string;
  'tags'?: string[];
}

export type { TweetData }