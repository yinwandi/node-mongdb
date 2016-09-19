var express=require("express");
var app=express();
var bodyParser=require("body-parser")
var path=require("path");
var datahandle=require("./mymodule/datahandle");
app.set("view engine","jade");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:"false"}))
app.get("/table",function(req,res){
    datahandle.getDate(function (docs) {
        res.render("table",{date:docs})
    })
})
app.get("/senddata",function(req,res){
   var data=req.query;
    console.log(data);
    res.render("sentdata");
})
app.post("/senddata",function(req,res){
    var data=req.body
    // console.log(data);
     datahandle.insertdata(data,function() {
         res.redirect("/table")
     })
})
app.listen(3000,function(){
    console.log("服务器已启动");
})
