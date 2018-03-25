# Stream One Project: Back to the Future Website.

## Table of Contents

* [Overview](#overview)
  * [What is this website for?](#what-is-this-website-for)
  * [What does the website allow users to do?](#what-does-the-website-allow-users-to-do)
  * [How does it work?](#how-does-it-work)
* [Features](#features)
  * [Existing Features](#existing-features)
  * [Features Left to Implement](#features-left-to-implement)
* [Tech Used](#tech-used)
* [Testing Carried Out](#testing-carried-out)
  * [Scenario One: JavaScript error modals for contact page](#scenario-one-javascript-error-modals-for-contact-page)
  * [Scenario Two: Timeline Page](#scenario-two-timeline-page)
  * [Scenario Three: Timeline usability](#scenario-three-timeline-usability)
  * [Scenario Four: Timeline date visibility](#scenario-four-timeline-date-visibility)
  * [Web page relative paths](#web-page-relative-paths)
  * [Timeline script tag location](#timeline-script-tag-location)
  * [XSS errors on "The Trilogy" page](#xss-errors-on-the-trilogy-page)
* [Deployment](#deployment)
* [Credits](#credits)
* [Contributing](#contributing)

## Overview

### What is this website for?

This is my Stream One project for [Code Institute](https://www.codeinstitute.net/). The website is a fan website for the film trilogy "Back to the Future".

### What does the website allow users to do?

The website allows users to view film information such as the plot, trailers, reviews etc. There is also an interactive timeline that shows what I have deemed the most important dates in the film trilogy. There is also a contact form that users can interact with however there is no backend for this so the form data doesn't get sent anywhere.

### How does it work?

The website is built with HTML for the structure, CSS and Bootstrap for the styling, Javascript to validate the contact form and Vis for the timeline.

## Features

### Existing Features

* Home Page
* Trilogy Page
* Timeline Page with interactive timeline
* Rent/Purchase page
* Contact Form with JavaScript Validation

### Features Left to Implement

Nothing left to implement to complete the project.

## Tech Used

* HTML5
  * This provides the basic layout of the webpage.
* CSS3
  * I have used this to style certain elements on the sites pages.
* [Bootstrap](http://getbootstrap.com)
  * I have used bootstrap to give my website a clean and responsive layout.
* JavaScript
  * This has been used to provide form validation on the contact form to ensure that users get a response when they haven't filled in part of the form. This is also used in Vis.js.
* [Vis.js](http://visjs.org/index.html)
  * This library was used for creating the timeline.
* [jQuery](https://jquery.com/)
  * This is used in conjunction with Bootstrap.

## Testing Carried Out

### Scenario One: JavaScript error modals for contact page

#### Scenario Steps:

1. Open home page.
2. Naviate to contact page.
3. Fill in form but miss out a required field
4. Press submit.
5. Repeat steps 3 and 4 another two times, changing the missing required field each time.

#### Desired Outcomes

If successful the user should recieve a modal error message advising them that the they need to fill in the required fields.

### Scenario Two: Timeline Page

#### Scenario Steps:

1. Open home page.
2. Navigate to the timeline page.
3. Click on each section to see if the buttons expose and expanded box containing the related information i.e. plot, trailers etc.

#### Desired Outcomes

The user should see the information in the expanded boxes and the trailers.

### Scenario Three: Timeline usability

#### Scenario Steps:

1. Open home page.
2. Navigate to Timeline page.
3. Use the timeline and check the following:
   * Do you have to click the timeline in order to use it?
   * Can you scroll side to side?
   * Does Zoom in and out work?
   * If you click on an event does the event expand to show more information?
   * If you click on another event does the previously selected event collapse?

#### Desired Outcomes

The timeline should pass the requirements above.

### Scenario Four: Timeline date visibility

#### Scenario Steps:

1. Open home page.
2. Navigate to Timeline Page
3. Scroll down and check that the month and year in the bottom left hand corner are displayed on the timeline.

#### Desired Outcomes

On page load user should see the month and year in the bottom left hand corner or the timeline.

### Web page relative paths

When deploying the web site to GitHub Pages I found that the links to my other pages on the site did not work, this was due to the filepaths not being
relative. I updated the filepaths and the page links worked.

### Timeline script tag location

The following JavaScript files were placed in the `<head>` of the timeline.html file:

* vis.js
* timeLineData.js
* timeLineOptions.js

When these were placed at the bottom of the `<body>` I found that the JavaScript did not load correctly on the timeline page.

### XSS errors on "The Trilogy" page

This is a known issue within Chrome and is awaiting a fix from the Chrome developers, more information can be found here: [https://stackoverflow.com/questions/48714879/error-parsing-header-x-xss-protection-google-chrome]. The issue should be resolved in Chrome v66 as stated here: [https://bugs.chromium.org/p/chromium/issues/detail?id=807304].

## Deployment

I chose to use GitHub pages to host my website. I have carried out the steps below to deploy my website to GitHub pages.

1. Firstly I set up a gh-pages branch within my Back_to_the_Future repository.
2. I then ran the `git checkout gh-pages` command to change to that branch and I ensured that there was a base `<href>` on each page and that all the filepaths for images were correct.
3. I then merged my master branch into my gh-pages branch by running the command `git merge master`.
4. I then ran `git push` to push my local branch to the gh-pages remote branch.
5. I then went to [https://liam-cafearo.github.io/Back_to_the_Future/index.html] to check that it had deployed as planned.

## Credits

* [Philip Walton](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/) - used the advice on the website to dsiplay my footer correctly using flexbox.
* [Simen Daehlin/Eventyret](https://github.com/Eventyret) Simen provided me a lesson on how to write the JavaScript for my API calls, whilst I didn't copy any code Simen did dictate to me some of the code to get me started and to help me understand how this is done, I then expanded on that code so that I could pull in further infomration for the trilogy page.
* [The Open Movie Database](https://www.omdbapi.com/) Provided the API information for the trilogy page.
* [Futurepedia](http://backtothefuture.wikia.com/wiki/Back_to_the_Future_timeline) Provided the infomration for the timeline.
* There are also various images on the website that I have used for the project however these were taken from [Google Image Search](https://www.google.co.uk/imghp?hl=en&tab=wi), [Pexels](https://www.pexels.com/) and [unplash.com](https://unsplash.com/) I have used these under the fair usage policy however if the you feel these should be removed please contact me.

## Contributing

At present any requests to contribute towards the project will be denied as this project must be work that I am solely responsible for.
