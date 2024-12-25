// function add(a, b){
//     return a + b;
// }

// var result = add(3, 3);
// console.log(result)

// function callback(){
//     console.log("Callback function executed");
// }

// const add = function(a, b, callback){
//     var result = a+b;
//     console.log('result' + result);
//     callback();
// }
// add(6, 500, callback)

// const add = function(a, b, sanjna){
//     var result = a+b;
//     console.log('result' + result);
//     sanjna();
// }
// add(6, 500, function(){
//     console.log("Callback function executed");
//     });

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!', ()=>{
//     console.log('file is created');
// });
// console.log(os)

// const notes = require('./notes.js');
// console.log('server file is available')

// var age = notes.age;
// console.log(age);

const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


const MenuItem = require('./model/MenuItem');

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.post('/person', (req, res) =>{
//   const data =Person(req.body);    // assuming the request body contains the person data

//   // create a new person document using the mongoose model
//   const newPerson = new Person(data);

//   // save the new person to the database
//   newPerson.save((error, savedPerson) =>{
//     if(error){
//       console.log('Error saving person:', error);
//       res.status(500).json({error: 'internal server error'})
//     } else{
//       console.log('data saved sucessfully');
//       res.status(200).json(savedPerson)
//     }
//   })

// })







// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000)

// app.listen(3000,()=>{
//   console.log('server is running on port 3000')
// })