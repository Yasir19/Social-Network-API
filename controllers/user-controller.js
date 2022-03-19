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
    .populate({
      path:'thoughts',
      select:'-__v'
    })
    .select('-__v')
    .then(dbUserData => 
      res.json(dbUserData))
      .catch(err => { 
        console.log(err);
        res.status(400).json(err);
      })
  
  },
  //endpoint to get user by id
  getUserByID({params},res) {
    User.findOne({_id:[params.id]})
    .populate({
      path:'thoughts',
      select:"-__v"
    })
    .select('-__v')
    .then(dbUserData => {
      if(!dbUserData){
        return res.status(400).json({message:'No user found with this id'});
      }
      res.json(dbUserData)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  },
  updateUser({body, params}, res) {
    User.findOneAndUpdate({_id:params.id}, body , {new:true, runValidators: true})
    .then(dbUserData => {
      if(!dbUserData){
        return res.status(400).json({message: 'No user found with this id'});
      }
      res.json(dbUserData)
    })
    .catch(err => res.status(400).json(err))
  },
  //callback function to delete user 
  deleteUser({params}, res){
    User.findByIdAndDelete({_id:[params.id]})
    .then(dbUserData =>{
      if(!dbUserData){
        return res.status(400).json({message: 'No user found with this id'})
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err))
  },
  addFriends(req,res){
    User.findOneAndUpdate(
      {_id:req.params.userId},
      {$addToSet:{ friends :req.params.friendId}},
      {new:true}
    )
    .then((dbUserData)=> {
      if(!dbUserData){
        return res.status(404).json({message:'No User with this Id'})
      }
      res.json(dbUserData)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
  }, 
  // call back function to delete the friend request 
  removeFriend({params},res){
    User.findByIdAndUpdate(
      {_id: params.userId},
      {$pull: {friends:params.friendId}},
      {new:true},
    )
    .then((dbUserData)=> {
      if(!dbUserData){
        res.status(404).json({message:'No user found'});
      }
      res.json(dbUserData);
    })
    .catch((err)=>{
      console.log(err)
      res.json(err)
    })
  }

  
};
module.exports = UserController
