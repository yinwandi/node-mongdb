var express=require("express")
var app=express()
var path=require("path")
var session=require("express-session")
app.set("view engine","jade")
app.use(express.static(path.join(__dirname,"public")))
app.use(session({"secret":"text","cookie":{maxAge:6*1000}}))
app.listen(2000,function () {
    console.log("ok")
})
app.get("/",function (req,res) {
    res.render("login")
})
app.post("/login",function(req,res){
    req.session.usename="wang"
    res.redirect("/home")
})
app.get("/home",function(req,res){
    if(req.session.usename){
        res.render("home",{user:req.session.usename})
    }else{
        res.redirect("/")
    }
})

