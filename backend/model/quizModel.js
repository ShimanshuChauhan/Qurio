import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Quiz must have a title"],
  },
  description: {
    type: String,
    required: [true, "Quiz must have a description"],
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Quiz must have a creator"],
  },
}, { timestamps: true });

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;