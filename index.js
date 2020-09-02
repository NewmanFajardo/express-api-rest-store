const express = require('express');
const morgan = require('morgan');

const {mongoose} = require('./database');

const app = express();


//setting
app.set("port" , process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "http://localhost:3300");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes
app.use('/api/branchOffice',require('./src/router/router-branchOffice'));

app.use(function(req, res, next) {
    res.status(404).json({"status":"404"});
    next();
});

//static files

//starting the server
app.listen(app.get('port') , () => {
    console.log("Server run " + app.get('port'));
});