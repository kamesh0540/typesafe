import { LeaderBoardTable } from "@/components/leader-board-table";
import { createFileRoute } from "@tanstack/react-router";

function LeaderBoardPage() {
  return (
    <div>
      <h1 className="text-white">LeaderBoard</h1>
      <LeaderBoardTable />
    </div>
  );
}

export const Route = createFileRoute("/leaderboard")({
  component: LeaderBoardPage,
});
