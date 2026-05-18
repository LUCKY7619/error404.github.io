import mongoose from 'mongoose';
const notificationSchema=new mongoose.Schema({recipient:{type:mongoose.Schema.Types.ObjectId,ref:'User'},type:String,message:String,read:{type:Boolean,default:false},metadata:Object},{timestamps:true});
export default mongoose.model('Notification',notificationSchema);
