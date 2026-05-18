import { Router } from 'express'; import { createRequest, listRequests } from '../controllers/requestController.js'; import { protect } from '../middleware/auth.js';
const r=Router(); r.get('/',protect,listRequests); r.post('/',protect,createRequest); export default r;
