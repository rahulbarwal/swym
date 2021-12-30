
# Condition action system
Main code base is at this directory:    `\backend\functions\src\events`

## UML for system

![Class diagram](swym.PNG "Condiaion action system")

## Cloud deployment
This complete system is deployed to `Azure cloud functions` and are accessible at the below URL(this only supports `POST`):

    https://swym-assessment.azurewebsites.net/api/postTweetData?code=5bUlaFQ02PPGMxogLxBQvgO6EAiAHVifulW3wLmZopEgDB9dwCXiLQ==
### Sample Hits
| Sample data      | Response |
| ----------- | ----------- |
| {<br/>"username":"rahul",<br/>"location":"Pune",<br/>"text":"first tweet"<br/>}      | rahul made a tweet from city: [Pune] <br>**********     |
| {<br/>"username":"Anuj",<br/>"location":"Pune",<br/>"text":"first tweet"<br/>}   | Anuj made a tweet from city: [London]<br/> ********** <br/>Anuj crossed 3 tweets.<br/> Adding him to active users list and marking his tweets Green. <br/>*********        |
| {<br/>"username":"vivek",<br/>"location":"Pune",<br/>"text":"first tweet",<br/>"tags": ["awesome-hashtag"]<br/>}   | vivek hit this tag: [awesome-hashtag].<br/> Will include him in mails for this tag. <br/> ********* <br/>vivek made a tweet from city: [Pune] <br/> ********** <br/>vivek crossed 3 tweets. <br/> Adding him to active users list and marking his tweets Green. <br/> *********       |

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
