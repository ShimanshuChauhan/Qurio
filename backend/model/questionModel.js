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
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: [true, "question must belong to a quiz"]
  },
}, { timestamps: true });

questionSchema.index({ quizId: 1 });

const Question = mongoose.model("Question", questionSchema);
export default Question;