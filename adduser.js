const { request } = require("express");
var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
/* GET home page. */

router.get('/userdetail', function(req, res, next) {
    res.render('adduser',{result:2});
  });





router.post("/insertrecord", function (req, res) {
    console.log("BODY:", req.body);
    console.log("FILE", req.file);
  
    var name = req.body.firstname + " " + req.body.lastname;
    pool.query(
      "insert into adduser(username,emailid,mobileno) values(?,?,?)",
      [
        name,
        req.body.emailid,
        req.body.mobileno,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.render("adduser", { result: 0 });
        } else {
          res.render("adduser", { result: 1 });
        }
      }
    );
  });


  

router.get("/fetchadduser", function (req, res, next) {
      pool.query("select * from adduser", function (error, result) {
      if (error) {
        res.render("displayall", { result: [] });
      } else {
        res.render("displayall", { result: result });
      }
    });
  });






module.exports = router;
