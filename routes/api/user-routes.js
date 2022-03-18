const router = require('express').Router();
const{ createUser, getAllUser, getUserByID} = require('../../controllers/user-controller');

router.route('/')
.post(createUser)
.get(getAllUser);

// set up GET one, PUT and DELETE for /api/user/:id
router.route('/:id')
.get(getUserByID)


module.exports = router