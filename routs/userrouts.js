import bcrypt from "bcrypt"
import express from "express";
import { config } from "process"
import {db}from "../config/db.js"
import { error } from "console"


const user=express.Router()
user.post("/signup",async(req,res)=>{
const{name,email,password}=req.body;
if(!name || !email || !password){
    return res.status(400).json({error:"name email and password  are missing"});
}
try{
  const hasedpassword= await bcrypt.hash(password,10);
    const sql="insert into user_data (name,email,password)values(?,?,?)";
    const[result]=await db.execute(sql,[name,email,hasedpassword]);
    res.status(201).json({id:result.insertId,name});
}catch(err){
  if(err.code==="ER_DUP_ENTRY"){
    return res.status(409).json({success:false,message:"duplicate entry"});
  }
  return res.status(500).json({success:false,message:"somthing is wrong"});
}


});

export default user;