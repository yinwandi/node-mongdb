var MongodClient = require("mongodb").MongoClient
var url="mongodb://127.0.0.1:27017/user"
function checkuses(opition,next) {
    MongodClient.connect(url,function(err,db){
        var condition={"username":opition.username}
        db.collection("users").find(condition).toArray(function (err,docs) {
            db.close()
            if(docs.length==0){
                next(0)
            }else if(docs[0].password==opition.password){
                next(2)
            }else{
                next(1)
            }
        })
    })
}
module.exports={
    checkuses:checkuses
}