var MongoClient = require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/ajax";
function find(next){
    MongoClient.connect(url,function (err,db) {
        db.collection("ajaxs").find().toArray(function (err,docs) {
            next(docs);
            db.close();
        })
    })
}
function insert(opition,next){
    MongoClient.connect(url,function (err,db) {
        db.collection("ajaxs").insertOne(opition,function(){
            find(function(data){  //插入时在调用一次find，时insert返回的数据是所有的数据加上后添加的数据
                next(data);
            })
            db.close();
        })
    })
}
function remove(opition,next) {
    MongoClient.connect(url,function (err,db) {
        db.collection("ajaxs").removeOne(opition,function(){
            find(function(data){
                next(data)
            })
            db.close();
        })
    })
}
module.exports={
    find:find,
    insert:insert,
    remove:remove
}

