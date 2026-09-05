import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const db=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    connectionLimit:10,
    queueLimit:0,
    waitForConnections:true
})
  const checkconnection=async()=>{
    try{
        const connection=await db.getConnection();
        console.log("database connection is successfull");
        connection.release();
    }catch (error){
        console.log("error connecting to detabase");
        throw error;
    }
  }

export {db,checkconnection}; 



//view table

