var MongodClient = require("mongodb").MongoClient
var url="mongodb://127.0.0.1:27017/user"
function checkuser(opition,next){
    //0用户不存在
    //2密码错误
    //3登陆成功
    MongodClient.connect(url,function (err,db) {
        db.collection("users").find().toArray(function(err,docs){
            db.close()
            for(var i = 0;i<docs.length;i++){
                if(opition.username==docs[i].username){
                    if(opition.password==docs[i].password){
                        next(2)
                        return;
                    }else{
                        next(1)
                        return;
                    }

                }
            }
            next(0)
            return
        })
    })
}
module.exports={
    checkuser:checkuser
}