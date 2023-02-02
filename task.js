const { request } = require("express");
var express = require("express");
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer");
/* GET home page. */

router.get('/taskdetail', function(req, res, next) {
    res.render('task',{result:2});
  });



  

router.post("/insertrecordtask", function (req, res) {
    console.log("BODY:", req.body);
    console.log("FILE", req.file);
  
    pool.query(
      "insert into task(taskname,tasktype) values(?,?)",
      [
        req.body.taskname,
        req.body.tasktype,
      ],
      function (error, result) {
        if (error) {
          console.log(error);
          res.render("task", { result: 0 });
        } else {
          res.render("task", { result: 1 });
        }
      }
    );
  });


  
router.get("/fetchtask", function (req, res, next) {
    pool.query("select * from task", function (error, result) {
    if (error) {
      res.render("displaytask", { result: [] });
    } else {
      res.render("displaytask", { result: result });
    }
  });
});
  
  
module.exports = router;

