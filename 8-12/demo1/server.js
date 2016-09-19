var express=require("express");
var path=require("path");
var app=express();
app.set("view engine","jade");
app.get("/home",function(req,res){
	var tit="我的网站";
	// var nav=["主页","视频","游戏","动画"]
	var nav=[
              {
              	name:"主页",
              	url:"/home"
              },
              {
              	name:"主页",
              	url:"/index.html"
              },
              {
              	name:"主页",
              	url:"/home"
              },
              {
              	name:"baidu",
              	url:"http://baidu.com"
              },

	]
	res.render("home",{'title':tit,'nav':nav});
})
// app.get("/page",function(req,re){
// 	res.end("page");
// })
// app.get("/page2",function(req,res){
// 	res.end("page2");
// })
// app.get("/page3",function(req,res){
// 	res.end("page3");
// })
// app.get("/page4",function(req,res){
// 	res.end("page4");
// })
app.use(express.static(path.join(__dirname,"public")));
app.listen(3000,function(){
	console.log("服务器已启动");
})