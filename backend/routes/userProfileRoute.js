const express = require('express');

const router = express.Router();
const {isAuthenticated} = require('../middleware/auth')
const userModel = require('../models/UserModel.js');
const {
  logout,signup,signin,GetProfile,UpdateProfile,DeleteAccount,AllUsers,CreateUser, FollowProfile, UnFollowProfile, CreatePost, DeletePost
} = require('../controllers/userProfileController.js')

router.post('/',CreateUser);
router.post('/signup',signup);
router.post('/signin',signin);
router.get("/:id/logout",isAuthenticated,logout);
router.get('/',AllUsers);
router.post('/',signup);
router.post('/',signin);
router.get('/:id',isAuthenticated,GetProfile);
router.patch('/:id',isAuthenticated,UpdateProfile);
router.delete('/:id',isAuthenticated, DeleteAccount);



router.patch('/follow/:id',isAuthenticated,FollowProfile);
router.patch('/unfollow/:id',isAuthenticated,UnFollowProfile);

router.patch('/createPost/:id',isAuthenticated,CreatePost);
router.patch('/deletePost/:id',isAuthenticated,DeletePost);

// router.get('/', getWorkouts);
// router.get('/:id',getWorkout);
// router.post('/', createWorkout );
// router.delete('/:id', deleteWorkout)
// // The PATCH HTTP method is used to modify the values of the resource properties
// router.patch('/:id', updateWorkout)

module.exports = router


// router.get('/:id', (req, res) => {
    // res.json({
    //     message: `get data of one user`
    // })
// })

// flow abhi kuch aisa hai
// server.js se route bnao declear kro
// usko router / filename.js m usko define krdo
// connect a atlas db
// make a schemas and modal


// userRoutes 
  // - get Profile 
  // - patch Profile
  // - delete account 
