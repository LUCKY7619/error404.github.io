import Donor from '../models/Donor.js';
export const createDonor=async(req,res)=>res.status(201).json(await Donor.create(req.body));
export const listDonors=async(req,res)=>{const q=Object.fromEntries(Object.entries(req.query).filter(([,v])=>v));res.json(await Donor.find(q).sort({createdAt:-1}));};
