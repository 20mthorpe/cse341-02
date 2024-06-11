const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect.js')
const util = require('./utilities/');
const { auth } = require('express-openid-connect')
const config = require('./config/authconfig.js')


const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 8080;

app.use(auth(config));

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './s/layout');


const indexRoutes = require('./routes/index');
app.use(bodyParser.json());


// middleware
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


mongodb.initDb((err,db)=>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Server is running on port: ${port}`);
    }   
});
app.use('/', util.handleErrors(indexRoutes));