import mongoose from 'mongoose';
const requestSchema=new mongoose.Schema({patientId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},bloodGroup:String,hospitalName:String,city:String,urgencyLevel:String,status:{type:String,default:'open'},notes:String},{timestamps:true});
export default mongoose.model('Request',requestSchema);
