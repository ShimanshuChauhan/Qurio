import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import GlareHover from "@/blocks/Animations/GlareHover/GlareHover";
import { useEffect, useState } from "react";
import { QuizLoading } from "@/components/QuizLoading";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface Quiz {
  id: string;
  title: string;
  description: string;
}

export default function QuizLayout() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const handleClick = async (quizId: string) => {
    navigate(`quiz/${quizId}`);
  }

  const fetchQuizzes = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3000/api/v1/quiz');
      const quizzes = response.data.data.quizzes;
      const sanitizedQuizzes: Quiz[] = quizzes.map((q: Quiz) => (
        {
          id: q._id,
          title: q.title,
          description: q.description
        }
      ));
      console.log(sanitizedQuizzes);
      setQuizzes(sanitizedQuizzes);
    } catch (error: any) {
      toast.error(error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div className="flex-1 p-2 overflow-hidden">
      <ScrollArea className="h-full w-full">
        {isLoading && <QuizLoading />}
        {!isLoading && error && <div className="h-screen w-screen flex justify-center items-center text-white text-center font-bold text-4xl"><p>Something Went Wrong</p></div>}
        {!isLoading && !error && <div className="grid p-4 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {quizzes.map((q, i) => (
            <div
              key={i}
              className="relative w-full min-h-56 sm:min-h-60 md:min-h-64 lg:min-h-72 xl:min-h-80 transform transition duration-200 ease-in hover:scale-[1.03]"
              onClick={() => handleClick(q.id)}
            >
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-25}
                glareSize={300}
                transitionDuration={800}
                playOnce={true}
                className="!w-full !h-full !bg-[#2a2e18]/10 backdrop-blur-[5px]"
              >
                <Card className="w-full h-full bg-white/10 border border-white/20 text-white">
                  <CardHeader className="text-lg font-semibold">
                    {q.title} {i + 1}
                  </CardHeader>
                  <CardDescription className="px-6 pb-4 text-white/80">
                    {q.description}
                  </CardDescription>
                </Card>
              </GlareHover>
            </div>
          ))}
        </div>}
      </ScrollArea>
    </div>
  );
}
