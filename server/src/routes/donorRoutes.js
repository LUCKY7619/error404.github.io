import { Router } from 'express'; import { createDonor, listDonors } from '../controllers/donorController.js'; import { protect } from '../middleware/auth.js';
const r=Router(); r.get('/',listDonors); r.post('/',protect,createDonor); export default r;
