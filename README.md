
## UML for system

![Class diagram](swym.PNG "Condiaion action system")

## Cloud deployment
This complete system is deployed to `Azure cloud functions` and are accessible at below URL(this only supports `POST`):

    https://swym-assessment.azurewebsites.net/api/postTweetData?code=5bUlaFQ02PPGMxogLxBQvgO6EAiAHVifulW3wLmZopEgDB9dwCXiLQ==
### Sample Hits
| Sample data      | Response |
| ----------- | ----------- |
| {<br/>"username":"rahul",<br/>"location":"Pune",<br/>"text":"first tweet"<br/>}      | rahul made a tweet from city: [Pune] with data: [{"username":"rahul","location":"Pune","text":"first tweet"}]<br/>**********       |
| {<br/>"username":"Anuj",<br/>"location":"Pune",<br/>"text":"first tweet",<br/>"tweetCount":101<br/>}   | Anuj made a tweet from city: [Pune] with data: [{"username":"Anuj","location":"Pune","text":"first tweet","tweetCount":101}]<br/>********** <br/>Anuj crossed 100 tweets.<br/> Adding him to active users list and marking his tweets Green. <br/> Final data : {"username":"Anuj","location":"Pune","text":"first tweet","tweetCount":101,"color":"Green"} <br/> *********        |
| {<br/>"username":"vivek",<br/>"location":"Pune",<br/>"text":"first tweet",<br/>"tweetCount":101,<br/>"tags": ["awesome-hashtag"]<br/>}   | vivek hit this tag: [awesome-hashtag].<br />Will include him in mails for this tag. <br />Final data : {"username":"vivek","location":"Pune",<br />"text":"first tweet","tweetCount":101,"tags":["awesome-hashtag"]} <br/> ********* <br />vivek made a tweet from city: [Pune] with data: [<br />{"username":"vivek","location":"Pune","text":"first tweet","tweetCount":101,"tags":["awesome-hashtag"]}]<br/> ********** <br />vivek crossed 100 tweets.<br />Adding him to active users list and marking his <br />tweets Green. Final data : {"username":"vivek","location":"Pune",<br />"text":"first tweet","tweetCount":101,"tags":["awesome-hashtag"],"color":"Green"} <br/>*********<br />        |

# Further ideas

We can make this whole system a bit more generic and deployment light by assigning `actions` specific `ids`:
 | Action name| ID |
| ----------- | ----------- |
| SpecificLocationAction| 1       |
| CrossXTweets   | 2        |
| HashTagAction   | 3        |

For each initialization of service, we can pass it one `action - predicate condition` mapping via `DB` or `JSON file`, which will look something like:

    1 Pune
    1 London
    3 100
    3 awesome-tag
Now our main.ts will implement a factory function to initialize all the checks at runtime using this JSON data.
