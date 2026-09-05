import {db} from "../config/db.js"

const user=`CREATE TABLE IF NOT EXISTS user_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100) NOT NULL
);`
const prev_user=`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100) NOT NULL
);`


const createtable=async(tableName,query)=>{
    try{
     await db.query(
      query
     )
     console.log(`${tableName} table created or alredy exist`);
    }catch(error){
     console.log(`error creating${tableName}`,error);
    }
};

const tabble=async()=>{
    try{
     await createtable("user_data",user);
     await createtable("users",prev_user);
    }catch(error){
    console.log("error creating table ",error);
    throw error;
    }
}


export default tabble;
