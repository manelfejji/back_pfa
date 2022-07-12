const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName: {
      type:String,
      required:true
    },
    lastName: {
      type:String,
      required:true
    },
    
    email:  {
      type:String,
      required:true
    },
    password:  {
      type:String,
      required:true
    },
    numero:  {
        type:Number,
        required:true
      },
    avatar:{
         type: String
    },
    role: {
      type: String,
      default:"apprenant"
    }
  });

module.exports = mongoose.model('user', userSchema);