import express from 'express';
import { getTechNews } from '../controllers/techNews.controllers.js';

const newsRouter = express.Router();

newsRouter.get('/api', getTechNews);

export default newsRouter;