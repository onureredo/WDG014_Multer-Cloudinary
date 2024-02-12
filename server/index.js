import express from 'express';
import cors from 'cors';
import './db/server.js';
import { errorHandler } from './middlewares/ErrorHandler.js';
import imageRouter from './routes/imageRouter.js';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// ROUTES
app.use('/images', imageRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
