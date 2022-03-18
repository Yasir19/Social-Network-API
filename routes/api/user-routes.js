const router = require('express').Router();
const{ createUser, getAllUser} = require('../../controllers/user-controller');

router.route('/')
.post(createUser)
.get(getAllUser);




module.exports = router