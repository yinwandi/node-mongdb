var express=require("express")
var app=express()
var bodyParser=require("body-parser")
var datahandle=require("./datahandle/datahandle")
var path=require("path")
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine","jade")
app.use(express.static(path.join(__dirname,"public")))
app.listen(1000,function () {
    console.log("ok")
})
app.get("/",function(req,res){
    res.render("login")
})
app.post("/",function(req,res){
    var da=req.body
    datahandle.finddata(function (data) {
        console.log(data)
        for(var i=0;i<data.length;i++){
            if(da.username==data[i].username && da.password==data[i].password){
                res.render("seccss")
                return
            }else if(da.username==data[i].username && da.password !=data[i].password){
                res.render("err")
                return
            }else if(da.username!=data[i].username && da.password !=data[i].password){
                res.render("no")
                return
            }
        }
    })
})

