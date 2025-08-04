import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import GlareHover from "@/blocks/Animations/GlareHover/GlareHover";
import { useEffect, useState } from "react";
import { QuizLoading } from "@/components/QuizLoading";

export default function QuizLayout() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 p-2 overflow-hidden">
      <ScrollArea className="h-full w-full">
        {isLoading && <QuizLoading />}
        {!isLoading && <div className="grid p-4 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="relative w-full min-h-56 sm:min-h-60 md:min-h-64 lg:min-h-72 xl:min-h-80 transform transition duration-200 ease-in hover:scale-[1.03]"
            >
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-25}
                glareSize={300}
                transitionDuration={800}
                playOnce={true}
                className="!w-full !h-full !bg-[#2a2e18]/10 backdrop-blur-md "
              >
                <Card className="w-full h-full bg-white/10 border border-white/20 text-white">
                  <CardHeader className="text-lg font-semibold">
                    Quiz Name {i + 1}
                  </CardHeader>
                  <CardDescription className="px-6 pb-4 text-white/80">
                    This is a short description of the quiz. Improve your skills and test your knowledge!
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
