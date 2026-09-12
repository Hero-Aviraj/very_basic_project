import {db}from "../config/db.js";
import bcrypt from "bcrypt";

export const signup=async(req,res)=>{
    const{name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({error:"name email and password  are missing"});
    }
    try{
        const sql="insert into user_data(name,email,password)values(?,?,?)";
        const haspassword=await bcrypt.hash(password,10);
        const[result]=await db.execute(sql,[name,email,haspassword]);
        res.status(201).json({id:result.insertId,name});
    }catch(err){
          if(err.code==="ER_DUP_ENTRY"){
    return res.status(409).json({success:false,message:"duplicate entry"});
  }
  return res.status(500).json({success:false,message:"somthing is wrong"});
    }
}