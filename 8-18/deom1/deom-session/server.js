var express=require("express")
var session=require("express-session")
var app=express()
app.use(session({"secret":"hello","cookie":{maxAge:60*1000}}))
app.get("/",function(req,res){
    if(req.session.num){
        req.session.num++
        var str="欢迎"+req.session.num+"来"
        res.send(str)
    }else{
        req.session.num=1
        res.send("欢迎第一次来")
    }
})
app.listen(function () {
    console.log("ok")
})