import { useState } from "react";

const questions = [
  {
    id: 5,
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    id: 6,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: 7,
    question:
      "Which JavaScript method is used to write content into an HTML document?",
    options: ["console.log()", "document.write()", "window.alert()", "innerHTML()"],
    answer: "document.write()",
  },
  {
    id: 8,
    question: "In React, what is used to pass data to a component from outside?",
    options: ["state", "props", "setState", "render"],
    answer: "props",
  },
  {
    id: 9,
    question: "Which of the following is a backend language?",
    options: ["JavaScript", "HTML", "Python", "CSS"],
    answer: "Python",
  },
  {
    id: 10,
    question: "Which HTTP method is used to update a resource completely?",
    options: ["POST", "PATCH", "PUT", "GET"],
    answer: "PUT",
  },
];

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);
  const currentQuestion = questions[questionIndex];

  const handleOptionClick = (index: number) => {
    const correctAnswer = currentQuestion.answer;
    const selectedAnswer = currentQuestion.options[index];
    setAnswered(true);
    setSelectedOption(index);
    setIsCorrect(selectedAnswer === correctAnswer);

    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
        setAnswered(false);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setCompleted(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setQuestionIndex(0);
    setAnswered(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="text-white flex flex-col items-center justify-center min-h-screen gap-6 p-4">
        <h2 className="text-3xl font-semibold">🎉 Quiz Completed!</h2>
        <button
          onClick={restartQuiz}
          className="bg-white text-black px-6 py-2 rounded-full text-lg hover:bg-gray-300 transition"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="text-white flex flex-col items-center justify-center gap-5 min-h-screen max-w-7xl mx-auto p-4">
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold rounded text-center">
        {currentQuestion.question}
      </p>

      <ul className="mt-6 w-full max-w-lg max-w-xl space-y-4">
        {currentQuestion.options.map((option, index) => (
          <QuizOption
            key={index}
            index={index}
            text={option}
            answered={answered}
            isCorrect={isCorrect}
            selected={selectedOption === index}
            onClick={handleOptionClick}
          />
        ))}
      </ul>
    </div>
  );
}

type QuizOptionProps = {
  index: number;
  text: string;
  answered: boolean;
  selected: boolean;
  isCorrect: boolean | null;
  onClick: (index: number) => void;
};

function QuizOption({
  index,
  text,
  answered,
  selected,
  isCorrect,
  onClick,
}: QuizOptionProps) {
  const getBgColor = () => {
    if (!answered) return "bg-white/10";
    if (selected && isCorrect) return "bg-green-400 text-black font-semibold transition translate-x-4 sm:translate-x-10 duration-200 smooth";
    if (selected && !isCorrect) return "bg-red-400 text-white font-semibold transition translate-x-4 sm:translate-x-10 duration-200 smooth";
    return "bg-white/10";
  };

  return (
    <li
      className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-3 sm:p-4 md:p-5 rounded-full shadow transition cursor-pointer hover:bg-white/20 hover:scale-105 active:scale-100 select-none backdrop-blur-sm ${getBgColor()} ${answered ? "pointer-events-none" : ""}`}
      onClick={() => onClick(index)}
    >
      {text}
    </li>
  );
}
