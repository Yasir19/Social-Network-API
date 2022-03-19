const {Thought, User} = require("../models")

const thoughtController ={
    addThought ({params, body}, res){
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: [params.userId]},
                {$push:{ thoughts: _id}},
                {new: true}
            );
        })
        .then((dbUserData) => {
            if(!dbUserData){
                return res.status(404).json({message:'No User found with this id'})
            }
            res.json(dbUserData)
        })
        .catch((err)=> res.json(err))
    },
    // get all thoughts 
    getAllThought (req, res){
        Thought.find({})
        .populate({
            path:'reactions',
            select:'-__v'
        })
        .select('-__v')
        .sort({id: -1})
        .then(dbUserData => {
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        })
    },
    getThoughtByID ({params}, res){
        Thought.findById({_id:params.id})
        .populate({
            path:'reactions',
            select:'-__v'
        })
        .select('-__v')
        .sort({id: -1})
        .then(dbUserData =>{
            if(!dbUserData){
                return res.status(404).json({message: "No thought found with this id" })
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
    }, 
    thoughtUpdate({params, body}, res){
        User.findById({_id:params.userId})
        .then((userData) => {
            if(!userData) {
                return res.status(404).json({message: "you can't delete this thought"})
            }
            return Thought.findOneAndUpdate({_id:params.thoughtId}, body, {new: true, runValidators: true})
            .then((dbUserData) =>{
                if(!dbUserData) {
                    return res.status(404).json({message:" No Thought found with this id"})
                }
                res.json(dbUserData);
            })
            .catch((err)=> {
                console.log(err);
                res.json(err)
            })
        })
    },
    deleteThought({params} , res){
        Thought.findOneAndRemove({_id:params.thoughtId})
        .then((deleteThought) => {
            if(!deleteThought) {
                return res.status(404).json({message:'No thought found with this ID'})
            }
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$pull:{thoughts:params.thoughtId}},
                {new: true}
            )
        })
        .then((dbUserData)=> {
            if(!dbUserData){
                return res.status(404).json({message:"No User found with this id "})
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            res.json(err);
        })
    }
}
module.exports = thoughtController