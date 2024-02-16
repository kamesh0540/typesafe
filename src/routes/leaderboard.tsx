import Footer from "@/components/footer";
import { LeaderBoardTable } from "@/components/leader-board-table";
import { createFileRoute } from "@tanstack/react-router";

function LeaderBoardPage() {
  return (
    <div>
      <LeaderBoardTable />
      <Footer />
    </div>
  );
}

export const Route = createFileRoute("/leaderboard")({
  component: LeaderBoardPage,
});
