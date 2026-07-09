import express from 'express';
import cors from 'cors';
import newsRouter from './routes/techNews.routes.js';
import jobsRouter from './routes/jobsPosting.routes.js';
import gitHubRepoRouter from './routes/gitHubRepo.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

// Tech News Router -
app.use('/api/tech-news', newsRouter);

// Jobs Router -
app.use('/api/jobs', jobsRouter);

// GitHub repo -
app.use('/api/github-repo', gitHubRepoRouter);

export default app;