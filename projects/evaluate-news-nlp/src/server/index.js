const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')   
const app = express()
/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.send(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/test', (req, res) => {
    console.log("post done");
    console.log(req.body);
    textapi.sentiment({
        text: req.body.text
        }, (error, response) => {
            res.json(response)
            console.log("lol"+response);
            
        if (error === null) {
            console.log("inside");
            console.log(response);
        }
    });
})
module.exports = app;