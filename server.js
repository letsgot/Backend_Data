const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const userProfile = require('./routes/userProfile.js')
const mongoose = require('mongoose');

const bodyParser = require('body-parser'); // Middleware 

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/user',userProfile);



mongoose.connect("mongodb+srv://itschauhan:Ch%40uh%40n5769@data.6m3wt9h.mongodb.net/?retryWrites=true&w=majority&appName=Data").then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})

const port = 3000 // Port we will listen on
// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));