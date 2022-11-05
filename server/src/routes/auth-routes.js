import express from 'express';
import { signup, login } from '../controllers/index.js'
import { verifyToken } from '../middleware/index.js';

const Router = express.Router();
const AuthRouter = Router;



AuthRouter.post('/signup', signup);
AuthRouter.post('/login', login);
// AuthRouter.post('/logout', console.log('logging out'));






export default AuthRouter;