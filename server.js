import express from "express"
import path from "path"
import routs from "./routs/authrout.js"
import { fileURLToPath } from "url";
import { checkconnection } from "./config/db.js";
import  tabble  from "./utils/dbutils.js";
const app=express();
 const __filename=fileURLToPath(import.meta.url)
 const __dirname=path.dirname(__filename)
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")));

app.use("/",routs);


app.listen(4000,async()=>{
    console.log("http://localhost:4000");
   try{
      await checkconnection(); 
      await tabble();  
   }catch(error){
    console.log("faild to initilize the database",);
   }
});