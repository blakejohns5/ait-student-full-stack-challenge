import express from 'express';
import { createAccount, getAllUsers } from '../controllers/index.js'

const Router = express.Router();
const UserRouter = Router;



UserRouter.get('/users', getAllUsers);
// UserRouter.get('/users/:id', UserController.getUser);
UserRouter.post('/users', createAccount);
// UserRouter.patch("/users/:id", UserController.updateUser);
// UserRouter.delete("/users/:id", UserController.deleteUser);






export default UserRouter;