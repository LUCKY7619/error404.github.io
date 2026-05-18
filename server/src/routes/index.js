import { Router } from 'express'; import authRoutes from './authRoutes.js'; import donorRoutes from './donorRoutes.js'; import requestRoutes from './requestRoutes.js';
const router=Router(); router.use('/auth',authRoutes); router.use('/donors',donorRoutes); router.use('/requests',requestRoutes); export default router;
