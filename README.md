# Project Three - SongSaga 🎵📚

songsaga2.netlify.app

## Table of Contents

- [Project Two - Weather Rail 🚇☀️](#project-Two---weather-rail-️)
  - [Table of Contents](#table-of-contents)
  - [Description 📝](#description-)
  - [Features ✨](#features-)
  - [Tech Stack 🛠️](#tech-stack-️)
  - [Project Structure 🗂️](#project-structure-️)
  - [Installation 💻](#installation-)

## Description 📝

Song Saga is a collaborative music library application developed by a team of three. It provides users with a platform to explore a curated collection of songs contributed by the community. Users can discover new music, listen to tracks, and contribute their favourite songs to enrich the library further. The backend of SongSaga is built using the Node.js framework Express.Mongoose is utilised as an Object Data Modelling (ODM) library to interact with a MongoDB database. Whilst, we used React for the frontend along with Bulma to create a visually appealing and responsive design that enhances the user experience.

## Features ✨

- Community-Driven Music Library: Users can explore a curated collection of songs contributed by the community, discover new music, and add their favorite tracks to the library.
- User Account Management: Supports user accounts with validation and authentication using JSON Web Tokens, allowing users to contribute and manage their music collection.
- Dynamic YouTube Integration: Implements a dynamic YouTube iFrame within modals, enabling users to play songs directly from the library with a seamless viewing experience.
- Visually Appealing Design: Built with React and styled using Bulma CSS, the application offers a responsive and visually attractive interface that enhances user experience.
- Backend Powered by Express and MongoDB: The backend is built with Express and utilizes Mongoose for interacting with a MongoDB database, providing robust data management for the application.
- CRUD Functionality: Full support for creating, reading, updating, and deleting songs and user data, though some features like the delete function have known bugs.
- Search and Filtering: Plans for future improvements include advanced search functionality with category-specific filters to enhance discoverability.

## Tech Stack 🛠️
- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Bulma CSS
- JSON Web Tokens (JWT)

## Project Structure 🗂️

```plaintext
.
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── assets
│   │       ├── image
│   │       │   ├── collage.png
│   │       │   └── logo.png
│   ├── src
│   │   ├── components
│   │   │   ├── CreateSong.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ShowSong.tsx
│   │   │   ├── Signup.tsx
│   │   │   ├── SongCards.tsx
│   │   │   ├── SongList.tsx
│   │   │   └── Login.tsx
│   │   ├── interfaces
│   │   │   ├── songs.ts
│   │   │   └── user.ts
│   │   ├── styles
│   │   │   └── main.scss
│   │   ├── App.tsx
│   │   ├── config.ts
│   │   ├── index.d.ts
│   │   ├── main.tsx
│   │   └── vite.config.ts
│   ├── .env.production
│   ├── .example.env
│   ├── .gitignore
│   ├── d.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   └── tsconfig.node.json
│
├── backend
│   ├── config
│   │   └── environment.ts
│   ├── controllers
│   │   ├── songController.ts
│   │   └── userController.ts
│   ├── db
│   │   └── seed.ts
│   ├── errors
│   │   └── validation.ts
│   ├── middleware
│   │   └── secureRoute.ts
│   ├── models
│   │   ├── songs.ts
│   │   └── users.ts
│   ├── netlify
│   │   └── functions
│   │       └── api.ts
│   ├── views
│   │   └── router.ts
│   ├── .example.env
│   ├── .gitignore
│   ├── netlify.toml
│   ├── README.md
│   ├── index.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json

```

## Installation 💻

To set up and run the project locally, follow these steps:

1. **Clone the Repository**
First, clone the repository containing both the frontend and backend code:

```bash
git clone git@github.com/pavinpariyar/GeneralAssembly_ProjectThree_SongSaga_FrontEnd.git
cd <your-repository-folder>
```

2. **Set Up the Frontend**
Navigate to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

3. **Set Up the Backend**
Navigate to the backend directory and install the dependencies:

```bash
cd ../backend
npm install
```

4. **Configure Environment Variables**
Both the frontend and backend require environment variables for proper configuration. Create .env files in both directories:

- Frontend: Copy the .example.env file to create a .env file and fill in the required variables.

```bash
cp .example.env .env
```

- Backend: Repeat the same process for the backend.

```bash
cp .example.env .env
```

Fill in the necessary environment variables such as API keys, database URLs, and other configurations in these files.

5. **Run the Frontend**
After setting up the environment, start the frontend development server:

```bash
cd ../frontend
npm run dev
```

This command will run the frontend on a local development server, typically at http://localhost:5173.

6. **Run the Backend**
In a separate terminal, start the backend server:

```bash
cd ../backend
npm run dev
```

This will run the backend server, typically on http://localhost:3000.

7. **Access the Application**
Once both servers are running, open your web browser and navigate to http://localhost:5173 to access the application.

**Additional Notes**

- Database Setup: Ensure that MongoDB is installed and running on your machine. The backend will connect to the database using the connection string provided in your .env file.

- Netlify: If you're using Netlify for deployment, ensure that the netlify.toml file is correctly configured in the backend.


