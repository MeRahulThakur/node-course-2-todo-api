const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove
Todo.findOneAndRemove({ _id: '5a86ba861aeb320992d4eaf8'}).then((todo)=>{
    console.log(todo);
});

Todo.findByIdAndRemove('5a86ba861aeb320992d4eaf8').then((todo)=>{
    console.log(todo);
});