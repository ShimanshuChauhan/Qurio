import QuizLayout from "@/layouts/QuizLayout";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full p-4">
      <div className="text-white text-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
          Quiz
        </h1>
      </div>
      <QuizLayout />
    </div>
  );
}
