var express=require("express");
var app=express();
var path=require("path");
var bodyParser = require("body-parser");
var dataheadle=require("./mymode/dataheadle")
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","jade");
app.use(express.static(path.join(__dirname,"public")));
app.listen(1000,function(){
    console.log("服务器已启动");
})

app.get("/table",function(req,res){
    dataheadle.finddata(function (docs) {
        res.render("table",{data:docs})
    })
})
app.post("/insertdata",function(req,res){
    var data = req.body;
    dataheadle.insertdata(data,function(){
        res.redirect("/table");
    })
})

app.post("/removedata",function(req,res){
    var data = req.body;
    dataheadle.removedata(data,function(){
        res.redirect("/table");
    })
})

app.post("/updatedata",function(req,res){
    var data = req.body;
    var condition = {"name":data.name}
    dataheadle.updatedata(condition,data,function(){
        res.redirect("/table");
    })
})
