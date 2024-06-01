const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect.js')
const util = require('./utilities/');

const app = express();
const port = process.env.PORT || 8080;

const indexRoutes = require('./routes/index');
app.use(bodyParser.json());

// middleware
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', util.handleErrors(indexRoutes));

mongodb.initDb((err,db)=>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Server is running on port: ${port}`);
    }   
});