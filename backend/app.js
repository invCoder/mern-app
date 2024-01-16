const express = require('express');

const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); // Import cors module

const PORT = process.env.PORT || 5000;
const noteRoutes = require('./routes/user-notes');


//connect mongodb connection

mongoose.connect("mongodb+srv://Shubhamlal:jan2024@cluster0.flqoi.mongodb.net/lolodb");

//Express middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());


//Define routes here
app.get('/' , (req,res,next)=>{
    res.send('you are on web.');
})
app.use('/api', noteRoutes);


//staarting server
app.listen(PORT, () => {
    console.log(`server is started on ${PORT}`);
})