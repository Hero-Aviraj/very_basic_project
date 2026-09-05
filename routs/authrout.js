import express from "express";
import {db} from "../config/db.js"
//const { access } = require("fs");
import path from "path";
const router=express.Router()
 
router.post("/login",async(req,res)=>{
  const{email,password}=req.body;
  const sql="SELECT*FROM user_data WHERE email=?";
  try{
     const [result]=await db.execute(sql,[email]);
      if(result.length ===0){
        return res.status(401).json({
            success:false,
            message:"invalid email or password"
        });
      }
      const user=result[0]
      if(password !== user.password){
        return res.status(401).json({
          success:false,
          message:"invalid email or password"
        });
      }
      else{
        res.json({
            success:true,
            message:"login successfull"
        })
      }
  }catch(error){
     console.log("database error",error);
     res.status(500).json({
        success:false,
        message:"database error"
     });
  }
});



export default router;

//router.post("/login",(req,res)=>{
//     const{email,password}=req.body;
//     if(email==="winnkilo232@gmail.com" && password==="123456"){
//     res.json({
//        success:true,
//        message: "login successfull"
//     });
//     }else if(email!=="winnkilo232@gmail.com"){
//         res.status(401).json({
//             success:false,
//             message:"invalid email"
//         });
//     }else if(password!=="123456"){
//         res.status(401).json({
//           success:false,
//           message:"password is wrong"
//         });
//     }else{
//         res.status(401).json({
//             success:false,
//             message:"invalid credential"
//         });
//     }
// });

