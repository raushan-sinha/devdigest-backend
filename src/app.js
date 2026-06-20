import express from 'express';
import cors from 'cors';
import newsRouter from './routes/techNews.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

// Tech News Router -
app.use('/tech-news', newsRouter);

export default app;