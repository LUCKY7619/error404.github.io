import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import morgan from 'morgan'; import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; import routes from './routes/index.js'; import { errorHandler } from './middleware/errorHandler.js';
dotenv.config(); const app = express();
app.use(cors()); app.use(helmet()); app.use(morgan('dev')); app.use(express.json());
app.get('/health', (_,res)=>res.json({status:'ok',service:'LifeDrop API'}));
app.use('/api', routes); app.use(errorHandler);
const port=process.env.PORT||5000; connectDB().then(()=>app.listen(port,()=>console.log(`API on ${port}`)));
