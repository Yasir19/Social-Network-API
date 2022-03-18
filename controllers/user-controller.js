const { User } = require("../models");
const UserController = {
  // endpoint function as methods that work as callback function for the express.js
  // create user 
  createUser({body}, res){
      User.create(body)
      .then(dbUserData => {
          res.json(dbUserData)
      })
      .catch(err => res.status(400).json(err));
  },
  //endpoint for all user
  getAllUser(req, res){
    User.find({})
    // populate thought
    .then(dbUserData => {
      res.json(dbUserData)
      .catch(err => { 
        console.log(err);
        res.status(400).json(err);
      })
    })
  },
  getUserByID({params},res) {
    User.findOne({_id:[params.id]})
    .then(dbUserData => {
      if(!dbUserData){
        return res.status(400).json({message:'No pizza found with this id'});
      }
      res.json(dbUserData)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  }
  
};
module.exports = UserController
