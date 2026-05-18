import bcrypt from 'bcryptjs'; import jwt from 'jsonwebtoken'; import User from '../models/User.js';
const token=(u)=>jwt.sign({id:u._id,role:u.role,email:u.email},process.env.JWT_SECRET,{expiresIn:'7d'});
export const signup=async(req,res)=>{const {name,email,password,phone,role}=req.body;const hash=await bcrypt.hash(password,10);const user=await User.create({name,email,password:hash,phone,role});res.status(201).json({token:token(user),user});};
export const login=async(req,res)=>{const {email,password}=req.body;const user=await User.findOne({email});if(!user||!(await bcrypt.compare(password,user.password)))return res.status(401).json({message:'Invalid credentials'});res.json({token:token(user),user});};
