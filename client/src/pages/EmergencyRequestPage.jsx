import { useState } from 'react'; import api from '../services/api'; import toast from 'react-hot-toast';
export default function(){const [f,set]=useState({bloodGroup:'',hospitalName:'',city:'',urgencyLevel:'critical',notes:''});
const submit=async(e)=>{e.preventDefault();await api.post('/requests',f);toast.success('Emergency broadcast sent');};
return <form onSubmit={submit} className="glass p-6 space-y-3">{Object.keys(f).map(k=><input key={k} className="w-full p-3 bg-black/30 rounded" placeholder={k} value={f[k]} onChange={e=>set({...f,[k]:e.target.value})}/>)}<button className="bg-crimson p-3 rounded">Submit Emergency Request</button></form>}
