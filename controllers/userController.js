
const User= require ("../models/userModel");
const {check,validationResult}= require("express-validator/check");
const res = require("express/lib/response");



// const bcrypt = require("bcryptjs"); // classe de cryptage => npm i bcryptjs --save
 
// exports.register = (req, res) => {
//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) {
//       //user exist
//       res.send({ message: "email exist" }); //msg format json
//     } else {
//       const newUser = new User(req.body); //req contient les données du formulaire
//       bcrypt.genSalt(10, (err, key) => {
//         //fonction de hashage de puissance 10
//         bcrypt.hash(req.body.password, key, (error, crypt_pass) => {
//           newUser.password = crypt_pass;
//           // ajout à la base de données
//           newUser.save().then(data => {
//             res.send(data);
//           });
//         });
//       });
//     }
//   });
// };
// //Fonction login
// exports.login = (req, res) => {
//     console.log(req.body);
//     User.findOne({ email: req.body.email }, (err, user) => {
//       if (!user) {
//         //user not existing
//         res.send({
//           message: "Invalid email"
//         });
//       } else {
//         //test password validation
//         bcrypt.compare(req.body.password, user.password, (error, isMatch) => {
//           //if password invalid  : isMatch == false
//           if (!isMatch) {
//             res.send({
//               message: "Invalid Password"
//             });
//           } else {
//             res.send(user); //retourne l'objet utilisateur
//           }
//         });
//       }
//     });
//   };
//   exports.deleteUser = async (req, res) => {
//     const user = await User.findById(req.params.id);
//     console.log(req.param.id);
  
//     if (user) {
//       await user.remove();
//       res.json({ message: "user removed" });
//     } else {
//       res.status(404);
//       throw new Error("user. not found");
//     }
//   };

// exports.register = ([check("firstName", "firstName is required").not().isEmpty(), 
// check("lastName", "lastName is required").not().isEmpty(),
// check("email","please enter a valid email").isEmail(),
// check("password"," password should have at least 8 charachter ").isLength({min:8} )],
                    
// (req, res)) => {
//   const errors= validationResult(req);
//   if(!errors.isEmpty()) {
//     return res.status(400).json(errors : errors.array( ));
//   }
//   res.send("users route");

// } 