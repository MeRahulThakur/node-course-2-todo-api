//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }else{
        console.log('Connected to MongoDB server');
    }

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //db.collection('Users').deleteOne({_id: new ObjectID('5a788fbb4fdc3603cb5c459d')}).then((result)=>{
    //    console.log(result);
    //});
    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //db.collection('Users').deleteMany({name:'Rahul Thakur'}).then((result)=>{
    //    console.log(result);
    //});
    //findOneAndDelete
    //db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //  console.log(result);
    //});
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a788b7e88e37a03b1d3ac1f')}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    });

    //db.close();
});
