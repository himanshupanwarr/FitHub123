const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema= new Schema({
      name:{
        required:true,
        type:String
      },
      email:{
        required:true,
        type:String,
        unique:true,
        },
        password:{
      required:true,
      type:String,
        }
  }
);
module.exports = new mongoose.model('User', userSchema);