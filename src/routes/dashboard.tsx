import Dash from "@/components/Dash";
import { CardContainer } from "@/components/cardContainer";
import Footer from "@/components/footer";
import { Meteors } from "@/components/meteor-dash";
import { createFileRoute } from "@tanstack/react-router";

function DashBoard() {
  return (
    <>
      <div className="py-12 flex items-center justify-center rounded-md ">
        <Dash />
      </div>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/dashboard")({
  component: DashBoard,
});
