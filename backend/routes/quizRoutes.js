import express from 'express';

import { createQuiz, getAllQuizes, updateQuiz, getAllQuestions } from '../controllers/quizController.js'

const router = express.Router();

router
  .route('/')
  .get(getAllQuizes)
  .post(createQuiz);

router
  .route('/:id')
  .patch(updateQuiz);

router
  .route('/:id/questions')
  .get(getAllQuestions);

export default router;  