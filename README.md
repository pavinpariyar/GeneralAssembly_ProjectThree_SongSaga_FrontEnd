# General Assembly

## Link to site

[Song Saga](https://songsaga2.netlify.app/home)

## Overview

- Song Saga is a collaborative music library application developed by a team of three. It provides users with a platform to explore a curated collection of songs contributed by the community. Users can discover new music, listen to tracks, and contribute their favorite songs to enrich the library further. The backend of SongSaga is built using the Node.js framework Express.Mongoose is utilized as an Object Data Modeling (ODM) library to interact with a MongoDB database. Whilst, we used React for the frontend along with Bulma to create a visually appealing and responsive design that enhances the user experience.

## Getting Started/Code Installation:

- To access the code, you can clone the GitHub repositories for the frontend and backend. Follow the instructions in each repository's README to set up and run the code locally. 

## Timeframe & Working Team (Group):

- The project consisted of a small group of three people and was completed in one week. The team members were: Pavin Priyar, Evyn-Rose Goldstein, and Joshua Baker.

## Technologies Used:

- React.js, Express, MongoDB, Mongoose, JSON, Node.js, and Bulma CSS Framework. 

## Brief:

- Work in a team, using git to code collaboratively. Build a full-stack application by making your own backend and your own front-end. Use an Express API with mongoose to serve your data from a Mongo database. Consume your API with a separate front-end built with React. Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models. Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut. Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. Allow time for this. Be deployed online so it's publicly accessible.

## Planning:

- During the planning stage, we had created wireframes to represent what the front end and UI would look like. We pseudocode the main features or things we wanted to get accomplished and then build on it from there. With the group project, we each took turns coding and developing individual features and then collectively worked on the main components of the app. 

## Build/Code Process:

- I was tasked with creating the various endpoints on the backend. I primarily focused on creating multiple Schemas models for both user accounts and for the songs being added. Several validation and error handling was implemented with both models. I added and implemented Middleware with the use of JSON Web Tokens for user validations. 

## Challenges:

- The biggest challenge was creating the modal using Bulma CSS Framework and using React to make it functionable. In order to successfully implement a difficult feature, we had to break it down into micro steps. This proved to be useful with any other features or challenges that we faced. 

## Wins:

- Creating the modal and having the YouTube iFrame work with our backend database was the biggest win. The modal was challenging as we relied on a CSS Framework for a large portion of it. Using string manipulation for the video id’s to make them YouTube iFrame more dynamic versus hard coding in the video urls.

# Key Learnings/Takeaways:

- The project provided me with invaluable knowledge and experience that aided my programming growth. By working in a group, I was able to learn alternative methods of problem-solving and the importance of writing clean viewable code for others to understand.

# Bugs:

- The delete song functionality does not work outside of the local source; it fails to function properly on the deployed site. Some photos are not displaying correctly due to their reliance on external internet sources.

## Future Improvements:

- I would like to add a more stylistic search field with drop down for each category to filter the search results. 

- Add more styling to the other pages to compliment the theme of the application. 

- Create and implement a song player that plays the songs without the need of switching song cards and playing only one video at a time. 

