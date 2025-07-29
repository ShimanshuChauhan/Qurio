import Quiz from "../model/quizModel.js";

import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import Question from "../model/questionModel.js";

export const createQuiz = catchAsync(async (req, res, next) => {
  const { title, description } = req.body;
  const { questions } = req.body;
  const quizDetails = { title, description };
  const newQuiz = await Quiz.create(quizDetails);
  const updatedQuestions = questions.map((q) => ({ ...q, quizId: newQuiz._id }))
  const newQuestions = await Question.insertMany(updatedQuestions);

  res.status(201).json({
    status: 'success',
    data: {
      quiz: newQuiz,
      questions: newQuestions
    }
  });
});

export const getAllQuizes = catchAsync(async (req, res, next) => {
  console.log("Reached");
  res.status(400).json({
    status: "working"
  })
})