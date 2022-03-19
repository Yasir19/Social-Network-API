const router = require('express').Router();


const {addThought,getAllThought,getThoughtByID, thoughtUpdate,deleteThought,createReaction, deleteReact} = require('../../controllers/thought-controller')
//api to get all thought
router.route('/').get(getAllThought)
//api to get one thought by Id
router.route('/:id').get(getThoughtByID)
//api to add thought
router.route('/:userId').post(addThought)
//api to update thought 
router.route('/:userId/:thoughtId').put(thoughtUpdate)
//api for delete a thought
router.route('/:userId/:thoughtId').delete(deleteThought)
// api to create reaction
router.route('/:userId/:thoughtId').post(createReaction)
//api to delete reaction
router.route('/:userId/:thoughtId/:reactionId').delete(deleteReact)

module.exports = router;