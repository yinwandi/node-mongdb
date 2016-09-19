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
    var data=req.body
    datahandle.insert(data,function () {
        res.send()
    })
})
var re={age:"444"}
datahandle.remove(re,function () {
})