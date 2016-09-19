var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mydb";
function insertdata(options,next){
    MongoClient.connect(url,function(err,db){
        db.collection("students").insertOne(options,function(){
            next();
            db.close();
        })
    })
}

function  updatedata(condition,options,next){
    MongoClient.connect(url,function(err,db){
        db.collection("students").updateOne(condition,options,function(){
            next();
            db.close();
        })
    })
}

function removedata(condition,next){
    MongoClient.connect(url,function(err,db){
        db.collection("students").removeOne(condition,function(){
            next();
            db.close();
        })
    })
}

function finddata(next){
    MongoClient.connect(url,function(err,db){
        db.collection("students").find().toArray(function(err,docs){
            next(docs);
            db.close();
        })
    })
}

module.exports = {
    insertdata:insertdata,
    updatedata:updatedata,
    removedata:removedata,
    finddata:finddata
}
