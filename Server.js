var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/public/';

router.use(function (req,res,next) {
  console.log("/" + req.method + " request for " + req.url);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });
//
// router.get("/resume",function(req,res){
//   res.sendFile(path + "resume.html");
// });
//
// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });

app.get("/images/:image", function(req, res) {
  res.sendFile(req.params.image, {root: './public/images'});
});

app.use("/",router);

app.use(express.static("./public"));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
