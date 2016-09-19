var MongoClient=require("mongodb").MongoClient
var url="mongodb://127.0.0.1:27017/mydb";
MongoClient.connect(url,function(err,db){
    var col = db.collection("students");
    col.find().toArray(function (err,does) {
        console.log(does)
        db.close()
    })
    // db.collection("students").find().toArray(function (err,does) {
    //     console.log(does);
    //     db.close();
    //
    // })



    var student={
        "name":"xiaoming",
        "age":12,
        "sex":"male"
    };
    // col.insertOne(student,function(){
    //     db.close();
    // });
    var condition={"age":12}
    col.updateOne(condition,{$set:{"sex":"female"}},function(){
        db.close();
    })
})
