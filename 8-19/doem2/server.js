var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine","jade")
app.listen(3000,function () {
    console.log("ok")
})
app.get("/",function (req,res) {
    var hinfo=req.query.sinfo
    res.render("index",{hinfo:hinfo})
})

app.post("/check",function(req,res){
    var info=req.body.login
    if(info=="abc"){
        res.render("home")
    }else{
        res.redirect("/?sinfo=失败")
    }
})