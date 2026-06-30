import express from 'express';
import cors from 'cors';
import newsRouter from './routes/techNews.routes.js';
import jobsRouter from './routes/jobsPosting.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

// Tech News Router -
app.use('/tech-news', newsRouter);

// Jobs Router -
app.use('/jobs', jobsRouter);

export default app;