# Stream One Project: Back to the Future Website.

## Table of Contents

- [Overview](#overview)
    - [What is this website for?](#what-is-this-website-for)
    - [What does the website allow users to do?](#what-does-the-website-allow-users-to-do)
    - [How does it work?](#how-does-it-work)
- [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
- [Tech Used](#tech-used)
- [Testing Carried Out](#testing-carried-out)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

### What is this website for?

This is my Stream One project for [Code Institue](https://www.codeinstitute.net/). The website is a fan website for the film trilogy "Back to the Future".

### What does the website allow users to do?

The website allows users to view film information such as the plot, trailers, reviews etc. There is also an interactive timeline that shows what I have deemed the most important dates in the film trilogy. There is also a contact form that users can interact with however there is no backend for this so the form data doesn't get sent anywhere.

### How does it work?

The website is built with HTML for the structure, CSS and Bootstrap for the styling, Javascript to validate the contact form and Vis for the timeline.

## Features

### Existing Features

- Home Page
- Trilogy Page
- Timeline Page with interactive timeline
- Rent/Purchase page
- Contact Form with JavaScript Validation

### Features Left to Implement

- expandable click events on the timeline to reduce clutter

## Tech Used

- HTML5
    - This provides the basic layout of the webpage.
- CSS3
    - I have used this to style certain elements on the sites pages.
- [Bootstrap](http://getbootstrap.com)
    - I have used bootstrap to give my website a clean and responsive layout.
- JavaScript
    - This has been used to provide form validation on the contact form to ensure that users get a response when they haven't filled in part of the form. This is also used in Vis.js.
- [Vis.js](http://visjs.org/index.html)
    - This library was used for creating the timeline.
- [jQuery](https://jquery.com/)
    - This is used in conjunction with Bootstrap.

## Testing Carried Out

This section is to be filled out.

## Deployment

I chose to use GitHub pages to host my website. I have carried out the steps below to deploy my website to GitHub pages.

1. Firstly I set up a gh-pages branch within my Back_to_the_Future repository.
2. I then ran the `git checkout gh-pages` command to change to that branch and I ensured that there was a base `<href>` on each page and that all the filepaths for images were correct.
3. I then merged my master branch into my gh-pages branch by running the command `git merge master`.
4. I then ran `git push` to push my local branch to the gh-pages remote branch.
5. I then went to "https://liam-cafearo.github.io/Back_to_the_Future/index.html" to check that it had deployed as planned.

## Credits



## Contributing

At present any requests to contribute towards the project will be denied as this project must be work that I am solely responsible for.