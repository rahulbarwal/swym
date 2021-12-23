import { TweetData } from "./data.interface";

interface EventAction {
    execute: (data: TweetData) => void;
    predicate: (data: TweetData) => boolean;
}
export type { EventAction };