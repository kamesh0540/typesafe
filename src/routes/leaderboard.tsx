import { createFileRoute } from "@tanstack/react-router";

function LeaderBoardPage() {
  return (
    <div>
      <h1>LeaderBoard</h1>
    </div>
  );
}

export const Route = createFileRoute("/leaderboard")({
  component: LeaderBoardPage,
});
