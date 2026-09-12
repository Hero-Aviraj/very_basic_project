import bcrypt from "bcrypt";
import {db} from "../config/db.js"
const login=async(req,res)=>{
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
      const ismatch= await bcrypt.compare(password,user.password);
      if(!ismatch){
        return res.status(401).json({
          success:false,
          message:"invalid email or password"
        });
      }
      else{
        res.status(200).json({
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
};



export {login};
