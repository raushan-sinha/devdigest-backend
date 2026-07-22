import express from 'express';
import { getProgrammingQuoteApi } from '../controllers/programQuote.controllers.js';

const quoteRouter = express.Router();

quoteRouter.get('/', getProgrammingQuoteApi);

export default quoteRouter;