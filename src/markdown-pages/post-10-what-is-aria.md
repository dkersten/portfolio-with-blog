---
slug: "/blog/what-is-aria"
date: "2020-10-12"
title: "What is ARIA?"
---

You can find the orignial post on [Medium](https://medium.com/@dkersten1994/what-is-aria-c8d6034af485)

Something that I have been trying to improve upon is the accessibility of my web apps as I grow as a developer. Web accessibility is something that often gets glanced over when learning about front end development but it really should be given much more attention by everybody. There are lots of ways you can improve accessibility in websites from using semantic elements instead of divs everywhere, to using labels and alt tags in the appropriate circumstances, to making sure your color scheme is suitable for people with color blindness. These are common things that I try to pay attention to for every site I work on now. However one thing that has always been out there but I haven’t looked into too much is ARIA. So what exactly is ARIA?

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) “Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities. ARIA supplements HTML so that user interactions can be passed on to assistive technologies. Please note that HTML5 expanded accessibility, particularly with the correct use of semantic elements and, if an appropriate element exists, it should be used. You can refer to this [table](https://www.w3.org/TR/html-aria/#docconformance) to see if an ARIA attribute is necessary for certain elements. With that in mind I wanted to look further into ARIA and see if it still has a place in web development and what that might entail.

## ARIA Roles

HTML5 and ARIA roles can be used in unison. A role defines the type of element and suggests what purpose it serves according to this [article](https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/).

An example of an HTML5 semantic element can be found below with a role to improve the description of the element. Here we use a semantic element, header, and give it the role banner to improve the element’s purpose.

`<header role="banner">`

It should be noted that an element should only have one role. Also you should not change the the meaning of a native, semantic element. For example, an article element should not be given a role of button or link. If you run into a situation like this it would be better to use a nested element (either button or link in this case). For example:

```
// This is acceptable

<article>
  Lorem ipsum ...
   <a href="#">your link here</a>
</article>

// This is not acceptable

<article role="link">Lorem ipsum...</article>
```

## ARIA Attributes

ARIA attributes consist of two different types, states and properties. Both provide information about an [object](https://www.w3.org/WAI/PF/aria-1.1/terms#def_object), but do have differences. One difference between the states and properties is that the values of properties are often less likely to change throughout the use of the application. On the flip side states may change frequently as someone uses the application. States and properties have 4 categories:

1. [Drag and drop attributes](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#attrs_dragdrop)
2. [Live region attributes](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#attrs_liveregions)
3. [Relationship attributes](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#attrs_relationships)
4. [Widget attributes](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#attrs_widgets) (widget role and widget attributes are two different things.

Examples of properties include `aria-labelledby` and `aria-describedby`. Example of states include `aria-disabled` and `aria-checked`. A full list of states and properties can be found on here at [W3C’s ARIA page](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#global_states).

## The Rules of ARIA

Now that we have a little background on ARIA, when should and shouldn’t you use it? [W3C](https://www.w3.org/TR/using-aria/#NOTES) actually has a helpful list of rules for when to use ARIA.

1. If possible, use a native, semantic HTML element if possible
2. Don’t change native HTML semantics (we covered these first two a bit above)
3. All interactive ARIA controls need to be keyboard accessible
4. If an element is focusable do not use `role="presentation"` or `aria-hidden="true"`
5. All interactive elements should have an accessible name

So where does that leave us? While HTML5 greatly improved accessibility, ARIA still has use in web development. Keep in mind the five rules of ARIA use above when building your web app. If you are looking for even more information on when to use ARIA, I found this great [beginner’s guide](https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility#:~:text=and%20tabs%2Fpanels.-,Widget%20Attributes,required%3D%E2%80%9Ctrue%E2%80%9D%20).). Proper use of ARIA in conjunction with HTML5 can make using your application a pleasant experience for all users.
