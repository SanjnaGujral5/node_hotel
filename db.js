const mongoose = require('mongoose');
require('dotenv').config();



//definr the mongodb connection url

const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = process.env.MONGODB_URL;

//set up mongodb connection
// mongoose.connect(mongoURL, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
// }
//     )

         //get the default connection
         //mongoose maintains a default connection object representing the mongodb connection
   

         //define event listeners for database connection



mongoose.connect(mongoURL, {})
    .then(() => console.log('Connected to MongoDB server'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err));

    const db = mongoose.connection;
         db.on('error', (err) =>{
            console.log('connected to mongodb server');
         });

         db.on('disconnected', () =>{
            console.log('mongodb disconnected');
         });

         // export the database connection
         module.exports = db;

         