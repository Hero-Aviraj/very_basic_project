import express from "express";
import {login}from "../controller/authcontroller.js"

const routs=express.Router();

routs.post("/login",login);

export default routs