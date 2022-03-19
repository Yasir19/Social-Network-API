const router = require('express').Router();
const{ createUser, getAllUser, getUserByID, updateUser, deleteUser} = require('../../controllers/user-controller');

router.route('/')
.post(createUser)
.get(getAllUser);

// set up GET one, PUT and DELETE for /api/user/:id
router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser)


module.exports = router