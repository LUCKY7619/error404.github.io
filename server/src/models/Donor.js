import mongoose from 'mongoose';
const donorSchema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},fullName:String,age:Number,gender:String,bloodGroup:String,phone:String,email:String,city:String,state:String,availabilityStatus:{type:String,default:'available'},lastDonationDate:Date,location:{lat:Number,lng:Number}},{timestamps:true});
export default mongoose.model('Donor',donorSchema);
