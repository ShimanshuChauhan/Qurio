import express from 'express';

import catchAsync from '../utils/catchAsync.js';
import { createQuiz, getAllQuizes } from '../controllers/quizController.js'

const router = express.Router();

router
  .route('/')
  .get(getAllQuizes)
  .post(createQuiz);

export default router;  