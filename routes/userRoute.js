const express = require("express");
const User = require("../models/userModel" );
const {check,validationResult}= require("express-validator");

const bcrypt = require("bcryptjs"); 
const jwt = require ("jsonwebtoken");
const { jwtSecret } = require("../dbConfig/key");
const gravatar = require("gravatar");

const router = express.Router();

//register
router.post("/register",
[
check("firstName", "firstName is required").not().isEmpty(), 
check("lastName", "lastName is required").not().isEmpty(),
check("email","please enter a valid email").isEmail(),
check("password"," password should have at least 8 charachter ").isLength({min:8} )
],
                    
 async(req, res) => {  
  const errors= validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors:errors.array( )});
  }
  try{
    const {firstName, lastName, email, password, numero}= req.body
    let user = await User.findOne({ email});
    if(user){
      return res.status(400).json({errors:[{msg:"user already exists"}]});
    }
    const avatar=gravatar.url(email,{
      s:'200',
      r:'pg',
      d:'mm'

    })


    user = new User({
      firstName,
       lastName,
       email,
        password,
        numero, 
        avatar
        
    });
    const salt=  await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(password,salt);
    user.save();
    const payload= {
      user:{
        id:user.id,
      },
    };
    jwt.sign(payload, 
      jwtSecret,
      {expiresIn:3600*24},
      (err,token)=>{
        if(err) throw err
        res.json({token});
      }
      );
    //res.send("user created");
  }catch (error)
  {
    console.error(error);
    res.status(500).send("server erreur");
  }
 

} 
);

 


 
  

  
module.exports= router; 