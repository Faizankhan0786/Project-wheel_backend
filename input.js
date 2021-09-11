var express = require('express');
var router = express.Router();
var pool = require("./pool");
var upload = require("./multer")
/* GET home page. */



router.get('/addnewinput',

 function(req, res, next) {
  pool.query(
    "insert into name(number, image)values(?,?)",
    [
      req.query.name,
      req.query.picture,
    ],
  function(error,result){
     if (error) {
        res.render('input',{msg:'Server Error:Fail to Submit Record'});
      } else {
        res.render('input',{msg:'Record Submitted.....'});
      }
     }
    );
   }
 );


router.get('/inputinterface', function(req, res, next) {
  res.render('input', { msg:'' });
});


router.get('/fetchallnumbers', function(req, res, next) {
  pool.query("select * from number", function(error,result){
    if (error) {
     console.log(error);
     res.status(500).json([]);
    } else {
     res.status(200).json(result);
    }
  });
 });



module.exports = router;
