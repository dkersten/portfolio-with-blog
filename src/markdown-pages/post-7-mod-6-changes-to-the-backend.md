---
slug: "/blog/mod-6-changes-to-the-backend"
date: "2020-09-20"
title: "Mod 6, Part 2: Changes to the Backend"
---

You can find the original post on [Medium](https://medium.com/@dkersten1994/mod-6-part-2-changes-to-the-backend-bbda84dd86e)

This is the second part of my series on reworking my final bootcamp project, a mobile focused [golf scorecard app](https://ez-golf-scorecard.herokuapp.com/). The first part can be found [here](https://medium.com/@dkersten1994/mod-6-part-1-revisiting-my-final-bootca-62ae8606fb8e), which focuses on the scope of the project. This part will focus on backend in general and the changes that I made between version 1 and version 2. In both versions the backend was built with Ruby on Rails and a Postgresql database. The backend uses the API configuration of Ruby on Rails to serve up a JSON API instead of the full blown Ruby on Rails solution. Now on to the changes I made…

## Updating the Models

The first, and easiest changes, was dropping a few tables. In the initial project I had 4 models: users, scorecards, courses, and holes. However the scope of my project changed as I felt I couldn’t realistically offer a quality user experience providing course and individual hole information. Further reasoning for this decision can be found in [part 1](https://medium.com/@dkersten1994/mod-6-part-1-revisiting-my-final-bootca-62ae8606fb8e). As a result of this decision I dropped the course and hole tables, leaving just the user and scorecard tables. I also was able to drop the course ID foreign key in the scorecard table as a result.

## Switching Datatypes for the Scorecard

The next major change was switching the datatypes for the scorecard table. In the initial version I had two fields to track a user’s scores, _scores_front_ and _scores_back_, which both used the datatype array to store the user’s scores. While working on version 1 of the app though I found it difficult to work with the arrays. I found using objects on the frontend was a much better solution than arrays so I was often converting arrays to objects when I needed to pass data from the backend to the frontend. And then when I needed to pass data from the frontend to the backend I had to convert the data again from objects to arrays. Obviously this was inefficient so on version 2 I looked into whether I could save objects to a RoR backend and Postgresql database. What I found was the json data format for Postgresql databases. It allowed me to POST/PATCH objects to the DB instead of having to change them into arrays.

## Additional Data Tracked on the Scorecard

Because I was changing the scope of my project a bit I also needed to update what data was tracked in the scorecard table. First, because I removed the _course_ table I removed the _course_id_ field from scorecards. I did add a _course_ field as a string datatype though, which would allow a user to see what course they played for a particular scorecard. I also added a _f9_par_ and _b9_par_ field (as json datatypes) because I no longer had a course table. These fields would track the par score for all holes (i.e. a par 3, par 4, or par 5). The more major changes came for different types of shots.

I wanted to be able to track the total of different shot types (birdies, pars, bogeys, etc.) and their percentages of overall shots. Initially I planned to do these calculations on the backend so I set up some custom routes to pass the data to Ruby functions. However I found this a bit cumbersome and eventually decided to do these calculations on the frontend in Javascript. Then I could just pass the results to the backend. As a result I added the fields holes (number of holes, 9 or 18), _eagles_, _birdies_, _pars_, _bogeys_, and _other_scores_ (double, triple, etc. bogeys). Here is what the final tables looked for the scorecard for both version 1 and version 2.

![Version 1 of my scorecard database table](https://miro.medium.com/max/700/1*V-CSO0RF9TVUSfzjnLplsg.png)

<p class="img-caption">Version 1</p>

![Version 2 of my scorecard database table](https://miro.medium.com/max/700/1*c5GhT6akMzrFC3QVmDLU4g.png)

<p class="img-caption">Version 2</p>

## Versioning My API

The last major change I made to my backend was adding versioning to the API. This would allow me to future proof my app by being able to continue to serve up the initial version of the API while being able to add additional features in subsequent versions. To be honest this was probably unnecessary as I’ll be the only one using the data in the backend. With versioning other people could theoretically use the data served up by my backend to create their own frontend. This seems rather unlikely though and I decided to add the versioning to get in the good habit of trying to future proof my app as much as possible. To do this I had to make small changes to the _routes.rb_, _scorecard_controller.rb_, and _user_controller.rb_ files. If you are looking for an in depth explanation and guide I would suggest reading [this post](https://medium.com/@edgar.a.rivera08/creating-an-api-backend-24c018d86ddb) from my fellow bootcamp classmate Edgar.

As a result of versioning my API when I made GET/POST/PATCH/DELETE requests from the frontend the URL changed slightly. For example instead of making requests from `http://localhost:3000/users` I was now making requests to `http://localhost:3000/api/v1/users`. Like I previously stated, this change probably wasn’t necessary because of my particular circumstance but it is a good habit to get into. That about concludes the backend changes I made. Next I’ll be focusing on my frontend and the changes I made between version 1 and version 2.
