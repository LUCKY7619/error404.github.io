import { Link } from 'react-router-dom';
const nav = ['/', '/register-donor', '/search', '/emergency', '/dashboard', '/admin', '/about'];
export default function Layout({ children }) {
  return <div className="min-h-screen bg-[#111111]">
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-red-900">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex gap-4 text-sm">{nav.map((p) => <Link key={p} className="hover:text-red-400" to={p}>{p === '/' ? 'Home' : p.replace('/', '').replace('-', ' ')}</Link>)}</nav>
    </header>
    <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
  </div>;
}
