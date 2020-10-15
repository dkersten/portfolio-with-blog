---
slug: "/blog/revisting-my-final-bootcamp-project"
date: "2020-09-13"
title: "Mod 6: Part 1, Revisiting My Final Bootcamp Project"
---

You can find the original post on [Medium](https://medium.com/@dkersten1994/mod-6-part-1-revisiting-my-final-bootca-62ae8606fb8e)

I just completed the software engineering course at Flatiron School over 15 weeks. This course was structured into 5 mods covering a variety of topics that were designed to help prepare students for a career in full stack web development. Briefly, they included (topics not inclusive):

- Mod 1: Ruby and relational databases
- Mod 2: Ruby on Rails, the MVC pattern, and RESTful conventions
- Mod 3: JavaScript ES6
- Mod 4: React and React Router
- Mod 5: Putting it all together to build a final project

Looking back I was quite pleased with the skills I picked up over the course of the program and the community that was formed between students within my cohort. Even though we were fully remote because of the ongoing Covid-19 pandemic, it really felt like we had known each other for years. Everyone was supportive and helpful throughout the course, students and instructors alike. One common theme that came up was “mod 6”, or the continued learning that we would all be doing after completing the program. Because web development is ever changing it was stressed that we will always need to continue to learn and evolve. However after going through such an intense course I was feeling pretty burned out.

So after giving myself a few days off to relax and unwind, I started planning out my next steps in mod 6. My first thought was “now what?” Besides the usual of updating LinkedIn and my resume I got to thinking about my final project, a golf scorecard app with course information to a few local courses I play. I was fairly pleased with how it came together. However after some reflection I thought there could be improvements made, both to the scope of the app and the technology and techniques to implement the it. I decided a good first step would be to rebuild my final project. This would give me a chance to complete a few things that I wanted to do during the 2.5 weeks we had to work on the app but didn’t have time. It would also give me a chance to refactor a few features that I ended up getting working but involved some clunky code. Finally it would give me a chance to really solidify the languages, tools and skills I had picked up over the 15 weeks of the program. I think it will be beneficial in the long run to create this strong based before branching out and learning to tools, languages, and techniques.

So with that in mind I decided to really dive in and rebuild by final project while documenting the experience along the way. First up, the scope of the project.

## Part 1: Project Scope

When I initially set out building this project I had a lot of things I wanted to do. The most important thing I wanted to do was allow users to create, edit, and delete their score each round. I also wanted them to be able to get course information (par, distances, hole layout, etc.) for whatever course they were playing. However upon looking, all APIs that would provide this information were prohibitively expensive. So I decided to seed my own data for a few courses I play with some regularity. This included the par score for the course, distances for each hole, and par for each hole. I even created graphics for the layout of each hole.

After some reflection, I decided this in particular needed revising. At this time, I simply cannot do the same for every course I play (and this doesn’t include courses that I might play, or will never play or even hear about). I also know the layout and stats of these courses as I play them pretty frequently. So if I can’t offer a complete solution for course information and don’t particularly need it for the courses I play most often, what’s the point? I decided to scrap that functionality of the app. Perhaps I will return to the idea in the future if I can somehow crowd source the necessary information by allowing people to add their own course information in a standardized way.

So that just leaves me with the scorecard functionality of the app. Right now a user can save, edit, and delete a round of golf. They are able to input the score they had on each hole. It allows for some customization by allowing users to choose from 9 holes or 18 holes. That’s a solid start but I decided I should expand the functionality by implementing the following:

- Allow users to choose between the front 9, back 9, or a full 18 holes
- Allow users to record the par score of the hole (3, 4, 5). This will allow users to track eagles, birdies, pars, bogeys, etc.

The final main feature is a user’s profile. The current iteration allows users to see their previous scorecards and the overall score of each round. It also gives some high level stats such as number of rounds played and their best score on 9 holes and 18 holes. This is a good start as well but because I have improved the functionality of the scorecard I can also provide additional features for the profile including:

- Showing a per hole breakdown for a scorecard instead of just the overall score
- Tracking (overall and percentage) eagles, birdies, pars, bogeys, etc.

This seems like a good scope to begin with. I may add additional features as I go but I think this scope provides quality features and functionality. As a result this concludes part 1 of this blog series. As I build out version 2 of my final project I will continue to document my experience as I refactor clunky code, add new features, and utilize different technologies.
