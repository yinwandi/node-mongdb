var express=require("express")
var app=express()
var cookieParser=require("cookie-parser")
app.use(cookieParser())
app.listen(3000,function(){
    console.log("ok")
})
app.get("/",function(req,res){
    if(req.cookies.name){
        res.send("欢迎再次访问")
    }else{
        res.cookie("name","teacher")
        res.send("欢迎第一次访问")
    }
    // console.log(req.cookies.username)
    // res.cookie("username","teacher")
    // res.send("欢迎第一次访问")
})
