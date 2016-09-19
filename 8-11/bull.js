function fun(array,callback){
	for(var i=array.length;i>=2;i--){
		for(var j=0;j<i-1;j++){
			if(array[j]>array[j+1]){
				var k=array[j];
				array[j]=array[j+1];
				array[j+1]=k;
			}
		}
	}
	callback(array)
}
module.exports={
	fun:fun
}
