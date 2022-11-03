import express from 'express';
import helmet from 'helmet';
import cors from 'cors'

import morgan from 'morgan'

import { UserRouter } from './routes/index.js'


const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use(UserRouter)

export default app;