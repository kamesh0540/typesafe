import Dash from "@/components/ui/Dash";
import { createFileRoute } from "@tanstack/react-router";

function DashBoard() {
  return (
    <div className="py-12 flex items-center justify-center rounded-md ">
      <Dash/>
    </div>
  );
}

export const Route = createFileRoute("/dashboard")({
  component: DashBoard,
});
