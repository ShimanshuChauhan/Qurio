import Quiz from "../model/quizModel.js";

import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import Question from "../model/questionModel.js";

export const createQuiz = catchAsync(async (req, res, next) => {
  const { title, description } = req.body;
  const { questions } = req.body;
  const quizDetails = { title, description };
  const newQuiz = await Quiz.create(quizDetails);
  const newQuestions = [];
  if (questions) {
    const updatedQuestions = questions.map((q) => ({ ...q, quizId: newQuiz._id }))
    newQuestions = await Question.insertMany(updatedQuestions);
  }

  res.status(201).json({
    data: {
      quiz: newQuiz,
      questions: newQuestions
    }
  });
});

export const getAllQuizes = catchAsync(async (req, res, next) => {
  const quizzes = await Quiz.find();

  res.status(200).json({
    results: quizzes.length,
    data: {
      quizzes
    }
  });
});

export const updateQuiz = catchAsync(async (req, res, next) => {
  const { title, description } = req.body;
  const quizId = req.params.id;

  const quiz = await Quiz.findById(quizId);

  if (!quiz) return next(new AppError("No quiz found with that ID", 404));
  if (!title && !description) return next(new AppError("Please provide atleast one field to update [ title or description ]", 404));

  const updatedData = {}
  if (title) updatedData.title = title;
  if (description) updatedData.description = description;

  const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, updatedData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    data: {
      updatedQuiz
    }
  })
});