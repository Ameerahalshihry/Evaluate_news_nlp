// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3030;
const server = app.listen(port, () => console.log(`it's running on port ${port}`));

//GET route
app.get('/all', (req, res) =>{
    res.send(projectData);
    console.log(projectData);
    projectData=[]
})

//POST route
app.post('/add', (req, res) =>{
    const newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        content: req.body.userFeelings
    };
    projectData.push(newEntry);
    console.log(projectData);
})