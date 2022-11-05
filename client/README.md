# Student Full Stack Challenge

## Assembler Institute of Technology

This project follows the instructions at the follwoing repository: [AIT Student Full Stack Challenge](https://github.com/assembler-institute/ait-student-full-stack-challenge)


Concept: A Memes and Gif webpage where users can share and upload their own files and gifs. Priority is given to either front or backend.

<br>

## Project Status

The project entails a website with a focus on <b>backend technologies</b>. 
Requirements include:

- Limited focus on design / UI aspects
- Creation of own database to store information in
- User registration and login
- User actions linked to database user document
- Open access to view the gifs if not logged in
- Uploading only by user


This repo is a work in progress, and certain project objectives have not yet been reached.

<br>


## Getting Started

This repo contains both projects for both the frontend app and backend server.

- To launch the project, open the terminal and run `npm -i` within the client folder, and then do the same from within the server directory.
```
npm -i
```

- Then, complete the `env` files with your environment variables. See `.env.example` as a model.
- The 'trending' and 'categories' variables in the frontend were originally link to the [Giphy](https://giphy.com/) API.

<br>

## Run the App

To run the app and backend server in development mode, run `npm run dev` on both.

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The backend server will open on [http://localhost:4000](http://localhost:4000)

The page will reload when you make changes.

<br>


## Frontend technologies used

- HTML5
- CSS3
- TailwindCSS
- Vite
- Javascript
- ReactJS
- React-hook-form

### Dependencies / Prerequisites

- TailwindCSS
- React Toastify

<br>


## Backend technologies used

- NodeJS
- ExpressJS
- MongoDB
- Mongoose

### Dependencies / Prerequisites

- Dotenv
- Nodemon
- Helmet
- Morgan
- Cors
- BCrypt

<br>

## Features

- Login and Registration
- JSONWebToken for certain API requests
- API calls to Giphy Development API 
- Add Gif to database

<br>

## Configuration

- Basic development configuration for the backend can be found in 'src/config/config.js'
- User can access home page without loggind in, but must be logged in in order to add a gif to the database.

<br>


## Author

- [Blake Johnson](https://github.com/blakejohns5)

