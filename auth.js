const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./model/Person');

// passport.use(new localStrategy(async (username, password, done)=>{
//   try{
//     console.log('Received credentials:', username, password);
//     const user = await Person.findOne({username: username});
//     if(!user){
//       return done(null, false, {message: 'Incorrect username'});

//       const isPasswordMatch = user.password === password ? true : false;
//       if(!isPasswordMatch){
//         return done(null, user);
//       } else{
//         return done(null, false, {message: 'Incorrect password'});
//       }
//     }
//   }catch(err){
//     return done(err);
//   }
// }));

passport.use(
  new localStrategy(async (USERNAME, password, done) => {
    try {
     
      
      // Find user by username
      const user = await Person.findOne({ username: USERNAME });
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }

      // Password validation
      const isPasswordMatch = user.password === password;
      if (!isPasswordMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }

      // Authentication successful
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);


module.exports = passport;