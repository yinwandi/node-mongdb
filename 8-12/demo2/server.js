var express=require("express");
var app=express();
app.set("view engine","jade");
app.get("/",function(req,res){
       res.render("home");
});
app.get("/flash",function(req,res){
       res.render("flash");
});
app.get("/flam",function(req,res){
       res.render("flam");
});
app.get("/story",function(req,res){
       res.render("story");
});
app.listen(3000,function(){
       console.log("服务器已启动");
});