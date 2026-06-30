import express from 'express'
import { getJobsPosting } from '../controllers/jobsPosting.controllers.js';

const jobsRouter = express.Router();

jobsRouter.get('/api', getJobsPosting);

export default jobsRouter;