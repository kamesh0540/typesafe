import { createFileRoute } from "@tanstack/react-router";

function DashBoard() {
  return <div>Dashboard</div>;
}

export const Route = createFileRoute("/dashboard")({
  component: DashBoard,
});
