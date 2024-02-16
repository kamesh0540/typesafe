import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

const Dash = () => {
  return (
    <div className="w-[80%] bg-zinc-700 p-4 rounded-md flex justify-between">
      <p className="text-white font-semibold">Intro to Python</p>
      <div className="space-x-4">
        <Link to="/learn">
          <Button className="text-xm font-bold">Learn</Button>
        </Link>
        {/*@ts-ignore */}
        <Link to="/quiz/123dd">
          <Button className="text-xm font-bold">Quiz</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Dash;
