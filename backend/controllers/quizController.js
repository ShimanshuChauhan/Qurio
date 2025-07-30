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
  const quizId = req.params.id;

  const quiz = await Quiz.findById(quizId);
  if (!quiz) return next(new AppError("No quiz found with that ID", 404));

  const allowedFields = ["title", "description"];
  const updateData = {};

  for (const field of allowedFields) {
    if (req.body[field] !== undefined) {
      updateData[field] = req.body[field];
    }
  }

  console.log(updateData);

  if (Object.keys(updateData).length === 0) {
    return next(new AppError("Please provide atleast one valid field to update (title or description)", 400));
  }

  const updatedQuiz = await Quiz.findByIdAndUpdate(quizId, updateData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    data: {
      updatedQuiz
    }
  })
});