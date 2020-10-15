---
slug: "/blog/semantic-html"
date: "2020-10-14"
title: "Semantic HTML"
---

You can find the original post on [Medium](https://medium.com/@dkersten1994/semantic-html-8fe4dc3bbb31)

Semantic HTML (sometimes referred to as semantic markup) is HTML that describes what an element is instead of how it should appear in the browser by default. Semantic HTML introduces meaning into your page and gives you other options (in the correct situation) to use an element other than div and span. Because semantic HTML elements provide context to their use they can improve your web application’s accessibility. So what exactly are examples of semantic HTML elements?

A few examples of semantic elements include `<h1>` through `<h6>` tags, `<p>`, and `<em>`. So what are these tags’ purposes?

- An `<h1>` tag describes the most important title on a page. An `<h3>` describes a lesser important title on the page. Both of these could be represented by a `<div>` but it would lose the meaning of being a title.

- A `<p>` tag can be used to indicate a paragraph better than a `<div>` or `<span>` tag.

- An `<em>` tag can indicate that some text should be emphasized better than a `<span>` tag styled to look like it should be emphasized.

## Why You Shouldn’t Just Rely on Styling in CSS

While styling can help communicate the context describing your content, it only tells the entire story for some users. For example you could increase font size and increase font weight of a `<div>` to show that it is a heading. This would show the importance of the content to anyone visually seeing your site. However it loses additional advantages to using a semantic element such as an `<h1>`. For example a person using a screen reader might not have any clue that this is supposed to be an important heading for your content because you are just relying on styling alone. They can’t see that styling and their screen reader won’t pick up on it. Likewise search algorithms such as Google may not be able to distinguish the importance of the text in a `<div>` as opposed to an `<h1>` tag. As a result your search rankings will suffer.

Additionally you could just use a `<span>` tag around some text. Then you could change the font-style to italic to show it should be emphasized. Anyone visually browsing your website would see that that particular text should be emphasized. However like above users using screen readers lose this important context as do search engines. Therefore you should try to use semantic elements when possible to communicate the meaning surrounding your content.

## The Introduction of HTML5

HTML 5 was officially released in October of 2014 and brought a large number of semantic elements with it including:

- article
- aside
- figcaption
- figure
- footer
- header
- nav
- section
- and others

Even though HTML 5 was released almost 6 years ago today I feel like many developers don’t know about the many semantic elements available to them to use instead of `<div>` and `<span>` elements. While I was researching for this article I was shocked at how many semantic elements I could use in my day to day development that would replace `<div>` and `<span>` elements. Here are just a few elements that can be used in your day to day development.

- The `<nav>` element can be used to house your site’s navigation links.
- The `<header>` element can be used to contain title and heading related content
- The `<main>` element can be used to represent your page’s main content
- The `<section>` element can be used to represent a section of your page with related content
- The `<footer>` element can be used to house your site’s footer content such as contact info, copyright info, and additional navigation links
- The `<aside>` element can be used to represent similar content that is placed to the side of the main content. This could be additional navigation links, filter criteria (for things like product pages), among other content
- The `<address>` element can indicate your or your business’ contact information

For a more detailed list of semantic HTML elements please visit [BitDegree](https://www.bitdegree.org/learn/html5-tags).

The use of semantic elements in your projects can provide benefits that more traditional elements cannot. They can provide helpful context for your content that describe its purpose. This is extremely helpful in improving your accessibility and can help improve your search rankings.
