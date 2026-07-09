import express from 'express';
import { getGitHubRepoData } from '../controllers/gitHubRepo.controllers.js';

const gitHubRepoRouter = express.Router();

gitHubRepoRouter.get('/', getGitHubRepoData);

export default gitHubRepoRouter;