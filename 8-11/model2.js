function fun(){
	// var result=x+y;
	// callback(result);
	// var x=11;
	// var y=99;
	// var result=x+y
	setTimeout(function(){
		var x=11;
		var y=99;
		var result=x+y
        return result;

	},1000)
}
module.exports={
	fun:fun
}