
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./database');
var Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
 
 
var app = express();
 
app.get('/export-csv',function(req,res){
  db.query("SELECT * FROM adduser", function (err, adduser, fields) {
    if (err) throw err;
    console.log("adduser:");
     
    const jsonUsers = JSON.parse(JSON.stringify(adduser));
    console.log(jsonUsers);
 
    // -> Convert JSON to CSV data
    const csvFields = ['id', 'name', 'email'];
    const json2csvParser = new Json2csvParser({ csvFields });
    const csv = json2csvParser.parse(jsonCustomers);
 
    console.log(csv);
 
     res.setHeader("Content-Type", "text/csv");
     res.setHeader("Content-Disposition", "attachment; filename=adduser.csv");
 
     res.status(200).end(csv);
    // -> Check 'customer.csv' file in root project folder
  });
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;


/*

//run the below command

nodemon server.js

after run this command open your browser and hit 

http://127.0.0.1:3000/export-csv
*/