var express=require("express")
var path=require("path");
var app=express();
app.use(express.static("public"))
app.use(express.static(path.join(__dirname,"public")));
app.listen(3000,function(){
	console.log("服务器已启动");
	console.log(__dirname);
})