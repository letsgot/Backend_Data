const UserModel = require('../model/userProfile')

const getAllUsers = ((req,res)=>{
  console.log("Successfully got the call");
})

const signup = (async(req,res)=>{
    console.log(req.body);
    let email = req.body["email"];
    let userExist = await UserModel.findOne({email});

    if(userExist){
        res.status(400).json({
            sucess : false,
            message : "Email already exists"
        })
    }
    
    try {
        let user = await UserModel.create(req.body);
        res.status(201).json({
            status : true,
            user
        })
    } catch (error) {
      console.log(error);
        // next(error);
        res.status(400).json({
            sucess : false,
            message : error.message
        })
    }
})
  

module.exports = {
    getAllUsers,signup
}