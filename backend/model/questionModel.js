import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: [true, "Question text is required"],
  },
  options: [
    {
      optionText: {
        type: String,
        required: [true, "Option text is required"],
      },
      isCorrect: {
        type: Boolean,
        default: false,
      },
    },
  ],
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
}, { timestamps: true });