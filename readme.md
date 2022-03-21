# Social-Network-API
# Description 
# Installation
 to run the application on a local computer please run the following code to install all necessary dependencies 
====================
     npm install
====================

# Instructions
 to use express.js and access the website locally
 1. in the CLI type (npm start) to run the server locally. 
 2. use insomnia to preform the CRUD operation 

 # Endpoint you will need 
 # User CRUD Endpoint 
 1- To get all users `http://localhost:3001/api/users/`
 2- To get users by id `http://localhost:3001/api/users/userID`
 3- To Post a user `http://localhost:3001/api/users/`
 4- To update a user infromation`http://localhost:3001/api/users/userID`
 5- To Delete a user `http://localhost:3001/api/users/userID`
 # thought CRUD Endpoint 
 1- To post a Thougth `http://localhost:3001/api/thoughts/`
 in the body you will need 
 	`"thoughtText":"React is an excellent tool with which to create interactive applications for mobile, web, and other platforms"`
	`"writtenBy":"user1",`
	`"userId":"6238001fdcde81def9854747"`
 2- To get all thought `http://localhost:3001/api/thoughts/`
 3- To get thought by id `http://localhost:3001/api/thoughts/thoughtId`
 4- To update a thought `http://localhost:3001/api/thoughts/userId/ThoughtId`
 5- To delete a thought `http://localhost:3001/api/thoughts/userId/thoughtId`
  # Reaction CRUD Endpoint
  1- post a reaction`http://localhost:3001/api/thoughts/react/userID/thoughtId`
  2- delete a reaction `http://localhost:3001/api/thoughts/userId/thoughtId/react/reactionId`
  # Follow friend CRUD Endpoint
  1- add friend `http://localhost:3001/api/users/{first userId}/friends/{the friend userId}`
  2- delete friend `http://localhost:3001/api/users/{first userId}/friends/{the friend userId}`
 # video links 
  part one 
  https://drive.google.com/file/d/1Wb5u4r6AVb4JuV5lH2TWxR5oQWyBr4mr/view
  part two
  https://drive.google.com/file/d/1BtR8zuH3XCbBHJxa2uGt-pzpV3PwzJQ9/view

   # contact me 
   email: yasir.habboo@gmail.com 
   GitHub: https://github.com/Yasir19
   Linkedin :https://www.linkedin.com/in/yasir-habboo/


