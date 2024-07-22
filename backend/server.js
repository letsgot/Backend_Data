// import express
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')

require('dotenv').config()

// make a app variable by calling express
const app = express();



app.use(cors());
app.use(express.json())
// Use cookie-parser middleware
app.use(cookieParser());

const userProfile = require('./routes/userProfileRoute.js')
app.use('/api/userProfile',userProfile);

// router => get route on 4000 port
app.get('/',(req,res)=>{
    res.json({
        message : "Hello Port 4000"
    })
})

 // app listen on which port
// app.listen(process.env.PORT,()=>{
//     console.log("App listening connect db on port ", process.env.PORT);
// })


mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // app listen on which port
    app.listen(process.env.PORT,()=>{
        console.log("App listening connect db on port ", process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log('error  ' + error.message);
  })

