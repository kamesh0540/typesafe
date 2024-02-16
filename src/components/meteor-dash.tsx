import { cn } from "@/lib/utils";
import { CardContainer } from "./cardContainer";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

const getRandomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const Meteors = () => {
  return (
    <CardContainer>
      <div className="border rounded-lg h-full w-full relative flex justify-center items-center bg-zinc-900 overflow-hidden">
        {Array.from(".".repeat(10)).map((_, i) => {
          return (
            <span
              key={i}
              className={cn(
                "absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              )}
              style={{
                left: getRandomValue(-300, 300),
                top: getRandomValue(-100, 0),
                animationDelay: `${getRandomValue(1, 5)}s`,
                animationDuration: `${getRandomValue(1, 5)}s`,
              }}
            >
              <div className="absolute -translate-y-2/4 w-[50px] h-px top-2/4 bg-gradient-to-r from-slate-50/30 to-slate-800/10"></div>
            </span>
          );
        })}

        <p className="text-5xl font-medium tracking-tighter whitespace-nowrap text-black dark:text-white z-10 flex justify-center items-center w-[20vw]">
          <p className="text-white">Intro to Python</p>
          <div className="space-x-4">
            <Link to="/learn">
              <Button className="text-xm font-bold">Learn</Button>
            </Link>
            {/*@ts-ignore */}
            <Link to="/quiz/123dd">
              <Button className="text-xm font-bold">Quiz</Button>{" "}
            </Link>
          </div>
        </p>
        <div className="pointer-events-none h-full absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
    </CardContainer>
  );
};
