import express from 'express';
import helmet from 'helmet';
import cors from 'cors'

import morgan from 'morgan'

import { AuthRouter, UserRouter } from './routes/index.js'
import MemeRouter from './routes/meme-routes.js';


const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use(UserRouter)
app.use(AuthRouter)
app.use(MemeRouter)

export default app;