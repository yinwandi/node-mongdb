var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/user";
function finddata(next){
    MongoClient.connect(url,function(err,db){
        db.collection("users").find().toArray(function(err,docs){
            next(docs);
            db.close();
        })
    })
}
module.exports = {
    finddata:finddata
}