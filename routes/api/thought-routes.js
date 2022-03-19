const router = require('express').Router();


const {addThought,getAllThought,getThoughtByID, thoughtUpdate,deleteThought } = require('../../controllers/thought-controller')
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


module.exports = router;