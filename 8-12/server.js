var express=require("express");
var path=require("path");
var app=express();
app.set("view engine","jade");
app.get("/",function(req,res){
	var tital="主页";
       res.render("home",{tital:tital});
});
app.get("/table",function(req,res){
       var tital="表格";
       var table=[
           {name:"zhang",age:12,sex:'male'},
           {name:"wang",age:15,sex:'famale'},
           {name:"li",age:30,sex:'male'},
           {name:"liu",age:10,sex:'famale'},
           {name:"yin",age:24,sex:'male'},
           {name:"pei",age:28,sex:'famale'}

       ]
       res.render("table",{tital:table});
})
app.listen(3000,function(){
       console.log("服务器已启动");
})

