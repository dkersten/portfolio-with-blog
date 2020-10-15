---
slug: "/blog/design-tips-for-the-non-designer"
date: "2020-05-26"
title: "Design Tips for the Non Designer"
---

You can find the orignial post on [Medium](https://medium.com/@dkersten1994/design-tips-for-the-non-designer-206e014ad13c)

When I initially started my journey in web development I was a truly terrible designer. Working on self projects, I hated all of my designs. I would look at other’s work and try to replicate their designs but even then couldn’t put together something that I liked aesthetically and provided a quality user experience. While my design skills have improved since I entered the industry, I still do not consider myself a designer. I just try my best to provide a quality user experience and therefore wanted to share some of the tips, techniques, tools, and resources I have come across along the way to help others that are starting out in their journeys.

## Inspiration

Like I previously said, I do not consider myself a designer. I currently do not possess the ability to come up with a full fledged design from scratch that is aesthetically pleasing in addition to providing a quality user experience. [Dribbble](https://dribbble.com/shots/following/web-design), [Media Queries](https://mediaqueri.es/), and [Codepen](https://codepen.io/) are a few favorite resources of mine to get inspiration from others when starting the design for a new project.

Dribbble is great for overall inspiration, color palettes, and specific components design inspiration. I usually start my design process by finding a few designs I like that will work with the purpose/idea of the project.

Media Queries excels when its comes to responsive design. It provides many quality examples of how a site can successfully adapt its design and content for a multitude of screen sizes.

Codepen I feel deserves additional recognition. Not only does it have countless designs from really talented developers and designers, it is basically a playground for the front end. You can dig into the code of others to see exactly how they achieved something quickly and easily. Not only is Codepen a great place for inspiration, it is a great way to prototype your own designs. I almost exclusively start any project in Codepen before moving to a more traditional dev environment. There is virtually no set up involved so I can dive into the prototyping a design immediately.

## Colors

One thing I really struggled with initially was finding a color scheme that I didn’t find ugly. However eventually I came across some tools and tips to help with picking out appropriate colors. My favorite resource for generating color palettes is [Coolors](https://coolors.co/). Even if I don’t use the exact colors of a palette from Coolors, it provides a great starting place to tweak some of their existing color palettes to suit your needs. [Colormind](http://colormind.io/) is also a favorite of mine. It has a useful tool that will show you how a color palette can look on a designed site.

One of the problems I came across initially was using too many colors. These days many of my designs stick to one or two base colors. For variation I then lighten and/or darken the 1–2 base colors. This is very useful in certain instances, particularly for hover states and gradients. A tool I use often for this is called [0to255](https://www.0to255.com/). Put in your base color’s hex code and it’ll provide you with a palette consisting of that base color lightened and darkened.

The use of colors also leads into readability (along with typography). A site suffers greatly if it is not readable. On the color side of that, make sure text has enough contrast. A great tool for that is provided by [WebAIM](https://webaim.org/resources/contrastchecker/). It is an interactive tool to make sure your text passes contrast requirements for accessibility. If you are struggling to provide your text with ample contrast, consider using a text-shadow. This is also very useful when you are using pictures as your background (in addition to adding a semi-transparent layer over the picture). For example:

![Example of text with poor contrast with background](https://miro.medium.com/max/700/1*ouujETAcIIx_lmXCpo5j_A.png)

![Example of text with better contrast with background](https://miro.medium.com/max/700/1*BTljV94O8sjLtv0izyz-qA.png)

Notice how the text in the first picture is quite hard to ready. It does not provide enough contrast. In the second picture I added a text shadow and a semi-transparent overlay on the background image to improve contrast. Please note that this is just an example. In an actual project I personally don’t think even this is an appropriate amount of contrast for truly easily readable text. See the code below for more details.

![Code showing the differences between the two above text and background examples](https://miro.medium.com/max/700/1*fm5MfnwY4lYSsA-NT2JVcQ.png)

## Typography

My go to resource for typography is [Google Fonts](https://fonts.google.com/). It is quick, easy, and free to integrate with your project. There are also additional font markets where you can purchase some truly awesome fonts but I usually stick to Google Fonts personally. Like with colors, I found myself overusing fonts when starting out. Now I almost always use just one font. Consider using larger and smaller sized type, and different font weights to distinguish between headers and paragraphs.

I will also use two fonts paired to together, though I do this less frequently than just sticking to a single font. When I do end up using two fonts, my favorite resource is [Reliable](https://www.reliablepsd.com/ultimate-google-font-pairings/). Reliable is a great tool to show different Google Fonts paired together.

Additionally readability in text (in conjunction with color/contrast) is very important to a positive user experience. Here are three quick and simple examples to make your text more readable.

- Line length. Make sure your lines of text to not go for too long as it makes reading lots of text difficult. [Some suggest](https://baymard.com/blog/line-length-readability) an ideal character limit per line is 50–60 characters. I have also seen others suggesting 45–75 characters is good as well. The moral of the story is make sure your lines don’t go on too long.

![Example of text with too long of a line length](https://miro.medium.com/max/700/1*DnK9vQu4HUEc3Pdm3Y5hKw.png)

<p class="img-caption">Long line length can make reading more difficult, especially when starting a new line</p>

![Example of text with a better line length](https://miro.medium.com/max/700/1*g0FKdxQCvnobEW12FwP5zQ.png)

<p class="img-caption">Shorter line lengths can improve readability, especially when starting a new line</p>

- Line height. Long paragraphs of text can be quite difficult to read if there is not enough space in between lines. Consider giving your text some vertical space, especially on longer paragraphs. I usually set the [line-height property](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) to 1.6, but have also used 1.5 to 1.7 depending on the project.

![Example of text with too condensed of a line height](https://miro.medium.com/max/700/1*qgzo6V_TGiRYqfo9eRRisg.png)

<p class="img-caption">Default line height</p>

![Example of text with a better line height](https://miro.medium.com/max/700/1*bGGfvoCT-9AiIoNPmWtC_w.png)

<p class="img-caption">line-height: 1.6</p>

- The right amount of contrast. Contrast between text and background is important but sometimes there is a thing as too much contrast. For example, consider using a variation of pure black (#000, rgb(0, 0, 0)) and pure white (#fff, rgb(255, 255, 255)). You can play around with your own combination but I like to use #2f2f2f for a slightly off black and #f7f7f7 for an off white. Depending on your use case you might even consider using a “grayer” black such as #3d3d3d.

![Example of text with pure black text on a pure white background](https://miro.medium.com/max/700/1*bGGfvoCT-9AiIoNPmWtC_w.png)

<p class="img-caption">Color: #000 | Background: #fff
</p>

![Example of text with an off-black text on an off-white background](https://miro.medium.com/max/700/1*DI1g49VrZU9zWWC7sPNyUw.png)

<p class="img-caption">Color: #3d3d3d | Background: #f7f7f7
</p>

These are a few tips and resources to improve your designs if you have limited experience with design. None of these are hard and fast rules and can be tweaked to fit your project. Below I will include the resources/tools in the above article and provide additional resources and tools I did not cover.

## Resources

- **[0to255](https://www.0to255.com/)**: Color variation tool
- **[Bulk Resize Photos](https://bulkresizephotos.com/en)**: Resize bulk photos
- **[Codepen](https://codepen.io/)**: Front end web dev playground
- **[Coding Heroes](https://codingheroes.io/resources/)**: Tool and resource aggregation by Jonas Schmedtmann
- **[Colormind](http://colormind.io/)**: Color palette generator
- **[Compressor.io](https://compressor.io/)**: Best .jpg compressor I’ve come across
- **[Coolors](https://coolors.co/)**: Color palette generator
- **[Coverr](https://coverr.co/)**: Free stock videos (perfect for background videos)
- **[Cubic Bezier](https://cubic-bezier.com/#.17,.67,.83,.67)**: Transition timing function generator
- **[Dribbble](https://dribbble.com/shots/following/web-design)**: Design inspiration
- **[FontAwesome](https://fontawesome.com/)**: Free to use icons
- **[Google Fonts](https://fonts.google.com/)**: Free web fonts
- **[Media Queries](https://mediaqueri.es/)**: Design inspiration for responsive designs
- **[A Pocket Guide to Typography](http://www.typogui.de/)**: Typography tips
- **[Random User API](https://randomuser.me/)**: Generate random names, portrait photos, addresses, emails, etc.
- **[Refactoring UI](https://refactoringui.com/)**: Collection of UI tips with examples
- **[Transparent Textures](https://www.transparenttextures.com/)**: Tool to generate background textures
- **[Unsplash](https://unsplash.com/)**: free to use photos
