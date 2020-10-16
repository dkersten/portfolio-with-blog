---
slug: "/blog/javascript-regular-expressions"
date: "2020-10-05"
title: "Javascript Regular Expressions"
---

You can find the orignial post on [Medium](https://medium.com/@dkersten1994/javascript-regular-expressions-4727b4d20b04)

During my time as a developer I have always shied away from regular expressions. Just looking at the syntax was off-putting so I placed the topic firmly on the “get to it later” list. Every now and then while working on a project I came across a situation where regular expressions were necessary. Usually in those situations Stack Overflow was my savior. However this is not an acceptable solution so I decided to finally dive into regular expressions and explore exactly what they are and what types of problems they can solve. So, to start, what exactly are regular expressions?

## What Are Regular Expressions?

According to [Wikipedia](https://en.wikipedia.org/wiki/Regular_expression) regular expressions (also commonly known as regex and regexp) are “a sequence of characters that define a search pattern.” Usually these patterns are used by string-searching algorithms for operations on strings such as find or find and replace, or for input validation.

So with that in mind, what are some applications of regular expressions? Regular expressions can be used in search engines and search and replace features in word processors/text editors, among tons of other applications. Many programming languages provide regular expression capabilities sometimes natively or by a 3rd party library.

## Creating a New Regular Expression

There are 2 ways to create a regular expression in Javascript, a regular expression constructor or a regular expression literal. I personally used to seeing them written as literals as opposed to as a constructor. However both syntaxes are valid and you may seem them written either way.

As a constructor:

`const aConst = new RegExp('123');`

The syntax here is `new RegExp(pattern)`

As a literal:

`const aLiteral = /123/;`

The syntax here is `/pattern/`

Both of these syntaxes also accept flags, which we’ll discuss further later on.

## Methods

Now is a good time to discuss methods for regular expressions. For a full list of regular expressions, see this [MDN guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_regular_expressions_in_JavaScript). These methods include exec, match, matchAll, replace, replaceAll, search, and test. For now I’ll just go over the test method. This method returns a boolean (true or false) depending on if a match is found or not.

```
const myRegex = /present/;
const stringPresent = `The characters 'present' is in this string`

const stringNotPresent = `lalalala`

const ourTest1 = myRegex.test(stringPresent)
const ourTest2 = myRegex.test(stringNotPresent)

console.log(ourTest1) // returns true
console.log(ourTest2) // returns false
```

## Flags

Until now our regular expressions have been quite simple as we have been omitting flags. However the use of flags will really unlock regular expressions’ power. Flags allow us to do this. There are [6 flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2) that can be used with regular expressions:

- g → global search
- i → case sensitive search
- m → multi-line search
- s → allows . to match newline characters
- u → “unicode”; treat a pattern as a sequence of unicode code points
- y → Perform a sticky search that matches starting at the current position in the target string

The g and i flags I believe are what you’ll come across the most. To update our syntax from above with flags:

As a constructor:

`const aConst = new RegExp('123', 'g');`

The syntax here is `new RegExp(pattern, 'flags')`

As a literal:

`const aLiteral = /123/g;`

The syntax here is `/pattern/flags`

This is a brief introduction and to JS regular expressions. If you are looking for more tools and resources for regular expressions see below:

- [RegexOne](https://regexone.com/) (practice regular expressions)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) (MDN’s regular expressions guide)
- [HackerRank](https://www.hackerrank.com/domains/regex) (practice regular expressions)
- [FreeCodeCamp](https://www.freecodecamp.org/news/learn-regular-expressions-with-this-free-course-37511963d278/) (regular expressions guide)
