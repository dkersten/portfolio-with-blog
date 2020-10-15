---
slug: "/blog/web-browser-diversity"
date: "2020-10-14"
title: "Web Browser Diversity"
---

You can find the original post on [Medium](https://medium.com/@dkersten1994/web-browser-diversity-cfb08e713524)

First I’d like to start out by saying this topic has been covered in detail by others who are much more qualified than me and have a deeper understanding of the topic. If you are looking for more details or background information on this topic I will source and link information throughout the article. However I believe it is very important and just wanted to write about it myself.

## The Current State of Web Traffic

I wanted to start off by just showing the user base each of the major browsers have as background information and will reference it below throughout this article. According to [W3Counter](https://www.w3counter.com/globalstats.php), Chrome is the major player in the browser game, followed by Safari, Internet Explorer/Edge, Firefox and Opera. Exact percentages can be found below (sourced again from W3Counter). This data is current as of March 2020.

### Web Browser Marketshare

- Chrome: 59.3%
- Safari: 12.3%
- Internet Explorer/Edge: 9.1%
- Firefox: 4.5%
- Opera: 3.0%
- Other: 11.8%

## What Makes Up a Browser?

A browser is just more than the user interface that we see such as a search bar, back and forward buttons, etc. It also consists of a Javascript engine, and composition & rendering engines. Rachel Nabors goes into much more detail about this in an [article](https://css-tricks.com/the-ecological-impact-of-browser-diversity#article-header-id-0) of her’s that is well worth the read to better understand what makes up a browser. I will be focusing on the rendering engine for the rest of this article.

## Rendering Engines

Current browsers come from three different rendering engines: WebKit, Gecko, and EdgeHTML/MSHTML. Blink, the rendering engine used by Google Chrome, branched off from WebKit.

## How Do These Rendering Engines Relate to the Current Browser Marketshare?

Chrome runs on Blink, which branched off from WebKit. Safari, both iOS and MacOS versions runs on WebKit. Firefox uses the Gecko engine and Opera uses a Chromium/Blink engine. Up until 2019, Microsoft Edge and Internet Explorer used EdgeHTML/MSHTML but was rebuilt based on Chromium.

Therefore, based on the March 2020 browser marketshare above, 71.6% of users are using a browser based on WebKit/Blink (Chrome, Safari, Opera). This does not factor in the 12.3% of users who are using Internet Explorer/Edge as they may be still using a version that runs EdgeHTML/MSHTML. However it is safe to assume that many of these users will continue to use Edge and upgrade to the latest versions (which now runs on WebKit/Blink) or move to another browser based on WebKit/Blink such as Chrome. This leaves Firefox as the only major browser that runs a different rendering engine (Gecko) than WebKit/Blink.

The above data and assumptions is backed backed up by data collected by [W3Collect](https://www.w3counter.com/trends). Over the past 10 years, Internet Explorer/Edge and Firefox’s usage share has dropped steadily, while Chrome has seen a steady rise. Internet Explorer/Edge’s user share in 2010 was 50.6% and has declined steadily since. Just before Edge moved over to Chromium/Blink as their rendering engine, their user share had dropped to 7.2%. Any potential rise in user share from this point on will be based on Chromium/Blink. Likewise Firefox started 2010 with 32.9% user share, it peaked later in 2010 at 34.1%, and currently sits at 4.5%. Safari has overall seen an increase in usage (5.5% in January 2010, 12.3% currently), but peaked in 2015 at 21.1%. Opera usage has mostly stayed flat over this period (currently at 3%).

This shows a trend of WebKit/Blink gaining users and other rendering engines losing users and influence.

## Potential Future Implications

What’s the big deal? Wouldn’t a single rendering engine be a better experience? In theory, yes. A single rendering engine could make things easier for both users and developers. Developers wouldn’t need to accommodate different rendering engines, which would reduce or eliminate the need to test in different browsers. Users would also see a more uniform experience because of this.

However, one company having a monopoly over their industry is pretty much universally never a good thing. In this context, Google’s basically having total control over the direction of the web, its standards, and how it moves forward is not a good thing. Perhaps if/when Google has near unilateral control over the direction of the web, progression stagnates as they no longer have to work about another company implementing new features that Chrome does not possess. It is also to keep in mind that most of Google’s business come from selling ads based on user data. In the future it is possible that Google could use its control of web standards to further benefit their data collection business model, which in turn, would be harmful to anyone concerned about digital privacy.

Firefox not being able to compete as a company would also be harmful. Strictly from a web development standpoint we could lose tools such as the Mozilla Developers Network (MDN) and a different point of view on web standards and how the landscape should move forward in the future. Firefox has also increased their focus on user privacy by implementing features such as Facebook Containers and blocking trackers/cryptominers/etc.

## What Can We Do?

As developers it is very important that we make sure our websites and web applications work in Firefox. Cross browser testing has never been so important and there are even tools to help you with the process. If your site/app doesn’t fully function on Firefox but does on Chrome or another WebKit/Blink based browser, users are more likely to use one of those. As users we can simply use Firefox in our personal/daily lives. It is imperative that we have at least two rendering engines moving forward to keep web standards moving forward.
