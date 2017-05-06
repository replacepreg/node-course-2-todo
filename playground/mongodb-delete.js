const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the database');
  }
  console.log('Connected to database');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Andrew Mead'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: 123}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
