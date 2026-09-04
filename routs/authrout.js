import express from "express";
//const { access } = require("fs");
import path from "path";
const router=express.Router()
 
router.post("/login",(req,res)=>{
    const{email,password}=req.body;
    if(email==="winnkilo232@gmail.com" && password==="123456"){
    res.json({
       success:true,
       message: "login successfull"
    });
    }else if(email!=="winnkilo232@gmail.com"){
        res.status(401).json({
            success:false,
            message:"invalid email"
        });
    }else if(password!=="123456"){
        res.status(401).json({
          success:false,
          message:"password is wrong"
        });
    }else{
        res.status(401).json({
            success:false,
            message:"invalid credential"
        });
    }
});

export default router;



