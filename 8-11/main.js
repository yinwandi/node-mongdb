// var m=require("./model1")
// var m2=require("./model2")
// // var s=200;
// // console.log(s);
// // console.log(m.sub());
// // console.log(m.add());
// // m2.fun(99,11,function(res){  //function(re){}作为实参传给形参，回调函数
// // 	console.log(res);
// // })
// // m2.fun(11,99)
// console.log(m2.fun())
// console.log("////////////////////")
// console.log("2")
var bull=require("./bull")
var arr=[3,6,9,2,4,11,8,55]
bull.fun(arr,function f(res){
	console.log(res);
})