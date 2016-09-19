var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mydb";
function getDate(next){
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log(err);
        }else{
            db.collection("students").find().toArray(function(err,docs){
                next(docs);
                db.close();
            })
        }
    })
}
function insert(opition,next){
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log(err);
        }else{
            db.collection("students").insertOne(opition,function(){
                next()
                db.close();
            })
        }
    })
}
module.exports={
    getDate:getDate,
    insertdata:insert
}