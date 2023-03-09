
# React Social Media platform

This is a ReactJS based social media platform clone that allows users to create profiles, create posts, and view posts from other users. It's a simple and intuitive platform that allows users to connect with other users by sharing their thoughts, ideas, and experiences through posts. 

### Tools Used

ReactJS: A popular and widely used JavaScript library for building user interfaces.
Firebase: A mobile and web application development platform that provides a range of tools and services to help developers build high-quality apps.
Ant Design: A UI library for React that provides a set of high-quality React components and patterns.

</a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/> </a>
<a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="50" height="50"/>
<a href="https://ant.design">
<img width="50" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
</a>

## Features
User Authentication: Users can sign up and log in securely using Firebase Authentication.
User Profiles: Users can create their own profiles and edit them, including uploading a profile picture and changing their username.
Post Creation: Users can create posts by adding text.
Post Feed: Users can view posts from other users on their feed.
Responsive Design: The platform has a responsive design that adjusts to different screen sizes.

## Overview

![App Screenshot](./src/assets/screenshots/Screenshot-login.png)
![App Screenshot](./src/assets/screenshots/Screenshot-register.png)
![App Screenshot](./src/assets/screenshots/Screenshot-home.png)
![App Screenshot](./src/assets/screenshots/Screenshot-post.png)
![App Screenshot](./src/assets/screenshots/Screenshot-profile.png)

## Installation

To run this project locally, you will need to have Node.js and npm installed on your computer. Follow these steps:

Clone the repository to your local machine.
Navigate to the project directory and run npm install to install the dependencies.
Create a Firebase account and set up a new project.
In the Firebase console, go to Authentication and enable Email/Password as a sign-in method.
In the Firebase console, go to Database and create a new Cloud Firestore database.
In the Firebase console, go to Project settings and copy the Firebase configuration object.
Create a new file firebase.js in the src directory and paste the Firebase configuration object into it.
Run npm start to start the development server.