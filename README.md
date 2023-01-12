# DevLocker

<i>Developer: Jordan Brookfield</i>

[Live link](https://devlocker.herokuapp.com/)

## Table of Contents

- [Purpose](#purpose)
- [UX](#user-experience)
- [Features](#features)
- [Technologies](#technologies)
- [Testing](#testing)
- [Bugs](#bugs)
- [Validation](#validation)
- [Config](#config)
- [Credits](#credits)

# Milestone Project 5 - DevLocker

## Purpose

This website was created to complete the fifth Milestone Project for Code Insitute's Full Stack Software Developer course. I built this from the ground up using knowledge I gained from the previous modules. The objective of this project is to showcase my ability to create a true Full Stack application using the Django Rest framework for the backend and React for the frontend. The full list of technologies used can be found in the technologies section further down.

Users of this website are able to:

- Create, update and delete their own posts
- Create, update and delete their own comments
- Follow and unfollow other users
- Like and unlike posts
- Search for posts via keywords or username
- Filter posts by category

Please note: To open any links in this document in a new browser tab, please press CTRL + Click.

# User Experience

<details><summary>User Stories</summary>

All of the user stories are shown below. If you would like to inspect them further, please click [this](https://github.com/users/jrdnbrkfld/projects/8/views/1?layout=table).
![User Stories](docs/readme/user-stories.png)

</details>

## Design

<details><summary>Colours</summary>

![Colours](docs/readme/colours.png)

</details>

<details><summary>Fonts</summary></details>

<details><summary>Wireframes</summary></details>

## Features

<details><summary>Home</summary>

The first thing users are greeted to is the Home Page. This is where you will find everything to navigate the website and decide wether or not you would like to take part and create an account.

Desktop view:

![Home page](docs/readme/home-page.png)

Mobile view:

![Home page mobile](docs/readme/home-page-mobile.png)

</details>
<details><summary>Navbar</summary>
Featured at the top of all pages is the navbar, holding the DevLocker logo and the links to the Sign in and Sign up page while logged out.
If the user is logged in they can navigate to the Create, Feed, Liked, Sign out and Profile pages. On smaller screen sizes this turns into a toggler button.

This targets the following user stories:

- [As a user I can view a navbar from every page so that I can navigate easily between pages](https://github.com/jrdnbrkfld/devlocker/issues/1)
- [As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh](https://github.com/jrdnbrkfld/devlocker/issues/2)
- [Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to](https://github.com/jrdnbrkfld/devlocker/issues/5)
- [Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up](https://github.com/jrdnbrkfld/devlocker/issues/7)

Desktop view:

![Desktop view](docs/readme/navbar.png)

Mobile view:

![Mobile view](docs/readme/navbar-mobile.png)

Toggled view:

![Toggled view](docs/readme/navbar-toggle.png)

</details>
<details><summary>Sign up</summary>
If the visitor likes the website, they are able to register an account. This enables the user to be able to create posts, like posts and comment on posts.</details>
<details><summary>Sign in</summary>
When the user returns to the website, or come here after they have signed up they are able to log back in with no problems.</details>
<details><summary>Popular profiles</summary>
While viewing the website users are able to view other accounts that are popular, enabling them to decide if they would like to follow for more content.</details>
<details><summary>Search</summary>
Users are able to search via keywords or by username to give them the ability to specifically view posts related to their interests.</details>
<details><summary>Categories</summary>
Users are able to filter posts by their category that was chosen when the post was created.</details>
<details><summary>Feed</summary>
When the user visits this page they will be greeted with posts from the accounts that they have followed, tailoring their experience.</details>
<details><summary>Liked</summary>
When the user visits this page they can view the posts that they have liked, enabling them to keep posts that they enjoy or would find useful</details>
<details><summary>Create, edit and delete posts</summary>
Users are able to create their own posts including an image, title, content and category. If changes need to be made they also have the ability to edit all fields for the post. Deletion is also enabled.</details>
<details><summary>Create, edit and delete comments</summary>
Users are able to create their own comments on posts. If changes need to be made they also have the ability to edit the comment, or delete it.</details>
<details><summary>Profile</summary>
When users visit this section they can view their personal statistics:

- How many posts they have created
- How many followers they have
- How many people they follow
- A small bio section where users can enter a quick description of themselves.

Clicking the 3 dots creates a dropdown menu with the options to:

- Edit profile
- Change username
- Change password</details>
<details><summary>Sign out</summary>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus ligula ut euismod pellentesque. Nulla arcu lorem, congue id mollis luctus, accumsan eu tellus. Quisque lacinia condimentum ipsum, a sollicitudin eros molestie ut. In metus ante, eleifend tempus orci sit amet, viverra euismod ante.</details>

## Future Features

# Technologies

## Languages

## Libraries, frameworks and dependencies

## Tools

# Testing

## Manual testing

# Bugs

# Validation

## HTML

## CSS

## JSX

## Wave

## Lighthouse

# Config

### Forking the GitHub Repository

1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.

### Making a Local Clone

1. Go to the GitHub repository
2. Locate the Code button above the list of files and click it
3. Highlight the "HTTPS" button to clone with HTTPS and copy the link
4. Open commandline interface on your computer
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard

```
$ git clone https://github.com/aleksandracodes/ci_pp5_snapfood.git
```

7. Press Enter to create your local clone

# Credits
