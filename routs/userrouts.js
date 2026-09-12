 console.log("till this printing")
import express from "express";
import { signup } from "../controller/usercontroller.js";
 const rout=express.Router();

rout.post("/signup",signup);

export default rout;