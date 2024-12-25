const mongoose = require('mongoose');

//definr the mongodb connection url
// const mongoURL = 'mongodb://localhost:27017/hotels'
//const mongoURL = 'mongodb+srv://sanjnagujral01:YSAFmd0YKaLaG9na@cluster0.lwjx8.mongodb.net/'
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//set up mongodb connection
mongoose.connect(mongoURL, 
    { useNewUrlParser: true,
         useUnifiedTopology: true })

         //get the default connection
         //mongoose maintains a default connection object representing the mongodb connection
         const db = mongoose.connection;

         //define event listeners for database connection

         db.on('connected', () =>{
            console.log('connected to mongodb server');
         });

         db.on('error', (err) =>{
            console.log('connected to mongodb server');
         });

         db.on('disconnected', () =>{
            console.log('mongodb disconnected');
         });

         // export the database connection
         module.exports = db;

         