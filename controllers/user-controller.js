const { User } = require("../models");
const { db } = require("../models/User");
const UserController = {
  // endpoint function as methods that work as callback function for the express.js
  // create user 
  createUser({body}, res){
      User.create(body)
      .then(dbUserData => {
          res.json(dbUserData)
      })
      .catch(err => res.status(400).json(err));
  }
};
module.exports = UserController
