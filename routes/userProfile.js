const userProfileRouter = require('express').Router();

const {getAllUsers,signup} = require('../controller/userProfileController')

userProfileRouter.get('/',getAllUsers);

userProfileRouter.post('/signup',signup);

module.exports = userProfileRouter;