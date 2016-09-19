var checkuser = require("./mymodul/checkuser");
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(bodyParser.urlencoded({extended:false}))
var path = require("path")
app.set("view engine","jade")
app.use(express.static(path.join(__dirname,"public")))
app.get("/",function(req,res){
    res.render("login")
})
app.post("/",function(req,res){
    var data = req.body
    console.log(data)
    checkuser.checkuser(data,function (result) {
        if(result==0){
        res.send("用户不存在")
        }else if(result==1){
        res.send("密码错误")
         }else{
        res.send("成功")
        }
    })


})
// checkuser.checkuser(user,function(result){
//     if(result==0){
//         console.log("用户不存在")
//     }else if(result==1){
//         console.log("密码错误")
//     }else{
//         console.log("成功")
//     }
// })
app.listen(3000,function(){
    console.log("ok")
})