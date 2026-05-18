import { useState } from 'react'; import toast from 'react-hot-toast'; import api from '../services/api';
const fields=['fullName','age','gender','bloodGroup','phone','email','city','state','availabilityStatus','lastDonationDate'];
export default function(){const [form,setForm]=useState(Object.fromEntries(fields.map(f=>[f,''])));
const submit=async(e)=>{e.preventDefault();await api.post('/donors',form);toast.success('Donor profile submitted');};
return <form onSubmit={submit} className="glass p-6 grid md:grid-cols-2 gap-4">{fields.map(f=><input key={f} required className="bg-black/30 p-3 rounded-lg" placeholder={f} value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})}/>)}<button className="md:col-span-2 bg-crimson p-3 rounded-lg">Register Donor</button></form>}
