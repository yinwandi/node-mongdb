var express = require("express");
var path = require("path");
var app = express();
var datahandle = require("./mymoudle/datahandle");
var bodyParser = require("body-parser");
app.set("view engine","jade")
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000,function () {
    console.log("ok");
});
app.get("/find",function (req,res) {
    datahandle.find(function (data) {
        res.send(data)
    })
})
app.post("/insert",function (req,res) {
    datahandle.insert(req.body,function (data){
        res.send(data)  //发送的是所有数据库里的数据，包含刚加进去的，发给前台
    })
})
app.post("/remove",function(req,res){
    datahandle.remove(req.body,function (data){
        res.send(data)
    })
})
app.post("/updata",function(req,res){
    datahandle.remove(req.body,function (data){
        res.send(data)
    })
})


