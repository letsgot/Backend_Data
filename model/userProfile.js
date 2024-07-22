const mongoose = require('mongoose')
const { isMobilePhone,isEmail, isStrongPassword } = require('validator');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        minLength: [2, 'Name should contain at least two characters!'],
        maxLength : [25, 'Name should not contain more than 25 characters!']
    },
    email : {
        type : String,
        require : true,
        unique : true,
        ValidityState :  [ isEmail, 'invalid email' ]
    },
    password : {
        type : String,
        require : true,
        unique : true,
        ValidityState :  [ isStrongPassword, 'invalid weak password' ]
    },
    mobile : {
        type : Number,
        require : true,
        ValidityState :  [ isMobilePhone, 'invalid mobile number' ]
    },
})

module.exports = mongoose.model('users',userSchema);;