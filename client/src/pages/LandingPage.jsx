import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const stats = [{label:'Registered Donors',value:'12,840'},{label:'Emergency Requests Today',value:'238'},{label:'Lives Impacted',value:'45,992'}];
export default function LandingPage(){return <section className="relative overflow-hidden rounded-3xl blood-gradient p-8 md:p-16 min-h-[75vh]">
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_1px,_transparent_1px)] bg-[size:30px_30px]" />
  <motion.h1 className="text-5xl md:text-7xl font-black leading-tight" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}}>Every Drop Can Save A Life</motion.h1>
  <p className="mt-4 text-red-100 max-w-2xl">LifeDrop connects donors, patients, and hospitals instantly during life-threatening emergencies.</p>
  <div className="mt-8 flex gap-4"><Link to="/search" className="px-6 py-3 bg-[#C1121F] rounded-xl shadow-neonRed animate-pulseGlow">Find Blood Now</Link><Link to="/auth" className="px-6 py-3 glass">Join Network</Link></div>
  <div className="grid md:grid-cols-3 gap-4 mt-10">{stats.map(s=><div key={s.label} className="glass p-4"><p className="text-3xl font-bold text-red-300">{s.value}</p><p>{s.label}</p></div>)}</div>
</section>}
