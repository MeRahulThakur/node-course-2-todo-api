//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }else{
        console.log('Connected to MongoDB server');
    }

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5a79ea8de5fd0799338bb343')
    // },{
    //   $set: {
    //     completed: true
    //   }
    // },{
    //   returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a79f306e5fd0799338bb6ec')
    },{
      $set: {
        name: 'Rahul Thakur'
      },
      $inc: {
        age: 1
      }
    },{
      returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    //db.close();
});
