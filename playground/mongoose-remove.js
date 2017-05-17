const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({text: 'Anan'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('591b29fbfde3af28112e1be3').then((todo) => {
  console.log(todo);
});
