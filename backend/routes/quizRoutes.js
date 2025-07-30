import express from 'express';

import catchAsync from '../utils/catchAsync.js';
import { createQuiz, getAllQuizes, updateQuiz } from '../controllers/quizController.js'

const router = express.Router();

router
  .route('/')
  .get(getAllQuizes)
  .post(createQuiz);

router
  .route('/:id')
  .patch(updateQuiz);

export default router;  