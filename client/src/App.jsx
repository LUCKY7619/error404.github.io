import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import DonorRegistrationPage from './pages/DonorRegistrationPage';
import AuthPage from './pages/AuthPage';
import SearchDonorsPage from './pages/SearchDonorsPage';
import EmergencyRequestPage from './pages/EmergencyRequestPage';
import UserDashboardPage from './pages/UserDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return <Layout>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register-donor" element={<DonorRegistrationPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/search" element={<SearchDonorsPage />} />
        <Route path="/emergency" element={<EmergencyRequestPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </motion.div>
  </Layout>;
}
