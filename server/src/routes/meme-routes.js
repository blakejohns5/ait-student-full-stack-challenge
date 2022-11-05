import express from 'express';
import { getAllMemes, getMemesByUser, createMeme } from '../controllers/index.js'
import { verifyToken } from '../middleware/auth.js';



const Router = express.Router();
const MemeRouter = Router;





MemeRouter.get('/memes', getAllMemes);
MemeRouter.get('/user-memes/:_id', verifyToken, getMemesByUser);
MemeRouter.post('/memes', verifyToken, createMeme);





export default MemeRouter;


