import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

const Dash = () => {
  return (
    <div className="w-[80%] bg-zinc-100 p-4 rounded-md flex justify-between">
      <p>Course Name</p>
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
