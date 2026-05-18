import Request from '../models/Request.js'; import Notification from '../models/Notification.js';
export const createRequest=async(req,res)=>{const r=await Request.create({...req.body,patientId:req.user?.id});await Notification.create({type:'emergency',message:`Urgent ${r.bloodGroup} requested at ${r.hospitalName}`,metadata:{requestId:r._id}});res.status(201).json(r);};
export const listRequests=async(req,res)=>res.json(await Request.find().sort({createdAt:-1}));
