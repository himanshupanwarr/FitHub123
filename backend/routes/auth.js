const express=require('express');
const mongoose=require('mongoose')
const router=express.Router();
const { json } = require("express");
const app = express()
const User=require('../modules/user')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const JWT_SECRET='12345677';


router.post('/singup',async (req,res,next)=>{
    const {name,email,password}=req.body;
    const encryptedPassword=await bcrypt.hash(password,10);
    try{
        const olduser=await User.findOne({email});
        if(olduser){
        return res.send({status:"user exists"})
        }
        
            await User.create({
                name,
             email,
             password:encryptedPassword,
            });
        
       res.send({status:"ok"});

   }catch(error){
      res.send({status:"error"});
  }

    
})


router.post('/login',async (req,res,next)=>{
const {email,password}=req.body;

const userfind=await User.findOne({email});
if(!userfind){
    return res.json("not registered");
}
const userspa= await bcrypt.compare(password,userfind.password);
if(userspa){
    const token=jwt.sign({email:userfind.email},JWT_SECRET);

    if(res.status(201)){
       return res.json("working")
    }
    else{
        return res.json("not working")
    }
}
return res.json("incorrect pass");

})
router.post('/userdata',async (req,res,next)=>{
    const {token}=req.body;
    try{
        const user=jwt.verify(token,JWT_SECRET);
        const useremail=user.email;
        user.findOne({email:useremail}).then((data)=>{
            res.send({data:data});
        }).catch((error)=>{
            res.send({data:error})
        })


    }catch(error){}

})

module.exports=router;   