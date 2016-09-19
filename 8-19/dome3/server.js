var express = require("express")
var app = express()
var session = require("express-session")
app.use(session({"secret":"hello","cookie":{maxAge:5*1000}}))
var checkusers =require("./mymodul/datahandle")
var bodyParser = require("body-parser")
app.set("view engine","jade")
app.use(bodyParser.urlencoded({extended:false}))
var path = require("path")
app.use(express.static(path.join(__dirname,"public")))
app.listen(1000,function () {
    console.log("ok")
})
app.get("/",function (req,res) {
    var hinfo=req.query.sinfo
    res.render("login",{hinfo:hinfo})
})
app.get("/home",function(req,res){
    // console.log(req.session.username)
    if(req.session.username){
        res.render("home",{username:req.session.username})
    }else{
        res.redirect("/")
    }

})
app.post("/",function (req,res) {
    var data = req.body
    checkusers.checkuses(data,function (result) {
        if(result==0){
            res.redirect("/?sinfo=用户不存在")
        }else if(result==1){
            res.redirect("/?sinfo=密码错误")
        }else{
            req.session.username=data.username
            res.redirect("/home")

        }
    })
})