---
slug: "/blog/mod-6-changes-to-the-front-end"
date: "2020-09-27"
title: "Mod 6, Part 3: Changes to the Front End"
---

You can find the orignial post on [Medium](https://medium.com/@dkersten1994/mod-6-part-3-changes-to-the-front-end-53494fc80547)

This is the 3rd and final part of my mini series about rebuilding my mobile focused golf scorecard app. The initial version was built as the final project for my recently completed full stack bootcamp. This section will focus on changes to the front end I made from version 1 to version 2. The first two parts can be found [here](https://medium.com/@dkersten1994/mod-6-part-1-revisiting-my-final-bootca-62ae8606fb8e) and [here](https://medium.com/@dkersten1994/mod-6-part-2-changes-to-the-backend-bbda84dd86e). My goal in rebuilding the front end was to use up to date syntax and to make it as efficient as possible, an addition to adding a few new features. As a result here are the changes I made.

![Screenshot of the UI for my golf scorecard app](https://miro.medium.com/max/700/1*VvCG-UDzN4MiTbiiqfZSww.png)

<p class="img-caption">Example of UI for a recorded round
</p>

## Using Functional Components

The first change I made, which affected almost every part of the front end, was using functional components instead of class components. Recently, functional components have been preferred to class components for many React developers. Below is an example of a class component that I used heavily in my first version of the project.

```
import React, { Component } from 'react';
class ScoreCard extends Component {
  state = {{state here}},
  return(
    <div>{JSX here}</div>
  )
}
export default ScoreCard
```

<p style="margin-top: 1rem;">Example of a functional component</p>

```
import React, { useState, useEffect } from 'react'
const Scorecard = () => {
  const [stateProp, setStateProp] = useState('')
  return(
    <div>{JSX here}</div>
  )
}
export default Scorecard
```

<p style="margin-top: 1rem;">This switch led to a couple of changes in how I developed my components, the first being state. Class components don’t require anything extra to use state. In functional components, however, you have to use the useState hook to update state. If you are interested in the difference between the two and how to use them, the React <a href="https://reactjs.org/docs/hooks-state.html">docs</a> have a great article. Please note that my first example above uses some syntactical sugar in writing the state part. The other thing that functional components affected was lifecycle methods.</p>

## Changes to Lifecycle Methods

In the first version of my app, I used lifecycle methods pretty regularly, mostly _componentDidMount_ but occasionally others. I won’t go into when/how to use the different lifecycle methods in this post but for more information on them for class components this is a great [resource](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/). However these cannot be used in functional components. As a result I had to use the the _useEffect_ hook to mimic some of the lifecycle methods. Below are 3 examples.
A replacement for _componentDidMount_

```
const Scorecard = () => {
  useEffect(() => {
    // code that will run on component mount
  }, [])
  // rest of code
}
export default ScoreCard
```

<p style="margin-top: 1rem;">Code that will run every time the component re-renders</p>

```
const Scorecard = () => {
  useEffect(() => {
    // code that will run every time the component re-renders
  })
// rest of code
}
```

<p style="margin-top: 1rem;">Code that will run only when something specific changes, such as props</p>

```
const Scorecard = () => {
  useEffect(() => {
    // code that will run every time the component re-renders
  }, [props.userScorecards])
// rest of code
}
```

<p style="margin-top: 1rem;">Notice what is passed at the end in each example above. In the first example, an empty array is passed, which means that the only time the code will be run is on the component mounting. In the second example nothing is passed in, meaning the code will run every time the component re-renders. And finally in the third example, the code will only run when whatever in the array is changed (in this case props.userScorecards) in addition to on component mount. I only have one thing in the array in this example but multiple items can be put in the array, and the code will run whenever one of those changes. For more detailed information I suggest reading this <a href="https://react-hooks-cheatsheet.com/useeffect">resource</a>.</p>

## Changes to How Scorecards and Scores are Processed

I talked about this in the last section pretty extensively but it is worth mentioning again. Last iteration I was storing scoring data as an object on the front end and had to convert it to arrays before sending it to the backend. Because this time I used the json format to store data in the database, I no longer had to convert the data from an object to an array. This saved both time and computing resources and therefore made the process a little bit more efficient. This change to the backend therefore led to the most significant change to the way the front end is coded.

## Changes to User Interface

I made one major change to the user interface, specifically how users interact with the app when recording scores. In the first version of the app I was using standard HTML number inputs to record par and strokes. This worked fine on desktop browsers. However, as you can imagine, this is useless when you are out on the course. The experience was less than ideal for mobile browsers. Once you clicked into an input and entered a par/stroke you had to zoom out to see the full scorecard. I found this rather annoying having to do this every time I recorded a hole. As a result I implemented a popup component with large buttons for users to press, which I find to be a much better experience.

![Screenshot of the UI for a hole's par rating](https://miro.medium.com/max/700/1*fHkr1Dpkyy9P0C6BeAOBCQ.png)

<p class="img-caption">A popup component that records a hole’s par rating</p>

![Screenshot of the UI for your score on a hole](https://miro.medium.com/max/700/1*yIF_sU5o-0kilL6foV9dmw.png)

<p class="img-caption">A popup component to record a your score on a hole</p>

## Additional Features

The last major change to the front end was adding additional features. Most notably the most recent version of the app allows users to see the par and their score per round. Users are also able to see their amount of certain shots and percentage of those shots. For example users can see their total birdies, pars, bogeys, etc. and at what rate they score those. This is in addition to users being able to see their overall round score and their best score (on 9 holes and 18 holes).

![Screenshot of the UI for a user's overall stats](https://miro.medium.com/max/700/1*KN_WFHDBanDs1N2UdJLjhQ.png)

<p class="img-caption">An overview for a user showing their total types of scores and as a percentage of their overall shots</p>

![Screenshot of the UI for your a user's round stats](https://miro.medium.com/max/700/1*VvCG-UDzN4MiTbiiqfZSww.png)

<p class="img-caption">An example of a round. Users can see the par rating of each hole and what they scored on them. Users can also see the total number of different shots they had as well</p>

This wraps up my series on rebuilding my final bootcamp project. I am really glad I did it as it provided me an opportunity to solidify concepts I had learned during the bootcamp. It also allowed me an opportunity to implement better practices then the first time around when I was strapped for time. I do intend to add features in the future and hopefully create a native mobile app version as well. For now though I am happy with how my project came out.
