const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required : [true, 'Please add a Name'],
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required : [true, 'Please add a E-mail'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ]
 
    },
    password: {
        type: String,
        trim: true,
        required : [true, 'Please add a Password'],
        minlength: [6, 'password must have at least six(6) characters'],
        match: [
            /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
            'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
        ]
    },
    userName : {
       type : String,
       unique : true,
       required : true
    },
    role: {
        type: Number,
        default: 0,
   
    },
    followers : {
        type : Array,
        default : [],
        // required : true
    },
    following : {
        type : Array,
        default : [],
        // required : true
    },
    posts : {
        type : Array,
        default : [],
        // required : true
    }
},{ timestamps : true })



userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });

  // verify password
  userSchema.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
  }

  // get json web token 
  userSchema.methods.jwtGenerateToken = function(){
    return jwt.sign(
      {
        id : this.id
      },
      process.env.JWT_SECRET,
      {
        expiresIn :'1d'
      }
    )
  }

module.exports = mongoose.model('users',userSchema);

// uniqueId String ,
// followers [],
// following [],
// post [] String,
// details {},
