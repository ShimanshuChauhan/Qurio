import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Quiz must have a title"],
  },
  description: {
    type: String,
    required: [true, "Quiz must have a description"],
  }
}, { timestamps: true });

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;